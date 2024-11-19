// const mongoose = require("mongoose");

// const PostSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   subtitle: { type: String },
//   tags: { type: [String] },
//   content: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Post", PostSchema);


const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  tags: [String],
  content: String,
});

module.exports = mongoose.model("Post", PostSchema);
