const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware");
const app = express();
const JWT_SECRET = "secretkey";
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes"); 
//middleware

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//test route

app.get("/", (req, res) => {
  res.send("backend is running  🚀");
});

app.use("/api/",authRoutes);
app.use("/api/admin/",adminRoutes)

// app.get("/api/login", (req, res) => {
//   console.log("Login route hit", req.body);
//   res.json({ message: "Login route hit in client" });
// });

// app.post("/api/login", (req, res) => {
//   console.log("Login route  start", req.body);
//   const { email, password } = req.body;
//   console.log("emails is", email, "and password is", password);
//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and password are required" });
//   }
//   if (email === "admin" && password === "admin123") {
//     const token = jwt.sign({ email, role: "admin" }, JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     // console.log("Generated JWT token:", token);
//     res.cookie("admin-token", token, {
//       httpOnly: true,
//       secure: false, // set to true in production with HTTPS
//       sameSite: "lax",
//     });


//     return res.json({
//       message: "Logged in as admin",
//       role: "admin",
//       success: true,
//     });
//   }
//   if (email === "john" && password === "john123") {
//     return res.json({
//       message: "logged in as john",
//       success: true,
//       role: "user",
//     });
//   }
//   //if no match
//   return res
//     .status(401)
//     .json({ success: false, message: "Invalid credentials" });
// });

// app.get("/api/admin/verify", authMiddleware, (req, res) => {
//   res.json({
//      message: `welcome ${req.user.email}`, 
//      role: req.user.role 
//     });
// });

//listen

const port = 5000;
app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
