import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuth } from "./AuthContext";

// const { user } = useAuth(); // gives current logged-in user


// ✅ Create Context
export const ChatContext = createContext();

// ✅ Chat Provider Component
export const ChatProvider = ({ children }) => {
   const { user } = useAuth();// current logged-in user
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]); // current chat messages
  const [currentChat, setCurrentChat] = useState(null); // selected user/campaign
  const [onlineUsers, setOnlineUsers] = useState([]);

  // 🔌 Connect socket when user logs in
  useEffect(() => {
    if (user) {
      const newSocket = io(import.meta.env.VITE_SOCKET_URL || "http://localhost:5000", {
        query: { userId: user._id },
        transports: ["websocket"],
      });

      setSocket(newSocket);

      // ✅ When connected
      newSocket.on("connect", () => {
        console.log("✅ Socket connected:", newSocket.id);
      });

      // ✅ Receive message
      newSocket.on("receive_message", (data) => {
        console.log("📩 Message received:", data);
        setMessages((prev) => [...prev, data]);
      });

      // ✅ Track online users (optional feature)
      newSocket.on("online_users", (users) => setOnlineUsers(users));

      // 🔴 Clean up on logout/unmount
      return () => {
        newSocket.disconnect();
      };
    }
  }, [user]);

  // ✉️ Send a message
  const sendMessage = (msgData) => {
    if (socket && msgData) {
      socket.emit("send_message", msgData);
      setMessages((prev) => [...prev, msgData]); // instantly show in UI
    }
  };

  // Context value exposed to entire app
  const value = {
    socket,
    messages,
    setMessages,
    currentChat,
    setCurrentChat,
    sendMessage,
    onlineUsers,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

// ✅ Custom hook for easy access
export const useChat = () => useContext(ChatContext);
