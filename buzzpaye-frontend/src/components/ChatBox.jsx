// // // // import React, { useEffect, useRef, useState } from "react";
// // // // import { useAuth } from "../context/AuthContext";
// // // // import { useChat } from "../context/ChatContext";
// // // // import api from "../utils/api";
// // // // import MessageBubble from "./MessageBubble";

// // // // const ChatBox = () => {
// // // //   const { user } = useAuth();
// // // //   const { currentChat, messages, setMessages, sendMessage } = useChat();
// // // //   const [newMessage, setNewMessage] = useState("");
// // // //   const messagesEndRef = useRef(null);

// // // //   // 🧠 Fetch chat history when a chat partner is selected
// // // //   useEffect(() => {
// // // //     const fetchMessages = async () => {
// // // //       try {
// // // //         if (!currentChat?.partnerId) return;
// // // //         const res = await api.get(`/chat/${currentChat.partnerId}`);
// // // //         setMessages(res.data);
// // // //       } catch (err) {
// // // //         console.error("Failed to load messages:", err);
// // // //       }
// // // //     };
// // // //     fetchMessages();
// // // //   }, [currentChat, setMessages]);

// // // //   // 🔄 Auto scroll to bottom when messages update
// // // //   useEffect(() => {
// // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   }, [messages]);

// // // //   // ✉️ Handle sending message
// // // //   const handleSend = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!newMessage.trim()) return;

// // // //     const msgData = {
// // // //       senderId: user._id,
// // // //       receiverId: currentChat.partnerId,
// // // //       content: newMessage,
// // // //       timestamp: new Date().toISOString(),
// // // //     };

// // // //     // emit via socket instantly
// // // //     sendMessage(msgData);
// // // //     setNewMessage("");

// // // //     // save in DB
// // // //     try {
// // // //       await api.post("/chat/send", msgData);
// // // //     } catch (err) {
// // // //       console.error("Failed to save message:", err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col h-full">
// // // //       {/* Header */}
// // // //       <div className="p-4 border-b flex items-center justify-between bg-white shadow-sm">
// // // //         <div>
// // // //           <h2 className="font-semibold text-lg">{currentChat.name}</h2>
// // // //           <p className="text-sm text-gray-500">{currentChat.campaign}</p>
// // // //         </div>
// // // //       </div>

// // // //       {/* Messages Area */}
// // // //       <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
// // // //         {messages.length === 0 ? (
// // // //           <p className="text-gray-400 text-sm text-center mt-10">
// // // //             No messages yet. Start the conversation 👋
// // // //           </p>
// // // //         ) : (
// // // //           messages.map((msg, idx) => (
// // // //             <MessageBubble
// // // //               key={idx}
// // // //               msg={msg}
// // // //               isOwn={msg.senderId === user._id}
// // // //             />
// // // //           ))
// // // //         )}
// // // //         <div ref={messagesEndRef} />
// // // //       </div>

// // // //       {/* Input Box */}
// // // //       <form
// // // //         onSubmit={handleSend}
// // // //         className="p-3 border-t bg-white flex items-center gap-3"
// // // //       >
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Type a message..."
// // // //           className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
// // // //           value={newMessage}
// // // //           onChange={(e) => setNewMessage(e.target.value)}
// // // //         />
// // // //         <button
// // // //           type="submit"
// // // //           className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
// // // //         >
// // // //           Send
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ChatBox;

// // // import React, { useEffect, useRef, useState } from "react";
// // // // import { useAuth } from "../context/AuthContext";
// // // // import { useChat } from "../context/ChatContext";
// // // // import api from "../utils/api";
// // // // import MessageBubble from "./MessageBubble";

// // // // const ChatBox = () => {
// // // //   const { user } = useAuth();
// // // //   const { currentChat, messages, setMessages, sendMessage } = useChat();
// // // //   const [newMessage, setNewMessage] = useState("");
// // // //   const messagesEndRef = useRef(null);

// // // //   // 🧠 Fetch chat history when chat partner changes
// // // //   useEffect(() => {
// // // //     const fetchMessages = async () => {
// // // //       try {
// // // //         if (!currentChat?.partnerId) return;
// // // //         const res = await api.get(`/chat/${currentChat.partnerId}`);
// // // //         setMessages(res.data || []);
// // // //       } catch (err) {
// // // //         console.error("Failed to load messages:", err);
// // // //       }
// // // //     };
// // // //     fetchMessages();
// // // //   }, [currentChat, setMessages]);

// // // //   // 🔄 Auto scroll to bottom when messages update
// // // //   useEffect(() => {
// // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   }, [messages]);

// // // //   // ✉️ Handle sending message
// // // //   const handleSend = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!newMessage.trim()) return;

// // // //     const msgData = {
// // // //       senderId: user._id,
// // // //       receiverId: currentChat.partnerId,
// // // //       content: newMessage.trim(),
// // // //       timestamp: new Date().toISOString(),
// // // //     };

// // // //     sendMessage(msgData); // instant via socket
// // // //     setNewMessage("");

// // // //     try {
// // // //       await api.post("/chat/send", msgData);
// // // //     } catch (err) {
// // // //       console.error("Failed to save message:", err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col h-full overflow-hidden">
// // // //       {/* Header */}
// // // //       <div className="p-4 border-b flex items-center justify-between bg-black shadow-sm">
// // // //         <div>
// // // //           <h2 className="font-semibold text-lg text-primary">
// // // //             {currentChat.name}
// // // //           </h2>
// // // //           <p className="text-sm text-gray-500">{currentChat.campaign}</p>
// // // //         </div>
// // // //       </div>

// // // //       {/* Messages Area */}
// // // //       <div className="flex-1 overflow-y-auto p-4 bg-black">
// // // //         {messages.length === 0 ? (
// // // //           <p className="text-gray-400 text-sm text-center mt-10">
// // // //             No messages yet. Start the conversation 👋
// // // //           </p>
// // // //         ) : (
// // // //           messages.map((msg, idx) => (
// // // //             <MessageBubble
// // // //               key={idx}
// // // //               msg={msg}
// // // //               isOwn={msg.senderId === user._id}
// // // //             />
// // // //           ))
// // // //         )}
// // // //         <div ref={messagesEndRef} />
// // // //       </div>

// // // //       {/* Input Box (moved slightly up with shadow) */}
// // // //       <form
// // // //         onSubmit={handleSend}
// // // //         className="p-3 border-t bg-white flex items-center gap-3 shadow-inner"
// // // //       >
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Type a message..."
// // // //           className="flex-1 bg-black border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
// // // //           value={newMessage}
// // // //           onChange={(e) => setNewMessage(e.target.value)}
// // // //         />
// // // //         <button
// // // //           type="submit"
// // // //           className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
// // // //         >
// // // //           Send
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ChatBox;

// // // import React, { useEffect, useRef, useState } from "react";
// // // import { useAuth } from "../context/AuthContext";
// // // import { useChat } from "../context/ChatContext";
// // // import api from "../utils/api";
// // // import MessageBubble from "./MessageBubble";

// // // const ChatBox = () => {
// // //   const { user } = useAuth();
// // //   const { currentChat, messages, setMessages, sendMessage } = useChat();
// // //   const [newMessage, setNewMessage] = useState("");
// // //   const messagesEndRef = useRef(null);

// // //   useEffect(() => {
// // //     const fetchMessages = async () => {
// // //       try {
// // //         if (!currentChat?.partnerId) return;
// // //         const res = await api.get(`/chat/${currentChat.partnerId}`);
// // //         setMessages(res.data || []);
// // //       } catch (err) {
// // //         console.error("Failed to load messages:", err);
// // //       }
// // //     };
// // //     fetchMessages();
// // //   }, [currentChat, setMessages]);

// // //   useEffect(() => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [messages]);

// // //   const handleSend = async (e) => {
// // //     e.preventDefault();
// // //     if (!newMessage.trim()) return;

// // //     const msgData = {
// // //       senderId: user._id,
// // //       receiverId: currentChat.partnerId,
// // //       content: newMessage.trim(),
// // //       timestamp: new Date().toISOString(),
// // //     };

// // //     sendMessage(msgData);
// // //     setNewMessage("");

// // //     try {
// // //       await api.post("/chat/send", msgData);
// // //     } catch (err) {
// // //       console.error("Failed to save message:", err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex flex-col h-full bg-gray-900 overflow-hidden">
// // //       {/* Header */}
// // //       <div className="p-4 border-b border-gray-700 flex items-center gap-3 bg-gray-950">
// // //         <img
// // //           src={currentChat.image || "/default-avatar.png"}
// // //           alt={currentChat.name}
// // //           className="w-10 h-10 rounded-full object-cover"
// // //         />
// // //         <div>
// // //           <h2 className="font-semibold text-lg text-white">{currentChat.name}</h2>
// // //           <p className="text-sm text-gray-400">{currentChat.campaign}</p>
// // //         </div>
// // //       </div>

// // //       {/* Messages */}
// // //       <div className="flex-1 overflow-y-auto p-4 space-y-1">
// // //         {messages.length === 0 ? (
// // //           <p className="text-gray-500 text-sm text-center mt-10">
// // //             No messages yet. Start the conversation 👋
// // //           </p>
// // //         ) : (
// // //           messages.map((msg, idx) => (
// // //             <MessageBubble key={idx} msg={msg} isOwn={msg.senderId === user._id} />
// // //           ))
// // //         )}
// // //         <div ref={messagesEndRef} />
// // //       </div>

// // //       {/* Input */}
// // //       <form
// // //         onSubmit={handleSend}
// // //         className="p-3 bg-gray-950 border-t border-gray-700 flex items-center gap-3"
// // //       >
// // //         <input
// // //           type="text"
// // //           placeholder="Type a message..."
// // //           className="flex-1 bg-gray-800 text-gray-100 border border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
// // //           value={newMessage}
// // //           onChange={(e) => setNewMessage(e.target.value)}
// // //         />
// // //         <button
// // //           type="submit"
// // //           className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
// // //         >
// // //           Send
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default ChatBox;

// // // src/components/ChatBox.jsx
// // import React, { useEffect, useRef, useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { useChat } from "../context/ChatContext";
// // import api from "../utils/api";
// // import MessageBubble from "./MessageBubble";

// // const ChatBox = () => {
// //   const { user } = useAuth();
// //   const { currentChat, messages, setMessages, sendMessage } = useChat();
// //   const [newMessage, setNewMessage] = useState("");
// //   const messagesEndRef = useRef(null);

// //   // useEffect(() => {
// //   //   const fetchMessages = async () => {
// //   //     try {
// //   //       if (!currentChat?.partnerId) return;
// //   //       const res = await api.get(`/chat/${currentChat.partnerId}`);
// //   //       setMessages(res.data || []);
// //   //     } catch (err) {
// //   //       console.error("Failed to load messages:", err);
// //   //     }
// //   //   };
// //   //   fetchMessages();
// //   // }, [currentChat, setMessages]);

// //   useEffect(() => {
// //   const fetchMessages = async () => {
// //     try {
// //       if (!currentChat?.partnerId) return;

// //       // ✅ Mark as seen when opening the chat
// //       await api.patch(`/chat/mark-seen/${currentChat.partnerId}`);

// //       const res = await api.get(`/chat/${currentChat.partnerId}`);
// //       setMessages(res.data || []);
// //     } catch (err) {
// //       console.error("Failed to load messages:", err);
// //     }
// //   };
// //   fetchMessages();
// // }, [currentChat, setMessages]);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages]);

// //   const handleSend = async (e) => {
// //     e.preventDefault();
// //     if (!newMessage.trim()) return;

// //     const msgData = {
// //       senderId: user._id,
// //       receiverId: currentChat.partnerId,
// //       content: newMessage.trim(),
// //       timestamp: new Date().toISOString(),
// //     };

// //     sendMessage(msgData);
// //     setNewMessage("");

// //     try {
// //       await api.post("/chat/send", msgData);
// //     } catch (err) {
// //       console.error("Failed to save message:", err);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col h-full bg-gray-900 overflow-hidden">
// //       {/* Header */}
// //       <div className="p-4 border-b border-gray-700 flex items-center gap-3 bg-gray-950">
// //         <img
// //           src={currentChat.image || "/default-avatar.png"}
// //           alt={currentChat.name}
// //           className="w-10 h-10 rounded-full object-cover"
// //         />
// //         <div>
// //           <h2 className="font-semibold text-lg text-white">{currentChat.name}</h2>
// //           <p className="text-sm text-gray-400">{currentChat.campaign}</p>
// //         </div>
// //       </div>

// //       {/* Messages */}
// //       <div className="flex-1 overflow-y-auto p-4 space-y-1">
// //         {messages.length === 0 ? (
// //           <p className="text-gray-500 text-sm text-center mt-10">
// //             No messages yet. Start the conversation 👋
// //           </p>
// //         ) : (
// //           messages.map((msg, idx) => (
// //             <MessageBubble key={idx} msg={msg} isOwn={msg.senderId?._id === user._id || msg.senderId === user._id} />
// //           ))
// //         )}
// //         <div ref={messagesEndRef} />
// //       </div>

// //       {/* Input */}
// //       <form
// //         onSubmit={handleSend}
// //         className="p-3 bg-gray-950 border-t border-gray-700 flex items-center gap-3"
// //       >
// //         <input
// //           type="text"
// //           placeholder="Type a message..."
// //           className="flex-1 bg-gray-800 text-gray-100 border border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //         />
// //         <button
// //           type="submit"
// //           className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
// //         >
// //           Send
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ChatBox;

// // import React, { useEffect, useRef, useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { useChat } from "../context/ChatContext";
// // import api from "../utils/api";
// // import MessageBubble from "./MessageBubble";

// // const ChatBox = () => {
// //   const { user } = useAuth();
// //   const { currentChat, messages, setMessages, sendMessage } = useChat();
// //   const [newMessage, setNewMessage] = useState("");
// //   const messagesEndRef = useRef(null);

// //   useEffect(() => {
// //     const fetchMessages = async () => {
// //       try {
// //         if (!currentChat?.partnerId) return;

// //         // ✅ Mark as seen when opening the chat
// //         await api.patch(`/chat/mark-seen/${currentChat.partnerId}`);

// //         const res = await api.get(`/chat/${currentChat.partnerId}`);
// //         setMessages(res.data || []);
// //       } catch (err) {
// //         console.error("Failed to load messages:", err);
// //       }
// //     };
// //     fetchMessages();
// //   }, [currentChat, setMessages]);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages]);

// //   const handleSend = async (e) => {
// //     e.preventDefault();
// //     if (!newMessage.trim()) return;

// //     const msgData = {
// //       senderId: user._id,
// //       receiverId: currentChat.partnerId,
// //       content: newMessage.trim(),
// //       timestamp: new Date().toISOString(),
// //     };

// //     sendMessage(msgData);
// //     setNewMessage("");

// //     try {
// //       await api.post("/chat/send", msgData);
// //     } catch (err) {
// //       console.error("Failed to save message:", err);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col h-full bg-black overflow-hidden">
// //       {/* Header */}
// //       <div className="p-4 border-b border-grayCustom flex items-center gap-3 bg-gray-950">
// //         <img
// //           src={currentChat.image || "/default-avatar.png"}
// //           alt={currentChat.name}
// //           className="w-10 h-10 rounded-full object-cover"
// //         />
// //         <div>
// //           <h2 className="font-semibold text-lg text-white">
// //             {currentChat.name}
// //           </h2>
// //           <p className="text-sm text-gray-400">{currentChat.campaign}</p>
// //         </div>
// //       </div>

// //       {/* Messages */}
// //       <div className="flex-1 overflow-y-auto p-4 space-y-1">
// //         {messages.length === 0 ? (
// //           <p className="text-gray-500 text-sm text-center mt-10">
// //             No messages yet. Start the conversation 👋
// //           </p>
// //         ) : (
// //           messages.map((msg, idx) => (
// //             <MessageBubble
// //               key={idx}
// //               msg={msg}
// //               isOwn={
// //                 msg.senderId?._id === user._id || msg.senderId === user._id
// //               }
// //             />
// //           ))
// //         )}
// //         <div ref={messagesEndRef} />
// //       </div>

// //       {/* Input */}
// //       <form
// //         onSubmit={handleSend}
// //         className="p-3 bg-gray-950 border-t border-gray-700 flex items-center gap-3"
// //       >
// //         <input
// //           type="text"
// //           placeholder="Type a message..."
// //           className="flex-1 bg-gray-800 text-gray-100 border border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500"
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //         />
// //         <button
// //           type="submit"
// //           className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
// //         >
// //           Send
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ChatBox;
// import React, { useEffect, useRef, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useChat } from "../context/ChatContext";
// import api from "../utils/api";
// import MessageBubble from "./MessageBubble";

// const ChatBox = () => {
//   const { user } = useAuth();
//   const { currentChat, messages, setMessages, sendMessage } = useChat();
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         if (!currentChat?.partnerId) return;

//         await api.patch(`/chat/mark-seen/${currentChat.partnerId}`);
//         const res = await api.get(`/chat/${currentChat.partnerId}`);
//         setMessages(res.data || []);
//       } catch (err) {
//         console.error("Failed to load messages:", err);
//       }
//     };
//     fetchMessages();
//   }, [currentChat, setMessages]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     const msgData = {
//       senderId: user._id,
//       receiverId: currentChat.partnerId,
//       content: newMessage.trim(),
//       timestamp: new Date().toISOString(),
//     };

//     sendMessage(msgData);
//     setNewMessage("");

//     try {
//       await api.post("/chat/send", msgData);
//     } catch (err) {
//       console.error("Failed to save message:", err);
//     }
//   };

//   return (
//     <div className="flex flex-col h-full bg-black">

//       {/* Header */}
//       <div className="p-4 border-b border-gray-800 flex items-center gap-3 bg-gray-950">
//         <img
//           src={currentChat.image || "/default-avatar.png"}
//           alt={currentChat.name}
//           className="w-10 h-10 rounded-full object-cover"
//         />
//         <div>
//           <h2 className="font-semibold text-lg text-white">
//             {currentChat.name}
//           </h2>
//           <p className="text-sm text-gray-400">
//             {currentChat.campaign}
//           </p>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-1">
//         {messages.length === 0 ? (
//           <p className="text-gray-500 text-sm text-center mt-10">
//             No messages yet. Start the conversation 👋
//           </p>
//         ) : (
//           messages.map((msg, idx) => (
//             <MessageBubble
//               key={idx}
//               msg={msg}
//               isOwn={
//                 msg.senderId?._id === user._id ||
//                 msg.senderId === user._id
//               }
//             />
//           ))
//         )}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <form
//         onSubmit={handleSend}
//         className="p-3 bg-gray-950 border-t border-gray-700 flex items-center gap-3"
//       >
//         <input
//           type="text"
//           placeholder="Type a message..."
//           className="flex-1 bg-gray-800 text-gray-100 border border-gray-600 rounded-full px-4 py-2 focus:outline-none"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatBox;

// import React, { useEffect, useRef, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useChat } from "../context/ChatContext";
// import api from "../utils/api";
// import MessageBubble from "./MessageBubble";

// const ChatBox = () => {
//   const { user } = useAuth();
//   const { currentChat, messages, setMessages, sendMessage } = useChat();
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!currentChat?.partnerId) return;

//       try {
//         await api.patch(`/chat/mark-seen/${currentChat.partnerId}`);
//         const res = await api.get(`/chat/${currentChat.partnerId}`);
//         setMessages(res.data || []);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchMessages();
//   }, [currentChat, setMessages]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     const msgData = {
//       senderId: user._id,
//       receiverId: currentChat.partnerId,
//       content: newMessage.trim(),
//       timestamp: new Date().toISOString(),
//     };

//     sendMessage(msgData);
//     setNewMessage("");

//     try {
//       await api.post("/chat/send", msgData);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="h-full flex flex-col">
//       {/* Header (fixed) */}
//       <div className="p-4 border-b border-gray-800 flex items-center gap-3 bg-gray-950">
//         <img
//           src={currentChat.image || "/default-avatar.png"}
//           className="w-10 h-10 rounded-full"
//         />
//         <div>
//           <h2 className="font-semibold text-lg">{currentChat.name}</h2>
//           <p className="text-sm text-gray-400">{currentChat.campaign}</p>
//         </div>
//       </div>

//       {/* Messages (ONLY THIS SCROLLS) */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-2">
//         {messages.map((msg, idx) => (
//           <MessageBubble
//             key={idx}
//             msg={msg}
//             isOwn={msg.senderId?._id === user._id || msg.senderId === user._id}
//           />
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input (fixed) */}
//       <form
//         onSubmit={handleSend}
//         className="p-3 border-t border-gray-800 bg-gray-950 flex gap-3"
//       >
//         <input
//           className="flex-1 bg-gray-800 rounded-full px-4 py-2"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button className="bg-blue-500 px-5 rounded-full">Send</button>
//       </form>
//     </div>
//   );
// };

// export default ChatBox;

import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useChat } from "../context/ChatContext";
import api from "../utils/api";
import MessageBubble from "./MessageBubble";

const ChatBox = () => {
  const { user } = useAuth();
  const { currentChat, messages, setMessages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!currentChat?.partnerId) return;

      try {
        await api.patch(`/chat/mark-seen/${currentChat.partnerId}`);
        const res = await api.get(`/chat/${currentChat.partnerId}`);
        setMessages(res.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, [currentChat, setMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const msgData = {
      senderId: user._id,
      receiverId: currentChat.partnerId,
      content: newMessage.trim(),
      timestamp: new Date().toISOString(),
    };

    sendMessage(msgData);
    setNewMessage("");

    try {
      await api.post("/chat/send", msgData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col h-full bg-black">
      {/* Header */}
      <div className="p-4 border-b border-gray-800 flex items-center gap-3 bg-gray-950">
        <img
          src={currentChat.image || "/default-avatar.png"}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="font-semibold text-lg">{currentChat.name}</h2>
          <p className="text-sm text-gray-400">{currentChat.campaign}</p>
        </div>
      </div>

      {/* Messages (scroll only here) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <MessageBubble
            key={idx}
            msg={msg}
            isOwn={msg.senderId?._id === user._id || msg.senderId === user._id}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input (fixed) */}
      <form
        onSubmit={handleSend}
        className="p-3 border-t border-gray-800 bg-gray-950 flex gap-3"
      >
        <input
          className="flex-1 bg-gray-800 rounded-full px-4 py-2"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="bg-blue-500 px-5 rounded-full">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
