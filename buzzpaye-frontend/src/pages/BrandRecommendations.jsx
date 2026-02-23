// // import React, { useEffect, useState } from "react";
// // import api from "../utils/api";

// // const BrandRecommendations = () => {
// //   const [campaigns, setCampaigns] = useState([]);
// //   const [selectedCampaign, setSelectedCampaign] = useState("");
// //   const [influencers, setInfluencers] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   // fetch brand campaigns
// //   useEffect(() => {
// //     const fetchCampaigns = async () => {
// //       try {
// //         const res = await api.get("/campaigns/my-campaigns");
// //         setCampaigns(res.data);
// //       } catch (err) {
// //         console.error("Error fetching campaigns:", err);
// //       }
// //     };

// //     fetchCampaigns();
// //   }, []);

// //   const handleRecommend = async () => {
// //     if (!selectedCampaign) {
// //       alert("Please select a campaign");
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       const res = await api.get(
// //         `/recommendations/${selectedCampaign}/recommend`
// //       );
// //       setInfluencers(res.data);
// //     } catch (err) {
// //       console.error("Error fetching recommendations:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-grayCustom text-white p-6">
// //       <h1 className="text-3xl font-bold text-primary mb-6 text-center">
// //         Influencer Recommendations
// //       </h1>

// //       {/* Campaign Selector */}
// //       <div className="max-w-xl mx-auto bg-secondary p-6 rounded-xl">
// //         <label className="block mb-2 text-lg">
// //           Select Campaign
// //         </label>

// //         <select
// //           className="w-full p-3 rounded text-black"
// //           value={selectedCampaign}
// //           onChange={(e) => setSelectedCampaign(e.target.value)}
// //         >
// //           <option value="">-- Select Campaign --</option>
// //           {campaigns.map((c) => (
// //             <option key={c._id} value={c._id}>
// //               {c.campaignName}
// //             </option>
// //           ))}
// //         </select>

// //         <button
// //           onClick={handleRecommend}
// //           className="mt-4 w-full bg-primary py-3 rounded text-white font-semibold"
// //         >
// //           Get Recommendations
// //         </button>
// //       </div>

// //       {/* Results */}
// //       {loading && (
// //         <p className="text-center mt-6">Loading...</p>
// //       )}

// //       <div className="grid md:grid-cols-3 gap-6 mt-8">
// //         {influencers.map((inf) => (
// //           <div
// //             key={inf._id}
// //             className="bg-secondary p-5 rounded-xl text-center"
// //           >
// //             <img
// //               src={inf.images?.[0]}
// //               alt={inf.name}
// //               className="w-28 h-28 object-cover rounded-full mx-auto"
// //             />

// //             <h2 className="text-xl font-bold mt-3">
// //               {inf.name}
// //             </h2>

// //             <p className="text-gray-400">
// //               {inf.category}
// //             </p>

// //             <p className="text-lightRed font-semibold mt-2">
// //               Match: {(inf.score * 100).toFixed(1)}%
// //             </p>

// //             <a
// //               href={`/influencer/${inf._id}`}
// //               className="inline-block mt-3 px-4 py-2 bg-primary rounded"
// //             >
// //               View Profile
// //             </a>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BrandRecommendations;

// import React, { useEffect, useState } from "react";
// import api from "../utils/api";

// const BrandRecommendations = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [selectedCampaign, setSelectedCampaign] = useState("");
//   const [influencers, setInfluencers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searched, setSearched] = useState(false);

//   // fetch brand campaigns
//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const res = await api.get("/campaigns/my-campaigns");
//         setCampaigns(res.data);
//       } catch (err) {
//         console.error("Error fetching campaigns:", err);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const handleRecommend = async () => {
//     if (!selectedCampaign) {
//       alert("Please select a campaign");
//       return;
//     }

//     try {
//       setLoading(true);
//       setSearched(true);
//       const res = await api.get(
//         `/recommendations/${selectedCampaign}/recommend`,
//       );

//       // Only keep top 3 influencers
//       setInfluencers(res.data.slice(0, 3));
//     } catch (err) {
//       console.error("Error fetching recommendations:", err);
//       setInfluencers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-grayCustom text-white p-6">
//       <h1 className="text-3xl font-bold text-primary mb-6 text-center">
//         Influencer Recommendations
//       </h1>

//       {/* Campaign Selector */}
//       <div className="max-w-xl mx-auto bg-secondary p-6 rounded-xl">
//         <label className="block mb-2 text-lg">Select Campaign</label>

//         <select
//           className="w-full p-3 rounded text-black"
//           value={selectedCampaign}
//           onChange={(e) => setSelectedCampaign(e.target.value)}
//         >
//           <option value="">-- Select Campaign --</option>
//           {campaigns.map((c) => (
//             <option key={c._id} value={c._id}>
//               {c.campaignName}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={handleRecommend}
//           className="mt-4 w-full bg-primary py-3 rounded text-white font-semibold"
//         >
//           Get Recommendations
//         </button>
//       </div>

//       {/* Loading */}
//       {loading && <p className="text-center mt-6">Loading...</p>}

//       {/* Results Label */}
//       {searched && !loading && (
//         <h2 className="text-2xl text-center mt-10 font-semibold text-primary">
//           {influencers.length > 0
//             ? "Top influencers for you"
//             : "No recommended influencers"}
//         </h2>
//       )}

//       {/* Influencer Cards */}
//       {influencers.length > 0 && (
//         <div className="flex justify-center gap-8 mt-8 flex-wrap">
//           {influencers.map((inf) => (
//             <div
//               key={inf._id}
//               className="bg-secondary p-6 rounded-xl text-center w-64 shadow-md"
//             >
//               <img
//                 src={inf.images?.[0]}
//                 alt={inf.name}
//                 className="w-28 h-28 object-cover rounded-full mx-auto"
//               />

//               <h2 className="text-xl font-bold mt-3">{inf.name}</h2>

//               <p className="text-gray-400">{inf.category}</p>

//               <p className="text-lightRed font-semibold mt-2">
//                 Match: {(inf.score * 100).toFixed(1)}%
//               </p>

//               <a
//                 href={`/influencer/${inf._id}`}
//                 className="inline-block mt-3 px-4 py-2 bg-primary rounded"
//               >
//                 View Profile
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BrandRecommendations;

import React, { useEffect, useState } from "react";
import api from "../utils/api";

const BrandRecommendations = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // fetch brand campaigns
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await api.get("/campaigns/my-campaigns");
        setCampaigns(res.data);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
      }
    };

    fetchCampaigns();
  }, []);

  const handleRecommend = async () => {
    if (!selectedCampaign) {
      alert("Please select a campaign");
      return;
    }

    try {
      setLoading(true);
      setSearched(true);
      const res = await api.get(
        `/recommendations/${selectedCampaign}/recommend`,
      );

      // only top 3
      setInfluencers(res.data.slice(0, 3));
    } catch (err) {
      console.error("Error fetching recommendations:", err);
      setInfluencers([]);
    } finally {
      setLoading(false);
    }
  };
return (
  <div className="min-h-screen bg-grayCustom text-white flex flex-col items-center px-6 pt-6 pb-10">
    
    {/* Page Title */}
    <h1 className="text-2xl font-bold text-primary mb-4">
      Influencer Recommendations
    </h1>

    {/* Campaign Selector */}
    <div className="w-full max-w-lg bg-secondary p-4 rounded-xl mb-6">
      <label className="block mb-2 text-base">
        Select Campaign
      </label>

      <select
        className="w-full p-2 rounded text-black"
        value={selectedCampaign}
        onChange={(e) => setSelectedCampaign(e.target.value)}
      >
        <option value="">-- Select Campaign --</option>
        {campaigns.map((c) => (
          <option key={c._id} value={c._id}>
            {c.campaignName}
          </option>
        ))}
      </select>

      <button
        onClick={handleRecommend}
        className="mt-3 w-full bg-primary py-2 rounded text-white font-semibold"
      >
        Get Recommendations
      </button>
    </div>

    {/* Loading */}
    {loading && (
      <p className="text-center mb-4">Loading...</p>
    )}

    {/* Results Title */}
    {searched && !loading && (
      <h2 className="text-xl font-semibold text-primary mb-4">
        {influencers.length > 0
          ? "Top influencers for you"
          : "No recommended influencers"}
      </h2>
    )}

    {/* Influencer Cards */}
    {influencers.length > 0 && (
      <div className="flex justify-center gap-6 flex-wrap">
        {influencers.map((inf) => (
          <div
            key={inf._id}
            className="bg-secondary p-4 rounded-xl text-center w-56 shadow-md"
          >
            <img
              src={inf.images?.[0]}
              alt={inf.name}
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />

            <h2 className="text-lg font-bold mt-3">
              {inf.name}
            </h2>

            <p className="text-gray-400 text-sm">
              {inf.category}
            </p>

            <a
              href={`/influencer/${inf._id}`}
              className="inline-block mt-3 px-3 py-1.5 bg-primary rounded text-sm"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    )}
  </div>
);

};

export default BrandRecommendations;
