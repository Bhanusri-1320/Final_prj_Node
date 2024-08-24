import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
// import { Movies } from "../entities/movies.entity.js";
import { auth } from "../middleware/auth.middleware.js";
import {
  getAllTicketsDataCtr,
  getTicketsDataByIdCtr,
  deleteTicketsDataCtr,
  createTicketsDataCtr,
  updateTicketsDataCtr,
} from "../controllers/tickets.controller.js";
import { authIsAdmin } from "../middleware/isadmin.middleware.js";

const router = express.Router();

router.get("/", getAllTicketsDataCtr);

router.get("/:id", getTicketsDataByIdCtr);

router.delete("/:id", deleteTicketsDataCtr);

router.post("/", createTicketsDataCtr);

router.put("/:id", updateTicketsDataCtr);

export default router;
