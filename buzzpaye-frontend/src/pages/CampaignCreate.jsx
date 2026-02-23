// // import React, { useState } from "react";
// // import CampaignForm from "../components/CampaignForm";

// // const CampaignCreate = () => {
// //   const [showForm, setShowForm] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
// //       <h1 className="text-3xl font-bold text-primary mb-6">Brand Campaigns</h1>

// //       <button
// //         onClick={() => setShowForm(true)}
// //         className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition"
// //       >
// //         + Create Campaign
// //       </button>

// //       {showForm && <CampaignForm onClose={() => setShowForm(false)} />}
// //     </div>
// //   );
// // };

// // export default CampaignCreate;

// import React, { useState } from "react";
// import CampaignForm from "../components/CampaignForm";

// const CampaignCreate = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
//       <h1 className="text-3xl font-bold text-primary mb-6">Brand Campaigns</h1>

//       <button
//         onClick={() => setShowForm(true)}
//         className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition"
//       >
//         + Create Campaign
//       </button>

//       {showForm && <CampaignForm onClose={() => setShowForm(false)} />}
//     </div>
//   );
// };

// export default CampaignCreate;

import React, { useState, useEffect } from "react";
import CampaignForm from "../components/CampaignForm";
import api from "../utils/api"; // axios instance with baseURL & token handling

const CampaignCreate = () => {
  const [showForm, setShowForm] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [editingCampaign, setEditingCampaign] = useState(null);

  // Fetch brand campaigns
  const fetchCampaigns = async () => {
    try {
      const res = await api.get("/campaigns/my-campaigns");
      setCampaigns(res.data);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  // Delete a campaign
  const handleDelete = async (id) => {
    try {
      await api.delete(`/campaigns/${id}`); // backend should handle deletion
      setCampaigns(campaigns.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Error deleting campaign:", error);
    }
  };

  // Edit a campaign
  const handleEdit = (campaign) => {
    setEditingCampaign(campaign);
    setShowForm(true);
  };

  // When form closes, refresh campaigns and reset editing
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingCampaign(null);
    fetchCampaigns();
  };

  return (
    <div className="min-h-screen bg-grayCustom flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">Brand Campaigns</h1>

      <button
        onClick={() => setShowForm(true)}
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition mb-6"
      >
        + Create Campaign
      </button>

      {showForm && (
        <CampaignForm
          onClose={handleCloseForm}
          editingCampaign={editingCampaign} // pass editing campaign if any
        />
      )}

      <div className="w-full max-w-4xl mt-6">
        {campaigns.length === 0 ? (
          <p className="text-gray-400">No campaigns yet.</p>
        ) : (
          campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="flex justify-between items-center bg-black p-4 mb-4 rounded-lg"
            >
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {campaign.campaignName} - {campaign.category}
                </h2>

                <p className="text-gray-400">{campaign.objective}</p>
                <p className="text-gray-500 text-sm">
                  Type: {campaign.type} | Location: {campaign.location}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(campaign)}
                  className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(campaign._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CampaignCreate;
