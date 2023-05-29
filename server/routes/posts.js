import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { getFeedPosts, getUserPosts, likePost} from "../ccontrollers/posts.js"

const router = express.Router()

router.get("/", verifyToken, getFeedPosts)
router.get("/:id/posts", verifyToken, getUserPosts)

router.patch("/:id(like", verifyToken, likePost)

export default router

