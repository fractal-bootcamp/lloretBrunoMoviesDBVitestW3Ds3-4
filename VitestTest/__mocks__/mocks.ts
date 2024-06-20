// __mocks__/@prisma/client.ts

import { PrismaClient as ActualPrismaClient } from '@prisma/client';

const prismaMock = new ActualPrismaClient();

// Mock the addMovie function
prismaMock.movie.create = jest.fn().mockImplementation((data) => {
    return Promise.resolve(data); // Simulate creation and return the created data
});

export default prismaMock;
