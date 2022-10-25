const { response } = require("express");
const bcryptjs = require("bcrypt");
const User = require("../models/user.model");
const { generateJWT } = require("../helpers/generateJWT");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verify if email exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Email or password is incorrect." });

    // Verify if the user is active
    if (!user.state) return res.status(400).json({ msg: "Email or password is incorrect." });

    // Verify password
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) return res.status(400).json({ msg: "Email or password is incorrect." });

    // Generate JWT
    const token = await generateJWT(user.id);

    // Return user and token
    res.json({ status: true, user, token });
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

const register = async (req, res = response) => {
  const { name, email, password } = req.body;

  try {
    // Verify if email exists
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "The email already exists.", status: false });

    // Create user
    const newUser = new User({ name, email, password });

    // Encrypt password
    const salt = bcryptjs.genSaltSync();
    newUser.password = bcryptjs.hashSync(password, salt);

    // Save user
    await newUser.save();

    // Verify if the user have token in the DB and generate a new one

    return res.json({ msg: "The user was created successfully.", status: true });
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", status: false });
  }
};

const tokenValidation = async (req, res = response) => {
  res.json({ msg: true });
};

module.exports = { login, register, tokenValidation };
