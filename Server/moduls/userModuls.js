import mongoose, { Schema } from "mongoose";
const { scheme } = "mongoose";


const userScheme = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
    }, 
    img: {
        type: String,
        required: false,
    }, 
})