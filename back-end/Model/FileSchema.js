const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    data: {
      type: Buffer,
      required: true,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
