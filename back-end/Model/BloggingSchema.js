const mongoose = require("mongoose");

const BloggingSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  language: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  author: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", BloggingSchema);

module.exports = Blog;
