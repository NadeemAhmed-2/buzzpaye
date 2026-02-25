// // // // // // import React, { useState, useEffect } from "react";

// // // // // // const BrandProfile = () => {
// // // // // //   const [isEditing, setIsEditing] = useState(false);
// // // // // //   const [profile, setProfile] = useState({
// // // // // //     name: "",
// // // // // //     company: "",
// // // // // //     website: "",
// // // // // //     location: "",
// // // // // //     images: "",
// // // // // //   });

// // // // // //   // Load saved profile
// // // // // //   useEffect(() => {
// // // // // //     const saved = JSON.parse(localStorage.getItem("brandProfile"));
// // // // // //     if (saved) setProfile(saved);
// // // // // //   }, []);

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setProfile({ ...profile, [name]: value });
// // // // // //   };

// // // // // //   const handleLogoChange = (e) => {
// // // // // //     const file = e.target.files[0];
// // // // // //     if (file) {
// // // // // //       const reader = new FileReader();
// // // // // //       reader.onload = () => {
// // // // // //         setProfile({ ...profile, logo: reader.result }); // base64
// // // // // //       };
// // // // // //       reader.readAsDataURL(file);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSave = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     localStorage.setItem("brandProfile", JSON.stringify(profile));
// // // // // //     setIsEditing(false);
// // // // // //   };

// // // // // //   const handleEdit = () => {
// // // // // //     setIsEditing(true);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="max-w-lg mx-auto mt-10 bg-black text-white p-6 rounded-2xl shadow-lg border-2 border-red-600">
// // // // // //       <h2 className="text-3xl font-bold text-center mb-6 text-red-500">
// // // // // //         Brand Profile
// // // // // //       </h2>

// // // // // //       {isEditing ? (
// // // // // //         <form onSubmit={handleSave} className="flex flex-col gap-4">
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             name="name"
// // // // // //             placeholder="Your Name"
// // // // // //             value={profile.name}
// // // // // //             onChange={handleChange}
// // // // // //             className="p-2 rounded border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //             required
// // // // // //           />

// // // // // //           <input
// // // // // //             type="text"
// // // // // //             name="company"
// // // // // //             placeholder="Company Name"
// // // // // //             value={profile.company}
// // // // // //             onChange={handleChange}
// // // // // //             className="p-2 rounded border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //             required
// // // // // //           />

// // // // // //           <input
// // // // // //             type="text"
// // // // // //             name="website"
// // // // // //             placeholder="Company Website (https://...)"
// // // // // //             value={profile.website}
// // // // // //             onChange={handleChange}
// // // // // //             className="p-2 rounded border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //           />

// // // // // //           <input
// // // // // //             type="number"
// // // // // //             name="budget"
// // // // // //             placeholder="Average Campaign Budget ($)"
// // // // // //             value={profile.budget}
// // // // // //             onChange={handleChange}
// // // // // //             className="p-2 rounded border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //             required
// // // // // //           />

// // // // // //           <input
// // // // // //             type="file"
// // // // // //             accept="image/*"
// // // // // //             onChange={handleLogoChange}
// // // // // //             className="p-2 rounded border border-red-600 bg-black cursor-pointer"
// // // // // //           />

// // // // // //           <button
// // // // // //             type="submit"
// // // // // //             className="bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-black transition"
// // // // // //           >
// // // // // //             Save
// // // // // //           </button>
// // // // // //         </form>
// // // // // //       ) : (
// // // // // //         <div className="text-center">
// // // // // //           {profile.logo && (
// // // // // //             <img
// // // // // //               src={profile.logo}
// // // // // //               alt="Brand Logo"
// // // // // //               className="w-32 h-32 mx-auto rounded-full border-4 border-red-600 mb-4 object-cover"
// // // // // //             />
// // // // // //           )}
// // // // // //           <p className="text-xl font-bold">{profile.company || "No Company"}</p>
// // // // // //           <p className="text-gray-400">{profile.name || "No Owner Name"}</p>
// // // // // //           {profile.website && (
// // // // // //             <p className="mt-2">
// // // // // //               <a
// // // // // //                 href={profile.website}
// // // // // //                 target="_blank"
// // // // // //                 rel="noreferrer"
// // // // // //                 className="text-red-500 underline hover:text-white"
// // // // // //               >
// // // // // //                 Visit Website
// // // // // //               </a>
// // // // // //             </p>
// // // // // //           )}
// // // // // //           {profile.budget && (
// // // // // //             <p className="text-gray-300 mt-2">
// // // // // //               <span className="font-semibold text-white">Avg. Budget: </span>$
// // // // // //               {profile.budget}
// // // // // //             </p>
// // // // // //           )}

// // // // // //           <button
// // // // // //             onClick={handleEdit}
// // // // // //             className="mt-5 bg-red-600 px-4 py-2 rounded-lg font-bold hover:bg-white hover:text-black transition"
// // // // // //           >
// // // // // //             Edit
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default BrandProfile;

// // // // // import React, { useState, useEffect } from "react";

// // // // // const BrandProfile = () => {
// // // // //   const [isEditing, setIsEditing] = useState(false);
// // // // //   const [profile, setProfile] = useState({
// // // // //     name: "",
// // // // //     company: "",
// // // // //     website: "",
// // // // //     location: "",
// // // // //     images: [], // multiple logos or pictures
// // // // //   });

// // // // //   // Load saved profile from localStorage
// // // // //   useEffect(() => {
// // // // //     const saved = JSON.parse(localStorage.getItem("brandProfile"));
// // // // //     if (saved) setProfile(saved);
// // // // //   }, []);

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setProfile({ ...profile, [name]: value });
// // // // //   };

// // // // //   // Handle multiple image uploads
// // // // //   const handleImagesChange = (e) => {
// // // // //     const files = Array.from(e.target.files);
// // // // //     const readers = [];

// // // // //     files.forEach((file) => {
// // // // //       const reader = new FileReader();
// // // // //       reader.onload = () => {
// // // // //         readers.push(reader.result);
// // // // //         if (readers.length === files.length) {
// // // // //           setProfile((prev) => ({
// // // // //             ...prev,
// // // // //             images: [...(prev.images || []), ...readers],
// // // // //           }));
// // // // //         }
// // // // //       };
// // // // //       reader.readAsDataURL(file);
// // // // //     });
// // // // //   };

// // // // //   const handleSave = (e) => {
// // // // //     e.preventDefault();
// // // // //     localStorage.setItem("brandProfile", JSON.stringify(profile));
// // // // //     setIsEditing(false);
// // // // //   };

// // // // //   const handleEdit = () => {
// // // // //     setIsEditing(true);
// // // // //   };

// // // // //   const handleRemoveImage = (index) => {
// // // // //     const updatedImages = profile.images.filter((_, i) => i !== index);
// // // // //     setProfile({ ...profile, images: updatedImages });
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex justify-center items-center h-[80vh] bg-grayCustom">
// // // // //       <div className="bg-secondary p-8 rounded-lg shadow-lg w-[100%] sm:w-[400px] text-white">
// // // // //     {/* <div className="max-w-lg mx-auto mt-10 bg-grayCustom text-white p-6 rounded-2xl shadow-lg border-2 border-red-600"> */}
// // // // //       <h2 className="text-3xl font-bold text-center mb-6 text-red-500">
// // // // //         Brand Profile
// // // // //       </h2>

// // // // //       {isEditing ? (
// // // // //         <form onSubmit={handleSave} className="flex flex-col gap-4">
// // // // //           {/* Owner name */}
// // // // //           <input
// // // // //             type="text"
// // // // //             name="name"
// // // // //             placeholder="Your Name"
// // // // //             value={profile.name}
// // // // //             onChange={handleChange}
// // // // //             className="p-2 rounded border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //             required
// // // // //           />

// // // // //           {/* Company */}
// // // // //           <input
// // // // //             type="text"
// // // // //             name="company"
// // // // //             placeholder="Company Name"
// // // // //             value={profile.company}
// // // // //             onChange={handleChange}
// // // // //             className="p-2 rounded border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //             required
// // // // //           />

// // // // //           {/* Website */}
// // // // //           <input
// // // // //             type="text"
// // // // //             name="website"
// // // // //             placeholder="Company Website (https://...)"
// // // // //             value={profile.website}
// // // // //             onChange={handleChange}
// // // // //             className="p-2 rounded border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //           />

// // // // //           {/* Location */}
// // // // //           <input
// // // // //             type="text"
// // // // //             name="location"
// // // // //             placeholder="Company Location"
// // // // //             value={profile.location}
// // // // //             onChange={handleChange}
// // // // //             className="p-2 rounded border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //             required
// // // // //           />

// // // // //           {/* Multiple images */}
// // // // //           <input
// // // // //             type="file"
// // // // //             accept="image/*"
// // // // //             multiple
// // // // //             onChange={handleImagesChange}
// // // // //             className="p-2 rounded border border-red-600 bg-black cursor-pointer"
// // // // //           />

// // // // //           {/* Preview uploaded images */}
// // // // //           {profile.images.length > 0 && (
// // // // //             <div className="flex flex-wrap gap-3 mt-3">
// // // // //               {profile.images.map((img, i) => (
// // // // //                 <div key={i} className="relative">
// // // // //                   <img
// // // // //                     src={img}
// // // // //                     alt={`Brand ${i}`}
// // // // //                     className="w-20 h-20 rounded-lg object-cover border-2 border-red-500"
// // // // //                   />
// // // // //                   <button
// // // // //                     type="button"
// // // // //                     onClick={() => handleRemoveImage(i)}
// // // // //                     className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 hover:bg-white hover:text-black"
// // // // //                   >
// // // // //                     ✕
// // // // //                   </button>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}

// // // // //           <button
// // // // //             type="submit"
// // // // //             className="bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-white hover:text-black transition"
// // // // //           >
// // // // //             Save
// // // // //           </button>
// // // // //         </form>
// // // // //       ) : (
// // // // //         <div className="text-center">
// // // // //           {profile.images?.length > 0 && (
// // // // //             <div className="flex flex-wrap justify-center gap-3 mb-4">
// // // // //               {profile.images.map((img, i) => (
// // // // //                 <img
// // // // //                   key={i}
// // // // //                   src={img}
// // // // //                   alt={`Brand ${i}`}
// // // // //                   className="w-24 h-24 rounded-lg border-2 border-red-600 object-cover"
// // // // //                 />
// // // // //               ))}
// // // // //             </div>
// // // // //           )}

// // // // //           <p className="text-xl font-bold">{profile.company || "No Company"}</p>
// // // // //           <p className="text-gray-400">{profile.name || "No Owner Name"}</p>
// // // // //           {profile.website && (
// // // // //             <p className="mt-2">
// // // // //               <a
// // // // //                 href={profile.website}
// // // // //                 target="_blank"
// // // // //                 rel="noreferrer"
// // // // //                 className="text-red-500 underline hover:text-white"
// // // // //               >
// // // // //                 Visit Website
// // // // //               </a>
// // // // //             </p>
// // // // //           )}
// // // // //           {profile.location && (
// // // // //             <p className="text-gray-300 mt-2">
// // // // //               <span className="font-semibold text-white">Location: </span>
// // // // //               {profile.location}
// // // // //             </p>
// // // // //           )}

// // // // //           <button
// // // // //             onClick={handleEdit}
// // // // //             className="mt-5 bg-red-600 px-4 py-2 rounded-lg font-bold hover:bg-white hover:text-black transition"
// // // // //           >
// // // // //             Edit
// // // // //           </button>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default BrandProfile;

// // // // import React, { useState, useEffect } from "react";

// // // // const BrandProfile = () => {
// // // //   const [isEditing, setIsEditing] = useState(false);
// // // //   const [profile, setProfile] = useState({
// // // //     name: "",
// // // //     company: "",
// // // //     website: "",
// // // //     location: "",
// // // //     images: [],
// // // //   });

// // // //   // Load saved profile
// // // //   useEffect(() => {
// // // //     const saved = JSON.parse(localStorage.getItem("brandProfile"));
// // // //     if (saved) setProfile(saved);
// // // //   }, []);

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setProfile({ ...profile, [name]: value });
// // // //   };

// // // //   const handleImagesChange = (e) => {
// // // //     const files = Array.from(e.target.files);
// // // //     const readers = [];

// // // //     files.forEach((file) => {
// // // //       const reader = new FileReader();
// // // //       reader.onload = () => {
// // // //         readers.push(reader.result);
// // // //         if (readers.length === files.length) {
// // // //           setProfile((prev) => ({
// // // //             ...prev,
// // // //             images: [...(prev.images || []), ...readers],
// // // //           }));
// // // //         }
// // // //       };
// // // //       reader.readAsDataURL(file);
// // // //     });
// // // //   };

// // // //   const handleSave = (e) => {
// // // //     e.preventDefault();
// // // //     localStorage.setItem("brandProfile", JSON.stringify(profile));
// // // //     setIsEditing(false);
// // // //   };

// // // //   const handleEdit = () => setIsEditing(true);

// // // //   const handleRemoveImage = (index) => {
// // // //     const updated = profile.images.filter((_, i) => i !== index);
// // // //     setProfile({ ...profile, images: updated });
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#121212] to-black text-white">
// // // //       <div className="bg-[#1a1a1a] border border-red-600 shadow-2xl p-8 rounded-2xl w-[90%] max-w-md backdrop-blur-md">
// // // //         <h2 className="text-3xl font-extrabold text-center mb-6 text-red-500 tracking-wide">
// // // //           Brand Profile
// // // //         </h2>

// // // //         {isEditing ? (
// // // //           <form
// // // //             onSubmit={handleSave}
// // // //             className="flex flex-col gap-4 text-sm sm:text-base"
// // // //           >
// // // //             {/* Owner Name */}
// // // //             <input
// // // //               type="text"
// // // //               name="name"
// // // //               placeholder="Your Name"
// // // //               value={profile.name}
// // // //               onChange={handleChange}
// // // //               className="p-2 rounded-lg border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // //               required
// // // //             />

// // // //             {/* Company */}
// // // //             <input
// // // //               type="text"
// // // //               name="company"
// // // //               placeholder="Company Name"
// // // //               value={profile.company}
// // // //               onChange={handleChange}
// // // //               className="p-2 rounded-lg border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // //               required
// // // //             />

// // // //             {/* Website */}
// // // //             <input
// // // //               type="text"
// // // //               name="website"
// // // //               placeholder="Company Website (https://...)"
// // // //               value={profile.website}
// // // //               onChange={handleChange}
// // // //               className="p-2 rounded-lg border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // //             />

// // // //             {/* Location */}
// // // //             <input
// // // //               type="text"
// // // //               name="location"
// // // //               placeholder="Company Location"
// // // //               value={profile.location}
// // // //               onChange={handleChange}
// // // //               className="p-2 rounded-lg border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // // //               required
// // // //             />

// // // //             {/* Upload Multiple Images */}
// // // //             <input
// // // //               type="file"
// // // //               accept="image/*"
// // // //               multiple
// // // //               onChange={handleImagesChange}
// // // //               className="p-2 rounded-lg border border-red-600 bg-black cursor-pointer"
// // // //             />

// // // //             {/* Image Previews */}
// // // //             {profile.images.length > 0 && (
// // // //               <div className="flex flex-wrap justify-center gap-3 mt-2">
// // // //                 {profile.images.map((img, i) => (
// // // //                   <div key={i} className="relative">
// // // //                     <img
// // // //                       src={img}
// // // //                       alt={`Brand ${i}`}
// // // //                       className="w-20 h-20 rounded-lg object-cover border-2 border-red-600 shadow-md"
// // // //                     />
// // // //                     <button
// // // //                       type="button"
// // // //                       onClick={() => handleRemoveImage(i)}
// // // //                       className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 hover:bg-white hover:text-black"
// // // //                     >
// // // //                       ✕
// // // //                     </button>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             )}

// // // //             <button
// // // //               type="submit"
// // // //               className="bg-red-600 mt-4 text-white font-semibold py-2 rounded-lg hover:bg-white hover:text-black transition duration-300"
// // // //             >
// // // //               Save Profile
// // // //             </button>
// // // //           </form>
// // // //         ) : (
// // // //           <div className="text-center">
// // // //             {profile.images?.length > 0 && (
// // // //               <div className="flex flex-wrap justify-center gap-3 mb-4">
// // // //                 {profile.images.map((img, i) => (
// // // //                   <img
// // // //                     key={i}
// // // //                     src={img}
// // // //                     alt={`Brand ${i}`}
// // // //                     className="w-24 h-24 rounded-lg border-2 border-red-600 object-cover shadow-md hover:scale-105 transition-transform duration-200"
// // // //                   />
// // // //                 ))}
// // // //               </div>
// // // //             )}

// // // //             <p className="text-xl font-bold mb-1">
// // // //               {profile.company || "No Company"}
// // // //             </p>
// // // //             <p className="text-gray-400">{profile.name || "No Owner Name"}</p>

// // // //             {profile.website && (
// // // //               <p className="mt-2">
// // // //                 <a
// // // //                   href={profile.website}
// // // //                   target="_blank"
// // // //                   rel="noreferrer"
// // // //                   className="text-red-500 underline hover:text-white transition"
// // // //                 >
// // // //                   Visit Website
// // // //                 </a>
// // // //               </p>
// // // //             )}

// // // //             {profile.location && (
// // // //               <p className="text-gray-300 mt-2">
// // // //                 <span className="font-semibold text-white">Location: </span>
// // // //                 {profile.location}
// // // //               </p>
// // // //             )}

// // // //             <button
// // // //               onClick={handleEdit}
// // // //               className="mt-6 bg-red-600 px-5 py-2 rounded-lg font-bold hover:bg-white hover:text-black transition duration-300"
// // // //             >
// // // //               Edit Profile
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BrandProfile;

// // // import React, { useState, useEffect } from "react";

// // // const BrandProfile = () => {
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [profile, setProfile] = useState({
// // //     name: "",
// // //     company: "",
// // //     website: "",
// // //     location: "",
// // //     images: [],
// // //   });

// // //   // Load saved profile
// // //   useEffect(() => {
// // //     const saved = JSON.parse(localStorage.getItem("brandProfile"));
// // //     if (saved) setProfile(saved);
// // //   }, []);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setProfile({ ...profile, [name]: value });
// // //   };

// // //   const handleImagesChange = (e) => {
// // //     const files = Array.from(e.target.files);
// // //     const readers = [];

// // //     files.forEach((file) => {
// // //       const reader = new FileReader();
// // //       reader.onload = () => {
// // //         readers.push(reader.result);
// // //         if (readers.length === files.length) {
// // //           setProfile((prev) => ({
// // //             ...prev,
// // //             images: [...(prev.images || []), ...readers],
// // //           }));
// // //         }
// // //       };
// // //       reader.readAsDataURL(file);
// // //     });
// // //   };

// // //   const handleSave = (e) => {
// // //     e.preventDefault();
// // //     localStorage.setItem("brandProfile", JSON.stringify(profile));
// // //     setIsEditing(false);
// // //   };

// // //   const handleEdit = () => setIsEditing(true);

// // //   const handleRemoveImage = (index) => {
// // //     const updated = profile.images.filter((_, i) => i !== index);
// // //     setProfile({ ...profile, images: updated });
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-grayCustom text-white px-6 py-10">
// // //       <div className="w-full max-w-5xl bg-black flex flex-col md:flex-row items-center md:items-start bg-[#1a1a1a] border border-black rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 gap-10">
// // //         {/* ===== Left Side: Images Section ===== */}
// // //         <div className="w-full md:w-1/2 flex flex-col items-center">
// // //           <h2 className="text-3xl font-extrabold text-red-500 mb-4 tracking-wide self-start">
// // //             Brand Gallery
// // //           </h2>

// // //           {profile.images?.length > 0 ? (
// // //             <div className="grid grid-cols-2 gap-4 w-full">
// // //               {profile.images.map((img, i) => (
// // //                 <div key={i} className="relative group">
// // //                   <img
// // //                     src={img}
// // //                     alt={`Brand ${i}`}
// // //                     className="w-full h-48 object-cover rounded-xl border-2 border-red-600 shadow-lg group-hover:scale-105 transition-transform duration-300"
// // //                   />
// // //                   {isEditing && (
// // //                     <button
// // //                       type="button"
// // //                       onClick={() => handleRemoveImage(i)}
// // //                       className="absolute -top-2 -right-2 bg-red-600 text-white text-sm rounded-full px-2 hover:bg-white hover:text-black transition"
// // //                     >
// // //                       ✕
// // //                     </button>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           ) : (
// // //             <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-white rounded-xl text-gray-400 text-center">
// // //               No images uploaded yet
// // //             </div>
// // //           )}

// // //           {isEditing && (
// // //             <input
// // //               type="file"
// // //               accept="image/*"
// // //               multiple
// // //               onChange={handleImagesChange}
// // //               className="mt-5 w-full text-sm cursor-pointer border border-red-600 rounded-lg bg-black p-2 hover:bg-red-600 hover:text-white transition"
// // //             />
// // //           )}
// // //         </div>

// // //         {/* ===== Right Side: Profile Section ===== */}
// // //         <div className="w-full md:w-1/2 flex flex-col justify-center">
// // //           <h2 className="text-4xl font-extrabold text-center md:text-left mb-6 text-red-500">
// // //             Brand Profile
// // //           </h2>

// // //           {isEditing ? (
// // //             <form
// // //               onSubmit={handleSave}
// // //               className="flex flex-col gap-5 text-lg font-medium"
// // //             >
// // //               <input
// // //                 type="text"
// // //                 name="name"
// // //                 placeholder="Your Name"
// // //                 value={profile.name}
// // //                 onChange={handleChange}
// // //                 className="p-3 rounded-lg border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // //                 required
// // //               />

// // //               <input
// // //                 type="text"
// // //                 name="company"
// // //                 placeholder="Company Name"
// // //                 value={profile.company}
// // //                 onChange={handleChange}
// // //                 className="p-3 rounded-lg border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // //                 required
// // //               />

// // //               <input
// // //                 type="text"
// // //                 name="website"
// // //                 placeholder="Company Website (https://...)"
// // //                 value={profile.website}
// // //                 onChange={handleChange}
// // //                 className="p-3 rounded-lg border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // //               />

// // //               <input
// // //                 type="text"
// // //                 name="location"
// // //                 placeholder="Company Location"
// // //                 value={profile.location}
// // //                 onChange={handleChange}
// // //                 className="p-3 rounded-lg border border-red-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
// // //                 required
// // //               />

// // //               <button
// // //                 type="submit"
// // //                 className="mt-4 bg-red-600 py-2.5 font-bold rounded-lg hover:bg-white hover:text-black transition text-lg"
// // //               >
// // //                 Save Profile
// // //               </button>
// // //             </form>
// // //           ) : (
// // //             <div className="space-y-3 text-lg font-semibold tracking-wide">
// // //               <p>
// // //                 <span className="text-red-500 font-bold">Name:</span>{" "}
// // //                 {profile.name || "N/A"}
// // //               </p>
// // //               <p>
// // //                 <span className="text-red-500 font-bold">Company:</span>{" "}
// // //                 {profile.company || "N/A"}
// // //               </p>
// // //               <p>
// // //                 <span className="text-red-500 font-bold">Location:</span>{" "}
// // //                 {profile.location || "N/A"}
// // //               </p>

// // //               {profile.website && (
// // //                 <p>
// // //                   <a
// // //                     href={profile.website}
// // //                     target="_blank"
// // //                     rel="noreferrer"
// // //                     className="text-red-500 underline hover:text-white"
// // //                   >
// // //                     Visit Website ↗
// // //                   </a>
// // //                 </p>
// // //               )}

// // //               <button
// // //                 onClick={handleEdit}
// // //                 className="mt-6 bg-red-600 px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-black transition text-lg"
// // //               >
// // //                 Edit Profile
// // //               </button>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BrandProfile;

// // import React, { useState, useEffect } from "react";

// // const BrandProfile = () => {
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [profile, setProfile] = useState({
// //     name: "",
// //     company: "",
// //     website: "",
// //     location: "",
// //     images: [],
// //   });

// //   // Load saved profile
// //   useEffect(() => {
// //     const saved = JSON.parse(localStorage.getItem("brandProfile"));
// //     if (saved) setProfile(saved);
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setProfile({ ...profile, [name]: value });
// //   };

// //   const handleImagesChange = (e) => {
// //     const files = Array.from(e.target.files);
// //     const readers = [];

// //     files.forEach((file) => {
// //       const reader = new FileReader();
// //       reader.onload = () => {
// //         readers.push(reader.result);
// //         if (readers.length === files.length) {
// //           setProfile((prev) => ({
// //             ...prev,
// //             images: [...(prev.images || []), ...readers],
// //           }));
// //         }
// //       };
// //       reader.readAsDataURL(file);
// //     });
// //   };

// //   const handleSave = (e) => {
// //     e.preventDefault();
// //     localStorage.setItem("brandProfile", JSON.stringify(profile));
// //     setIsEditing(false);
// //   };

// //   const handleEdit = () => setIsEditing(true);

// //   const handleRemoveImage = (index) => {
// //     const updated = profile.images.filter((_, i) => i !== index);
// //     setProfile({ ...profile, images: updated });
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-grayCustom text-gray-400 px-6 py-10">
// //       <div className="w-full max-w-5xl bg-secondary flex flex-col md:flex-row items-center  md:items-start border border-black rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 gap-10">
// //         {/* ===== Left Side: Images Section ===== */}
// //           <div className="w-full md:w-1/2 flex flex-col items-center justify-center">

// //           {profile.images?.length > 0 ? (
// //             <div className="grid grid-cols-2 gap-4 w-full">
// //               {profile.images.map((img, i) => (
// //                 <div key={i} className="relative group">
// //                   <img
// //                     src={img}
// //                     alt={`Brand ${i}`}
// //                     className="w-full h-48 object-cover rounded-xl border-2 border-primary shadow-lg group-hover:scale-105 transition-transform duration-300"
// //                   />
// //                   {isEditing && (
// //                     <button
// //                       type="button"
// //                       onClick={() => handleRemoveImage(i)}
// //                       className="absolute -top-2 -right-2 bg-primary text-gray-500 text-sm rounded-full px-2 hover:bg-lightRed hover:text-black transition"
// //                     >
// //                     </button>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-lightRed rounded-xl text-gray-400 text-center">
// //               No images uploaded yet
// //             </div>
// //           )}

// //           {isEditing && (
// //             <input
// //               type="file"
// //               accept="image/*"
// //               multiple
// //               onChange={handleImagesChange}
// //               className="mt-5 w-full text-sm cursor-pointer border border-primary rounded-lg bg-secondary p-2 hover:bg-primary hover:text-white transition"
// //             />
// //           )}
// //         </div>

// //         {/* ===== Right Side: Profile Section ===== */}
// //         <div className="w-full md:w-1/2 flex flex-col justify-center">
// //           <h2 className="text-4xl font-extrabold text-center md:text-left mb-6 text-primary">
// //             Brand Profile
// //           </h2>

// //           {isEditing ? (
// //             <form
// //               onSubmit={handleSave}
// //               className="flex flex-col gap-5 text-lg font-medium"
// //             >
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Your Name"
// //                 value={profile.name}
// //                 onChange={handleChange}
// //                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
// //                 required
// //               />

// //               <input
// //                 type="text"
// //                 name="company"
// //                 placeholder="Company Name"
// //                 value={profile.company}
// //                 onChange={handleChange}
// //                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
// //                 required
// //               />

// //               <input
// //                 type="text"
// //                 name="website"
// //                 placeholder="Company Website (https://...)"
// //                 value={profile.website}
// //                 onChange={handleChange}
// //                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
// //               />

// //               <input
// //                 type="text"
// //                 name="location"
// //                 placeholder="Company Location"
// //                 value={profile.location}
// //                 onChange={handleChange}
// //                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
// //                 required
// //               />

// //               <button
// //                 type="submit"
// //                 className="mt-4 bg-primary py-2.5 font-bold rounded-lg hover:bg-lightRed hover:text-white transition text-lg"
// //               >
// //                 Save Profile
// //               </button>
// //             </form>
// //           ) : (
// //             <div className="space-y-3 text-lg font-semibold tracking-wide">
// //               <p>
// //                 <span className="text-primary font-bold">Name:</span>{" "}
// //                 {profile.name || "N/A"}
// //               </p>
// //               <p>
// //                 <span className="text-primary font-bold">Company:</span>{" "}
// //                 {profile.company || "N/A"}
// //               </p>
// //               <p>
// //                 <span className="text-primary font-bold">Location:</span>{" "}
// //                 {profile.location || "N/A"}
// //               </p>

// //               {profile.website && (
// //                 <p>
// //                   <a
// //                     href={profile.website}
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     className="text-primary underline hover:text-lightRed"
// //                   >
// //                     Visit Website ↗
// //                   </a>
// //                 </p>
// //               )}

// //               <button
// //                 onClick={handleEdit}
// //                 className="mt-6 bg-primary px-6 py-2 rounded-lg font-bold hover:bg-lightRed hover:text-white transition text-lg"
// //               >
// //                 Edit Profile
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BrandProfile;

// import React, { useState, useEffect } from "react";

// const BrandProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     name: "",
//     company: "",
//     website: "",
//     location: "",
//     images: [],
//   });

//   // Load saved profile
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("brandProfile"));
//     if (saved) setProfile(saved);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleImagesChange = (e) => {
//     const files = Array.from(e.target.files);
//     const readers = [];

//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         readers.push(reader.result);
//         if (readers.length === files.length) {
//           setProfile((prev) => ({
//             ...prev,
//             images: [...(prev.images || []), ...readers],
//           }));
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     localStorage.setItem("brandProfile", JSON.stringify(profile));
//     setIsEditing(false);
//   };

//   const handleEdit = () => setIsEditing(true);

//   const handleRemoveImage = (index) => {
//     const updated = profile.images.filter((_, i) => i !== index);
//     setProfile({ ...profile, images: updated });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-grayCustom text-gray-400 px-6 py-10">
//       <div className="w-full max-w-5xl bg-secondary flex flex-col md:flex-row items-center md:items-start border border-black rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 gap-10">

//         {/* ===== Left Side: Images Section ===== */}
//         <div className="w-full md:w-1/2 flex items-center justify-center text-center">
//           <div className="flex flex-col items-center justify-center w-full">
//             {profile.images?.length > 0 ? (
//               <div
//                 className={`grid gap-4 w-full ${
//                   profile.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
//                 }`}
//               >
//                 {profile.images.map((img, i) => (
//                   // use "group" so children can respond to hover on the image container
//                   <div key={i} className="relative group">
//                     <img
//                       src={img}
//                       alt={`Brand ${i}`}
//                       className="w-full h-48 object-cover rounded-xl border-2 border-primary shadow-lg group-hover:scale-105 transition-transform duration-300"
//                     />

//                     {/* Delete button: hidden by default, appears on hover (and still shows only in edit mode) */}
//                     {isEditing && (
//                       <button
//                         type="button"
//                         onClick={() => handleRemoveImage(i)}
//                         aria-label={`Remove image ${i + 1}`}
//                         className="absolute -top-2 -right-2 bg-primary text-white text-sm rounded-full px-2 py-1
//                                    opacity-0 group-hover:opacity-100 transition-opacity duration-200
//                                    pointer-events-none group-hover:pointer-events-auto
//                                    focus:opacity-100 focus:pointer-events-auto"
//                       >
//                         ✕
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-lightRed rounded-xl text-gray-400 text-center">
//                 No images uploaded yet
//               </div>
//             )}

//             {isEditing && (
//               <input
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleImagesChange}
//                 className="mt-5 w-full text-sm cursor-pointer border border-primary rounded-lg bg-secondary p-2 hover:bg-primary hover:text-white transition"
//               />
//             )}
//           </div>
//         </div>

//         {/* ===== Right Side: Profile Section ===== */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center">
//           <h2 className="text-4xl font-extrabold text-center md:text-left mb-6 text-primary">
//             Brand Profile
//           </h2>

//           {isEditing ? (
//             <form
//               onSubmit={handleSave}
//               className="flex flex-col gap-5 text-lg font-medium"
//             >
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={profile.name}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
//                 required
//               />

//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Company Name"
//                 value={profile.company}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
//                 required
//               />

//               <input
//                 type="text"
//                 name="website"
//                 placeholder="Company Website (https://...)"
//                 value={profile.website}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
//               />

//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Company Location"
//                 value={profile.location}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
//                 required
//               />

//               <button
//                 type="submit"
//                 className="mt-4 bg-primary py-2.5 font-bold rounded-lg hover:bg-lightRed hover:text-white transition text-lg"
//               >
//                 Save Profile
//               </button>
//             </form>
//           ) : (
//             <div className="space-y-3 text-lg font-semibold tracking-wide">
//               <p>
//                 <span className="text-primary font-bold">Name:</span>{" "}
//                 {profile.name || "N/A"}
//               </p>
//               <p>
//                 <span className="text-primary font-bold">Company:</span>{" "}
//                 {profile.company || "N/A"}
//               </p>
//               <p>
//                 <span className="text-primary font-bold">Location:</span>{" "}
//                 {profile.location || "N/A"}
//               </p>

//               {profile.website && (
//                 <p>
//                   <a
//                     href={profile.website}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-primary underline hover:text-lightRed"
//                   >
//                     Visit Website ↗
//                   </a>
//                 </p>
//               )}

//               <button
//                 onClick={handleEdit}
//                 className="mt-6 bg-primary px-6 py-2 rounded-lg font-bold hover:bg-lightRed hover:text-white transition text-lg"
//               >
//                 Edit Profile
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandProfile;

// import React, { useState, useEffect } from "react";

// const BrandProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     name: "",
//     company: "",
//     website: "",
//     location: "",
//     images: [],
//   });

//   // Load saved profile
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("brandProfile"));
//     if (saved) setProfile(saved);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleImagesChange = (e) => {
//     const files = Array.from(e.target.files);
//     const readers = [];

//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         readers.push(reader.result);
//         if (readers.length === files.length) {
//           setProfile((prev) => ({
//             ...prev,
//             images: [...(prev.images || []), ...readers],
//           }));
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     localStorage.setItem("brandProfile", JSON.stringify(profile));
//     setIsEditing(false);
//   };

//   const handleEdit = () => setIsEditing(true);

//   const handleRemoveImage = (index) => {
//     const updated = profile.images.filter((_, i) => i !== index);
//     setProfile({ ...profile, images: updated });
//   };

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BrandProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     name: "",
//     company: "",
//     website: "",
//     location: "",
//     images: [],
//   });

//   // Load profile from backend
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:5000/api/brand/me", {
//           withCredentials: true,
//         });
//         setProfile(data);
//       } catch (err) {
//         console.error("Failed to fetch profile:", err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleImagesChange = (e) => {
//     const files = Array.from(e.target.files);
//     const readers = [];
//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         readers.push(reader.result);
//         if (readers.length === files.length) {
//           setProfile((prev) => ({ ...prev, images: [...(prev.images || []), ...readers] }));
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:5000/api/brand",
//         profile,
//         { withCredentials: true }
//       );
//       setProfile(data);
//       setIsEditing(false);
//     } catch (err) {
//       console.error("Failed to save profile:", err);
//     }
//   };

//   const handleEdit = () => setIsEditing(true);
//   const handleRemoveImage = (index) => {
//     const updated = profile.images.filter((_, i) => i !== index);
//     setProfile({ ...profile, images: updated });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-grayCustom text-gray-400 px-6 py-10">
//       <div className="w-full max-w-5xl bg-secondary flex flex-col md:flex-row items-center md:items-start border border-black rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 gap-10">
//         {/* ===== Left Side: Images Section ===== */}
//         <div className="w-full md:w-1/2 flex items-center justify-center text-center">
//           <div className="flex flex-col items-center justify-center w-full">
//             {profile.images?.length > 0 ? (
//               <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
//                 {profile.images.map((img, i) => (
//                   <div key={i} className="relative group">
//                     <img
//                       src={img}
//                       alt={`Brand ${i}`}
//                       className="w-full h-48 object-cover rounded-xl border-2 border-primary shadow-lg group-hover:scale-105 transition-transform duration-300"
//                     />

//                     {/* ✖ Delete button appears only on hover */}
//                     {isEditing && (
//                       <button
//                         type="button"
//                         onClick={() => handleRemoveImage(i)}
//                         aria-label={`Remove image ${i + 1}`}
//                         className="absolute -top-2 -right-2 bg-primary text-white text-sm rounded-full px-2 py-1
//                                    opacity-0 group-hover:opacity-100 transition-opacity duration-200
//                                    pointer-events-none group-hover:pointer-events-auto
//                                    focus:opacity-100 focus:pointer-events-auto"
//                       >
//                         ✖
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-lightRed rounded-xl text-gray-400 text-center">
//                 No images uploaded yet
//               </div>
//             )}

//             {isEditing && (
//               <input
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleImagesChange}
//                 className="mt-5 w-full text-sm cursor-pointer border border-primary rounded-lg bg-secondary p-2 hover:bg-primary hover:text-white transition"
//               />
//             )}
//           </div>
//         </div>

//         {/* ===== Right Side: Profile Section ===== */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center">
//           <h2 className="text-4xl font-extrabold text-center md:text-left mb-6 text-primary">
//             Brand Profile
//           </h2>

//           {isEditing ? (
//             <form
//               onSubmit={handleSave}
//               className="flex flex-col gap-5 text-lg font-medium"
//             >
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={profile.name}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
//                 required
//               />

//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Company Name"
//                 value={profile.company}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
//                 required
//               />

//               <input
//                 type="text"
//                 name="website"
//                 placeholder="Company Website (https://...)"
//                 value={profile.website}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
//               />

//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Company Location"
//                 value={profile.location}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
//                 required
//               />

//               <button
//                 type="submit"
//                 className="mt-4 bg-primary py-2.5 font-bold rounded-lg hover:bg-lightRed hover:text-white transition text-lg"
//               >
//                 Save Profile
//               </button>
//             </form>
//           ) : (
//             <div className="space-y-3 text-lg font-semibold tracking-wide">
//               <p>
//                 <span className="text-primary font-bold">Name:</span>{" "}
//                 {profile.name || "N/A"}
//               </p>
//               <p>
//                 <span className="text-primary font-bold">Company:</span>{" "}
//                 {profile.company || "N/A"}
//               </p>
//               <p>
//                 <span className="text-primary font-bold">Location:</span>{" "}
//                 {profile.location || "N/A"}
//               </p>

//               {profile.website && (
//                 <p>
//                   <a
//                     href={profile.website}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-primary underline hover:text-lightRed"
//                   >
//                     Visit Website ↗
//                   </a>
//                 </p>
//               )}

//               <button
//                 onClick={handleEdit}
//                 className="mt-6 bg-primary px-6 py-2 rounded-lg font-bold hover:bg-lightRed hover:text-white transition text-lg"
//               >
//                 Edit Profile
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandProfile;

import React, { useState, useEffect } from "react";
import axios from "axios";

const BrandProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    company: "",
    website: "",
    location: "",
    images: [],
  });

  // Fetch profile on load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // get JWT token
        if (!token) return;

        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/brand/me`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        setProfile(data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((images) => {
        setProfile((prev) => ({
          ...prev,
          images: [...images], // replace current images with new ones or [...prev.images, ...images] to append
        }));
      })
      .catch((err) => console.error("Error reading files:", err));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("You must be logged in!");

      // const { data } = await axios.post(
      //   "http://localhost:5000/api/brand",
      //   profile,
      //   { headers: { Authorization: `Bearer ${token}` } }
      // );

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/brand`,
        profile,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setProfile(data);
      setIsEditing(false);
    } catch (err) {
      console.error("Failed to save profile:", err);
    }
  };

  const handleEdit = () => setIsEditing(true);

  const handleRemoveImage = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("You must be logged in!");

      // const { data } = await axios.delete(
      //   `http://localhost:5000/api/brand/image/${id}`, // send ID instead of index
      //   { headers: { Authorization: `Bearer ${token}` } }
      // );

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/brand`,
        profile,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setProfile(data);
    } catch (err) {
      console.error("Failed to delete image:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-grayCustom text-gray-400 px-6 py-10">
      <div className="w-full max-w-5xl bg-secondary flex flex-col md:flex-row items-center md:items-start border border-black rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 gap-10">
        {/* ===== Left Side: Images Section ===== */}
        <div className="w-full md:w-1/2 flex items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center w-full">
            {profile.images?.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
                {profile.images.map((img, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={img}
                      alt={`Brand ${i}`}
                      className="w-full h-48 object-cover rounded-xl border-2 border-primary shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    {isEditing && (
                      //    <button
                      //      type="button"
                      //    onClick={() => handleRemoveImage(i)}
                      //     aria-label={`Remove image ${i + 1}`}
                      //      className="absolute -top-2 -right-2 bg-primary text-white text-sm rounded-full px-2 py-1
                      //                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      //                pointer-events-none group-hover:pointer-events-auto
                      //                focus:opacity-100 focus:pointer-events-auto cursor-pointer"
                      //    >
                      //      &times;
                      //  </button>

                      <button
                        type="button"
                        onClick={() => handleRemoveImage(i)}
                        aria-label={`Remove image ${i + 1}`}
                        className="absolute -top-2 -right-2 bg-red-600 text-white text-lg rounded-full w-6 h-6 flex items-center justify-center
               z-20 cursor-pointer hover:scale-110 transition-transform"
                      >
                        &times;
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-lightRed rounded-xl text-gray-400 text-center">
                No images uploaded yet
              </div>
            )}

            {isEditing && (
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImagesChange}
                className="mt-5 w-full text-sm cursor-pointer border border-primary rounded-lg bg-secondary p-2 hover:bg-primary hover:text-white transition"
              />
            )}
          </div>
        </div>

        {/* ===== Right Side: Profile Section ===== */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-center md:text-left mb-6 text-primary">
            Brand Profile
          </h2>

          {isEditing ? (
            <form
              onSubmit={handleSave}
              className="flex flex-col gap-5 text-lg font-medium"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={profile.name}
                onChange={handleChange}
                className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={profile.company}
                onChange={handleChange}
                className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="text"
                name="website"
                placeholder="Company Website (https://...)"
                value={profile.website}
                onChange={handleChange}
                className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                name="location"
                placeholder="Company Location"
                value={profile.location}
                onChange={handleChange}
                className="p-3 rounded-lg border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="mt-4 bg-primary py-2.5 font-bold rounded-lg hover:bg-lightRed hover:text-white transition text-lg"
              >
                Save Profile
              </button>
            </form>
          ) : (
            <div className="space-y-3 text-lg font-semibold tracking-wide">
              <p>
                <span className="text-primary font-bold">Name:</span>{" "}
                {profile.name || "N/A"}
              </p>
              <p>
                <span className="text-primary font-bold">Company:</span>{" "}
                {profile.company || "N/A"}
              </p>
              <p>
                <span className="text-primary font-bold">Location:</span>{" "}
                {profile.location || "N/A"}
              </p>
              {profile.website && (
                <p>
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline hover:text-lightRed"
                  >
                    Visit Website ↗
                  </a>
                </p>
              )}
              <button
                onClick={handleEdit}
                className="mt-6 bg-primary px-6 py-2 rounded-lg font-bold hover:bg-lightRed hover:text-white transition text-lg"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandProfile;
