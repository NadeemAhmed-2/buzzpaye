// import React from "react";

// const InfluencerCard = ({ influencer }) => {
//   const { name, category, images, socialLinks, prices } = influencer;

//   const socialHandles = socialLinks
//     ? Object.keys(socialLinks).filter((key) => socialLinks[key])
//     : [];

//   return (
//     <div className="border-primary rounded-lg shadow p-4 flex flex-col items-center bg-black">
//       {/* Influencer Image */}
//       <img
//         src={images && images.length > 0 ? images[0] : "/default-profile.png"}
//         alt={name}
//         className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary"
//       />

//       {/* Name & Category */}
//       <h3 className="text-lg font-semibold">{name}</h3>
//       <p className="text-sm text-gray-500 mb-2">{category}</p>

//       {/* Pricing Types & Amounts */}
//       {prices?.length > 0 && (
//         <div className="flex flex-col gap-1 mb-4">
//           {prices.map((p, idx) => (
//             <span
//               key={idx}
//               className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
//             >
//               {p.type}: ₹{p.amount}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Actions */}
//       <button className="bg-lightRed text-white px-4 py-1 rounded hover:bg-primary transition">
//         Invite
//       </button>
//     </div>
//   );
// };

// export default InfluencerCard;



import React from "react";

const InfluencerCard = ({ influencer }) => {
  const { name, category, images, bio } = influencer;

  // Extract first 10 words from bio
  const getShortBio = (text) => {
    if (!text) return "";
    const words = text.trim().split(/\s+/);
    return words.length > 10
      ? words.slice(0, 10).join(" ") + "..."
      : words.join(" ");
  };

  const shortBio = getShortBio(bio);

  return (
    <div className="border-primary rounded-lg shadow p-4 flex flex-col items-center bg-black">
      {/* Influencer Image */}
      <img
        src={images && images.length > 0 ? images[0] : "/default-profile.png"}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary"
      />

      {/* Name & Category */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500 mb-1">{category}</p>

      {/* Short Bio (10 words max) */}
      <p className="text-xs text-gray-400 mb-4 text-center px-2 min-h-[36px]">
        {shortBio}
      </p>

      {/* View Detail Button */}
      <button className="bg-lightRed text-white px-4 py-1 rounded hover:bg-primary transition">
        View in Detail
      </button>
    </div>
  );
};

export default InfluencerCard;
