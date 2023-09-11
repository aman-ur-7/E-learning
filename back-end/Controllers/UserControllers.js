const AuthModel = require("../Model/AuthSchema");
const asyncHandler = require("express-async-handler");
const ImageSchema = require("../Model/FileSchema");

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, intrest } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error();
    }
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;

    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);

    if (!hasDigit || !hasLowercase || !hasUppercase) {
      res.status(400);
      throw new Error("must fill the requirements");
    }

    const isUserExist = await AuthModel.findOne({ email });
    if (isUserExist) {
      res.status(400).send("Can't use the same email");
    }

    const userRegister = await AuthModel.create({
      name,
      password,
      email,
      intrest,
    });

    if (userRegister) {
      res.status(200).send(userRegister);
    }
  } catch (error) {
    console.log(error);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const userLogin = await AuthModel.findOne({ email, password });
    if (userLogin) {
      res.status(200).send(userLogin);
    } else res.status(400).send("password is incorrect");
  } catch (error) {
    console.log(error);
  }
});

module.exports = { registerUser, loginUser };
