import { describe, it, expect, vi } from 'vitest';
import { Request, Response } from 'express';
import { addMovieToFavorites } from './src/controllers/moviesController';
import { PrismaClient } from '@prisma/client';


vi.mock('@prisma/client', () => {
    const create = vi.fn();
    return {
        PrismaClient: vi.fn().mockImplementation(() => {
            return {
                movie: {
                    create,
                },
            };
        }),

        PrismaClientInstance: {
            movie: {
                create,
            },
        },
    };
});

describe('addMovieToFavorites controller', () => {
    it('should create a new Favorite item in Favorite array with user, userId, movie, and movieId', async () => {


        const mockMovieData = {
            id: 1,
            title: "Stalker",
            year: 1979,
            director: "Tarkovsky",
            description: `The film tells the story of an expedition led by a figure known as the "Stalker" (Alexander Kaidanovsky), who guides his two clients—a melancholic writer (Anatoly Solonitsyn) seeking inspiration, and a professor (Nikolai Grinko) seeking scientific discovery—through a hazardous wasteland to a mysterious restricted site`,
            imageUrl: `https://en.wikipedia.org/wiki/Stalker_%281979_film%29#/media/File:Stalker_poster.jpg`
        };

        const mockUser = {
            id: 1,
            name: "Douglas",
            avatarUrl: "https://en.wikipedia.org/wiki/Buster_Douglas#/media/File:James_%22Buster%22_Douglas_portrait_-_DPLA_-_cc7b18342c9d2a30f336a4baa19aacf0_(page_2).jpg"
        };

        const mockFavoriteEmptyObject = {
            user: "",
            userId: undefined,
            movie: "",
            movieId: undefined,
        };

        const req1 = {
            body: mockMovieData,
        } as Request;

        const req2 = {
            body: mockUser,
        } as Request;

        const req3 = {
            body: mockFavoriteEmptyObject,
        } as Request;


        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn(),
        } as unknown as Response;

        const prisma = new PrismaClient();

        const mockedCreatedMovie = {
            ...mockMovieData, id: 1
        };


        const createMock = prisma.movie.create as unknown as jest.Mock;
        createMock.mockResolvedValue(mockedCreatedMovie);

        await addMovieToFavorites(req1, res);
        await addMovieToFavorites(req2, res);
        await addMovieToFavorites(req3, res);


        expect(res.status).toHaveBeenCalledWith(201);


        expect(res.json).toHaveBeenCalledWith(mockedCreatedMovie);
    });
});
