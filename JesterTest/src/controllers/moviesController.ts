import { Request, Response } from 'express';
import { getTodos, addTodo, updateTodo, deleteTodo, Todo } from '../models/todo'; export const getAllTodos = (req: Request, res: Response): void => {
    res.json(getTodos());
};

export const createTodo = (req: Request, res: Response): void => {
    const newTodo: Todo = req.body;
    addTodo(newTodo);
    res.status(201).json(newTodo);
};

export const updateTodoById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const updatedTodo: Todo = req.body;
    updateTodo(id, updatedTodo);
    res.json(updatedTodo);
};

export const deleteTodoById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    deleteTodo(id);
    res.status(204).send();
};
