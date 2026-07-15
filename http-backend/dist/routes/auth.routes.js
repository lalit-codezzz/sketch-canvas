import { Router } from "express";
import { signinController, signupController, } from "../controllers/auth.controller.js";
import schemaValidator from "../middlewares/schemaValidator.middleware.js";
import { signinSchema, signupSchema } from "../schema/auth.schema.js";
const authRouter = Router();
authRouter.post("/signup", schemaValidator(signupSchema), signupController);
authRouter.post("/signin", schemaValidator(signinSchema), signinController);
export default authRouter;
