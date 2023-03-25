//routes method

//import instance of express
import express from 'express';

//import properties called from the controller
import { addMovie, getMovies, getMovie, editMovie, deleteMovie} from '../controller/user-controller.js';

//const variable will contain the methods of the routes
const router = express.Router();

router.post('/add',addMovie);
router.get('', getMovies);
router.get('/:id', getMovie);
router.put('/:id', editMovie);
router.delete('/:id', deleteMovie)

export default router;