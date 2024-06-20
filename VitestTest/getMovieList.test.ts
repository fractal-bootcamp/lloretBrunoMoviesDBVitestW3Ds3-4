import { describe, it, expect, vi } from 'vitest';
import { Request, Response } from 'express';
import { getListMovies } from './src/controllers/moviesController';
import { PrismaClient } from '@prisma/client';
import { findMovieTitleByString } from './src/models/Movie';

// Mocking PrismaClient
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
        // Ensure `PrismaClient` is correctly typed
        PrismaClientInstance: {
            movie: {
                create,
            },
        },
    };
});

describe('getMovieList controller', () => {
    it('should get the list of movies from the mock database', async () => {
        const mockMovieData = [
            {
                id: 1,
                title: "Stalker",
                year: 1979,
                director: "Andrei Tarkovsky",
                description: `The film tells the story of an expedition led by a figure known as the "Stalker" (Alexander Kaidanovsky), who guides his two clients—a melancholic writer (Anatoly Solonitsyn) seeking inspiration, and a professor (Nikolai Grinko) seeking scientific discovery—through a hazardous wasteland to a mysterious restricted site.`,
                imageUrl: `https://en.wikipedia.org/wiki/Stalker_%281979_film%29#/media/File:Stalker_poster.jpg`
            },
            {
                id: 2,
                title: "Inception",
                year: 2010,
                director: "Christopher Nolan",
                description: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.`,
                imageUrl: `https://en.wikipedia.org/wiki/Inception_(film)#/media/File:Inception_(2010)_theatrical_poster.jpg`
            },
            {
                id: 3,
                title: "Pulp Fiction",
                year: 1994,
                director: "Quentin Tarantino",
                description: `The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.`,
                imageUrl: `https://en.wikipedia.org/wiki/Pulp_Fiction#/media/File:Pulp_Fiction_(1994)_theatrical_poster.jpg`
            },
            {
                id: 4,
                title: "The Matrix",
                year: 1999,
                director: "The Wachowskis",
                description: `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
                imageUrl: `https://en.wikipedia.org/wiki/The_Matrix#/media/File:The_Matrix_Poster.jpg`
            },
            {
                id: 5,
                title: "Parasite",
                year: 2019,
                director: "Bong Joon-ho",
                description: `Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.`,
                imageUrl: `https://en.wikipedia.org/wiki/Parasite_(2019_film)#/media/File:Parasite_(2019_film).jpg`
            },
            {
                id: 6,
                title: "The Godfather",
                year: 1972,
                director: "Francis Ford Coppola",
                description: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.`,
                imageUrl: `https://en.wikipedia.org/wiki/The_Godfather#/media/File:Godfather_ver1.jpg`
            },
            {
                id: 7,
                title: "Spirited Away",
                year: 2001,
                director: "Hayao Miyazaki",
                description: `During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.`,
                imageUrl: `https://en.wikipedia.org/wiki/Spirited_Away#/media/File:Spirited_Away_poster.JPG`
            }
        ];


        const req = {
            body: mockMovieData,
        } as Request;

        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn(),
        } as unknown as Response;

        const prisma = new PrismaClient();


        await getListMovies(req, res);

    });
});
