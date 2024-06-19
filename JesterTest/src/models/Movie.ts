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


let movies: Movie[];

export const getMovies = (): Movie[] => movies;

export const addMovie = (movie: Movie): void => { movies.push(movie); };

export const updateMovie = (id: number, updatedMovie: Movie): void => {
    const index = movies.findIndex(movie => movie.id === id);
    if (index !== -1) { //the -1 here is a convention in coding for presenting a condition that must exist but it's impossible
        movies[index] = updatedMovie;
    }
}

export const deleteMovie = (id: number): void => {
    movies = movies.filter(movie => movie.id !== id);
}

// export const findMovie = (movies: Movie[], searchString: string): "" => {
//     // Iterate through each object in the array
//     for (let i = 0; i < movies.length; i++) {
//         const obj = movies[i];

//         // Check if the search string matches any property of the current object
//         for (let key in obj) {
//             if (obj.hasOwnProperty(key) && typeof obj[key] === 'string') {
//                 if (obj[key].toLowerCase().includes(searchString.toLowerCase())) {
//                     return obj; // Return the object if a match is found
//                 }
//             }
//         }
//     }

//     return null; // Return null if no match is found
// }



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

export interface Movie {
    id: number;
    title: string;
    year: number;
    director: string;
    description: string;
    imageUrl: string
}



