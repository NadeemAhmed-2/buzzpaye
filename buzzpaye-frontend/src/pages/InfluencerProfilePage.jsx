// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../utils/api";
// import { useAuth } from "../context/AuthContext";

// const InfluencerProfilePage = () => {
//   const { id } = useParams();
//   const { user: currentUser, loading: authLoading } = useAuth(); // logged-in brand
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [showInviteModal, setShowInviteModal] = useState(false);
//   const [brandCampaigns, setBrandCampaigns] = useState([]);
//   const [selectedCampaign, setSelectedCampaign] = useState("");
//   const [inviteLoading, setInviteLoading] = useState(false);

//   // Wait until AuthContext loads
//   if (authLoading)
//     return <p className="text-center mt-10 text-lightRed">Loading user...</p>;

//   // Fetch influencer profile
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await api.get(`/influencer/${id}`);
//         setProfile(res.data);
//       } catch (err) {
//         console.error("Failed to fetch influencer profile:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, [id]);

//   // Fetch brand campaigns when modal opens
//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       if (!currentUser) return;
//       try {
//         const res = await api.get("/campaigns/my-campaigns");
//         setBrandCampaigns(res.data);
//       } catch (err) {
//         console.error("Error fetching campaigns:", err);
//       }
//     };

//     if (showInviteModal) fetchCampaigns();
//   }, [showInviteModal, currentUser]);

//   // Send invite
//   const handleSendInvite = async () => {
//     if (!currentUser) return alert("You must be logged in to send an invite.");
//     if (!selectedCampaign) return alert("Please select a campaign");

//     try {
//       setInviteLoading(true);
//       // await api.post("/invitations/send", {
//       //   brandId: currentUser._id,
//       //   influencerId: id,
//       //   campaignId: selectedCampaign,
//       //   status: "pending",
//       // });
//       await api.post("/invitations/send", {
//         brandId: currentUser._id,
//         influencerId: profile.user, // ✅ use linked user ID, not profile ID
//         campaignId: selectedCampaign,
//         status: "pending",
//       });

//       alert("Invite sent successfully!");
//       setShowInviteModal(false);
//       setSelectedCampaign(""); // reset selection
//     } catch (err) {
//       console.error("Error sending invite:", err.response || err);
//       const msg =
//         err.response?.data?.message || "Failed to send invite. Try again.";
//       alert(msg);
//     } finally {
//       setInviteLoading(false);
//     }
//   };

//   if (loading)
//     return (
//       <p className="text-center mt-10 text-lightRed">Loading profile...</p>
//     );
//   if (!profile)
//     return (
//       <p className="text-center mt-10 text-lightRed">Profile not found.</p>
//     );

//   const socialMediaHandles = Object.entries(profile.socialLinks || {}).map(
//     ([platform, link]) => ({
//       platform: platform.charAt(0).toUpperCase() + platform.slice(1),
//       link,
//     })
//   );

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-grayCustom text-white px-6 py-10">
//       <div className="w-full max-w-5xl bg-secondary flex flex-col md:flex-row items-center md:items-start border border-primary rounded-2xl shadow-[0_0_15px_rgba(233,98,48,0.4)] overflow-hidden p-6 md:p-10 gap-10">
//         {/* Left: Image */}
//         <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
//           {profile.images?.[0] ? (
//             <img
//               src={profile.images[0]}
//               alt={profile.name}
//               className="w-64 h-64 rounded-2xl border-4 border-primary object-cover shadow-lg"
//             />
//           ) : (
//             <div className="flex items-center justify-center w-64 h-64 rounded-2xl border-2 border-primary text-gray-400 text-center">
//               No Image Uploaded
//             </div>
//           )}
//         </div>

//         {/* Right: Info */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center">
//           <h2 className="text-3xl font-extrabold text-primary text-center md:text-left mb-8">
//             Influencer Profile
//           </h2>

//           <div className="grid gap-5 text-white">
//             <div>
//               <p className="block mb-2 font-semibold text-lightRed">Name</p>
//               <p className="w-full p-3 rounded-lg border border-primary bg-secondary text-white">
//                 {profile.name || "Unnamed"}
//               </p>
//             </div>

//             <div>
//               <p className="block mb-2 font-semibold text-lightRed">Category</p>
//               <p className="w-full p-3 rounded-lg border border-primary bg-secondary text-white">
//                 {profile.category || "No category"}
//               </p>
//             </div>

//             {profile.bio && (
//               <div>
//                 <p className="block mb-2 font-semibold text-lightRed">Bio</p>
//                 <p className="w-full p-3 rounded-lg border border-primary bg-secondary text-white">
//                   {profile.bio}
//                 </p>
//               </div>
//             )}

//             <div>
//               <p className="block mb-2 font-semibold text-lightRed">
//                 Social Media Handles
//               </p>
//               {socialMediaHandles.map((handle, index) => (
//                 <p key={index} className="mt-2">
//                   <span className="font-semibold text-primary">
//                     {handle.platform}:
//                   </span>{" "}
//                   <a
//                     href={handle.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-lightRed underline hover:text-white transition"
//                   >
//                     Visit
//                   </a>
//                 </p>
//               ))}
//             </div>

//             {profile.prices?.length > 0 && (
//               <div>
//                 <p className="block mb-2 font-semibold text-lightRed">
//                   Pricing
//                 </p>
//                 {profile.prices.map((p, idx) => (
//                   <p key={idx} className="text-lightRed">
//                     <span className="font-semibold text-primary">
//                       {p.type}:
//                     </span>{" "}
//                     ₹{p.amount}
//                   </p>
//                 ))}
//               </div>
//             )}

//             {/* Invite Button */}
//             {currentUser && currentUser.role === "brand" && (
//               <button
//                 onClick={() => setShowInviteModal(true)}
//                 className="bg-lightRed text-white px-4 py-1 rounded hover:bg-primary transition"
//               >
//                 Invite
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Invite Modal */}
//       {showInviteModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-secondary p-6 rounded-lg w-96 text-white">
//             <h2 className="text-lg font-semibold mb-4">Select a Campaign</h2>
//             <select
//               value={selectedCampaign}
//               onChange={(e) => setSelectedCampaign(e.target.value)}
//               className="border p-2 w-full mb-4 bg-secondary text-white"
//             >
//               <option value="">-- Select Campaign --</option>
//               {brandCampaigns.length === 0 && (
//                 <option disabled>No campaigns found</option>
//               )}
//               {brandCampaigns.map((campaign) => (
//                 <option key={campaign._id} value={campaign._id}>
//                   {campaign.campaignName}
//                 </option>
//               ))}
//             </select>

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowInviteModal(false)}
//                 className="px-4 py-2 border rounded-md"
//                 disabled={inviteLoading}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSendInvite}
//                 className="px-4 py-2 bg-primary text-white rounded-md"
//                 disabled={inviteLoading}
//               >
//                 {inviteLoading ? "Sending..." : "Send Invite"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InfluencerProfilePage;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../utils/api";
// import { useAuth } from "../context/AuthContext";

// const InfluencerProfilePage = () => {
//   const { id } = useParams();
//   const { user: currentUser, loading: authLoading } = useAuth();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showInviteModal, setShowInviteModal] = useState(false);
//   const [brandCampaigns, setBrandCampaigns] = useState([]);
//   const [selectedCampaign, setSelectedCampaign] = useState("");
//   const [inviteLoading, setInviteLoading] = useState(false);
//   const [acceptedCampaigns, setAcceptedCampaigns] = useState([]);


//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await api.get(`/influencer/${id}`);
//         setProfile(res.data);
//       } catch (err) {
//         console.error("Failed to fetch influencer profile:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, [id]);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       if (!currentUser) return;
//       try {
//         const res = await api.get("/campaigns/my-campaigns");
//         setBrandCampaigns(res.data);
//       } catch (err) {
//         console.error("Error fetching campaigns:", err);
//       }
//     };
//     if (showInviteModal) fetchCampaigns();
//   }, [showInviteModal, currentUser]);

// useEffect(() => {
//   const fetchAcceptedCampaigns = async () => {
//     try {
//       const res = await api.get(`/invitations/accepted/${id}`);
//       setAcceptedCampaigns(res.data);
//     } catch (err) {
//       console.error("Error fetching accepted campaigns:", err);
//     }
//   };

//   fetchAcceptedCampaigns();
// }, [id]);


//   const handleSendInvite = async () => {
//     if (!currentUser) return alert("You must be logged in to send an invite.");
//     if (!selectedCampaign) return alert("Please select a campaign");

//     try {
//       setInviteLoading(true);
//       await api.post("/invitations/send", {
//         brandId: currentUser._id,
//         influencerId: profile.user,
//         campaignId: selectedCampaign,
//         status: "pending",
//       });

//       alert("Invite sent successfully!");
//       setShowInviteModal(false);
//       setSelectedCampaign("");
//     } catch (err) {
//       console.error("Error sending invite:", err.response || err);
//       const msg =
//         err.response?.data?.message || "Failed to send invite. Try again.";
//       alert(msg);
//     } finally {
//       setInviteLoading(false);
//     }
//   };

//   if (authLoading || loading)
//     return (
//       <p className="text-center mt-10 text-lightRed">Loading profile...</p>
//     );
//   if (!profile)
//     return (
//       <p className="text-center mt-10 text-lightRed">Profile not found.</p>
//     );

//   const socialMediaHandles = Object.entries(profile.socialLinks || {}).map(
//     ([platform, link]) => ({
//       platform: platform.charAt(0).toUpperCase() + platform.slice(1),
//       link,
//     })
//   );

//   return (
//     <div className="min-h-screen bg-grayCustom text-white px-4 py-8 flex flex-col items-center">
//       {/* --- Top Section: Image + Basic Info --- */}
//       <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-12 mb-10">
//         {/* Left: Image */}
//         <div className="w-full md:w-1/2 flex justify-center mt-4">
//           {profile.images?.[0] ? (
//             <img
//               src={profile.images[0]}
//               alt={profile.name}
//               className="w-80 h-80 rounded-2xl object-cover shadow-lg"
//             />
//           ) : (
//             <div className="flex items-center justify-center w-80 h-80 rounded-2xl border-2 border-primary text-gray-400">
//               No Image
//             </div>
//           )}
//         </div>

//         {/* Right: Info */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-6">
//           <h1 className="text-5xl font-bold text-primary mb-2">
//             {profile.name || "Unnamed"}
//           </h1>
//           <p className="text-2xl text-gray-400 mb-6">
//             {profile.category || "No category"}
//           </p>

//           <h3 className="text-sm uppercase tracking-wider text-lightRed mb-2">
//             About
//           </h3>
//           <p className="text-base leading-relaxed text-gray-200">
//             {profile.bio || "No bio available."}
//           </p>
//         </div>
//       </div>

//       {/* --- Bottom Section: Socials & Pricing --- */}
//       <div className="w-full max-w-5xl flex flex-col gap-8">
//         {/* Social Media Section */}
//         {socialMediaHandles.length > 0 && (
//           <div className="flex flex-wrap justify-around items-center mt-4 w-full">
//             <div className="flex items-center gap-10 flex-wrap justify-center">
//               <h3 className="text-2xl font-semibold text-white">
//                 Social Media
//               </h3>
//               <span className="text-white text-lg">|</span>
//               <div className="flex flex-wrap items-center gap-5 justify-center">
//                 {socialMediaHandles.map((handle, i) => (
//                   <a
//                     key={i}
//                     href={handle.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-lightRed hover:text-white underline text-lg transition"
//                   >
//                     {handle.platform}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Pricing Section */}
//         {profile.prices?.length > 0 && (
//           <div className="flex flex-col items-center">
//             <div className="flex items-center gap-8 flex-wrap justify-center">
//               <h3 className="text-2xl font-semibold text-white">Pricing</h3>
//               <span className="text-white text-lg">|</span>
//               <div className="flex flex-wrap justify-center gap-6">
//                 {profile.prices.map((p, idx) => (
//                   <div
//                     key={idx}
//                     className="bg-white text-black rounded-xl shadow-md px-10 py-2 w-16 h-20 flex flex-col items-center border border-primary"
//                   >
//                     <span className="font-bold text-lg">{p.type}</span>
//                     <span className="text-primary font-semibold text-xl mt-1">
//                       ₹{p.amount}
//                     </span>
//                     {p.description && (
//                       <span className="text-gray-600 text-sm mt-1 italic">
//                         {p.description}
//                       </span>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* --- Previous Works Section --- */}
// {acceptedCampaigns.length > 0 && (
//   <div className="w-full max-w-5xl mt-12">
//     <h2 className="text-3xl font-bold text-primary mb-6 text-center">
//       Previous Works
//     </h2>

//     <div className="grid md:grid-cols-2 gap-6">
//       {acceptedCampaigns.map((invite) => (
//         <div
//           key={invite._id}
//           className="bg-secondary p-5 rounded-xl shadow-md"
//         >
//           <h3 className="text-xl font-bold text-primary">
//             {invite.campaignId?.campaignName || "Unknown Campaign"}
//           </h3>

//           <p className="text-gray-400 mt-2">
//             Brand:{" "}
//             {invite.brandId?.name || "Unknown Brand"}
//           </p>

//           <p className="text-gray-400">
//             Type:{" "}
//             {invite.campaignId?.type || "N/A"}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// )}


//         {/* Invite Button */}
//         {currentUser && currentUser.role === "brand" && (
//           <div className="w-full flex justify-center mt-4">
//             <button
//               onClick={() => setShowInviteModal(true)}
//               style={{ width: "25%" }} // ✅ inline style ensures actual width applies
//               className="px-8 py-3 bg-lightRed text-white rounded-full hover:bg-primary transition font-semibold text-lg"
//             >
//               Invite
//             </button>
//           </div>
//         )}
//       </div>


      

//       {/* --- Invite Modal --- */}
//       {showInviteModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-secondary p-6 rounded-lg w-96 text-white">
//             <h2 className="text-lg font-semibold mb-4">Select a Campaign</h2>
//             <select
//               value={selectedCampaign}
//               onChange={(e) => setSelectedCampaign(e.target.value)}
//               className="border p-2 w-full mb-4 bg-secondary text-white rounded"
//             >
//               <option value="">-- Select Campaign --</option>
//               {brandCampaigns.length === 0 && (
//                 <option disabled>No campaigns found</option>
//               )}
//               {brandCampaigns.map((campaign) => (
//                 <option key={campaign._id} value={campaign._id}>
//                   {campaign.campaignName}
//                 </option>
//               ))}
//             </select>

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowInviteModal(false)}
//                 className="px-4 py-2 border rounded-md"
//                 disabled={inviteLoading}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSendInvite}
//                 className="px-4 py-2 bg-primary text-white rounded-md"
//                 disabled={inviteLoading}
//               >
//                 {inviteLoading ? "Sending..." : "Send Invite"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InfluencerProfilePage;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";

const InfluencerProfilePage = () => {
  const { id } = useParams();
  const { user: currentUser, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [brandCampaigns, setBrandCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [inviteLoading, setInviteLoading] = useState(false);
  const [acceptedCampaigns, setAcceptedCampaigns] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/influencer/${id}`);
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to fetch influencer profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [id]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (!currentUser) return;
      try {
        const res = await api.get("/campaigns/my-campaigns");
        setBrandCampaigns(res.data);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
      }
    };
    if (showInviteModal) fetchCampaigns();
  }, [showInviteModal, currentUser]);

  // ✅ Correct accepted campaigns fetch
  useEffect(() => {
    if (!profile?.user) return;

    const fetchAcceptedCampaigns = async () => {
      try {
        const res = await api.get(
          `/invitations/accepted/${profile.user}`
        );
        setAcceptedCampaigns(res.data);
      } catch (err) {
        console.error("Error fetching accepted campaigns:", err);
      }
    };

    fetchAcceptedCampaigns();
  }, [profile]);

  const handleSendInvite = async () => {
    if (!currentUser) return alert("You must be logged in to send an invite.");
    if (!selectedCampaign) return alert("Please select a campaign");

    try {
      setInviteLoading(true);
      await api.post("/invitations/send", {
        brandId: currentUser._id,
        influencerId: profile.user,
        campaignId: selectedCampaign,
        status: "pending",
      });

      alert("Invite sent successfully!");
      setShowInviteModal(false);
      setSelectedCampaign("");
    } catch (err) {
      console.error("Error sending invite:", err.response || err);
      const msg =
        err.response?.data?.message || "Failed to send invite. Try again.";
      alert(msg);
    } finally {
      setInviteLoading(false);
    }
  };

  if (authLoading || loading)
    return (
      <p className="text-center mt-10 text-lightRed">Loading profile...</p>
    );
  if (!profile)
    return (
      <p className="text-center mt-10 text-lightRed">Profile not found.</p>
    );

  const socialMediaHandles = Object.entries(profile.socialLinks || {}).map(
    ([platform, link]) => ({
      platform: platform.charAt(0).toUpperCase() + platform.slice(1),
      link,
    })
  );

  return (
    <div className="min-h-screen bg-grayCustom text-white px-4 py-8 flex flex-col items-center">
      {/* --- Top Section: Image + Basic Info --- */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-12 mb-10">
        <div className="w-full md:w-1/2 flex justify-center mt-4">
          {profile.images?.[0] ? (
            <img
              src={profile.images[0]}
              alt={profile.name}
              className="w-80 h-80 rounded-2xl object-cover shadow-lg"
            />
          ) : (
            <div className="flex items-center justify-center w-80 h-80 rounded-2xl border-2 border-primary text-gray-400">
              No Image
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-6">
          <h1 className="text-5xl font-bold text-primary mb-2">
            {profile.name || "Unnamed"}
          </h1>
          <p className="text-2xl text-gray-400 mb-6">
            {profile.category || "No category"}
          </p>

          <h3 className="text-sm uppercase tracking-wider text-lightRed mb-2">
            About
          </h3>
          <p className="text-base leading-relaxed text-gray-200">
            {profile.bio || "No bio available."}
          </p>
        </div>
      </div>

      {/* --- Bottom Section: Socials & Pricing --- */}
      <div className="w-full max-w-5xl flex flex-col gap-8">
        {/* Social Media Section */}
        {socialMediaHandles.length > 0 && (
          <div className="flex flex-wrap justify-around items-center mt-4 w-full">
            <div className="flex items-center gap-10 flex-wrap justify-center">
              <h3 className="text-2xl font-semibold text-white">
                Social Media
              </h3>
              <span className="text-white text-lg">|</span>
              <div className="flex flex-wrap items-center gap-5 justify-center">
                {socialMediaHandles.map((handle, i) => (
                  <a
                    key={i}
                    href={handle.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lightRed hover:text-white underline text-lg transition"
                  >
                    {handle.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pricing Section */}
        {profile.prices?.length > 0 && (
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-8 flex-wrap justify-center">
              <h3 className="text-2xl font-semibold text-white">Pricing</h3>
              <span className="text-white text-lg">|</span>
              <div className="flex flex-wrap justify-center gap-6">
                {profile.prices.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-white text-black rounded-xl shadow-md px-10 py-2 w-16 h-20 flex flex-col items-center border border-primary"
                  >
                    <span className="font-bold text-lg">{p.type}</span>
                    <span className="text-primary font-semibold text-xl mt-1">
                      ₹{p.amount}
                    </span>
                    {p.description && (
                      <span className="text-gray-600 text-sm mt-1 italic">
                        {p.description}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- Previous Works Section --- */}
        <div className="w-full max-w-5xl mt-12">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Previous Works
          </h2>

          {acceptedCampaigns.length === 0 ? (
            <p className="text-center text-gray-400">
              No previous campaigns yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {acceptedCampaigns.map((invite) => (
                <div
                  key={invite._id}
                  className="bg-secondary p-5 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-bold text-primary">
                    {invite.campaignId?.campaignName ||
                      "Unknown Campaign"}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Brand: {invite.campaignId?.brandName || "Unknown Brand"}
                  </p>

                  <p className="text-gray-400">
                    Type: {invite.campaignId?.category || "N/A"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Invite Button */}
        {currentUser && currentUser.role === "brand" && (
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={() => setShowInviteModal(true)}
              style={{ width: "25%" }}
              className="px-8 py-3 bg-lightRed text-white rounded-full hover:bg-primary transition font-semibold text-lg"
            >
              Invite
            </button>
          </div>
        )}
      </div>

      {/* --- Invite Modal --- */}
      {showInviteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-secondary p-6 rounded-lg w-96 text-white">
            <h2 className="text-lg font-semibold mb-4">
              Select a Campaign
            </h2>
            <select
              value={selectedCampaign}
              onChange={(e) => setSelectedCampaign(e.target.value)}
              className="border p-2 w-full mb-4 bg-secondary text-white rounded"
            >
              <option value="">-- Select Campaign --</option>
              {brandCampaigns.length === 0 && (
                <option disabled>No campaigns found</option>
              )}
              {brandCampaigns.map((campaign) => (
                <option key={campaign._id} value={campaign._id}>
                  {campaign.campaignName}
                </option>
              ))}
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowInviteModal(false)}
                className="px-4 py-2 border rounded-md"
                disabled={inviteLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleSendInvite}
                className="px-4 py-2 bg-primary text-white rounded-md"
                disabled={inviteLoading}
              >
                {inviteLoading ? "Sending..." : "Send Invite"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfluencerProfilePage;
