import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addNewMovie = async (req: Request, res: Response) => {
    const { title, year, director, description, imageUrl } = req.body;

    try {
        const newMovie = await prisma.movie.create({
            data: { title, year, director, description, imageUrl },
        });

        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add movie' });
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
