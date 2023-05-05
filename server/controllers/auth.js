import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/Users.js"

export const regster = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends, 
            location,
            occupation,
        } = req.body

        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = new User ({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends, 
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 1000),
            impressions: Math.floor(Math.random() * 1000)
        })
        const savedUser = await newUser.save()
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ message: err.message })
        
    }
}

export const login = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}