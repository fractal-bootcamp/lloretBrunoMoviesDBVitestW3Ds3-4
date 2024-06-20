// export interface Todo {
//     id: number;
//     title: string;
//     completed: boolean;
// }

// let todos: Todo[] = [];

// export const getTodos = (): Todo[] => todos;

// export const addTodo = (todo: Todo): void => { todos.push(todo); };

// export const updateTodo = (id: number, updatedTodo: Todo): void => {
//     const index = todos.findIndex(todo => todo.id === id);
//     if (index !== -1) {
//         todos[index] = updatedTodo;
//     }
// };

// export const deleteTodo = (id: number): void => {
//     todos = todos.filter(todo => todo.id !== id);
// };





export interface MovieTags {
    movie: Movie;
    movieId: number;
    tag: Tag;
    tagId: number;
}

export interface Favorite {
    user: User;
    userId: number;
    movie: Movie;
    movieId: number
}

export interface Tag {
    id: number;
    text: String;
    tagId: number
}

export interface User {
    id: number;
    name: String;
    avatarUrl: String
}

// export interface Movie {
//     id: number;
//     title: string;
//     year: number;
//     director: string;
//     description: string;
//     imageUrl: string
// }

import { PrismaClient } from '@prisma/client';
import { Movie } from '@prisma/client';

const prisma = new PrismaClient();


let movies: Movie[] = []; //Do I have to link this with the real database eventually?
let favorites: Favorite[] = []; // Same question

export const getMovies = (): Movie[] => movies;

export const addMovie = (movie: Movie): void => { movies.push(movie); };


// Function to check if a string is in any element of the array
export function findMovieTitleByString(movies: Movie[], searchString: string): string | null {

    const lowerCaseSearchString = searchString.toLowerCase();


    for (const movie of movies) {

        if (
            movie.title.toLowerCase().includes(lowerCaseSearchString) ||
            movie.year.toString().includes(lowerCaseSearchString) ||
            movie.director.toLowerCase().includes(lowerCaseSearchString) ||
            movie.description.toLowerCase().includes(lowerCaseSearchString)
        ) {

            return movie.title;
        }
    }


    return null;
}

export const getFavorites = (): Favorite[] => favorites;

export const addMovieFavorite = (movie: Movie, user: User): void => {

    //get the user's ID
    //get the movie's ID
    //create a new favorite
    //insert user, userId, movie, and movieId in the new favorite
    //push the favorite into the array of Favorites
    const userID = user.id;
    const movieId = movie.id;
    const newFavorite: Favorite = {
        user: user,
        userId: user.id,
        movie: movie,
        movieId: movie.id,
    }

    const favoritesArray = getFavorites();
    favoritesArray.push(newFavorite)
}



// export const updateMovie = (id: number, updatedMovie: Movie): void => {
//     const index = movies.findIndex(movie => movie.id === id);
//     if (index !== -1) { //the -1 here is a convention in coding for presenting a condition that must exist but it's impossible
//         movies[index] = updatedMovie;
//     }
// }

// export const deleteMovie = (id: number): void => {
//     movies = movies.filter(movie => movie.id !== id);
// }

// Define the Movie interface



