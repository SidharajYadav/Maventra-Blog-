
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  tags: [String],
  content: String,
});

module.exports = mongoose.model("Post", PostSchema);
 
