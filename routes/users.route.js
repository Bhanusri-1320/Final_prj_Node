import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
import { auth } from "../middleware/auth.middleware.js";
import {
  createUserCtr,
  logicUserCtr,
} from "../controllers/users.controller.js";

const router = express.Router();

router.post("/signup", createUserCtr);
router.post("/login", logicUserCtr);

export default router;
