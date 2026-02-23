
const Message = require("../models/Message");
const BrandProfile = require("../models/BrandProfile");
const InfluencerProfile = require("../models/InfluencerProfile");

// 🧠 Get all messages between current user and another user
exports.getMessages = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const otherUserId = req.params.userId;

    if (!currentUserId || !otherUserId) {
      return res.status(400).json({ error: "User IDs are required" });
    }

    // Fetch messages
    const messages = await Message.find({
      $or: [
        { senderId: currentUserId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: currentUserId },
      ],
    }).sort({ createdAt: 1 });

    // Extract all unique sender + receiver IDs
    const userIds = [
      ...new Set(messages.flatMap(m => [m.senderId.toString(), m.receiverId.toString()])),
    ];

    // Fetch both brand and influencer profiles for these users
    const [brandProfiles, influencerProfiles] = await Promise.all([
      BrandProfile.find({ user: { $in: userIds } }),
      InfluencerProfile.find({ user: { $in: userIds } }),
    ]);

    // Map userId → image
    const imageMap = {};

    brandProfiles.forEach(bp => {
      imageMap[bp.user.toString()] = bp.image || bp.images?.[0] || "/default-avatar.png";
    });

    influencerProfiles.forEach(ip => {
      imageMap[ip.user.toString()] = ip.images?.[0] || "/default-avatar.png";
    });

    // Attach images to messages
    const enrichedMessages = messages.map(m => ({
      ...m.toObject(),
      senderImage: imageMap[m.senderId.toString()] || "/default-avatar.png",
      receiverImage: imageMap[m.receiverId.toString()] || "/default-avatar.png",
    }));

    res.status(200).json(enrichedMessages);
  } catch (err) {
    console.error("❌ Error fetching messages with profile images:", err);
    res.status(500).json({ error: "Failed to load messages" });
  }
};


// ✉️ Send a new message
exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;

    if (!senderId || !receiverId || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      content,
    });

    res.status(201).json(newMessage);
  } catch (err) {
    console.error("❌ Error sending message:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
};

// 🗑️ Unsend (Delete) a message
// 🗑️ Unsend (Delete) a message only if unseen or unreplied
exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const currentUserId = req.user._id;

    const message = await Message.findById(id);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    // Allow only sender to unsend
    if (message.senderId.toString() !== currentUserId.toString()) {
      return res.status(403).json({ error: "Not authorized to delete this message" });
    }

    // ❌ If the message was seen, prevent unsending
    if (message.isSeen) {
      return res.status(400).json({ error: "Cannot unsend. Message already seen." });
    }

    // ❌ If receiver has replied after this message, prevent unsending
    const hasReply = await Message.exists({
      senderId: message.receiverId,
      receiverId: message.senderId,
      createdAt: { $gt: message.createdAt },
    });

    if (hasReply) {
      return res.status(400).json({ error: "Cannot unsend. Receiver has already replied." });
    }

    await Message.findByIdAndDelete(id);
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting message:", err);
    res.status(500).json({ error: "Failed to delete message" });
  }
};

// 🖊️ Edit message (optional)
exports.editMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { newContent } = req.body;

    if (!newContent) {
      return res.status(400).json({ error: "New message content required" });
    }

    const message = await Message.findById(id);

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    // Optional: Only allow sender to edit their message
    if (message.senderId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Not authorized to edit this message" });
    }

    message.content = newContent;
    message.isEdited = true;
    await message.save();

    res.status(200).json({ message: "Message updated", updatedMessage: message });
  } catch (err) {
    console.error("❌ Error editing message:", err);
    res.status(500).json({ error: "Failed to edit message" });
  }
};



// // controllers/chatController.js
// const Chat = require("../models/Chat");
// const BrandProfile = require("../models/BrandProfile");
// const InfluencerProfile = require("../models/InfluencerProfile");

// // -----------------------------
// // Create or update chat (called when invitation is accepted)
// // - ensures single chat per pair
// // - pushes campaignId into campaigns[] if missing
// // returns the chat document
// // -----------------------------
// exports.createOrUpdateChat = async (req, res) => {
//   try {
//     const { brandId, influencerId, campaignId } = req.body;
//     if (!brandId || !influencerId) {
//       return res.status(400).json({ error: "brandId and influencerId required" });
//     }

//     let chat = await Chat.findOne({
//       $or: [
//         { brandId, influencerId },
//         { brandId: influencerId, influencerId: brandId }, // just in case order differs
//       ],
//     });

//     if (!chat) {
//       chat = await Chat.create({
//         brandId,
//         influencerId,
//         campaigns: campaignId ? [campaignId] : [],
//       });
//     } else {
//       // add campaign if provided and not present
//       if (campaignId && !chat.campaigns.map(String).includes(String(campaignId))) {
//         chat.campaigns.push(campaignId);
//         await chat.save();
//       }
//     }

//     return res.status(200).json(chat);
//   } catch (err) {
//     console.error("❌ createOrUpdateChat error:", err);
//     return res.status(500).json({ error: "Failed to create/update chat" });
//   }
// };

// // -----------------------------
// // Get messages for chat between current user and otherUserId
// // Returns entire chat.messages array (with message objects)
// // -----------------------------
// exports.getMessages = async (req, res) => {
//   try {
//     const currentUserId = req.user._id;
//     const otherUserId = req.params.userId;

//     if (!currentUserId || !otherUserId) {
//       return res.status(400).json({ error: "User IDs are required" });
//     }

//     const chat = await Chat.findOne({
//       $or: [
//         { brandId: currentUserId, influencerId: otherUserId },
//         { brandId: otherUserId, influencerId: currentUserId },
//       ],
//     }).lean();

//     if (!chat) return res.status(200).json([]);

//     // If you want to attach images to each message sender, you can build a map:
//     const userIds = [chat.brandId?.toString(), chat.influencerId?.toString()].filter(Boolean);

//     const [brandProfiles, influencerProfiles] = await Promise.all([
//       BrandProfile.find({ user: { $in: userIds } }).lean(),
//       InfluencerProfile.find({ user: { $in: userIds } }).lean(),
//     ]);

//     const imageMap = {};
//     brandProfiles.forEach(bp => {
//       imageMap[bp.user.toString()] = bp.image || bp.images?.[0] || "/default-avatar.png";
//     });
//     influencerProfiles.forEach(ip => {
//       imageMap[ip.user.toString()] = ip.images?.[0] || "/default-avatar.png";
//     });

//     const enrichedMessages = (chat.messages || []).map(m => ({
//       ...m,
//       senderImage: imageMap[m.sender?.toString()] || "/default-avatar.png",
//     }));

//     return res.status(200).json(enrichedMessages);
//   } catch (err) {
//     console.error("❌ getMessages error:", err);
//     return res.status(500).json({ error: "Failed to load messages" });
//   }
// };

// // -----------------------------
// // Send message: appends message to chat.messages
// // If chat doesn't exist (rare), returns 404 or optionally create it
// // -----------------------------
// exports.sendMessage = async (req, res) => {
//   try {
//     const { senderId, receiverId, content } = req.body;
//     if (!senderId || !receiverId || !content) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const chat = await Chat.findOne({
//       $or: [
//         { brandId: senderId, influencerId: receiverId },
//         { brandId: receiverId, influencerId: senderId },
//       ],
//     });

//     if (!chat) {
//       return res.status(404).json({ error: "Chat not found. Create chat before sending messages." });
//       // OPTION: create chat automatically:
//       // const newChat = await Chat.create({ brandId: senderId, influencerId: receiverId, messages: [] });
//       // use newChat below
//     }

//     const newMsg = {
//       sender: senderId,
//       text: content,
//       createdAt: new Date(),
//       isSeen: false,
//       isEdited: false,
//     };

//     chat.messages.push(newMsg);
//     await chat.save();

//     // Return the last pushed message (with its _id)
//     const lastMsg = chat.messages[chat.messages.length - 1];
//     return res.status(201).json(lastMsg);
//   } catch (err) {
//     console.error("❌ sendMessage error:", err);
//     return res.status(500).json({ error: "Failed to send message" });
//   }
// };

// // -----------------------------
// // Mark all messages from partner as seen
// // PATCH /chat/mark-seen/:partnerId
// // -----------------------------
// exports.markSeen = async (req, res) => {
//   try {
//     const currentUserId = req.user._id.toString();
//     const partnerId = req.params.partnerId;

//     const chat = await Chat.findOne({
//       $or: [
//         { brandId: currentUserId, influencerId: partnerId },
//         { brandId: partnerId, influencerId: currentUserId },
//       ],
//     });

//     if (!chat) return res.status(404).json({ error: "Chat not found" });

//     let updated = false;
//     chat.messages.forEach(msg => {
//       if (msg.sender.toString() === partnerId && !msg.isSeen) {
//         msg.isSeen = true;
//         updated = true;
//       }
//     });

//     if (updated) await chat.save();

//     return res.status(200).json({ message: "Messages marked as seen" });
//   } catch (err) {
//     console.error("❌ markSeen error:", err);
//     return res.status(500).json({ error: "Failed to mark messages as seen" });
//   }
// };

// // -----------------------------
// // Delete message inside chat (unsend) - allow only sender & restrictions
// // DELETE /chat/message/:chatId/:messageId
// // -----------------------------
// exports.deleteMessageInChat = async (req, res) => {
//   try {
//     const currentUserId = req.user._id.toString();
//     const { chatId, messageId } = req.params;

//     const chat = await Chat.findById(chatId);
//     if (!chat) return res.status(404).json({ error: "Chat not found" });

//     const msg = chat.messages.id(messageId);
//     if (!msg) return res.status(404).json({ error: "Message not found" });

//     if (msg.sender.toString() !== currentUserId) {
//       return res.status(403).json({ error: "Not authorized to delete this message" });
//     }

//     if (msg.isSeen) {
//       return res.status(400).json({ error: "Cannot unsend. Message already seen." });
//     }

//     // If receiver replied after this message
//     const hasReply = chat.messages.some(
//       m => m.sender.toString() !== currentUserId && m.createdAt > msg.createdAt
//     );
//     if (hasReply) {
//       return res.status(400).json({ error: "Cannot unsend. Receiver has already replied." });
//     }

//     msg.remove();
//     await chat.save();
//     return res.status(200).json({ message: "Message deleted successfully" });
//   } catch (err) {
//     console.error("❌ deleteMessageInChat error:", err);
//     return res.status(500).json({ error: "Failed to delete message" });
//   }
// };

// // -----------------------------
// // Edit message inside chat
// // PATCH /chat/message/:chatId/:messageId
// // -----------------------------
// exports.editMessageInChat = async (req, res) => {
//   try {
//     const currentUserId = req.user._id.toString();
//     const { chatId, messageId } = req.params;
//     const { newContent } = req.body;
//     if (!newContent) return res.status(400).json({ error: "New content required" });

//     const chat = await Chat.findById(chatId);
//     if (!chat) return res.status(404).json({ error: "Chat not found" });

//     const msg = chat.messages.id(messageId);
//     if (!msg) return res.status(404).json({ error: "Message not found" });

//     if (msg.sender.toString() !== currentUserId) {
//       return res.status(403).json({ error: "Not authorized to edit this message" });
//     }

//     msg.text = newContent;
//     msg.isEdited = true;
//     await chat.save();

//     return res.status(200).json({ message: "Message updated", updatedMessage: msg });
//   } catch (err) {
//     console.error("❌ editMessageInChat error:", err);
//     return res.status(500).json({ error: "Failed to edit message" });
//   }
// };
