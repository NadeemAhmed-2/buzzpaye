// const express = require("express");
// const router = express.Router();
// const chatController = require("../controllers/chatController");
// const authMiddleware = require("../middleware/authMiddleware"); // JWT middleware

// // Get chat history with a specific user
// router.get("/:userId", authMiddleware, chatController.getMessages);

// // Send message
// router.post("/send", authMiddleware, chatController.sendMessage);




// module.exports = router;


const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

const protect = require("../middleware/authMiddleware");
const {
  getMessages,
  sendMessage,
  deleteMessage,
  editMessage,
} = require("../controllers/chatController");

// 🧠 Get all messages between users
router.get("/:userId", protect, getMessages);

// ✉️ Send message
router.post("/send", protect, sendMessage);

// 🗑️ Delete (unsend)
router.delete("/:id", protect, deleteMessage);

// 🖊️ Edit message
router.patch("/:id", protect, editMessage);

// ✅ Mark all messages as seen when user opens a chat
router.patch("/mark-seen/:senderId", protect, async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const senderId = req.params.senderId;

    await Message.updateMany(
      { senderId, receiverId: currentUserId, isSeen: false },
      { $set: { isSeen: true } }
    );

    res.status(200).json({ message: "Messages marked as seen" });
  } catch (err) {
    console.error("❌ Error marking messages as seen:", err);
    res.status(500).json({ error: "Failed to mark messages as seen" });
  }
});


module.exports = router;



// // routes/chatRoutes.js
// const express = require("express");
// const router = express.Router();
// const protect = require("../middleware/authMiddleware"); // your auth middleware
// const chatController = require("../controllers/chatController");

// // create or update chat when invite accepted
// router.post("/create-or-update", protect, chatController.createOrUpdateChat);

// // get messages between current user and another user (by partner userId)
// router.get("/:userId", protect, chatController.getMessages);

// // send message (push into chat.messages)
// router.post("/send", protect, chatController.sendMessage);

// // mark seen (by partner userId)
// router.patch("/mark-seen/:partnerId", protect, chatController.markSeen);

// // delete a message inside chat
// router.delete("/message/:chatId/:messageId", protect, chatController.deleteMessageInChat);

// // edit message
// router.patch("/message/:chatId/:messageId", protect, chatController.editMessageInChat);

// module.exports = router;
