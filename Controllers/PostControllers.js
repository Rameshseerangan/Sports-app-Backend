import Post from "../Models/postModels.js";


export const createPost = async (req, res) => {
  try {
    const newPost = new Post({ ...req.body, user: req.user._id });
    await newPost.save();
    res
      .status(200)
      .json({ message: "Post Created Successfully", data: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};