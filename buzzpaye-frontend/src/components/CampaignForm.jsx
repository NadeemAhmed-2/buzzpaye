// // import React, { useState } from "react";
// // import api from "../utils/api";

// // const CampaignForm = ({ onClose }) => {
// //   const [formData, setFormData] = useState({
// //     brandName: "",
// //     location: "",
// //     objective: "",
// //     category: "",
// //     type: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       // Call backend API to create campaign
// //       const response = await api.post("/campaigns/create", formData);

// //       console.log("Campaign saved:", response.data);
// //       alert("✅ Campaign created successfully!");

// //       onClose(); // close the popup after saving
// //     } catch (error) {
// //       console.error("Error creating campaign:", error);
// //       alert("❌ Failed to create campaign. Please try again.");
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Dark Overlay */}
// //       <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40"></div>

// //       {/* Popup Form */}
// //       <div className="fixed inset-0 flex items-center justify-center z-50">
// //         <div
// //           className="rounded-2xl shadow-xl w-full max-w-lg p-6 relative"
// //           style={{ backgroundColor: "rgb(30, 30, 30)" }} // grayCustom background
// //         >
// //           {/* Title */}
// //           <h2
// //             className="text-2xl font-semibold mb-4"
// //             style={{ color: "#E96230" }}
// //           >
// //             Create Campaign
// //           </h2>

// //           {/* Close Button */}
// //           <button
// //             onClick={onClose}
// //             className="absolute top-4 right-4 text-white text-xl font-bold hover:text-[rgb(250,122,35)]"
// //           >
// //             ×
// //           </button>

// //           <form onSubmit={handleSubmit} className="space-y-4 text-white">
// //             {/* Brand Name */}
// //             <div>
// //               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
// //                 Brand Name
// //               </label>
// //               <input
// //                 type="text"
// //                 name="brandName"
// //                 value={formData.brandName}
// //                 onChange={handleChange}
// //                 className="w-full rounded-lg p-2 focus:outline-none border border-gray-600"
// //                 style={{ backgroundColor: "#000000", color: "#E96230" }}
// //                 required
// //               />
// //             </div>

// //             {/* Location */}
// //             <div>
// //               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
// //                 Location
// //               </label>
// //               <input
// //                 type="text"
// //                 name="location"
// //                 value={formData.location}
// //                 onChange={handleChange}
// //                 className="w-full rounded-lg p-2 focus:outline-none border border-gray-600"
// //                 style={{ backgroundColor: "#000000", color: "#E96230" }}
// //                 required
// //               />
// //             </div>

// //             {/* Campaign Objective */}
// //             <div>
// //               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
// //                 Campaign Objective
// //               </label>
// //               <textarea
// //                 name="objective"
// //                 value={formData.objective}
// //                 onChange={handleChange}
// //                 className="w-full rounded-lg p-2 h-20 resize-none border border-gray-600 focus:outline-none"
// //                 style={{ backgroundColor: "#000000", color: "#E96230" }}
// //                 required
// //               />
// //             </div>

// //             {/* Category */}
// //             <div>
// //               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
// //                 Category
// //               </label>
// //               <select
// //                 name="category"
// //                 value={formData.category}
// //                 onChange={handleChange}
// //                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
// //                 style={{ backgroundColor: "#000000", color: "#E96230" }}
// //                 required
// //               >
// //                 <option value="">Select Category</option>
// //                 <option value="Entertainment">Entertainment</option>
// //                 <option value="Food & Beverages">Food & Beverages</option>
// //                 <option value="Fashion & Lifestyle">Fashion & Lifestyle</option>
// //                 <option value="Shopping & Retail">Shopping & Retail</option>
// //                 <option value="Travel & Tourism">Travel & Tourism</option>
// //               </select>
// //             </div>

// //             {/* Campaign Type */}
// //             <div>
// //               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
// //                 Campaign Type
// //               </label>
// //               <select
// //                 name="type"
// //                 value={formData.type}
// //                 onChange={handleChange}
// //                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
// //                 style={{ backgroundColor: "#000000", color: "#E96230" }}
// //                 required
// //               >
// //                 <option value="">Select Type</option>
// //                 <option value="Social Media Post">Social Media Post</option>
// //                 <option value="Story">Story</option>
// //                 <option value="In-Visit">In-Visit</option>
// //               </select>
// //             </div>

// //             {/* Buttons */}
// //             <div className="flex justify-end gap-3 pt-3">
// //               <button
// //                 type="button"
// //                 onClick={onClose}
// //                 className="px-4 py-2 rounded-lg"
// //                 style={{
// //                   backgroundColor: "#000000",
// //                   color: "#E96230",
// //                   border: "1px solid #E96230",
// //                 }}
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="px-4 py-2 rounded-lg font-semibold transition"
// //                 style={{
// //                   backgroundColor: "#E96230",
// //                   color: "#000000",
// //                 }}
// //                 onMouseEnter={(e) =>
// //                   (e.target.style.backgroundColor = "rgb(250,122,35)")
// //                 }
// //                 onMouseLeave={(e) =>
// //                   (e.target.style.backgroundColor = "#E96230")
// //                 }
// //               >
// //                 Save Campaign
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );

// // };

// // export default CampaignForm;

// // // import React, { useState } from "react";
// // // import api from "../utils/api";

// // // const CampaignForm = ({ onClose }) => {
// // //   const [formData, setFormData] = useState({
// // //     brandName: "",
// // //     location: "",
// // //     objective: "",
// // //     category: "",
// // //     type: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await api.post("/campaigns/create", formData);
// // //       alert("✅ Campaign created successfully!");
// // //       onClose();
// // //     } catch (error) {
// // //       console.error("Error creating campaign:", error);
// // //       alert("❌ Failed to create campaign. Try again.");
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       {/* Dark Overlay */}
// // //       <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40"></div>

// // //       {/* Popup Form */}
// // //       <div className="fixed inset-0 flex items-center justify-center z-50">
// // //         <div
// // //           className="rounded-2xl shadow-xl w-full max-w-lg p-6 relative"
// // //           style={{ backgroundColor: "rgb(30, 30, 30)" }} // grayCustom background
// // //         >
// // //           {/* Title */}
// // //           <h2
// // //             className="text-2xl font-semibold mb-4"
// // //             style={{ color: "#E96230" }}
// // //           >
// // //             Create Campaign
// // //           </h2>

// // //           {/* Close Button */}
// // //           <button
// // //             onClick={onClose}
// // //             className="absolute top-4 right-4 text-white text-xl font-bold hover:text-[rgb(250,122,35)]"
// // //           >
// // //             ×
// // //           </button>

// // //           <form onSubmit={handleSubmit} className="space-y-4 text-white">
// // //             {/* Brand Name */}
// // //             <div>
// // //               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
// // //                 Brand Name
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="brandName"
// // //                 value={formData.brandName}
// // //                 onChange={handleChange}
// // //                 className="w-full rounded-lg p-2 focus:outline-none border border-gray-600"
// // //                 style={{ backgroundColor: "#000000", color: "#E96230" }}
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Location */}
// // //             <div>
// // //               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
// // //                 Location
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 name="location"
// // //                 value={formData.location}
// // //                 onChange={handleChange}
// // //                 className="w-full rounded-lg p-2 focus:outline-none border border-gray-600"
// // //                 style={{ backgroundColor: "#000000", color: "#E96230" }}
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Campaign Objective */}
// // //             <div>
// // //               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
// // //                 Campaign Objective
// // //               </label>
// // //               <textarea
// // //                 name="objective"
// // //                 value={formData.objective}
// // //                 onChange={handleChange}
// // //                 className="w-full rounded-lg p-2 h-20 resize-none border border-gray-600 focus:outline-none"
// // //                 style={{ backgroundColor: "#000000", color: "#E96230" }}
// // //                 required
// // //               />
// // //             </div>

// // //             {/* Category */}
// // //             <div>
// // //               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
// // //                 Category
// // //               </label>
// // //               <select
// // //                 name="category"
// // //                 value={formData.category}
// // //                 onChange={handleChange}
// // //                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
// // //                 style={{ backgroundColor: "#000000", color: "#E96230" }}
// // //                 required
// // //               >
// // //                 <option value="">Select Category</option>
// // //                 <option value="Entertainment">Entertainment</option>
// // //                 <option value="Food & Beverages">Food & Beverages</option>
// // //                 <option value="Fashion & Lifestyle">Fashion & Lifestyle</option>
// // //                 <option value="Shopping & Retail">Shopping & Retail</option>
// // //                 <option value="Travel & Tourism">Travel & Tourism</option>
// // //               </select>
// // //             </div>

// // //             {/* Campaign Type */}
// // //             <div>
// // //               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
// // //                 Campaign Type
// // //               </label>
// // //               <select
// // //                 name="type"
// // //                 value={formData.type}
// // //                 onChange={handleChange}
// // //                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
// // //                 style={{ backgroundColor: "#000000", color: "#E96230" }}
// // //                 required
// // //               >
// // //                 <option value="">Select Type</option>
// // //                 <option value="Social Media Post">Social Media Post</option>
// // //                 <option value="Story">Story</option>
// // //                 <option value="In-Visit">In-Visit</option>
// // //               </select>
// // //             </div>

// // //             {/* Buttons */}
// // //             <div className="flex justify-end gap-3 pt-3">
// // //               <button
// // //                 type="button"
// // //                 onClick={onClose}
// // //                 className="px-4 py-2 rounded-lg"
// // //                 style={{
// // //                   backgroundColor: "#000000",
// // //                   color: "#E96230",
// // //                   border: "1px solid #E96230",
// // //                 }}
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 type="submit"
// // //                 className="px-4 py-2 rounded-lg font-semibold transition"
// // //                 style={{
// // //                   backgroundColor: "#E96230",
// // //                   color: "#000000",
// // //                 }}
// // //                 onMouseEnter={(e) =>
// // //                   (e.target.style.backgroundColor = "rgb(250,122,35)")
// // //                 }
// // //                 onMouseLeave={(e) =>
// // //                   (e.target.style.backgroundColor = "#E96230")
// // //                 }
// // //               >
// // //                 Save Campaign
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default CampaignForm;

// import React, { useState } from "react";
// import api from "../utils/api";

// const CampaignForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     brandName: "",
//     location: "",
//     objective: "",
//     category: "",
//     type: "",
//   });

//   const [errorMsg, setErrorMsg] = useState(""); // for backend error

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg(""); // reset error message

//     try {
//       console.log("Submitting campaign:", formData);

//       const response = await api.post("/campaigns/create", formData);
//       console.log("Campaign saved:", response.data);

//       alert("✅ Campaign created successfully!");
//       onClose();
//     } catch (error) {
//       console.error("Error creating campaign:", error.response?.data || error.message);
//       // show backend error in popup
//       setErrorMsg(error.response?.data?.message || "Failed to create campaign");
//     }
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40"></div>

//       {/* Popup */}
//       <div className="fixed inset-0 flex items-center justify-center z-50">
//         <div
//           className="rounded-2xl shadow-xl w-full max-w-lg p-6 relative"
//           style={{ backgroundColor: "rgb(30,30,30)" }} // grayCustom
//         >
//           <h2
//             className="text-2xl font-semibold mb-4"
//             style={{ color: "#E96230" }}
//           >
//             Create Campaign
//           </h2>

//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-white text-xl font-bold hover:text-[rgb(250,122,35)]"
//           >
//             ×
//           </button>

//           <form onSubmit={handleSubmit} className="space-y-4 text-white">
//             {/* Error message */}
//             {errorMsg && (
//               <div className="text-lightRed font-semibold">{errorMsg}</div>
//             )}

//             {/* Brand Name */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Brand Name
//               </label>
//               <input
//                 type="text"
//                 name="brandName"
//                 value={formData.brandName}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               />
//             </div>

//             {/* Location */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               />
//             </div>

//             {/* Campaign Objective */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Campaign Objective
//               </label>
//               <textarea
//                 name="objective"
//                 value={formData.objective}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 h-20 resize-none border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               />
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Category
//               </label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               >
//                 <option value="">Select Category</option>
//                 <option value="Entertainment">Entertainment</option>
//                 <option value="Food & Beverages">Food & Beverages</option>
//                 <option value="Fashion & Lifestyle">Fashion & Lifestyle</option>
//                 <option value="Shopping & Retail">Shopping & Retail</option>
//                 <option value="Travel & Tourism">Travel & Tourism</option>
//               </select>
//             </div>

//             {/* Campaign Type */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Campaign Type
//               </label>
//               <select
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               >
//                 <option value="">Select Type</option>
//                 <option value="Social Media Post">Social Media Post</option>
//                 <option value="Story">Story</option>
//                 <option value="In-Visit">In-Visit</option>
//               </select>
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-end gap-3 pt-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 rounded-lg"
//                 style={{
//                   backgroundColor: "#000000",
//                   color: "#E96230",
//                   border: "1px solid #E96230",
//                 }}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 rounded-lg font-semibold transition"
//                 style={{
//                   backgroundColor: "#E96230",
//                   color: "#000000",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.target.style.backgroundColor = "rgb(250,122,35)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.target.style.backgroundColor = "#E96230")
//                 }
//               >
//                 Save Campaign
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CampaignForm;

// import React, { useState, useEffect } from "react";
// import api from "../utils/api";

// const CampaignForm = ({ onClose, editingCampaign }) => {
//   const [formData, setFormData] = useState({
//     brandName: "",
//     location: "",
//     objective: "",
//     category: "",
//     type: "",
//   });

//   const [errorMsg, setErrorMsg] = useState(""); // backend error

//   // Prefill form if editing
//   useEffect(() => {
//     if (editingCampaign) {
//       setFormData({
//         brandName: editingCampaign.brandName || "",
//         location: editingCampaign.location || "",
//         objective: editingCampaign.objective || "",
//         category: editingCampaign.category || "",
//         type: editingCampaign.type || "",
//       });
//     }
//   }, [editingCampaign]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg("");

//     try {
//       if (editingCampaign) {
//         // Edit mode → PUT request
//         const response = await api.put(`/campaigns/${editingCampaign._id}`, formData);
//         console.log("Campaign updated:", response.data);
//         alert("✅ Campaign updated successfully!");
//       } else {
//         // Create mode → POST request
//         const response = await api.post("/campaigns/create", formData);
//         console.log("Campaign created:", response.data);
//         alert("✅ Campaign created successfully!");
//       }

//       onClose();
//     } catch (error) {
//       console.error("Error saving campaign:", error.response?.data || error.message);
//       setErrorMsg(error.response?.data?.message || "Failed to save campaign");
//     }
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40"></div>

//       {/* Popup */}
//       <div className="fixed inset-0 flex items-center justify-center z-50">
//         <div
//           className="rounded-2xl shadow-xl w-full max-w-lg p-6 relative"
//           style={{ backgroundColor: "rgb(30,30,30)" }}
//         >
//           <h2
//             className="text-2xl font-semibold mb-4"
//             style={{ color: "#E96230" }}
//           >
//             {editingCampaign ? "Edit Campaign" : "Create Campaign"}
//           </h2>

//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-white text-xl font-bold hover:text-[rgb(250,122,35)]"
//           >
//             ×
//           </button>

//           <form onSubmit={handleSubmit} className="space-y-4 text-white">
//             {errorMsg && <div className="text-lightRed font-semibold">{errorMsg}</div>}

//             {/* Brand Name */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Brand Name
//               </label>
//               <input
//                 type="text"
//                 name="brandName"
//                 value={formData.brandName}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               />
//             </div>

//             {/* Location */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               />
//             </div>

//             {/* Objective */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Campaign Objective
//               </label>
//               <textarea
//                 name="objective"
//                 value={formData.objective}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 h-20 resize-none border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               />
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Category
//               </label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               >
//                 <option value="">Select Category</option>
//                 <option value="Entertainment">Entertainment</option>
//                 <option value="Food & Beverages">Food & Beverages</option>
//                 <option value="Fashion & Lifestyle">Fashion & Lifestyle</option>
//                 <option value="Shopping & Retail">Shopping & Retail</option>
//                 <option value="Travel & Tourism">Travel & Tourism</option>
//               </select>
//             </div>

//             {/* Type */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Campaign Type
//               </label>
//               <select
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               >
//                 <option value="">Select Type</option>
//                 <option value="Social Media Post">Social Media Post</option>
//                 <option value="Story">Story</option>
//                 <option value="In-Visit">In-Visit</option>
//               </select>
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-end gap-3 pt-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 rounded-lg"
//                 style={{
//                   backgroundColor: "#000000",
//                   color: "#E96230",
//                   border: "1px solid #E96230",
//                 }}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 rounded-lg font-semibold transition"
//                 style={{ backgroundColor: "#E96230", color: "#000000" }}
//                 onMouseEnter={(e) => (e.target.style.backgroundColor = "rgb(250,122,35)")}
//                 onMouseLeave={(e) => (e.target.style.backgroundColor = "#E96230")}
//               >
//                 {editingCampaign ? "Update Campaign" : "Save Campaign"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CampaignForm;

// import React, { useState, useEffect } from "react";
// import api from "../utils/api";

// const CampaignForm = ({ onClose, editingCampaign }) => {
//   const [formData, setFormData] = useState({
//     campaignName: "",
//     brandName: "",
//     location: "",
//     objective: "",
//     category: "",
//     type: "",
//   });

//   const [errorMsg, setErrorMsg] = useState("");

//   // Prefill form if editing
//   useEffect(() => {
//     if (editingCampaign) {
//       setFormData({
//         campaignName: editingCampaign.campaignName || "",
//         brandName: editingCampaign.brandName || "",
//         location: editingCampaign.location || "",
//         objective: editingCampaign.objective || "",
//         category: editingCampaign.category || "",
//         type: editingCampaign.type || "",
//       });
//     }
//   }, [editingCampaign]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg("");

//     try {
//       if (editingCampaign) {
//         // Edit mode
//         const response = await api.put(`/campaigns/${editingCampaign._id}`, formData);
//         console.log("Campaign updated:", response.data);
//         alert("✅ Campaign updated successfully!");
//       } else {
//         // Create mode
//         const response = await api.post("/campaigns/create", formData);
//         console.log("Campaign created:", response.data);
//         alert("✅ Campaign created successfully!");
//       }

//       onClose();
//     } catch (error) {
//       console.error("Error saving campaign:", error.response?.data || error.message);
//       setErrorMsg(error.response?.data?.message || "Failed to save campaign");
//     }
//   };

//   return (
//     <>
//       <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40"></div>

//       <div className="fixed inset-0 flex items-center justify-center z-50">
//         <div
//           className="rounded-2xl shadow-xl w-full max-w-lg p-6 relative"
//           style={{ backgroundColor: "rgb(30,30,30)" }}
//         >
//           <h2 className="text-2xl font-semibold mb-4" style={{ color: "#E96230" }}>
//             {editingCampaign ? "Edit Campaign" : "Create Campaign"}
//           </h2>

//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-white text-xl font-bold hover:text-[rgb(250,122,35)]"
//           >
//             ×
//           </button>

//           <form onSubmit={handleSubmit} className="space-y-4 text-white">
//             {errorMsg && <div className="text-lightRed font-semibold">{errorMsg}</div>}

//             {/* Campaign Name */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Campaign Name
//               </label>
//               <input
//                 type="text"
//                 name="campaignName"
//                 value={formData.campaignName}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               />
//             </div>

//             {/* Brand Name */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Brand Name
//               </label>
//               <input
//                 type="text"
//                 name="brandName"
//                 value={formData.brandName}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               />
//             </div>

//             {/* Location */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               />
//             </div>

//             {/* Objective */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Campaign Objective
//               </label>
//               <textarea
//                 name="objective"
//                 value={formData.objective}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 h-20 resize-none border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               />
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Category
//               </label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               >
//                 <option value="">Select Category</option>
//                 <option value="Entertainment">Entertainment</option>
//                 <option value="Food & Beverages">Food & Beverages</option>
//                 <option value="Fashion & Lifestyle">Fashion & Lifestyle</option>
//                 <option value="Shopping & Retail">Shopping & Retail</option>
//                 <option value="Travel & Tourism">Travel & Tourism</option>
//               </select>
//             </div>

//             {/* Type */}
//             <div>
//               <label className="block font-semibold mb-1" style={{ color: "#E96230" }}>
//                 Campaign Type
//               </label>
//               <select
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 className="w-full rounded-lg p-2 border border-gray-600 focus:outline-none"
//                 style={{ backgroundColor: "#000000", color: "#E96230" }}
//                 required
//               >
//                 <option value="">Select Type</option>
//                 <option value="Social Media Post">Social Media Post</option>
//                 <option value="Story">Story</option>
//                 <option value="In-Visit">In-Visit</option>
//               </select>
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-end gap-3 pt-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 rounded-lg"
//                 style={{
//                   backgroundColor: "#000000",
//                   color: "#E96230",
//                   border: "1px solid #E96230",
//                 }}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 rounded-lg font-semibold transition"
//                 style={{ backgroundColor: "#E96230", color: "#000000" }}
//                 onMouseEnter={(e) => (e.target.style.backgroundColor = "rgb(250,122,35)")}
//                 onMouseLeave={(e) => (e.target.style.backgroundColor = "#E96230")}
//               >
//                 {editingCampaign ? "Update Campaign" : "Save Campaign"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CampaignForm;

import React, { useState, useEffect } from "react";
import api from "../utils/api";

const CampaignForm = ({ onClose, editingCampaign }) => {
  const [formData, setFormData] = useState({
    campaignName: "",
    brandName: "",
    location: "",
    objective: "",
    category: "",
    type: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  // Prefill form if editing
  useEffect(() => {
    if (editingCampaign) {
      setFormData({
        campaignName: editingCampaign.campaignName || "",
        brandName: editingCampaign.brandName || "",
        location: editingCampaign.location || "",
        objective: editingCampaign.objective || "",
        category: editingCampaign.category || "",
        type: editingCampaign.type || "",
      });
    }
  }, [editingCampaign]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      if (editingCampaign) {
        const response = await api.put(
          `/campaigns/${editingCampaign._id}`,
          formData
        );
        alert("✅ Campaign updated successfully!");
        console.log("Campaign updated:", response.data);
      } else {
        const response = await api.post("/campaigns/create", formData);
        alert("✅ Campaign created successfully!");
        console.log("Campaign created:", response.data);
      }
      onClose();
    } catch (error) {
      console.error(
        "Error saving campaign:",
        error.response?.data || error.message
      );
      setErrorMsg(error.response?.data?.message || "Failed to save campaign");
    }
  };

  return (
    <>
      {/* Dark background overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm"></div>

      {/* Centered scrollable container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
        <div
          className="relative w-full max-w-md rounded-2xl shadow-2xl border border-[#E96230]/40"
          style={{ backgroundColor: "rgb(30,30,30)" }}
        >
          {/* Scrollable content */}
          <div className="max-h-[85vh] overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-thumb-[#E96230]/70 scrollbar-track-[#000000]">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-[rgb(250,122,35)] transition"
            >
              ×
            </button>

            {/* Title */}
            <h2
              className="text-xl font-semibold mb-5 text-center"
              style={{ color: "#E96230" }}
            >
              {editingCampaign ? "Edit Campaign" : "Create Campaign"}
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-white">
              {errorMsg && (
                <div className="text-lightRed font-semibold text-sm bg-red-900/20 p-2 rounded-md border border-red-700">
                  {errorMsg}
                </div>
              )}

              {/* Campaign Name */}
              <div>
                <label
                  className="block font-semibold mb-1 text-sm"
                  style={{ color: "#E96230" }}
                >
                  Campaign Name
                </label>
                <input
                  type="text"
                  name="campaignName"
                  value={formData.campaignName}
                  onChange={handleChange}
                  className="w-full rounded-lg p-2 border border-gray-600 focus:ring-1 focus:ring-[#E96230] focus:outline-none"
                  style={{ backgroundColor: "#000000", color: "#E96230" }}
                  required
                />
              </div>

              {/* Brand Name */}
              <div>
                <label
                  className="block font-semibold mb-1 text-sm"
                  style={{ color: "#E96230" }}
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  className="w-full rounded-lg p-2 border border-gray-600 focus:ring-1 focus:ring-[#E96230] focus:outline-none"
                  style={{ backgroundColor: "#000000", color: "#E96230" }}
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label
                  className="block font-semibold mb-1 text-sm"
                  style={{ color: "#E96230" }}
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full rounded-lg p-2 border border-gray-600 focus:ring-1 focus:ring-[#E96230] focus:outline-none"
                  style={{ backgroundColor: "#000000", color: "#E96230" }}
                  required
                />
              </div>

              {/* Objective */}
              <div>
                <label
                  className="block font-semibold mb-1 text-sm"
                  style={{ color: "#E96230" }}
                >
                  Campaign Objective
                </label>
                <textarea
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  className="w-full rounded-lg p-2 h-20 resize-none border border-gray-600 focus:ring-1 focus:ring-[#E96230] focus:outline-none"
                  style={{ backgroundColor: "#000000", color: "#E96230" }}
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label
                  className="block font-semibold mb-1 text-sm"
                  style={{ color: "#E96230" }}
                >
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-lg p-2 border border-gray-600 focus:ring-1 focus:ring-[#E96230] focus:outline-none"
                  style={{ backgroundColor: "#000000", color: "#E96230" }}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Food & Beverages">Food & Beverages</option>
                  <option value="Fashion & Lifestyle">
                    Fashion & Lifestyle
                  </option>
                  <option value="Shopping & Retail">Shopping & Retail</option>
                  <option value="Travel & Tourism">Travel & Tourism</option>
                </select>
              </div>

              {/* Type */}
              <div>
                <label
                  className="block font-semibold mb-1 text-sm"
                  style={{ color: "#E96230" }}
                >
                  Campaign Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full rounded-lg p-2 border border-gray-600 focus:ring-1 focus:ring-[#E96230] focus:outline-none"
                  style={{ backgroundColor: "#000000", color: "#E96230" }}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Social Media Post">Social Media Post</option>
                  <option value="Story">Story</option>
                  <option value="In-Visit">In-Visit</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-1.5 rounded-lg text-sm border border-[#E96230] hover:bg-[#E96230]/10 transition"
                  style={{ backgroundColor: "#000000", color: "#E96230" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg text-sm font-semibold transition hover:scale-105"
                  style={{ backgroundColor: "#E96230", color: "#000000" }}
                >
                  {editingCampaign ? "Update Campaign" : "Save Campaign"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignForm;
