
// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");
// const http = require("http");
// const connectDB = require("./config/db");
// const initializeChatSocket = require("./sockets/chatSocket"); 



// dotenv.config();
// connectDB();

// const app = express();

// // ---------------------
// // Middleware
// // ---------------------
// app.use(express.json());

// // app.use(
// //   cors({
// //     origin: "http://localhost:5173", // ✅ your frontend
// //     credentials: true,
// //   })
// // );

// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "https://buzzpaye-2.vercel.app"
//   ],
//   credentials: true
// })
// )
// // ---------------------
// // Uploads Folder Setup
// // ---------------------
// const uploadsDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
//   console.log("✅ 'uploads' folder created successfully");
// }
// app.use("/uploads", express.static(uploadsDir));

// // ---------------------
// // Routes
// // ---------------------
// const influencerRoutes = require("./routes/influencerRoutes");
// const brandRoutes = require("./routes/brandRoutes");
// const authRoutes = require("./routes/authRoutes");
// const campaignRoutes = require("./routes/campaignRoutes");
// const invitationRoutes = require("./routes/invitationRoutes");
// const chatRoutes = require("./routes/chatRoutes"); // ✅ added chat routes
// const profileRoutes = require("./routes/profileRoutes")// ✅ new profile route
// const RecommendationRoutes = require("./routes/recommendationRoutes"); // ✅ new recommendation route
// const ratingRoutes = require("./routes/ratingRoutes");


// // ✅ Register routes
// app.use("/api/auth", authRoutes);
// app.use("/api/influencer", influencerRoutes);
// app.use("/api/brand", brandRoutes);
// app.use("/api/campaigns", campaignRoutes);
// app.use("/api/invitations", invitationRoutes);
// app.use("/api/chat", chatRoutes); // ✅ new chat system route
// app.use("/api/profiles", profileRoutes); // ✅ new profile route
// app.use("/api/recommendations", RecommendationRoutes); // ✅ new recommendation route
// app.use("/api/ratings", ratingRoutes);

// // Root test route
// app.get("/", (req, res) => {
//   res.send("🚀 BuzzPaye Backend Connected Successfully with Chat System!");
// });

// // ---------------------
// // HTTP + Socket.io Server
// // ---------------------
// const server = http.createServer(app);
// initializeChatSocket(server); // ✅ attach socket events

// // ---------------------
// // Start Server
// // ---------------------
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));



const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const http = require("http");

const connectDB = require("./config/db");
const initializeChatSocket = require("./sockets/chatSocket");

dotenv.config();
connectDB();

const app = express();

/* =====================================================
   CORS CONFIGURATION (VERY IMPORTANT)
===================================================== */

const allowedOrigins = [
  "http://localhost:5173",
  "https://buzzpaye-2.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

/* =====================================================
   MIDDLEWARE
===================================================== */

app.use(express.json());

/* =====================================================
   UPLOADS FOLDER SETUP
===================================================== */

const uploadsDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log("✅ 'uploads' folder created successfully");
}

app.use("/uploads", express.static(uploadsDir));

/* =====================================================
   ROUTES
===================================================== */

const influencerRoutes = require("./routes/influencerRoutes");
const brandRoutes = require("./routes/brandRoutes");
const authRoutes = require("./routes/authRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
const invitationRoutes = require("./routes/invitationRoutes");
const chatRoutes = require("./routes/chatRoutes");
const profileRoutes = require("./routes/profileRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const ratingRoutes = require("./routes/ratingRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/influencer", influencerRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/invitations", invitationRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/ratings", ratingRoutes);

/* =====================================================
   ROOT TEST ROUTE
===================================================== */

app.get("/", (req, res) => {
  res.send("🚀 BuzzPaye Backend Running Successfully!");
});


/* ✅ 404 HANDLER */
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
/* =====================================================
   SERVER + SOCKET.IO
===================================================== */

const server = http.createServer(app);

initializeChatSocket(server);

/* =====================================================
   START SERVER
===================================================== */

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});