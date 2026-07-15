import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { getDashboard } from "../controllers/user.controller.js";
const userRouter = Router();
userRouter.get("/dashboard", authMiddleware, getDashboard);
export default userRouter;
