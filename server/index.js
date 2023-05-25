import express  from "express";
import cors from "cors"
import mongoose from "mongoose"
import multer from "multer";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv"
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import { register } from "./controllers/auth.js"
import { createPost } from "./routes/posts.js"
import { verifyToken } from "./middleware/auth.js";
import User from "../models/User.js"
import Post from "../models/Post.js"
import {user, post, users} from "./data/data.js"
 
const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)
dotenv.config()

const app = express()

app.use(cors)
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use(morgan("common"))

const storage = multer.diskStorage ({
    destination: function(req, file, cb) {
        cb(null, "public/assets")
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
})
const upload = multer({storage})

app.post("auth/register", upload.single("picture"), register)
app.post("/posts", verifyToken, upload.single("picture"))

app.use("/auth", authRoutes)
app.use("/users", userRoutes)
app.use("/posts", postRoutes)

const PORT = process.env.PORT
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParse: true,
    useUnifiedTopology: true,
})
.then(app.listen(PORT, () => {console.log(`Listening in port: ${PORT}`)}))

// User.insertMany(users)
// Post.insertMany(posts)
.catch((error) => console.log(error))

