const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Create Post
router.post("/create", async (req, res) => {
  const { title, subtitle, tags, content } = req.body;
  const newPost = new Post({ title, subtitle, tags, content });
  try {
    await newPost.save();
    res.status(201).json({ message: "Post created successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error creating post" });
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Get Post By ID
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// Update Post
router.put("/:id", async (req, res) => {
  const { title, subtitle, tags, content } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, tags, content },
      { new: true }
    );
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: "Error updating post" });
  }
});

// Delete Post
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting post" });
  }
});

module.exports = router;
