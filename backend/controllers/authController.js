const User = require("../models/User");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage }).single("profilePic");

const register = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err) return res.status(400).json({ message: "File upload error" });

      const { fullname, email, password, gender, mobile } = req.body;
      const profilePic = req.file ? req.file.filename : "";
      const hashedPassword = await bcrypt.hash(password, 10);
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });

      const newUser = new User({ fullname, email, password: hashedPassword, gender, mobile, profilePic, token });
      await newUser.save();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verify Your Account",
        html: `<p>Click the link to verify your account: <a href="${process.env.BASE_URL}/auth/verify?token=${token}">Verify</a></p>`
      });

      res.json({ message: "Registration successful! Check your email for verification link." });
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }
};

const verifyAccount = async (req, res) => {
  const { token } = req.query;
  const user = await User.findOne({ token });
  if (!user) return res.status(400).json({ message: "Invalid token" });

  user.verified = true;
  user.token = null;
  await user.save();
  res.json({ message: "Account verified! You can now login." });
};

module.exports = { register, verifyAccount };
