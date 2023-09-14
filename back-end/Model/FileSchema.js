const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  // image: {
  //   type: String,
  //   required: true,
  // },
  image: String,
  // name: String,
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
