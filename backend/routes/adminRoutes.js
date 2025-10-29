const express = require("express");
const authMiddleware = require("../middleware"); 

const router = express.Router();
router.get("/verify", authMiddleware, (req, res) => {
  if(req.user.role !== 'admin') {
    return res.status(403).json({ message: "Access denied" });
  }
  res.json({
     message: `welcome ${req.user.email}`, 
     role: req.user.role 
    });
});

module.exports = router;