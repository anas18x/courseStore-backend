import { User } from "../models/User.models"

export async function UserSignUp(req,res) {
    const {name , email, password, role} = req.body
    
    await User.create({
        name,
        email,
        password,
        role
    })
}


export async function UserSignIn(req,res) {
    const {name , email, password, role} = req.body

}
