
import bodyParser from 'body-parser';
import moviesRoutes from './routes/moviesRoutes';

import { Request, Response } from 'express';
const express = require('express');
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.use(bodyParser.json());
app.use('/api', moviesRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Your Prisma Client operations here
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
