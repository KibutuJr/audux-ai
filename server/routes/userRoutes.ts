import express from "express";
import {
  getAllProjects,
  getProjectById,
  getUserCredits,
  toggleProjectPublic,
} from "../controllers/userController.js";
import { protect } from "../middlewares/auth.js";
import { syncUser } from "../middlewares/syncUser.js";

const userRouter = express.Router();

/**
 * Credits
 */
userRouter.get("/credits", protect, syncUser, getUserCredits);

/**
 * Projects
 */
userRouter.get("/projects", protect, getAllProjects);
userRouter.get("/projects/:projectId", protect, getProjectById);
userRouter.get("/publish/:projectId", protect, toggleProjectPublic);

export default userRouter;
