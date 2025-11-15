import { Router } from "express";
const userRouter = Router()

import { AuthMiddleware, InputValidatorMiddleware } from "../../middlewares/index.js";
import { UserController } from "../../controller/index.js";



userRouter.post("/signup", InputValidatorMiddleware.SignUpinputValidator, UserController.UserSignUp)

userRouter.post("/signin", InputValidatorMiddleware.SignIninputValidator, UserController.UserSignIn)

userRouter.post("/logout", AuthMiddleware.verifyToken, UserController.UserLogOut)

userRouter.post("/refresh-token", UserController.RefreshAccessToken)

export default userRouter

