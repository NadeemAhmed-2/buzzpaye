// // // import React, { useEffect, useState } from "react";
// // // import { useAuth } from "../context/AuthContext";
// // // import { useChat } from "../context/ChatContext";
// // // import api from "../utils/api";
// // // import ChatBox from "../components/ChatBox";

// // // const ChatPage = () => {
// // //   const { user } = useAuth();
// // //   const { currentChat, setCurrentChat } = useChat();
// // //   const [acceptedInvites, setAcceptedInvites] = useState([]);
// // //   const [partners, setPartners] = useState({}); // store partner data with images

// // //   // Fetch all accepted invitations
// // //   useEffect(() => {
// // //     const fetchAcceptedInvites = async () => {
// // //       if (!user?._id) return;
// // //       try {
// // //         const res = await api.get(`/invitations/accepted/${user._id}`);
// // //         setAcceptedInvites(res.data);
// // //       } catch (err) {
// // //         console.error("❌ Failed to load accepted invitations:", err);
// // //       }
// // //     };
// // //     fetchAcceptedInvites();
// // //   }, [user]);

// // //   // Fetch profile image for each partner (brand or influencer)
// // //   useEffect(() => {
// // //     const loadPartnerProfiles = async () => {
// // //       const data = {};

// // //       for (const invite of acceptedInvites) {
// // //         let partnerId, partnerName, partnerImage = "/default-avatar.png";

// // //         if (user.role === "brand") {
// // //           partnerId = invite.influencerId?._id || invite.influencerId;
// // //           partnerName = invite.influencerId?.name || "Influencer";

// // //           try {
// // //             const res = await api.get(`/profiles/influencer/byUser/${partnerId}`);
// // //             partnerImage = res.data?.images?.[0] || "/default-avatar.png";
// // //           } catch (e) {}
// // //         } else {
// // //           partnerId = invite.brandId?._id || invite.brandId;
// // //           partnerName = invite.brandId?.name || "Brand";

// // //           try {
// // //             const res = await api.get(`/profiles/brand/byUser/${partnerId}`);
// // //             partnerImage = res.data?.image || res.data?.images?.[0] || "/default-avatar.png";
// // //           } catch (e) {}
// // //         }

// // //         data[invite._id] = { partnerId, partnerName, partnerImage };
// // //       }

// // //       setPartners(data);
// // //     };

// // //     if (acceptedInvites.length > 0) loadPartnerProfiles();
// // //   }, [acceptedInvites, user.role]);

// // //   return (
// // //     <div className="flex h-screen bg-black text-gray-100">
// // //       {/* Sidebar */}
// // //       <div className="w-1/3 border-r border-gray-700 bg-gray-950 p-4 overflow-y-auto">
// // //         <h2 className="text-xl font-semibold mb-4">Chats</h2>

// // //         {acceptedInvites.length === 0 ? (
// // //           <p className="text-gray-500 text-sm">No accepted collaborations yet.</p>
// // //         ) : (
// // //           acceptedInvites.map((invite) => {
// // //             const partner = partners[invite._id];
// // //             if (!partner) return null;

// // //             return (
// // //               <div
// // //                 key={invite._id}
// // //                 className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
// // //                   currentChat?.partnerId === partner.partnerId
// // //                     ? "bg-grayCustom"
// // //                     : "hover:bg-grayCustom"
// // //                 }`}
// // //                 onClick={() =>
// // //                   setCurrentChat({
// // //                     partnerId: partner.partnerId,
// // //                     name: partner.partnerName,
// // //                     campaign: invite.campaignId?.campaignName || "Campaign",
// // //                     image: partner.partnerImage,
// // //                     invitationId: invite._id,
// // //                   })
// // //                 }
// // //               >
// // //                 <img
// // //                   src={partner.partnerImage}
// // //                   alt={partner.partnerName}
// // //                   className="w-10 h-10 rounded-full object-cover"
// // //                 />
// // //                 <div className="flex-1">
// // //                   <p className="font-medium">{partner.partnerName}</p>
// // //                   <p className="text-xs text-gray-400 truncate">
// // //                     {invite.campaignId?.campaignName || "Campaign"}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })
// // //         )}
// // //       </div>

// // //       {/* Right Chat Window */}
// // //       <div className="flex-1 flex flex-col overflow-hidden bg-black">
// // //         {currentChat ? (
// // //           <ChatBox />
// // //         ) : (
// // //           <div className="flex items-center justify-center h-full text-gray-500">
// // //             Select a chat to start messaging 💬
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ChatPage;

// // // import React, { useEffect, useState } from "react";
// // // import { useAuth } from "../context/AuthContext";
// // // import { useChat } from "../context/ChatContext";
// // // import api from "../utils/api";
// // // import ChatBox from "../components/ChatBox";

// // // const ChatPage = () => {
// // //   const { user } = useAuth();
// // //   const { currentChat, setCurrentChat } = useChat();
// // //   const [acceptedInvites, setAcceptedInvites] = useState([]);
// // //   const [partners, setPartners] = useState({}); // ONE CHAT PER PARTNER

// // //   // =============================
// // //   // 1. FETCH ACCEPTED INVITATIONS
// // //   // =============================
// // //   useEffect(() => {
// // //     const fetchAcceptedInvites = async () => {
// // //       if (!user?._id) return;
// // //       try {
// // //         const res = await api.get(`/invitations/accepted/${user._id}`);
// // //         setAcceptedInvites(res.data);
// // //       } catch (err) {
// // //         console.error("❌ Failed to load accepted invitations:", err);
// // //       }
// // //     };
// // //     fetchAcceptedInvites();
// // //   }, [user]);

// // //   // ======================================================
// // //   // 2. GROUP ALL INVITATIONS SO ONLY ONE CHAT PER PARTNER
// // //   // ======================================================

// // //   const uniqueChats = {};
// // //   acceptedInvites.forEach((invite) => {
// // //     const partnerId =
// // //       user.role === "brand"
// // //         ? invite.influencerId?._id || invite.influencerId
// // //         : invite.brandId?._id || invite.brandId;

// // //     if (!uniqueChats[partnerId]) {
// // //       uniqueChats[partnerId] = {
// // //         partnerId,
// // //         partnerName:
// // //           user.role === "brand"
// // //             ? invite.influencerId?.name
// // //             : invite.brandId?.name,
// // //         lastCampaignName: invite.campaignId?.campaignName,
// // //         lastInvite: invite,
// // //       };
// // //     }
// // //   });

// // //   // ==============================================
// // //   // 3. LOAD PARTNER PROFILE (ONCE PER PARTNER)
// // //   // ==============================================

// // //   useEffect(() => {
// // //     const loadPartners = async () => {
// // //       const result = {};

// // //       for (const partnerId in uniqueChats) {
// // //         let image = "/default-avatar.png";

// // //         try {
// // //           if (user.role === "brand") {
// // //             const res = await api.get(`/profiles/influencer/byUser/${partnerId}`);
// // //             image = res.data?.images?.[0] || "/default-avatar.png";
// // //           } else {
// // //             const res = await api.get(`/profiles/brand/byUser/${partnerId}`);
// // //             image =
// // //               res.data?.image || res.data?.images?.[0] || "/default-avatar.png";
// // //           }
// // //         } catch (e) {}

// // //         result[partnerId] = {
// // //           ...uniqueChats[partnerId],
// // //           partnerImage: image,
// // //         };
// // //       }

// // //       setPartners(result);
// // //     };

// // //     if (Object.keys(uniqueChats).length > 0) loadPartners();
// // //   }, [acceptedInvites]);

// // //   // =======================================
// // //   // 4. RENDER UI — LEFT CHAT LIST & CHATBOX
// // //   // =======================================

// // //   return (
// // //     <div className="flex h-screen bg-black text-gray-100">
// // //       {/* Sidebar */}
// // //       <div className="w-1/3 border-r border-gray-700 bg-gray-950 p-4 overflow-y-auto">
// // //         <h2 className="text-xl font-semibold mb-4">Chats</h2>

// // //         {Object.keys(partners).length === 0 ? (
// // //           <p className="text-gray-500 text-sm">No accepted collaborations yet.</p>
// // //         ) : (
// // //           Object.values(partners).map((chat) => (
// // //             <div
// // //               key={chat.partnerId}
// // //               className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
// // //                 currentChat?.partnerId === chat.partnerId
// // //                   ? "bg-grayCustom"
// // //                   : "hover:bg-grayCustom"
// // //               }`}
// // //               onClick={() =>
// // //                 setCurrentChat({
// // //                   partnerId: chat.partnerId,
// // //                   name: chat.partnerName,
// // //                   image: chat.partnerImage,
// // //                   campaign: chat.lastCampaignName || "Multiple Campaigns",
// // //                 })
// // //               }
// // //             >
// // //               <img
// // //                 src={chat.partnerImage}
// // //                 className="w-10 h-10 rounded-full object-cover"
// // //               />

// // //               <div className="flex-1">
// // //                 <p className="font-medium">{chat.partnerName}</p>

// // //                 <p className="text-xs text-gray-400 truncate">
// // //                   {chat.lastCampaignName || "Multiple Campaigns"}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           ))
// // //         )}
// // //       </div>

// // //       {/* Right Chat Window */}
// // //       <div className="flex-1 flex flex-col overflow-hidden bg-black">
// // //         {currentChat ? (
// // //           <ChatBox />
// // //         ) : (
// // //           <div className="flex items-center justify-center h-full text-gray-500">
// // //             Select a chat to start messaging 💬
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ChatPage;

// // import React, { useEffect, useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { useChat } from "../context/ChatContext";
// // import api from "../utils/api";
// // import ChatBox from "../components/ChatBox";

// // const ChatPage = () => {
// //   const { user } = useAuth();
// //   const { currentChat, setCurrentChat } = useChat();
// //   const [acceptedInvites, setAcceptedInvites] = useState([]);
// //   const [partners, setPartners] = useState({});

// //   // Fetch accepted invites
// //   useEffect(() => {
// //     const fetchAcceptedInvites = async () => {
// //       if (!user?._id) return;
// //       try {
// //         const res = await api.get(`/invitations/accepted/${user._id}`);
// //         setAcceptedInvites(res.data);
// //       } catch (err) {
// //         console.error("Failed to load accepted invitations:", err);
// //       }
// //     };
// //     fetchAcceptedInvites();
// //   }, [user]);

// //   // Group chats per partner
// //   const uniqueChats = {};
// //   acceptedInvites.forEach((invite) => {
// //     const partnerId =
// //       user.role === "brand"
// //         ? invite.influencerId?._id || invite.influencerId
// //         : invite.brandId?._id || invite.brandId;

// //     if (!uniqueChats[partnerId]) {
// //       uniqueChats[partnerId] = {
// //         partnerId,
// //         partnerName:
// //           user.role === "brand"
// //             ? invite.influencerId?.name
// //             : invite.brandId?.name,
// //         lastCampaignName: invite.campaignId?.campaignName,
// //       };
// //     }
// //   });

// //   // Load partner images
// //   useEffect(() => {
// //     const loadPartners = async () => {
// //       const result = {};

// //       for (const partnerId in uniqueChats) {
// //         let image = "/default-avatar.png";

// //         try {
// //           if (user.role === "brand") {
// //             const res = await api.get(
// //               `/profiles/influencer/byUser/${partnerId}`
// //             );
// //             image = res.data?.images?.[0] || "/default-avatar.png";
// //           } else {
// //             const res = await api.get(
// //               `/profiles/brand/byUser/${partnerId}`
// //             );
// //             image =
// //               res.data?.image ||
// //               res.data?.images?.[0] ||
// //               "/default-avatar.png";
// //           }
// //         } catch {}

// //         result[partnerId] = {
// //           ...uniqueChats[partnerId],
// //           partnerImage: image,
// //         };
// //       }

// //       setPartners(result);
// //     };

// //     if (Object.keys(uniqueChats).length > 0) loadPartners();
// //   }, [acceptedInvites]);

// //   return (
// //     <div className="flex h-[calc(100vh-70px)] bg-black text-gray-100 overflow-hidden">

// //       {/* Sidebar */}
// //       <div className="w-1/3 border-r border-gray-700 bg-gray-950 flex flex-col">
// //         <div className="p-4 border-b border-gray-700">
// //           <h2 className="text-xl font-semibold">Chats</h2>
// //         </div>

// //         <div className="flex-1 overflow-y-auto p-4">
// //           {Object.keys(partners).length === 0 ? (
// //             <p className="text-gray-500 text-sm">
// //               No accepted collaborations yet.
// //             </p>
// //           ) : (
// //             Object.values(partners).map((chat) => (
// //               <div
// //                 key={chat.partnerId}
// //                 className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
// //                   currentChat?.partnerId === chat.partnerId
// //                     ? "bg-grayCustom"
// //                     : "hover:bg-grayCustom"
// //                 }`}
// //                 onClick={() =>
// //                   setCurrentChat({
// //                     partnerId: chat.partnerId,
// //                     name: chat.partnerName,
// //                     image: chat.partnerImage,
// //                     campaign: chat.lastCampaignName || "Multiple Campaigns",
// //                   })
// //                 }
// //               >
// //                 <img
// //                   src={chat.partnerImage}
// //                   className="w-10 h-10 rounded-full object-cover"
// //                 />
// //                 <div className="flex-1">
// //                   <p className="font-medium">{chat.partnerName}</p>
// //                   <p className="text-xs text-gray-400 truncate">
// //                     {chat.lastCampaignName || "Multiple Campaigns"}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>

// //       {/* Chat area */}
// //       <div className="flex-1 flex flex-col">
// //         {currentChat ? (
// //           <ChatBox />
// //         ) : (
// //           <div className="flex items-center justify-center h-full text-gray-500">
// //             Select a chat to start messaging 💬
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChatPage;

import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useChat } from "../context/ChatContext";
import api from "../utils/api";
import ChatBox from "../components/ChatBox";

const ChatPage = () => {
  const { user } = useAuth();
  const { currentChat, setCurrentChat } = useChat();
  const [acceptedInvites, setAcceptedInvites] = useState([]);
  const [partners, setPartners] = useState({});

  useEffect(() => {
    const fetchAcceptedInvites = async () => {
      if (!user?._id) return;
      try {
        const res = await api.get(`/invitations/accepted/${user._id}`);
        setAcceptedInvites(res.data);
      } catch (err) {
        console.error("Failed to load accepted invitations:", err);
      }
    };
    fetchAcceptedInvites();
  }, [user]);

  const uniqueChats = {};
  acceptedInvites.forEach((invite) => {
    const partnerId =
      user.role === "brand"
        ? invite.influencerId?._id || invite.influencerId
        : invite.brandId?._id || invite.brandId;

    if (!uniqueChats[partnerId]) {
      uniqueChats[partnerId] = {
        partnerId,
        partnerName:
          user.role === "brand"
            ? invite.influencerId?.name
            : invite.brandId?.name,
        lastCampaignName: invite.campaignId?.campaignName,
      };
    }
  });

  useEffect(() => {
    const loadPartners = async () => {
      const result = {};

      for (const partnerId in uniqueChats) {
        let image = "/default-avatar.png";

        try {
          if (user.role === "brand") {
            const res = await api.get(
              `/profiles/influencer/byUser/${partnerId}`,
            );
            image = res.data?.images?.[0] || "/default-avatar.png";
          } else {
            const res = await api.get(`/profiles/brand/byUser/${partnerId}`);
            image =
              res.data?.image || res.data?.images?.[0] || "/default-avatar.png";
          }
        } catch {}

        result[partnerId] = {
          ...uniqueChats[partnerId],
          partnerImage: image,
        };
      }

      setPartners(result);
    };

    if (Object.keys(uniqueChats).length > 0) loadPartners();
  }, [acceptedInvites]);

  return (
    <div className="h-[calc(100vh-70px)] flex bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          {Object.values(partners).map((chat) => (
            <div
              key={chat.partnerId}
              className={`flex items-center gap-3 p-3 cursor-pointer ${
                currentChat?.partnerId === chat.partnerId
                  ? "bg-grayCustom"
                  : "hover:bg-grayCustom"
              }`}
              onClick={() =>
                setCurrentChat({
                  partnerId: chat.partnerId,
                  name: chat.partnerName,
                  image: chat.partnerImage,
                  campaign: chat.lastCampaignName || "Multiple Campaigns",
                })
              }
            >
              <img
                src={chat.partnerImage}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{chat.partnerName}</p>
                <p className="text-xs text-gray-400">{chat.lastCampaignName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 h-full">
        {currentChat ? (
          <ChatBox />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;




// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useChat } from "../context/ChatContext";
// import api from "../utils/api";
// import ChatBox from "../components/ChatBox";

// const ChatPage = () => {
//   const { user } = useAuth();
//   const { currentChat, setCurrentChat } = useChat();
//   const [acceptedInvites, setAcceptedInvites] = useState([]);
//   const [partners, setPartners] = useState({});

//   useEffect(() => {
//     const fetchAcceptedInvites = async () => {
//       if (!user?._id) return;
//       try {
//         const res = await api.get(`/invitations/accepted/${user._id}`);
//         setAcceptedInvites(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchAcceptedInvites();
//   }, [user]);

//   const uniqueChats = {};
//   acceptedInvites.forEach((invite) => {
//     const partnerId =
//       user.role === "brand"
//         ? invite.influencerId?._id || invite.influencerId
//         : invite.brandId?._id || invite.brandId;

//     if (!uniqueChats[partnerId]) {
//       uniqueChats[partnerId] = {
//         partnerId,
//         partnerName:
//           user.role === "brand"
//             ? invite.influencerId?.name
//             : invite.brandId?.name,
//         lastCampaignName: invite.campaignId?.campaignName,
//       };
//     }
//   });

//   useEffect(() => {
//     const loadPartners = async () => {
//       const result = {};

//       for (const partnerId in uniqueChats) {
//         let image = "/default-avatar.png";

//         try {
//           if (user.role === "brand") {
//             const res = await api.get(
//               `/profiles/influencer/byUser/${partnerId}`
//             );
//             image = res.data?.images?.[0] || "/default-avatar.png";
//           } else {
//             const res = await api.get(
//               `/profiles/brand/byUser/${partnerId}`
//             );
//             image =
//               res.data?.image ||
//               res.data?.images?.[0] ||
//               "/default-avatar.png";
//           }
//         } catch {}

//         result[partnerId] = {
//           ...uniqueChats[partnerId],
//           partnerImage: image,
//         };
//       }

//       setPartners(result);
//     };

//     if (Object.keys(uniqueChats).length > 0) loadPartners();
//   }, [acceptedInvites]);

//   return (
//     <div className="h-[calc(100vh-140px)] flex bg-black overflow-hidden">
      
//       {/* Sidebar */}
//       <div className="w-80 border-r border-gray-800 flex flex-col">
//         <div className="p-4 border-b border-gray-800">
//           <h2 className="text-xl font-semibold">Chats</h2>
//         </div>

//         <div className="flex-1 overflow-y-auto">
//           {Object.values(partners).map((chat) => (
//             <div
//               key={chat.partnerId}
//               className={`flex items-center gap-3 p-3 cursor-pointer ${
//                 currentChat?.partnerId === chat.partnerId
//                   ? "bg-grayCustom"
//                   : "hover:bg-grayCustom"
//               }`}
//               onClick={() =>
//                 setCurrentChat({
//                   partnerId: chat.partnerId,
//                   name: chat.partnerName,
//                   image: chat.partnerImage,
//                   campaign: chat.lastCampaignName || "Multiple Campaigns",
//                 })
//               }
//             >
//               <img
//                 src={chat.partnerImage}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="font-medium">{chat.partnerName}</p>
//                 <p className="text-xs text-gray-400">
//                   {chat.lastCampaignName}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1">
//         {currentChat ? (
//           <ChatBox />
//         ) : (
//           <div className="flex items-center justify-center h-full text-gray-500">
//             Select a chat
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatPage;
