const mongoose = require("mongoose");
const { Schema } = mongoose;

const AuthSchema = new Schema(
  {
    // _id: Object,
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: Schema.Types.Mixed,
      required: true,
    },
    intrest: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Auth = mongoose.model("Auth", AuthSchema);
module.exports = Auth;
