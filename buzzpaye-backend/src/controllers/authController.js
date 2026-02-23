// const User = require("../models/User");
// const generateToken = require("../utils/generateToken");

// // Register new user
// exports.registerUser = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     if (!name || !email || !password || !role) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     const user = await User.create({ name, email, password, role });

//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       token: generateToken(user),
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Login user
// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         token: generateToken(user),
//       });
//     } else {
//       res.status(401).json({ message: "Invalid credentials" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };




const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// Register new user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      console.log("⚠️ Missing fields:", { name, email, password, role });
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ Registration failed — email already registered:", email);
      return res.status(400).json({ message: "Email already registered" });
    }

    const user = await User.create({ name, email, password, role });
    console.log("✅ User registered:", user.email, "| Role:", user.role);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user),
    });
  } catch (error) {
    console.error("🔥 Registration error:", error);
    res.status(500).json({ message: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("📩 Login request received:", email);

    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User not found for email:", email);
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await user.matchPassword(password);
    console.log("🔐 Password match:", isMatch);

    if (isMatch) {
      console.log("✅ Login successful for:", user.email);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user),
      });
    } else {
      console.log("❌ Invalid password for:", email);
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("🔥 Login error:", error);
    res.status(500).json({ message: error.message });
  }
};



// Get current logged-in user
exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error("Error fetching current user:", err);
    res.status(500).json({ message: "Server error" });
  }
};
