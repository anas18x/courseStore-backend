import mongoose from "mongoose";
const {Schema} = mongoose

const userSchema = new Schema({
   name : {
    type: String,
    required: true
   },

   email : {
    type: String,
    required: true,
    unique: true,
   },

   password: {
     type: String,
     required: true,
   },

   role: {
    type: String,
    enum: ["student", "teacher",],
    default: "student"
   }
})

export const User = mongoose.model("user",userSchema)

