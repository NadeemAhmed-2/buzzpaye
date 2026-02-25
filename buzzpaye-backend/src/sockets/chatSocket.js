// const { Server } = require("socket.io");

// function initializeChatSocket(server) {
//   const io = new Server(server, {
//     cors: {
//       origin: "http://localhost:5173", // In production, replace with frontend domain
//       methods: ["GET", "POST"],
//     },
//   });

//   // Track connected users
//   const onlineUsers = new Map();

//   io.on("connection", (socket) => {
//     const userId = socket.handshake.query.userId;
//     if (userId) {
//       onlineUsers.set(userId, socket.id);
//       console.log(`✅ User connected: ${userId}`);
//       io.emit("online_users", Array.from(onlineUsers.keys()));
//     }

//     // 🧠 Join personal room for private messages
//     socket.join(userId);
    
//     // 📩 Listen for sending messages
//     socket.on("send_message", (msgData) => {
//       const { senderId, receiverId } = msgData;
//       const receiverSocketId = onlineUsers.get(receiverId);

//       if (receiverSocketId) {
//         io.to(receiverSocketId).emit("receive_message", msgData);
//       }
//     });

//     // ❌ On disconnect
//     socket.on("disconnect", () => {
//       onlineUsers.delete(userId);
//       io.emit("online_users", Array.from(onlineUsers.keys()));
//       console.log(`❌ User disconnected: ${userId}`);
//     });
//   });
// }

// module.exports = initializeChatSocket;



const { Server } = require("socket.io");

function initializeChatSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: [
        "http://localhost:5173",              // local dev
        "https://buzzpaye-2.vercel.app"       // production frontend
      ],
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  // Track connected users
  const onlineUsers = new Map();

  io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId) {
      onlineUsers.set(userId, socket.id);
      console.log(`✅ User connected: ${userId}`);
      io.emit("online_users", Array.from(onlineUsers.keys()));

      // Join personal room
      socket.join(userId);
    }

    // 📩 Send message
    socket.on("send_message", (msgData) => {
      const { receiverId } = msgData;
      const receiverSocketId = onlineUsers.get(receiverId);

      if (receiverSocketId) {
        io.to(receiverSocketId).emit("receive_message", msgData);
      }
    });

    // ❌ Disconnect
    socket.on("disconnect", () => {
      if (userId) {
        onlineUsers.delete(userId);
        io.emit("online_users", Array.from(onlineUsers.keys()));
        console.log(`❌ User disconnected: ${userId}`);
      }
    });
  });
}

module.exports = initializeChatSocket;