const express = require("express");
const { register, verifyAccount } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.get("/verify", verifyAccount);

module.exports = router;
