const express = require("express");
const authMiddleware = require("../middleware"); 

const router = express.Router();
router.get("/verify", authMiddleware, (req, res) => {
  res.json({
     message: `welcome ${req.user.email}`, 
     role: req.user.role 
    });
});

module.exports = router;