const express = require("express");
const Router = express.Router();

const { registerUser, loginUser } = require("../Controllers/UserControllers");

Router.route("/register").post(registerUser);
Router.route("/login").post(loginUser);

module.exports = Router;
