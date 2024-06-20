// import { describe, it, expect, vi } from 'vitest';
// import { Request, Response } from 'express';
// import { addNewMovie } from './src/controllers/moviesController';
// import { PrismaClient } from '@prisma/client';


// vi.mock('@prisma/client', () => {
//     const create = vi.fn();
//     return {
//         PrismaClient: vi.fn().mockImplementation(() => {
//             return {
//                 movie: {
//                     create,
//                 },
//             };
//         }),

//         PrismaClientInstance: {
//             movie: {
//                 create,
//             },
//         },
//     };
// });

// describe('addNewMovie controller', () => {
//     it('should add a new movie', async () => {
//         const mockMovieData = {
//             id: 1,
//             title: "Stalker",
//             year: 1979,
//             director: "Tarkovsky",
//             description: `The film tells the story of an expedition led by a figure known as the "Stalker" (Alexander Kaidanovsky), who guides his two clients—a melancholic writer (Anatoly Solonitsyn) seeking inspiration, and a professor (Nikolai Grinko) seeking scientific discovery—through a hazardous wasteland to a mysterious restricted site`,
//             imageUrl: `https://en.wikipedia.org/wiki/Stalker_%281979_film%29#/media/File:Stalker_poster.jpg`
//         };

//         const req = {
//             body: mockMovieData,
//         } as Request;

//         const res = {
//             status: vi.fn().mockReturnThis(),
//             json: vi.fn(),
//         } as unknown as Response;

//         // ...
//         const createMock = prisma.movie.create as unknown as Mock;
//         // ...


//         expect(res.json).toHaveBeenCalledWith(mockedCreatedMovie);
//     });
// });
