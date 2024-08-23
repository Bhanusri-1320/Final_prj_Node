import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
// import { Movies } from "../entities/movies.entity.js";
import { auth } from "../middleware/auth.middleware.js";
import {
  getAllMoviesCtr,
  getHistoreyByNameCtr,
  createHistoryByNamectr,
  //   createMovieCtr,
  //   updateMovieCtr,
} from "../controllers/history.controller.js";
import { authIsAdmin } from "../middleware/isadmin.middleware.js";

const router = express.Router();

router.get("/", getAllMoviesCtr);
router.get("/:username", getHistoreyByNameCtr);
router.post("/:username", createHistoryByNamectr);
// router.delete("/:id", auth, authIsAdmin, deleteMovieCtr);

// router.post("/", createMovieCtr);

// router.put("/:id", auth, authIsAdmin, updateMovieCtr);

export default router;
