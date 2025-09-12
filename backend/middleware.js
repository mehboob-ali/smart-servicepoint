const jwt = require("jsonwebtoken");
const JWT_SECRET = "secretkey";

const authMiddleware = (req, res, next) => {
  console.log("Auth middleware hit");
  const token = req.cookies["admin-token"];
  if (!token) {
    return res.status(401).json({ message: "No token found, access denied" });
  }
  if (token) {
    try {
      const decode = jwt.verify(token, JWT_SECRET);
      req.user = decode;
      next();
    } catch (err) {
      return res
        .status(401)
        .json({ message: "Invalid token, access denied", err });
    }
  }
};

module.exports = authMiddleware;
