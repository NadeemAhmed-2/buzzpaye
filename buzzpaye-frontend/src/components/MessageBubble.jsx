// // // // // import React from "react";

// // // // // const MessageBubble = ({ msg, isOwn }) => {
// // // // //   return (
// // // // //     <div
// // // // //       className={`flex mb-2 ${
// // // // //         isOwn ? "justify-end" : "justify-start"
// // // // //       }`}
// // // // //     >
// // // // //       <div
// // // // //         className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm ${
// // // // //           isOwn
// // // // //             ? "bg-blue-600 text-white rounded-br-none"
// // // // //             : "bg-gray-200 text-gray-800 rounded-bl-none"
// // // // //         }`}
// // // // //       >
// // // // //         <p>{msg.content}</p>
// // // // //         <p className="text-xs text-gray-300 mt-1 text-right">
// // // // //           {new Date(msg.timestamp).toLocaleTimeString([], {
// // // // //             hour: "2-digit",
// // // // //             minute: "2-digit",
// // // // //           })}
// // // // //         </p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MessageBubble;

// // // // import React from "react";

// // // // const MessageBubble = ({ msg, isOwn }) => {
// // // //   // 🕒 Safely format time
// // // //   let formattedTime = "";
// // // //   try {
// // // //     const date = new Date(msg.timestamp || msg.createdAt);
// // // //     if (!isNaN(date.getTime())) {
// // // //       formattedTime = date.toLocaleTimeString([], {
// // // //         hour: "2-digit",
// // // //         minute: "2-digit",
// // // //       });
// // // //     } else {
// // // //       formattedTime = ""; // fallback if invalid
// // // //     }
// // // //   } catch {
// // // //     formattedTime = "";
// // // //   }

// // // //   return (
// // // //     <div className={`flex mb-2 ${isOwn ? "justify-end" : "justify-start"}`}>
// // // //       <div
// // // //         className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm ${
// // // //           isOwn
// // // //             ? "bg-blue-600 text-white rounded-br-none"
// // // //             : "bg-gray-200 text-gray-800 rounded-bl-none"
// // // //         }`}
// // // //       >
// // // //         <p>{msg.content}</p>
// // // //         {formattedTime && (
// // // //           <p
// // // //             className={`text-xs mt-1 text-right ${
// // // //               isOwn ? "text-gray-200" : "text-gray-500"
// // // //             }`}
// // // //           >
// // // //             {formattedTime}
// // // //           </p>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MessageBubble;

// // // import React, { useState } from "react";
// // // import { Trash2 } from "lucide-react";
// // // import api from "../utils/api";
// // // import { useChat } from "../context/ChatContext";
// // // import { useAuth } from "../context/AuthContext";

// // // const MessageBubble = ({ msg, isOwn }) => {
// // //   const [hover, setHover] = useState(false);
// // //   const { setMessages } = useChat();
// // //   const { user } = useAuth();

// // //   // Safe time formatting
// // //   let formattedTime = "";
// // //   try {
// // //     const date = new Date(msg.timestamp || msg.createdAt);
// // //     if (!isNaN(date.getTime())) {
// // //       formattedTime = date.toLocaleTimeString([], {
// // //         hour: "2-digit",
// // //         minute: "2-digit",
// // //       });
// // //     }
// // //   } catch {}

// // //   const handleUnsend = async () => {
// // //     try {
// // //       await api.delete(`/chat/message/${msg._id}`);
// // //       setMessages((prev) => prev.filter((m) => m._id !== msg._id));
// // //     } catch (err) {
// // //       console.error("Failed to unsend message:", err);
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       className={`flex mb-2 items-end ${isOwn ? "justify-end" : "justify-start"}`}
// // //       onMouseEnter={() => setHover(true)}
// // //       onMouseLeave={() => setHover(false)}
// // //     >
// // //       {!isOwn && (
// // //         <img
// // //           src={msg.senderImage || "/default-avatar.png"}
// // //           alt="user"
// // //           className="w-8 h-8 rounded-full mr-2"
// // //         />
// // //       )}

// // //       <div
// // //         className={`relative max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm ${
// // //           isOwn
// // //             ? "bg-blue-600 text-white rounded-br-none"
// // //             : "bg-gray-800 text-gray-100 rounded-bl-none"
// // //         }`}
// // //       >
// // //         <p>{msg.content}</p>
// // //         <p
// // //           className={`text-xs mt-1 text-right ${
// // //             isOwn ? "text-gray-200" : "text-gray-400"
// // //           }`}
// // //         >
// // //           {formattedTime}
// // //         </p>

// // //         {/* 🗑️ Unsend option */}
// // //         {isOwn && hover && (
// // //           <button
// // //             onClick={handleUnsend}
// // //             title="Unsend message"
// // //             className="absolute -top-3 -right-3 bg-gray-700 p-1 rounded-full hover:bg-red-600 transition"
// // //           >
// // //             <Trash2 size={14} className="text-white" />
// // //           </button>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MessageBubble;

// // // src/components/MessageBubble.jsx
// // import React, { useState } from "react";
// // import { Trash2 } from "lucide-react";
// // import api from "../utils/api";
// // import { useChat } from "../context/ChatContext";
// // import { useAuth } from "../context/AuthContext";

// // const MessageBubble = ({ msg, isOwn }) => {
// //   const [hover, setHover] = useState(false);
// //   const { setMessages } = useChat();
// //   const { user } = useAuth();

// //   // Safely format time
// //   let formattedTime = "";
// //   try {
// //     const date = new Date(msg.timestamp || msg.createdAt);
// //     if (!isNaN(date.getTime())) {
// //       formattedTime = date.toLocaleTimeString([], {
// //         hour: "2-digit",
// //         minute: "2-digit",
// //       });
// //     }
// //   } catch {}

// //   const handleUnsend = async () => {
// //     try {
// //       await api.delete(`/chat/message/${msg._id}`);
// //       setMessages((prev) => prev.filter((m) => m._id !== msg._id));
// //     } catch (err) {
// //       console.error("Failed to unsend message:", err);
// //     }
// //   };

// //   return (
// //     <div
// //       className={`flex mb-2 items-end ${isOwn ? "justify-end" : "justify-start"}`}
// //       onMouseEnter={() => setHover(true)}
// //       onMouseLeave={() => setHover(false)}
// //     >
// //       {!isOwn && (
// //         <img
// //           src={msg.senderImage || "/default-avatar.png"}
// //           alt="user"
// //           className="w-8 h-8 rounded-full mr-2"
// //         />
// //       )}

// //       <div
// //         className={`relative max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm ${
// //           isOwn
// //             ? "bg-blue-600 text-white rounded-br-none"
// //             : "bg-gray-800 text-gray-100 rounded-bl-none"
// //         }`}
// //       >
// //         <p>{msg.content}</p>
// //         <p
// //           className={`text-xs mt-1 text-right ${
// //             isOwn ? "text-gray-200" : "text-gray-400"
// //           }`}
// //         >
// //           {formattedTime}
// //         </p>

// //         {/* 🗑️ Unsend option */}
// //         {isOwn && hover && (
// //           <button
// //             onClick={handleUnsend}
// //             title="Unsend message"
// //             className="absolute -top-3 -right-3 bg-gray-700 p-1 rounded-full hover:bg-red-600 transition"
// //           >
// //             <Trash2 size={14} className="text-white" />
// //           </button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MessageBubble;

// // src/components/MessageBubble.jsx
// import React, { useState } from "react";
// import { Trash2 } from "lucide-react";
// import api from "../utils/api";
// import { useChat } from "../context/ChatContext";
// import { useAuth } from "../context/AuthContext";

// const MessageBubble = ({ msg, isOwn }) => {
//   const [hover, setHover] = useState(false);
//   const { setMessages } = useChat();
//   const { user } = useAuth();

//   // Format timestamp safely
//   let formattedTime = "";
//   try {
//     const date = new Date(msg.timestamp || msg.createdAt);
//     if (!isNaN(date.getTime())) {
//       formattedTime = date.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }
//   } catch {}

//   const handleUnsend = async () => {
//     try {
//       await api.delete(`/chat/${msg._id}`);
//       setMessages((prev) => prev.filter((m) => m._id !== msg._id));
//     } catch (err) {
//       console.error("Failed to unsend message:", err);
//       alert(err.response?.data?.error || "Unable to unsend message");
//     }
//   };

//   return (
//     <div
//       className={`flex mb-3 items-end ${
//         isOwn ? "justify-end" : "justify-start"
//       }`}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       {/* Partner avatar on the left */}
//       {!isOwn && (
//         <img
//           src={msg.senderImage || "/default-avatar.png"}
//           alt="user"
//           className="w-8 h-8 rounded-full mr-2"
//         />
//       )}

//       {/* Chat bubble */}
//       <div
//         className={`relative max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm break-words ${
//           isOwn
//             ? "bg-blue-500 text-white rounded-br-none"
//             : "bg-gray-800 text-gray-100 rounded-bl-none"
//         }`}
//       >
//         <p>{msg.content}</p>

//         <div className="flex items-center justify-end mt-1">
//           <p className={`text-xs ${isOwn ? "text-gray-200" : "text-gray-400"}`}>
//             {formattedTime}
//           </p>
//         </div>

//         {/* 🗑️ Unsend only visible for your messages */}
//         {isOwn && hover && (
//           <button
//             onClick={handleUnsend}
//             title="Unsend message"
//             className="absolute -top-3 -right-3 bg-gray-700 p-1 rounded-full hover:bg-red-600 transition"
//           >
//             <Trash2 size={14} className="text-white" />
//           </button>
//         )}
//       </div>

//       {/* Your avatar on the right */}
//       {isOwn && (
//         // <img
//         //   src={user?.image || "/default-avatar.png"}
//         //   alt="me"
//         //   className="w-8 h-8 rounded-full ml-2"
//         // />
//         <img
//           src={msg.senderImage || "/default-avatar.png"}
//           alt="user"
//           className="w-8 h-8 rounded-full mr-2"
//         />
//       )}
//     </div>
//   );
// };

// export default MessageBubble;

import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import api from "../utils/api";
import { useChat } from "../context/ChatContext";
import { useAuth } from "../context/AuthContext";

const MessageBubble = ({ msg, isOwn }) => {
  const [hover, setHover] = useState(false);
  const { setMessages } = useChat();
  const { user } = useAuth();

  let formattedTime = "";
  try {
    const date = new Date(msg.timestamp || msg.createdAt);
    if (!isNaN(date.getTime())) {
      formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  } catch {}

  const handleUnsend = async () => {
    try {
      await api.delete(`/chat/${msg._id}`);
      setMessages((prev) => prev.filter((m) => m._id !== msg._id));
    } catch (err) {
      console.error("Failed to unsend message:", err);
    }
  };

  return (
    <div
      className={`flex mb-3 items-end ${
        isOwn ? "justify-end" : "justify-start"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!isOwn && (
        <img
          src={msg.senderImage || "/default-avatar.png"}
          className="w-8 h-8 rounded-full mr-2"
        />
      )}

      <div
        className={`relative max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm ${
          isOwn
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-800 text-gray-100 rounded-bl-none"
        }`}
      >
        <p>{msg.content}</p>
        <p className="text-xs mt-1 text-right opacity-70">{formattedTime}</p>

        {isOwn && hover && (
          <button
            onClick={handleUnsend}
            className="absolute -top-3 -right-3 bg-gray-700 p-1 rounded-full hover:bg-red-600"
          >
            <Trash2 size={14} className="text-white" />
          </button>
        )}
      </div>

      {isOwn && (
        <img
          src={msg.senderImage || "/default-avatar.png"}
          className="w-8 h-8 rounded-full ml-2"
        />
      )}
    </div>
  );
};

export default MessageBubble;
