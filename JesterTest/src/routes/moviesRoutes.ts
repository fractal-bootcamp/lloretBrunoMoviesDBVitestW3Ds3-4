import { Router } from 'express';
import { getMovies, addMovie } from '../models/Movie';

const router = Router();

router.get('/movies', getMovies);
router.post('/movies', addMovie);
// router.put('/movies/:id', updateMovie);
// router.delete('/movies/:id', deleteMovie);

export default router;