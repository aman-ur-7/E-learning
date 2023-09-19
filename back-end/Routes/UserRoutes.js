const express = require("express");
const Router = express.Router();

const {
  registerUser,
  loginUser,
  emailSender,
} = require("../Controllers/UserControllers");

Router.route("/register").post(registerUser);
Router.route("/login").post(loginUser);
Router.route("/email").post(emailSender);

module.exports = Router;
