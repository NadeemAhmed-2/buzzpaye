// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const BrandDashboard = () => {
// // //   const navigate = useNavigate();

// // //   // Load campaigns from localStorage or initialize empty array
// // //   const [campaigns, setCampaigns] = useState(
// // //     JSON.parse(localStorage.getItem("campaigns")) || []
// // //   );

// // //   // Analytics counts
// // //   const totalCampaigns = campaigns.length;
// // //   const pendingCampaigns = campaigns.filter(
// // //     (c) => !c.acceptedInfluencers || c.acceptedInfluencers.length === 0
// // //   ).length;
// // //   const completedCampaigns = campaigns.filter(
// // //     (c) => c.status === "Completed"
// // //   ).length;

// // //   useEffect(() => {
// // //     localStorage.setItem("campaigns", JSON.stringify(campaigns));
// // //   }, [campaigns]);

// // //   return (
// // //     <div className="flex min-h-screen bg-grayCustom text-primary">
// // //       {/* Sidebar */}
// // //       {/* <div className="w-64 bg-white shadow-lg p-6">
// // //         <h2 className="text-2xl font-bold text-red-500 mb-6">Brand Dashboard</h2>
// // //         <ul>
// // //           <li
// // //             className="mb-3 cursor-pointer hover:text-red-500"
// // //             onClick={() => navigate("/dashboard")}
// // //           >
// // //             Dashboard Home
// // //           </li>
// // //           <li
// // //             className="mb-3 cursor-pointer hover:text-red-500"
// // //             onClick={() => navigate("/create-campaign")}
// // //           >
// // //             Create Campaign
// // //           </li>
// // //           <li
// // //             className="mb-3 cursor-pointer hover:text-red-500"
// // //             onClick={() => navigate("/profile")}
// // //           >
// // //             Profile
// // //           </li>
// // //         </ul>
// // //       </div> */}

// // //       {/* Main Content */}
// // //       <div className="flex-1 p-6">
// // //         <h1 className="text-3xl font-bold mb-6">Your Campaigns</h1>

// // //         {/* Analytics Summary */}
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
// // //           <div className="bg-black p-4 rounded-xl shadow text-center">
// // //             <p className="text-gray-500">Total Campaigns</p>
// // //             <p className="text-2xl font-bold text-primary">{totalCampaigns}</p>
// // //           </div>
// // //           <div className="bg-black p-4 rounded-xl shadow text-center">
// // //             <p className="text-gray-500">Pending Acceptance</p>
// // //             <p className="text-2xl font-bold text-yellow-500">
// // //               {pendingCampaigns}
// // //             </p>
// // //           </div>
// // //           <div className="bg-black p-4 rounded-xl shadow text-center">
// // //             <p className="text-gray-500">Completed</p>
// // //             <p className="text-2xl font-bold text-green-500">
// // //               {completedCampaigns}
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Campaign List */}
// // //         {campaigns.length === 0 ? (
// // //           <div className="bg-black p-6 rounded-xl shadow text-center">
// // //             <p className="text-gray-500 mb-4">No campaigns available.</p>
// // //             <button
// // //               onClick={() => navigate("/create-campaign")}
// // //               className="bg-primary hover:bg-lightRed text-white font-bold py-2 px-6 rounded-lg transition duration-300"
// // //             >
// // //               Create Campaign
// // //             </button>
// // //           </div>
// // //         ) : (
// // //           <div className="grid md:grid-cols-2 gap-6">
// // //             {campaigns.map((campaign, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="bg-black p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
// // //               >
// // //                 <h2 className="text-xl font-bold text-primary mb-2">
// // //                   {campaign.name}
// // //                 </h2>
// // //                 <p className="text-gray-700 mb-2">{campaign.brief}</p>
// // //                 <p className="text-gray-500 mb-2">
// // //                   Category: {campaign.category}
// // //                 </p>
// // //                 <p className="text-gray-500 mb-2">
// // //                   Status:{" "}
// // //                   <span
// // //                     className={`font-bold ${
// // //                       campaign.status === "Completed"
// // //                         ? "text-green-500"
// // //                         : !campaign.acceptedInfluencers?.length
// // //                         ? "text-yellow-500"
// // //                         : "text-blue-500"
// // //                     }`}
// // //                   >
// // //                     {campaign.status
// // //                       ? campaign.status
// // //                       : !campaign.acceptedInfluencers?.length
// // //                       ? "Pending"
// // //                       : "Accepted"}
// // //                   </span>
// // //                 </p>
// // //                 {campaign.acceptedInfluencers?.length > 0 && (
// // //                   <p className="text-gray-500">
// // //                     Accepted Influencers:{" "}
// // //                     {campaign.acceptedInfluencers.join(", ")}
// // //                   </p>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BrandDashboard;

// // // import React, { useEffect, useState } from "react";
// // // import api from "../utils/api";
// // // import { useAuth } from "../context/AuthContext";

// // // const BrandDashboard = () => {
// // //   const { user : currentUser } = useAuth();
// // //   const [invitations, setInvitations] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   // ✅ Fetch all invitations sent by brand
// // //   useEffect(() => {
// // //     if (!currentUser?._id) return;
// // //     const fetchInvitations = async () => {
// // //       try {
// // //         const res = await api.get(`/invitations/brand/${currentUser._id}`);
// // //         setInvitations(res.data);
// // //       } catch (err) {
// // //         console.error("Error fetching brand invitations:", err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchInvitations();
// // //   }, [currentUser]);

// // //   if (loading) return <p className="text-gray-500 p-6">Loading...</p>;

// // //   return (
// // //     <div className="min-h-screen bg-grayCustom p-6 text-primary">
// // //       <h1 className="text-3xl font-bold mb-6">Your Campaign Invitations</h1>

// // //       {invitations.length === 0 ? (
// // //         <div className="bg-black p-6 rounded-xl shadow text-center">
// // //           <p className="text-gray-500 mb-2">No invitations sent yet.</p>
// // //         </div>
// // //       ) : (
// // //         <div className="overflow-x-auto">
// // //           <table className="min-w-full bg-black rounded-xl overflow-hidden">
// // //             <thead>
// // //               <tr className="text-left text-gray-400 border-b border-gray-700">
// // //                 <th className="py-3 px-4">Campaign</th>
// // //                 <th className="py-3 px-4">Influencer</th>
// // //                 <th className="py-3 px-4">Status</th>
// // //                 <th className="py-3 px-4">Sent On</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {invitations.map((invite) => (
// // //                 <tr key={invite._id} className="border-b border-gray-800">
// // //                   <td className="py-3 px-4">
// // //                     {invite.campaignId?.campaignName}
// // //                   </td>
// // //                   <td className="py-3 px-4">{invite.influencerId?.name}</td>
// // //                   <td className="py-3 px-4 capitalize">
// // //                     <span
// // //                       className={`font-semibold ${
// // //                         invite.status === "accepted"
// // //                           ? "text-green-500"
// // //                           : invite.status === "declined"
// // //                           ? "text-red-500"
// // //                           : "text-yellow-500"
// // //                       }`}
// // //                     >
// // //                       {invite.status}
// // //                     </span>
// // //                   </td>
// // //                   <td className="py-3 px-4 text-gray-500">
// // //                     {new Date(invite.createdAt).toLocaleDateString()}
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default BrandDashboard;

// // import React, { useState, useEffect } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import api from "../utils/api";

// // const BrandDashboard = () => {
// //   const { user: currentUser } = useAuth();
// //   const [invitations, setInvitations] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (!currentUser) return;

// //     const fetchInvitations = async () => {
// //       try {
// //         const res = await api.get(`/invitations/brand/${currentUser._id}`);
// //         setInvitations(res.data);
// //       } catch (err) {
// //         console.error("Error fetching brand invitations:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchInvitations();
// //   }, [currentUser]);

// //   if (loading) return <p className="text-center mt-10">Loading...</p>;

// //   return (
// //     <div className="flex flex-col min-h-screen bg-grayCustom text-white p-6">
// //       <h1 className="text-3xl font-bold mb-6 text-primary">
// //         Your Sent Invitations
// //       </h1>

// //       {invitations.length === 0 ? (
// //         <p className="text-gray-400">No invitations sent yet.</p>
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
// //                 Sent To: {invite.influencerId?.name}
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
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default BrandDashboard;

// // import React, { useState, useEffect } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import api from "../utils/api";

// // const BrandDashboard = () => {
// //   const { user: currentUser, loading: authLoading } = useAuth();
// //   const [invitations, setInvitations] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (authLoading || !currentUser) return;

// //     const fetchInvitations = async () => {
// //       try {
// //         const res = await api.get(`/invitations/brand/${currentUser._id}`);
// //         setInvitations(res.data);
// //       } catch (err) {
// //         console.error("Error fetching brand invitations:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchInvitations();
// //   }, [currentUser, authLoading]);

// //   if (authLoading || loading)
// //     return <p className="text-center mt-10 text-gray-400">Loading...</p>;

// //   return (
// //     <div className="flex flex-col min-h-screen bg-grayCustom text-white p-6">
// //       <h1 className="text-3xl font-bold mb-6 text-primary">
// //         Your Sent Invitations
// //       </h1>

// //       {invitations.length === 0 ? (
// //         <p className="text-gray-400">No invitations sent yet.</p>
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
// //                 Sent To:{" "}
// //                 {invite.influencerId?.influencerProfile?.name ||
// //                   invite.influencerId?.name ||
// //                   "Unknown Influencer"}
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
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default BrandDashboard;



// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import api from "../utils/api";
// import RatingModal from "../components/RatingModal";

// const BrandDashboard = () => {
//   const { user: currentUser, loading: authLoading } = useAuth();
//   const [invitations, setInvitations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // rating states
//   const [ratings, setRatings] = useState({});
//   const [selectedInvite, setSelectedInvite] = useState(null);
//   const [showRatingModal, setShowRatingModal] = useState(false);

//   useEffect(() => {
//     if (authLoading || !currentUser) return;

//     const fetchInvitations = async () => {
//       try {
//         const res = await api.get(`/invitations/brand/${currentUser._id}`);
//         setInvitations(res.data);
//       } catch (err) {
//         console.error("Error fetching brand invitations:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInvitations();
//   }, [currentUser, authLoading]);

//   const openRatingModal = (invite) => {
//     setSelectedInvite(invite);
//     setShowRatingModal(true);
//   };

// const submitRating = async (rating) => {
//   if (!selectedInvite) return;

//   try {
//     await api.post("/ratings", {
//       brandId: currentUser._id,
//       influencerId: selectedInvite.influencerId._id,
//       campaignId: selectedInvite.campaignId._id,
//       rating,
//     });

//     setRatings((prev) => ({
//       ...prev,
//       [selectedInvite._id]: rating,
//     }));
//   } catch (err) {
//     console.error("Error saving rating:", err);
//   }
// };

//   if (authLoading || loading)
//     return <p className="text-center mt-10 text-gray-400">Loading...</p>;

//   return (
//     <div className="flex flex-col min-h-screen bg-grayCustom text-white p-6">
//       <h1 className="text-3xl font-bold mb-6 text-primary">
//         Your Sent Invitations
//       </h1>

//       {invitations.length === 0 ? (
//         <p className="text-gray-400">No invitations sent yet.</p>
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
//                 Sent To:{" "}
//                 {invite.influencerId?.influencerProfile?.name ||
//                   invite.influencerId?.name ||
//                   "Unknown Influencer"}
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
//                   {invite.status}
//                 </span>
//               </p>

//               {/* Rating section */}
//               {invite.status === "accepted" && (
//                 <div className="mt-3">
//                   <p className="text-sm text-gray-300 mb-1">Rating:</p>

//                   <div
//                     className="flex gap-1 cursor-pointer"
//                     onClick={() => openRatingModal(invite)}
//                   >
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <span
//                         key={star}
//                         className={`text-xl ${
//                           star <= (ratings[invite._id] || 0)
//                             ? "text-yellow-400"
//                             : "text-gray-500"
//                         }`}
//                       >
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Rating Modal */}
//       <RatingModal
//         isOpen={showRatingModal}
//         onClose={() => setShowRatingModal(false)}
//         onSubmit={submitRating}
//         influencerName={
//           selectedInvite?.influencerId?.name || "Influencer"
//         }
//       />
//     </div>
//   );
// };

// export default BrandDashboard;



import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";
import RatingModal from "../components/RatingModal";

const BrandDashboard = () => {
  const { user: currentUser, loading: authLoading } = useAuth();
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);

  // rating states
  const [ratings, setRatings] = useState({});
  const [selectedInvite, setSelectedInvite] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false);

  useEffect(() => {
    if (authLoading || !currentUser) return;

    const fetchData = async () => {
      try {
        // fetch invitations
        const res = await api.get(
          `/invitations/brand/${currentUser._id}`
        );
        setInvitations(res.data);

        // fetch ratings given by this brand
        const ratingRes = await api.get(
          `/ratings/brand/${currentUser._id}`
        );

        const ratingMap = {};
        ratingRes.data.forEach((r) => {
          const key =
            r.influencerId + "_" + r.campaignId;
          ratingMap[key] = r.rating;
        });

        setRatings(ratingMap);
      } catch (err) {
        console.error("Error fetching brand data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser, authLoading]);

  const openRatingModal = (invite) => {
    setSelectedInvite(invite);
    setShowRatingModal(true);
  };

  const submitRating = async (rating) => {
    if (!selectedInvite) return;

    try {
      await api.post("/ratings", {
        brandId: currentUser._id,
        influencerId: selectedInvite.influencerId._id,
        campaignId: selectedInvite.campaignId._id,
        rating,
      });

      const key =
        selectedInvite.influencerId._id +
        "_" +
        selectedInvite.campaignId._id;

      setRatings((prev) => ({
        ...prev,
        [key]: rating,
      }));
    } catch (err) {
      console.error("Error saving rating:", err);
    }
  };

  if (authLoading || loading)
    return <p className="text-center mt-10 text-gray-400">Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen bg-grayCustom text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Your Sent Invitations
      </h1>

      {invitations.length === 0 ? (
        <p className="text-gray-400">No invitations sent yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {invitations.map((invite) => {
            const ratingKey =
              invite.influencerId?._id +
              "_" +
              invite.campaignId?._id;

            const currentRating = ratings[ratingKey] || 0;

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
                  Sent To:{" "}
                  {invite.influencerId?.influencerProfile?.name ||
                    invite.influencerId?.name ||
                    "Unknown Influencer"}
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
                    {invite.status}
                  </span>
                </p>

                {/* Rating section */}
                {invite.status === "accepted" && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-300 mb-1">
                      Rating:
                    </p>

                    <div
                      className="flex gap-1 cursor-pointer"
                      onClick={() => openRatingModal(invite)}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-xl ${
                            star <= currentRating
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
              </div>
            );
          })}
        </div>
      )}

      {/* Rating Modal */}
      <RatingModal
        isOpen={showRatingModal}
        onClose={() => setShowRatingModal(false)}
        onSubmit={submitRating}
        influencerName={
          selectedInvite?.influencerId?.name || "Influencer"
        }
      />
    </div>
  );
};

export default BrandDashboard;
