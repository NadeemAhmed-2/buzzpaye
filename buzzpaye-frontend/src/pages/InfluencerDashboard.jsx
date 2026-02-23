// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const InfluencerDashboard = () => {
// // //   const navigate = useNavigate();

// // //   // Load invitations from localStorage or empty
// // //   const [campaignInvitations, setCampaignInvitations] = useState(
// // //     JSON.parse(localStorage.getItem("campaignInvitations")) || []
// // //   );

// // //   // Load accepted campaigns or empty
// // //   const [acceptedCampaigns, setAcceptedCampaigns] = useState(
// // //     JSON.parse(localStorage.getItem("acceptedCampaigns")) || []
// // //   );

// // //   // Performance stats (default 0)
// // //   const [analytics, setAnalytics] = useState({
// // //     totalCampaigns: acceptedCampaigns.length || 0,
// // //     totalReach: 0,
// // //     totalEarnings: 0,
// // //     engagementRate: 0,
// // //   });

// // //   useEffect(() => {
// // //     localStorage.setItem(
// // //       "acceptedCampaigns",
// // //       JSON.stringify(acceptedCampaigns)
// // //     );
// // //   }, [acceptedCampaigns]);

// // //   // Handle accept/reject
// // //   const handleResponse = (id, action) => {
// // //     if (action === "accept") {
// // //       const accepted = campaignInvitations.find((c) => c.id === id);
// // //       setAcceptedCampaigns([...acceptedCampaigns, accepted]);
// // //     }
// // //     const updatedInvites = campaignInvitations.filter((c) => c.id !== id);
// // //     setCampaignInvitations(updatedInvites);
// // //     localStorage.setItem("campaignInvitations", JSON.stringify(updatedInvites));
// // //   };

// // //   return (
// // //     <div className="flex min-h-screen bg-grayCustom">
// // //       {/* Sidebar */}
// // //       {/* <div className="w-64 bg-white shadow-lg p-6">
// // //         <h2 className="text-2xl font-bold text-red-500 mb-6">
// // //           Influencer Dashboard
// // //         </h2>
// // //         <ul>
// // //           <li
// // //             className="mb-3 cursor-pointer hover:text-red-500"
// // //             onClick={() => navigate("/influencer-dashboard")}
// // //           >
// // //             Dashboard Home
// // //           </li>
// // //           <li
// // //             className="mb-3 cursor-pointer hover:text-red-500"
// // //             onClick={() => navigate("/influencer-profile")}
// // //           >
// // //             Profile
// // //           </li>
// // //         </ul>
// // //       </div> */}

// // //       {/* Main Content */}
// // //       <div className="flex-1 p-6">
// // //         <h1 className="text-3xl font-bold mb-6 text-primary">
// // //           Campaign Invitations
// // //         </h1>

// // //         {/* Campaign Invitations Section */}
// // //         {campaignInvitations.length === 0 ? (
// // //           <div className="bg-black p-6 rounded-xl shadow text-center">
// // //             <p className="text-gray-500 mb-2">
// // //               No campaign invitations available currently.
// // //             </p>
// // //           </div>
// // //         ) : (
// // //           <div className="grid md:grid-cols-2 gap-6 mb-8">
// // //             {campaignInvitations.map((campaign) => (
// // //               <div
// // //                 key={campaign.id}
// // //                 className="bg-black p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
// // //               >
// // //                 <h2 className="text-xl font-bold text-red-500 mb-2">
// // //                   {campaign.name}
// // //                 </h2>
// // //                 <p className="text-gray-700 mb-2">{campaign.brief}</p>
// // //                 <p className="text-gray-500 mb-2">
// // //                   Category: {campaign.category}
// // //                 </p>
// // //                 <div className="flex gap-3 mt-4">
// // //                   <button
// // //                     onClick={() => handleResponse(campaign.id, "accept")}
// // //                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
// // //                   >
// // //                     Accept
// // //                   </button>
// // //                   <button
// // //                     onClick={() => handleResponse(campaign.id, "reject")}
// // //                     className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
// // //                   >
// // //                     Reject
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {/* Performance Analytics */}
// // //         <h1 className="text-3xl font-bold mb-6 mt-10 text-primary">
// // //           Performance Analytics
// // //         </h1>
// // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
// // //           <div className="bg-black p-4 rounded-xl shadow text-center">
// // //             <p className="text-gray-500">Total Campaigns</p>
// // //             <p className="text-2xl font-bold text-primary">
// // //               {analytics.totalCampaigns}
// // //             </p>
// // //           </div>
// // //           <div className="bg-black p-4 rounded-xl shadow text-center">
// // //             <p className="text-gray-500">Completed Campaigns</p>
// // //             <p className="text-2xl font-bold text-blue-500">
// // //               {analytics.totalReach}
// // //             </p>
// // //           </div>
// // //           <div className="bg-black p-4 rounded-xl shadow text-center">
// // //             <p className="text-gray-500">Pending Campaigns to be done</p>
// // //             <p className="text-2xl font-bold text-green-500">
// // //               {analytics.totalEarnings}
// // //             </p>
// // //           </div>
// // //           <div className="bg-black p-4 rounded-xl shadow text-center">
// // //             <p className="text-gray-500">Engagement Rate</p>
// // //             <p className="text-2xl font-bold text-yellow-500">
// // //               {analytics.engagementRate}%
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Accepted Campaigns List */}
// // //         <div>
// // //           <h2 className="text-2xl font-bold text-primary mb-4">
// // //             Accepted Campaigns
// // //           </h2>
// // //           {acceptedCampaigns.length === 0 ? (
// // //             <p className="text-gray-500">No accepted campaigns yet.</p>
// // //           ) : (
// // //             <div className="grid md:grid-cols-2 gap-6">
// // //               {acceptedCampaigns.map((campaign, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="bg-black p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
// // //                 >
// // //                   <h3 className="text-lg font-bold text-primary">
// // //                     {campaign.name}
// // //                   </h3>
// // //                   <p className="text-gray-700">{campaign.brief}</p>
// // //                   <p className="text-gray-500">Category: {campaign.category}</p>
// // //                   <p className="text-gray-500">Status: Ongoing</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default InfluencerDashboard;

// // import React, { useState, useEffect } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import api from "../utils/api";

// // const InfluencerDashboard = () => {
// //   const { user: currentUser } = useAuth();
// //   const [invitations, setInvitations] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (!currentUser) return;

// //     const fetchInvitations = async () => {
// //       try {
// //         const res = await api.get(
// //           `/invitations/influencer/${currentUser._id}`
// //         );
// //         setInvitations(res.data);
// //       } catch (err) {
// //         console.error("Error fetching invitations:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchInvitations();
// //   }, [currentUser]);

// //   const handleResponse = async (inviteId, status) => {
// //     try {
// //       const res = await api.patch(`/invitations/${inviteId}`, { status });
// //       setInvitations((prev) =>
// //         prev.map((i) => (i._id === inviteId ? res.data : i))
// //       );
// //     } catch (err) {
// //       console.error("Error updating invitation status:", err);
// //     }
// //   };

// //   if (loading) return <p className="text-center mt-10">Loading...</p>;

// //   return (
// //     <div className="flex flex-col min-h-screen bg-grayCustom text-white p-6">
// //       <h1 className="text-3xl font-bold mb-6 text-primary">
// //         Campaign Invitations
// //       </h1>

// //       {invitations.length === 0 ? (
// //         <p className="text-gray-400">No campaign invitations available.</p>
// //       ) : (
// //         <div className="grid md:grid-cols-2 gap-6">
// //           {invitations.map((invite) => (
// //             <div
// //               key={invite._id}
// //               className="bg-secondary p-4 rounded-xl shadow hover:shadow-lg transition"
// //             >
// //               <h2 className="text-xl font-bold text-primary mb-2">
// //                 {invite.campaignId?.campaignName}
// //               </h2>
// //               <p className="text-gray-400 mb-2">
// //                 Brand: {invite.brandId?.name}
// //               </p>
// //               <p className="text-gray-400 mb-2">
// //                 Status:{" "}
// //                 <span
// //                   className={`font-bold ${
// //                     invite.status === "pending"
// //                       ? "text-yellow-400"
// //                       : invite.status === "accepted"
// //                       ? "text-green-400"
// //                       : "text-red-400"
// //                   }`}
// //                 >
// //                   {invite.status}
// //                 </span>
// //               </p>

// //               {invite.status === "pending" && (
// //                 <div className="flex gap-3 mt-3">
// //                   <button
// //                     onClick={() => handleResponse(invite._id, "accepted")}
// //                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
// //                   >
// //                     Accept
// //                   </button>
// //                   <button
// //                     onClick={() => handleResponse(invite._id, "declined")}
// //                     className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
// //                   >
// //                     Decline
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default InfluencerDashboard;

// // import React, { useState, useEffect } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import api from "../utils/api";

// // const InfluencerDashboard = () => {
// //   const { user: currentUser, loading: authLoading } = useAuth();
// //   const [invitations, setInvitations] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (authLoading || !currentUser) return;

// //     const fetchInvitations = async () => {
// //       try {
// //         const res = await api.get(`/invitations/influencer/${currentUser._id}`);
// //         setInvitations(res.data);
// //       } catch (err) {
// //         console.error("Error fetching influencer invitations:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchInvitations();
// //   }, [currentUser, authLoading]);

// //   const handleResponse = async (inviteId, status) => {
// //     try {
// //       const res = await api.patch(`/invitations/${inviteId}`, { status });
// //       setInvitations((prev) =>
// //         prev.map((i) => (i._id === inviteId ? res.data : i))
// //       );
// //     } catch (err) {
// //       console.error("Error updating invitation status:", err);
// //     }
// //   };

// //   if (authLoading || loading)
// //     return <p className="text-center mt-10 text-gray-400">Loading...</p>;

// //   return (
// //     <div className="flex flex-col min-h-screen bg-grayCustom text-white p-6">
// //       <h1 className="text-3xl font-bold mb-6 text-primary">
// //         Campaign Invitations
// //       </h1>

// //       {invitations.length === 0 ? (
// //         <p className="text-gray-400">No campaign invitations available.</p>
// //       ) : (
// //         <div className="grid md:grid-cols-2 gap-6">
// //           {invitations.map((invite) => (
// //             <div
// //               key={invite._id}
// //               className="bg-secondary p-4 rounded-xl shadow hover:shadow-lg transition"
// //             >
// //               <h2 className="text-xl font-bold text-primary mb-2">
// //                 {invite.campaignId?.campaignName || "No Campaign Name"}
// //               </h2>
// //               <p className="text-gray-400 mb-2">
// //                 Brand: {invite.brandId?.name || "Unknown Brand"}
// //               </p>
// //               <p className="text-gray-400 mb-2">
// //                 Status:{" "}
// //                 <span
// //                   className={`font-bold ${
// //                     invite.status === "pending"
// //                       ? "text-yellow-400"
// //                       : invite.status === "accepted"
// //                       ? "text-green-400"
// //                       : "text-red-400"
// //                   }`}
// //                 >
// //                   {invite.status}
// //                 </span>
// //               </p>

// //               {invite.status === "pending" && (
// //                 <div className="flex gap-3 mt-3">
// //                   <button
// //                     onClick={() => handleResponse(invite._id, "accepted")}
// //                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
// //                   >
// //                     Accept
// //                   </button>
// //                   <button
// //                     onClick={() => handleResponse(invite._id, "declined")}
// //                     className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
// //                   >
// //                     Decline
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default InfluencerDashboard;

// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import api from "../utils/api";

// const InfluencerDashboard = () => {
//   const { user: currentUser, loading: authLoading } = useAuth();
//   const [invitations, setInvitations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (authLoading || !currentUser) return;

//     console.log("Current logged-in user:", currentUser);

//     const fetchInvitations = async () => {
//       try {
//         setLoading(true);
//         const res = await api.get(`/invitations/influencer/${currentUser._id}`);
//         console.log("Fetched invitations:", res.data);
//         setInvitations(res.data);
//       } catch (err) {
//         console.error("Error fetching invitations:", err);
//         setError("Failed to load invitations. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInvitations();
//   }, [currentUser, authLoading]);

//   // Handle accept/decline
//   const handleResponse = async (inviteId, status) => {
//     try {
//       const res = await api.patch(`/invitations/${inviteId}`, { status });
//       // Update state with populated data from backend
//       setInvitations((prev) =>
//         prev.map((i) => (i._id === inviteId ? res.data : i))
//       );
//     } catch (err) {
//       console.error("Error updating invitation status:", err);
//       setError("Failed to update invitation status. Please try again.");
//     }
//   };

//   if (authLoading || loading)
//     return <p className="text-center mt-10 text-gray-400">Loading...</p>;

//   if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

//   return (
//     <div className="flex flex-col min-h-screen bg-grayCustom text-white p-6">
//       <h1 className="text-3xl font-bold mb-6 text-primary">
//         Campaign Invitations
//       </h1>

//       {invitations.length === 0 ? (
//         <p className="text-gray-400">No campaign invitations available.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 gap-6">
//           {invitations.map((invite) => (
//             <div
//               key={invite._id}
//               className="bg-secondary p-4 rounded-xl shadow hover:shadow-lg transition"
//             >
//               {/* <h2 className="text-xl font-bold text-primary mb-2">
//                 {invite.campaignId?.campaignName || "No Campaign Name"}
//               </h2> */}
//               <h2 className="text-xl font-bold text-primary mb-2">
//                 {invite.campaignId?.campaignName || "No Campaign Name"}
//               </h2>
//               <p className="text-gray-400 mb-2">
//                 Brand:{" "}
//                 {invite.campaignId?.createdBy?.name ||
//                   invite.brandId?.name ||
//                   "Unknown Brand"}
//               </p>

//               {/* <p className="text-gray-400 mb-2">
//                 Brand: {invite.brandId?.name || "Unknown Brand"}
//               </p> */}
//               <p className="text-gray-400 mb-2">
//                 Status:{" "}
//                 <span
//                   className={`font-bold ${
//                     invite.status === "pending"
//                       ? "text-yellow-400"
//                       : invite.status === "accepted"
//                       ? "text-green-400"
//                       : "text-red-400"
//                   }`}
//                 >
//                   {invite.status}
//                 </span>
//               </p>

//               {invite.status === "pending" && (
//                 <div className="flex gap-3 mt-3">
//                   <button
//                     onClick={() => handleResponse(invite._id, "accepted")}
//                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => handleResponse(invite._id, "declined")}
//                     className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
//                   >
//                     Decline
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InfluencerDashboard;

// import React, { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import api from "../utils/api";
// import CampaignDetailsModal from "../components/CampaignDetailsModal";

// const InfluencerDashboard = () => {
//   const { user: currentUser, loading: authLoading } = useAuth();
//   const [invitations, setInvitations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [selectedInvite, setSelectedInvite] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [ratings, setRatings] = useState([]);

// useEffect(() => {
//   if (!currentUser) return;

//   const fetchRatings = async () => {
//     try {
//       const res = await api.get(
//         `/ratings/influencer/${currentUser._id}`
//       );
//       setRatings(res.data);
//     } catch (err) {
//       console.error("Error fetching ratings:", err);
//     }
//   };

//   fetchRatings();
// }, [currentUser]);

//   useEffect(() => {
//     if (authLoading || !currentUser) return;

//     const fetchInvitations = async () => {
//       try {
//         setLoading(true);
//         const res = await api.get(`/invitations/influencer/${currentUser._id}`);
//         setInvitations(res.data);
//       } catch (err) {
//         console.error("Error fetching invitations:", err);
//         setError("Failed to load invitations. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInvitations();
//   }, [currentUser, authLoading]);

//   const openModal = (invite) => {
//     setSelectedInvite(invite);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedInvite(null);
//   };

//   const handleResponse = async (inviteId, status) => {
//     try {
//       const res = await api.patch(`/invitations/${inviteId}`, { status });

//       setInvitations((prev) =>
//         prev.map((i) => (i._id === inviteId ? res.data : i))
//       );

//       closeModal();
//     } catch (err) {
//       console.error("Error updating invitation status:", err);
//       setError("Failed to update invitation status.");
//     }
//   };

//   if (authLoading || loading)
//     return <p className="text-center mt-10 text-gray-400">Loading...</p>;

//   if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

//   return (
//     <div className="flex flex-col min-h-screen bg-grayCustom text-white p-6">
//       <h1 className="text-3xl font-bold mb-6 text-primary">
//         Campaign Invitations
//       </h1>

//       {invitations.length === 0 ? (
//         <p className="text-gray-400">No campaign invitations available.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 gap-6">
//           {invitations.map((invite) => (
//             <div
//               key={invite._id}
//               className="bg-secondary p-4 rounded-xl shadow hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-bold text-primary mb-2">
//                 {invite.campaignId?.campaignName || "No Campaign Name"}
//               </h2>

//               <p className="text-gray-400 mb-2">
//                 Brand:{" "}
//                 {invite.campaignId?.brandName ||
//                   invite.brandId?.name ||
//                   "Unknown Brand"}
//               </p>

//               <p className="text-gray-400 mb-2">
//                 Status:{" "}
//                 <span
//                   className={`font-bold ${
//                     invite.status === "pending"
//                       ? "text-yellow-400"
//                       : invite.status === "accepted"
//                       ? "text-green-400"
//                       : "text-red-400"
//                   }`}
//                 >
//                   {invite.status === "pending" ? "In Progress" : invite.status}
//                 </span>
//               </p>

//               <button
//                 onClick={() => openModal(invite)}
//                 className="mt-2 bg-primary hover:bg-lightRed text-white font-bold py-2 px-4 rounded-lg"
//               >
//                 View
//               </button>
//               {ratingData && (
//                 <div className="mb-6">
//                   <p className="text-lg">
//                     Average Rating:{" "}
//                     <span className="text-yellow-400 font-bold">
//                       {ratingData.average.toFixed(1)} ★
//                     </span>
//                     <span className="text-gray-400 ml-2">
//                       ({ratingData.count} reviews)
//                     </span>
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Modal */}
//       <CampaignDetailsModal
//         isOpen={modalOpen}
//         onClose={closeModal}
//         invite={selectedInvite}
//         onRespond={handleResponse}
//       />
//     </div>
//   );
// };

// export default InfluencerDashboard;

import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";
import CampaignDetailsModal from "../components/CampaignDetailsModal";

const InfluencerDashboard = () => {
  const { user: currentUser, loading: authLoading } = useAuth();
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedInvite, setSelectedInvite] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // ratings array
  const [ratings, setRatings] = useState([]);

  // Fetch ratings
  useEffect(() => {
    if (!currentUser) return;

    const fetchRatings = async () => {
      try {
        const res = await api.get(
          `/ratings/influencer/${currentUser._id}`
        );
        setRatings(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching ratings:", err);
        setRatings([]);
      }
    };

    fetchRatings();
  }, [currentUser]);

  // Fetch invitations
  useEffect(() => {
    if (authLoading || !currentUser) return;

    const fetchInvitations = async () => {
      try {
        setLoading(true);
        const res = await api.get(
          `/invitations/influencer/${currentUser._id}`
        );
        setInvitations(res.data);
      } catch (err) {
        console.error("Error fetching invitations:", err);
        setError("Failed to load invitations. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchInvitations();
  }, [currentUser, authLoading]);

  const openModal = (invite) => {
    setSelectedInvite(invite);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedInvite(null);
  };

  const handleResponse = async (inviteId, status) => {
    try {
      const res = await api.patch(`/invitations/${inviteId}`, {
        status,
      });

      setInvitations((prev) =>
        prev.map((i) => (i._id === inviteId ? res.data : i))
      );

      closeModal();
    } catch (err) {
      console.error("Error updating invitation status:", err);
      setError("Failed to update invitation status.");
    }
  };

  if (authLoading || loading)
    return <p className="text-center mt-10 text-gray-400">Loading...</p>;

  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="flex flex-col min-h-screen bg-grayCustom text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Campaign Invitations
      </h1>

      {invitations.length === 0 ? (
        <p className="text-gray-400">
          No campaign invitations available.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {invitations.map((invite) => {
            // safely extract IDs
            const inviteBrandId =
              invite.brandId?._id || invite.brandId;
            const inviteCampaignId =
              invite.campaignId?._id || invite.campaignId;

            // find matching rating
console.log("Invite:", invite.brandId, invite.campaignId);
console.log("Ratings:", ratings);


            const ratingObj = ratings.find((r) => {
              const ratingBrandId =
                r.brandId?._id || r.brandId;
              const ratingCampaignId =
                r.campaignId?._id || r.campaignId;

              return (
                String(ratingBrandId) ===
                  String(inviteBrandId) &&
                String(ratingCampaignId) ===
                  String(inviteCampaignId)
              );
            });

            const rating = ratingObj?.rating;

            return (
              <div
                key={invite._id}
                className="bg-secondary p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <h2 className="text-xl font-bold text-primary mb-2">
                  {invite.campaignId?.campaignName ||
                    "No Campaign Name"}
                </h2>

                <p className="text-gray-400 mb-2">
                  Brand:{" "}
                  {invite.campaignId?.brandName ||
                    invite.brandId?.name ||
                    "Unknown Brand"}
                </p>

                <p className="text-gray-400 mb-2">
                  Status:{" "}
                  <span
                    className={`font-bold ${
                      invite.status === "pending"
                        ? "text-yellow-400"
                        : invite.status === "accepted"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {invite.status === "pending"
                      ? "In Progress"
                      : invite.status}
                  </span>
                </p>

                {/* Rating display */}
                {invite.status === "accepted" && rating && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      Rating:
                    </p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-lg ${
                            star <= rating
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => openModal(invite)}
                  className="mt-3 bg-primary hover:bg-lightRed text-white font-bold py-2 px-4 rounded-lg"
                >
                  View
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      <CampaignDetailsModal
        isOpen={modalOpen}
        onClose={closeModal}
        invite={selectedInvite}
        onRespond={handleResponse}
      />
    </div>
  );
};

export default InfluencerDashboard;
