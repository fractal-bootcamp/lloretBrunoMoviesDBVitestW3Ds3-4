
import bodyParser from 'body-parser';
// import todoRoutes from './routes/todoRoutes';

import { Request, Response } from 'express';
const express = require('express');
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.use(bodyParser.json());
// app.use('/api', todoRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

