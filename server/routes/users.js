import express from "express"
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/user.js"

import {verifyToken} from "../middleware/auth.js"

const router = express.Router()

router.get("/:id", verifyToken, getUser)
router.ge("/:id/friends", verifyToken, getUserFriends)

router.patch("/:id/:friendsId", verifyToken, addRemoveFriend)

export default router