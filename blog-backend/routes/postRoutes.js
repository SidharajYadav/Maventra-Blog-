const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.post("/createPost", async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.json({ message: "Post created", post: newPost });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating post", error: err.message });
  }
});
 
router.put("/updatePost/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Post updated", post: updatedPost });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating post", error: err.message });
  }
});

router.delete("/deletePost/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: err.message });
  }
});

router.get("/getAllBlogPosts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: err.message });
  }
});

router.get("/getPost/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching post", error: err.message });
  }
});

router.get("/getPostsByTag/:tag", async (req, res) => {
  try {
    const posts = await Post.find({ tags: req.params.tag });
    res.json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: err.message });
  }
});

module.exports = router;
