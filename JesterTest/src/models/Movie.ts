export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

let todos: Todo[] = [];

export const getTodos = (): Todo[] => todos;

export const addTodo = (todo: Todo): void => { todos.push(todo); };

export const updateTodo = (id: number, updatedTodo: Todo): void => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index] = updatedTodo;
    }
};

export const deleteTodo = (id: number): void => {
    todos = todos.filter(todo => todo.id !== id);
};