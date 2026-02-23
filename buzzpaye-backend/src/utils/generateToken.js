


const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },  // ✅ embeds id and role in token
    process.env.JWT_SECRET,             // ✅ secret key from .env
    { expiresIn: "7d" }                 // ✅ token validity (7 days)
  );
};

module.exports = generateToken;
