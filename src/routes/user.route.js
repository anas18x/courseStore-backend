import { Router } from "express";
const userRouter = Router()
import db from "../db";
import { User } from "../models/User.models";
import { UserSignUp } from "../controller/user.controller";
import { UserSignIn } from "../controller/user.controller";

userRouter.post("/signup", UserSignUp)


userRouter.post("/signin",UserSignIn)


export default userRouter