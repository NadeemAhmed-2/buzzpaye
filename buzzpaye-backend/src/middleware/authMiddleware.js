


const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];     // ✅ extract token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);  // ✅ verify token
      req.user = await User.findById(decoded.id).select("-password"); // ✅ attach user object
      next(); // ✅ move to next route handler
    } catch (err) {
      console.error("JWT verification failed:", err.message);
      res.status(401).json({ message: "Not authorized" });
    }
  } else {
    res.status(401).json({ message: "No token" });
  }
};

module.exports = protect;
