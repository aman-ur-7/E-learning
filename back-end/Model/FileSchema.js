const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  // image: {
  //   type: String,
  //   required: true,
  // },
  image: String,
  // name: String,
  date: {
    type: Date,
    default: Date.now,
  },
  subject: {
    type: String,
    // required: true,
  },
  text: {
    type: String,
  },
  language: {
    type: String,
  },
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
