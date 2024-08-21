import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
// import { Movies } from "../entities/movies.entity.js";
import { auth } from "../middleware/auth.middleware.js";
import {
  getAllMoviesCtr,
  getMoviebyIdCtr,
  deleteMovieCtr,
  createMovieCtr,
  updateMovieCtr,
} from "../controllers/movies.controller.js";
import { authIsAdmin } from "../middleware/isadmin.middleware.js";

const router = express.Router();

router.get("/", getAllMoviesCtr);

router.get("/:id", getMoviebyIdCtr);

router.delete("/:id", auth, deleteMovieCtr);

router.post("/", createMovieCtr);

router.put("/:id", updateMovieCtr);

export default router;
