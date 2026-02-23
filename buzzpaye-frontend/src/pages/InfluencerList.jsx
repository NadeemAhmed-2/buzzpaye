// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../utils/api";
// import InfluencerCard from "../components/InfluencerCard";

// const InfluencerList = () => {
//   const [influencers, setInfluencers] = useState([]);
//   const [filteredInfluencers, setFilteredInfluencers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchInfluencers = async () => {
//       try {
//         const res = await api.get("/influencer/all");
//         setInfluencers(res.data);
//         setFilteredInfluencers(res.data);
//       } catch (err) {
//         console.error("Failed to fetch influencers:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInfluencers();
//   }, []);

//   // ✅ Filter influencers — matches if ANY word in name/category starts with search term
//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase().trim();
//     setSearchTerm(term);

//     if (!term) {
//       setFilteredInfluencers(influencers);
//       return;
//     }

//     const filtered = influencers.filter((influencer) => {
//       const name = influencer.name?.toLowerCase() || "";
//       const category = influencer.category?.toLowerCase() || "";

//       // split words by spaces and check if any starts with the term
//       const nameWords = name.split(/\s+/);
//       const categoryWords = category.split(/\s+/);

//       const nameMatch = nameWords.some((word) => word.startsWith(term));
//       const categoryMatch = categoryWords.some((word) => word.startsWith(term));

//       return nameMatch || categoryMatch;
//     });

//     setFilteredInfluencers(filtered);
//   };

//   const handleCardClick = (id) => {
//     navigate(`/influencer/${id}`);
//   };

//   return (
//     // <div className="min-h-screen p-6 bg-grayCustom text-white">
//     //   {/* 🔍 Search Bar */}
//     //   <div className="mb-6 w-full max-w-xl mx-auto">
//     //     <input
//     //       type="text"
//     //       value={searchTerm}
//     //       onChange={handleSearch}
//     //       placeholder="Search influencers by name or category..."
//     //       className="w-full p-3 rounded-lg border border-primary bg-secondary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
//     //     />
//     //   </div>

//     //   {/* Influencer Cards */}
//     //   {loading ? (
//     //     <p className="text-center text-lightRed">Loading influencers...</p>
//     //   ) : filteredInfluencers.length === 0 ? (
//     //     <p className="text-center text-lightRed">No influencers found.</p>
//     //   ) : (
//     //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//     //       {filteredInfluencers.map((influencer) => (
//     //         <div
//     //           key={influencer._id}
//     //           onClick={() => handleCardClick(influencer._id)}
//     //           className="cursor-pointer hover:scale-105 transition transform"
//     //         >
//     //           <InfluencerCard influencer={influencer} />
//     //         </div>
//     //       ))}
//     //     </div>
//     //   )}
//     // </div>
//     <div className="min-h-screen p-10 bg-grayCustom text-white">
//       {/* Search Bar Section */}
//       <div className="mb-8 w-full max-w-2xl mx-auto bg-[#1b1b1b] p-5 rounded-xl shadow-md">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Search influencers by name or category..."
//           className="w-full p-3 rounded-lg bg-[#2a2a2a] border border-gray-600 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
//         />
//       </div>

//       {/* Influencer Cards Grid */}
//       {loading ? (
//         <p className="text-center text-lightRed">Loading influencers...</p>
//       ) : filteredInfluencers.length === 0 ? (
//         <p className="text-center text-lightRed">No influencers found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredInfluencers.map((influencer) => (
//             <div
//               key={influencer._id}
//               onClick={() => handleCardClick(influencer._id)}
//               className="cursor-pointer hover:scale-105 transition transform"
//             >
//               <InfluencerCard influencer={influencer} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InfluencerList;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../utils/api";
// import InfluencerCard from "../components/InfluencerCard";

// const categories = [
//   "All",
//   "Entertainment",
//   "Food & Beverages",
//   "Fashion & Lifestyle",
//   "Shopping & Retail",
//   "Travel & Tourism",
// ];

// const InfluencerList = () => {
//   const [influencers, setInfluencers] = useState([]);
//   const [filteredInfluencers, setFilteredInfluencers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchInfluencers = async () => {
//       try {
//         const res = await api.get("/influencer/all");
//         setInfluencers(res.data);
//         setFilteredInfluencers(res.data);
//       } catch (err) {
//         console.error("Failed to fetch influencers:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchInfluencers();
//   }, []);

//   // ✅ Filter influencers whenever searchTerm or selectedCategory changes
//   useEffect(() => {
//     let filtered = influencers;

//     if (selectedCategory !== "All") {
//       filtered = filtered.filter(
//         (inf) => inf.category?.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }

//     if (searchTerm.trim()) {
//       const term = searchTerm.toLowerCase().trim();

//       filtered = filtered.filter((inf) => {
//         const name = inf.name?.toLowerCase() || "";
//         const category = inf.category?.toLowerCase() || "";

//         const nameWords = name.split(/\s+/);
//         const categoryWords = category.split(/\s+/);

//         const nameMatch = nameWords.some((word) => word.startsWith(term));
//         const categoryMatch = categoryWords.some((word) =>
//           word.startsWith(term)
//         );

//         return nameMatch || categoryMatch;
//       });
//     }

//     setFilteredInfluencers(filtered);
//   }, [searchTerm, selectedCategory, influencers]);

//   const handleCardClick = (id) => {
//     navigate(`/influencer/${id}`);
//   };

//   return (
//     <div className="min-h-screen bg-[#0d0d0d] text-white px-10 py-8">
//       {/* ===== Header Section ===== */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 border-b border-gray-700 pb-4">
//         {/* Category Tabs */}
//         <div className="flex flex-wrap gap-6 text-sm font-semibold mb-4 md:mb-0">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`pb-2 transition ${
//                 selectedCategory === cat
//                   ? "text-orange-400 border-b-2 border-orange-400"
//                   : "text-gray-400 hover:text-orange-300"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Search Box */}
//         <div className="w-full md:w-1/3">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search influencers..."
//             className="w-full px-4 py-2 bg-[#1b1b1b] border border-gray-700 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
//           />
//         </div>
//       </div>

//       {/* ===== Influencer Cards Section ===== */}
//       {loading ? (
//         <p className="text-center text-orange-400 mt-10">
//           Loading influencers...
//         </p>
//       ) : filteredInfluencers.length === 0 ? (
//         <p className="text-center text-gray-400 mt-10">No influencers found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredInfluencers.map((influencer) => (
//             <div
//               key={influencer._id}
//               onClick={() => handleCardClick(influencer._id)}
//               className="cursor-pointer glow-border transition-transform duration-500"
//             >
//               <InfluencerCard influencer={influencer} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default InfluencerList;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import InfluencerCard from "../components/InfluencerCard";

const categories = [
  "All",
  "Entertainment",
  "Food & Beverages",
  "Fashion & Lifestyle",
  "Shopping & Retail",
  "Travel & Tourism",
];

const InfluencerList = () => {
  const [influencers, setInfluencers] = useState([]);
  const [filteredInfluencers, setFilteredInfluencers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all influencers
  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const res = await api.get("/influencer/all");
        setInfluencers(res.data);
        setFilteredInfluencers(res.data);
      } catch (err) {
        console.error("Failed to fetch influencers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInfluencers();
  }, []);

  // Filter influencers based on search and category
  useEffect(() => {
    let filtered = influencers;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (inf) => inf.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter((inf) => {
        const name = inf.name?.toLowerCase() || "";
        const category = inf.category?.toLowerCase() || "";

        const nameWords = name.split(/\s+/);
        const categoryWords = category.split(/\s+/);

        const nameMatch = nameWords.some((word) => word.startsWith(term));
        const categoryMatch = categoryWords.some((word) =>
          word.startsWith(term)
        );

        return nameMatch || categoryMatch;
      });
    }

    setFilteredInfluencers(filtered);
  }, [searchTerm, selectedCategory, influencers]);

  const handleCardClick = (id) => {
    navigate(`/influencer/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* ===== Fixed Category + Search Section ===== */}
      <div className="fixed top-[76px] left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-gray-800 shadow-md px-10 py-6 bg-grayCustom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-[1400px] mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-6 text-sm font-semibold mb-4 md:mb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`pb-2 transition ${
                  selectedCategory === cat
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-gray-400 hover:text-orange-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-1/3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search influencers..."
              className="w-full px-4 py-2 bg-[#1b1b1b] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>
      </div>

      {/* ===== Influencer Cards Section ===== */}
      <div className="px-8 py-20">
        {loading ? (
          <p className="text-center text-orange-400 mt-10">
            Loading influencers...
          </p>
        ) : filteredInfluencers.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">
            No influencers found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
            {filteredInfluencers.map((influencer) => (
              <div
                key={influencer._id}
                onClick={() => handleCardClick(influencer._id)}
                className="cursor-pointer glow-border transition-transform duration-500 bg-black"
              >
                <InfluencerCard influencer={influencer} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfluencerList;
