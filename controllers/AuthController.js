require("dotenv").config();
const User = require("../models/User");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  res.render("login");
};

const JWT_SECRET = process.env.JWT_SECRET;
exports.handleLogin = async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(401).render("login", { error: "Invalid credentials" });
    }

    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) {
      return res.status(401).render("login", { error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, { httpOnly: true });

    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};

exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};
