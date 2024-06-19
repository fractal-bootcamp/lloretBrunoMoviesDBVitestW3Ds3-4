import { Request, Response } from 'express';
import prismaMock from '@prisma/client';
import { addNewMovie } from './src/controllers/moviesController';
import { Movie } from './src/models/Movie'
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const fakeId = uuidv4();


describe('addNewMovie controller', () => {
    it('should add a new movie', async () => {
        const req = {
            body: {
                id: parseInt(fakeId),
                title: "Stalker",
                year: 1979,
                director: "Tarkovsky",
                description: `The film tells the story of an expedition led by a figure known as the "Stalker" (Alexander Kaidanovsky), who guides his two clients—a melancholic writer (Anatoly Solonitsyn) seeking inspiration, and a professor (Nikolai Grinko) seeking scientific discovery—through a hazardous wasteland to a mysterious restricted site`,
                imageUrl: `https://en.wikipedia.org/wiki/Stalker_%281979_film%29#/media/File:Stalker_poster.jpg`
            },
        } as Request;

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as Response;

        const prisma = new PrismaClient();

        await prisma.movie.create({
            data: {
                id: parseInt(fakeId),
                title: "Stalker",
                year: 1979,
                director: "Tarkovsky",
                description: `The film tells the story of an expedition led by a figure known as the "Stalker" (Alexander Kaidanovsky), who guides his two clients—a melancholic writer (Anatoly Solonitsyn) seeking inspiration, and a professor (Nikolai Grinko) seeking scientific discovery—through a hazardous wasteland to a mysterious restricted site`,
                imageUrl: `https://en.wikipedia.org/wiki/Stalker_%281979_film%29#/media/File:Stalker_poster.jpg`
            },
        });

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(req.body);
    });
});
