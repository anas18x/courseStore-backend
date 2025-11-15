import jwt from 'jsonwebtoken';
import AppError from '../error/AppError.js';
import { StatusCodes } from 'http-status-codes';

export const generateAccessToken = (payload, secretKey) => {
   const {userId, userName, role} = payload
   try {
     const accessToken = jwt.sign({ userId, userName, role }, secretKey, { expiresIn: "15m" })
     return accessToken

   } catch (error) {
     throw new AppError("Error generating access token",StatusCodes.INTERNAL_SERVER_ERROR)
   }
}


export const generateRefreshToken =  (payload, secretKey) => {
   const {userId, userName, role} = payload
   try {
     const refreshToken = jwt.sign({userId, userName, role}, secretKey, {expiresIn: "7d"})
     return refreshToken

   } catch (error) {
     throw new AppError("Error generating refresh token",StatusCodes.INTERNAL_SERVER_ERROR)
   }
}