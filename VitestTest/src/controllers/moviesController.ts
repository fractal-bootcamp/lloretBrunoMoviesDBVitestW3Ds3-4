import { Request, Response } from 'express';
import { getMovies, addMovie, addMovieFavorite, findMovieTitleByString } from '../models/Movie';
import { Movie, User, Favorite, PrismaClient } from '@prisma/client';



// export interface Movie {
//     id: number;
//     title: string;
//     year: number;
//     director: string;
//     description: string;
//     imageUrl: string
// }




export const getListMovies = (req: Request, res: Response): void => {
    res.json(getMovies());
};



export const addNewMovie = async (req: Request, res: Response): Promise<void> => {
    const newMovie: Movie = req.body;

    try {
        const addedMovie = await addMovie(newMovie);

        res.status(201).json(addedMovie);
    } catch (error) {
        res.status(500).json({ error: `Failed to add movie` });
    }
};


export const findMovieByString = async (req: Request, res: Response): Promise<void> => {
    // const queryMovie: Movie = req.query;
    // const searchInput: string = searchString
    const searchString: string = (req.query.search as string);

    const prisma = new PrismaClient();

    try {
        // Fetch all movies from the database
        const movies = await prisma.movie.findMany();

        // Find the movie title by the search string
        const movieTitle = findMovieTitleByString(movies, searchString);

        if (movieTitle) {
            res.json({ title: movieTitle });
        } else {
            res.status(404).json({ error: '404: nothing to see here' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to search for movie' });
    }
};



export const addMovieToFavorites = async (req: Request, res: Response): Promise<void> => {

    const newFavorite: Favorite = req.body;
    const userFavver: User = req.body;
    const movieFavved: Movie = req.body;


    try {
        const addedFavorite = await addMovieFavorite(movieFavved, userFavver)

        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(500).json({ error: `Failed to add this film to Favorites` })
    }

};

// export const updateTodoById = (req: Request, res: Response): void => {
//     const id = parseInt(req.params.id);
//     const updatedTodo: Todo = req.body;
//     updateTodo(id, updatedTodo);
//     res.json(updatedTodo);
// };

// export const deleteTodoById = (req: Request, res: Response): void => {
//     const id = parseInt(req.params.id);
//     deleteTodo(id);
//     res.status(204).send();
// };
