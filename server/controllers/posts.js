import Post from "../models/post.js"

export const createPost = async (req, res) => {
    try {
        const {userId, description, picturePath} = res.body
        const User = await User.findById
        const newPOst = new Post({
            userId,
            firstName: User.firstName,
            lastName: User.lastName,
            location: User.location,
            description,
            userPicturePath: User.picturePath,
            picturePath,
            likes:{},
            like:[]
        })

        await newPOst.save()

        const post = await Post.find()
        res.status(200).json(post)

    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

export const getFeedPoints = async (req, res) => {
    try {
        const post = await Post.find()
        res.staus(200).json(post)
        
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

export const getUserPost = async (req, res) => {
    try {
        const { userId } = req.params
        const post = await Post.find({userId})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const likePost = async (req, res) => {
    try {
        const { id } = req.params
        const { userId } = req.body
        const post = await post.findById(id)
        const isLiked = post.likes.get(userId)
        if(isLiked) {
            post.likes.delete(userId)
        } else {
            post.likes.set(userId, true)
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {likes : post.likes},
            {new: true}
        )
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}