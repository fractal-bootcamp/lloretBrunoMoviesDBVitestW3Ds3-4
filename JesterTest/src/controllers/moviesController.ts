import { Request, Response } from 'express';
import { getMovies, addMovie, updateMovie, deleteMovie } from '../models/Movie';


export interface Movie {
    id: number;
    title: string;
    year: number;
    director: string;
    description: string;
    imageUrl: string
}


export const getListMovies = (req: Request, res: Response): void => {
    res.json(getMovies());
};

export const addNewMovie = (req: Request, res: Response): void => {
    const newMovie: Movie = req.body;
    addMovie(newMovie);
    res.status(201).json(newMovie);
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
