import { Router } from 'express';
// import { getMovies, addMovie } from '../models/Movie';
// import { findMovieByString } from '../models/Movie'
import { getListMovies, addNewMovie, findMovieByString } from '../controllers/moviesController';
const router = Router();

router.get('/movies', getListMovies);
router.post('/movies', addNewMovie);
router.get('/movies?search', findMovieByString)
// router.put('/movies/:id', updateMovie);
// router.delete('/movies/:id', deleteMovie);

export default router;