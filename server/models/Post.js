import mongoose from "mongoose";

const PostSchemaa = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    }
})