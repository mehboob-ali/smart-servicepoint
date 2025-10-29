const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const JWT_SECRET = "secretkey";

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "admin" && password === "admin123") {
    const token = jwt.sign(
      {
        email,
        role: "admin",
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie("admin-token", token, {
      httpOnly: true,
      secure: false, //set to true in production with HTTPS
      sameSite: "lax",
    });
    return res.json({
      message: "logged in as admin",
      role: "admin",
      success: true,
    });
  }
  if (email === "john" && password === "john123") {
    const token = jwt.sign(
      {
        email,
        role: "user",
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie("user-token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, //set to true in production with HTTPS
    });
    return res.json({
      message: "logged in as john",
      success: true,
      role: "user",
    });
  }
  //if no match
  return res
    .status(401)
    .json({ success: false, message: "Invalid credentials" });
});

module.exports = router;
