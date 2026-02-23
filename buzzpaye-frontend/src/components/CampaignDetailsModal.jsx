// import React from "react";

// const CampaignDetailsModal = ({ isOpen, onClose, invite, onRespond }) => {
//   if (!isOpen || !invite) return null;

//   const campaign = invite?.campaignId || {};
//   console.log("Modal campaign data:", campaign);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//       <div className="bg-grayCustom text-white p-6 rounded-xl w-[90%] max-w-md shadow-lg">
//         <h2 className="text-2xl font-bold text-primary mb-4">
//           {campaign.campaignName}
//         </h2>

//         <div className="space-y-2 text-gray-300">
//           <p>
//             <span className="text-primary font-semibold">Brand:</span>{" "}
//             {campaign.brandName || "N/A"}
//           </p>
//           <p>
//             <span className="text-primary font-semibold">Location:</span>{" "}
//             {campaign.location || "N/A"}
//           </p>
//           <p>
//             <span className="text-primary font-semibold">Objective:</span>{" "}
//             {campaign.objective || "N/A"}
//           </p>
//           <p>
//             <span className="text-primary font-semibold">Category:</span>{" "}
//             {campaign.category || "N/A"}
//           </p>
//           <p>
//             <span className="text-primary font-semibold">Type:</span>{" "}
//             {campaign.type || "N/A"}
//           </p>
//         </div>

//         {invite.status === "pending" && (
//           <div className="flex gap-3 mt-6">
//             <button
//               onClick={() => onRespond(invite._id, "accepted")}
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
//             >
//               Accept
//             </button>
//             <button
//               onClick={() => onRespond(invite._id, "declined")}
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
//             >
//               Reject
//             </button>
//           </div>
//         )}

//         <button
//           onClick={onClose}
//           className="mt-4 text-sm text-gray-400 hover:text-white"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CampaignDetailsModal;



import React from "react";

const CampaignDetailsModal = ({
  isOpen,
  onClose,
  invite,
  onRespond,
}) => {
  if (!isOpen || !invite) return null;

  const campaign = invite?.campaignId || {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-end z-50">
      <div className="bg-grayCustom text-white p-6 w-[90%] max-w-md h-full shadow-lg rounded-l-2xl">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {campaign.campaignName}
        </h2>

        <div className="space-y-2 text-gray-300">
          <p>
            <span className="text-primary font-semibold">Brand:</span>{" "}
            {campaign.brandName || "N/A"}
          </p>
          <p>
            <span className="text-primary font-semibold">Location:</span>{" "}
            {campaign.location || "N/A"}
          </p>
          <p>
            <span className="text-primary font-semibold">Objective:</span>{" "}
            {campaign.objective || "N/A"}
          </p>
          <p>
            <span className="text-primary font-semibold">Category:</span>{" "}
            {campaign.category || "N/A"}
          </p>
          <p>
            <span className="text-primary font-semibold">Type:</span>{" "}
            {campaign.type || "N/A"}
          </p>
        </div>

        {invite.status === "pending" && (
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => onRespond(invite._id, "accepted")}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Accept
            </button>
            <button
              onClick={() => onRespond(invite._id, "declined")}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Reject
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-6 text-sm text-gray-400 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CampaignDetailsModal;
