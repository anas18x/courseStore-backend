import bcrypt from "bcrypt"
import { User } from "../models/User.models.js"
import { email } from "zod"
import { ENV } from "../config/ENV.config.js"
import jwt from "jsonwebtoken"


export const signUpService = async (userName, email , password, role) => {
        const encryptedPassword = await bcrypt.hash(password,5)
        await User.create({
            userName : userName,
            email : email,
            password : encryptedPassword,
            role : role
        })
}



export const signInService = async (email, password) => {
     const findUser = await User.findOne({email})
     if(!findUser){
        throw new Error("user not found")
     } 
     const passwordMatched = await bcrypt.compare(password,findUser.password)
     if(passwordMatched){
        var token = jwt.sign({
            id: findUser._id
        },ENV.JWT_SECRET)
     } else {
         throw new Error("invalid credentials");
     }
   
     return token
}


