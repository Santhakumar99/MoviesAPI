import express from "express";
import { MovieIndex,createMoviesList} from "../Controllers/movies.controller.js"
const router = express.Router();
router.get("/", MovieIndex);
router.post('/createmovies', createMoviesList);
// router.put('/update/:id');
// router.delete('/delete/:id');
export default router;
