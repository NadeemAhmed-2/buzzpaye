// export default function Home() {
//   return (
//     <div className="p-8 text-center bg-grayCustom min-h-[80vh] text-white">
//       <br />
//       <br />
//       <h1 className="text-4xl font-extrabold mb-4 text-primary">
//         Welcome to BuzzPaye
//       </h1>
//       <p className="text-lg text-white/80">
//         Connect Brands & Influencers for bold and impactful campaigns.
//       </p>
//       <div className="mt-6">
//         <a
//           href="/register"
//           className="bg-primary hover:bg-lightRed text-white px-6 py-3 rounded-lg font-bold transition"
//         >
//           Get Started
//         </a>
//       </div>
//       <br />
//       <br />
//     </div>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import HomeImage from "../assets/Homepage.png"; // Ensure you have an appropriate image in the assets folder

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/register"); // Navigate to Register page
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12
//                     bg-grayCustom animate-fadeIn text-gray-400"
//     >
//       {/* Left Side Image */}
//       <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
//         <img
//           src={HomeImage}
//           alt="BuzzPaye"
//           className="rounded-xl shadow-lg w-full max-w-md object-cover transform hover:scale-105 transition duration-500"
//         />
//       </div>

//       {/* Right Side Content */}
//       <div className="md:w-1/2 md:pl-12 flex flex-col items-start">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-wide">
//           Welcome to BuzzPaye
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mb-6">
//           Discover top influencers, create campaigns, and reach your audience
//           like never before. BuzzPaye is your all-in-one platform to connect
//           brands with the perfect influencers.
//         </p>
//         <button
//           onClick={handleGetStarted}
//           className="bg-primary hover:bg-lightRed text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//         >
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import HomeImage from "../assets/Homepage.png"; // Make sure this image exists

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/register");
//   };

//   const handleSeeHowItWorks = () => {
//     navigate("/how-it-works");
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-grayCustom text-white"
//     >
//       {/* Left Side Text */}
//       <div className="md:w-1/2 flex flex-col items-start space-y-6">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-snug">
//           Find Your Perfect Influencer. Launch Your Campaign
//         </h1>
//         <p className="text-lg md:text-xl text-gray-400 max-w-lg">
//           BuzzPaye’s AI-powered platform connects you with authentic creators,
//           manages campaigns, and tracks every conversion. All in one place.
//         </p>

//         <div className="flex gap-4">
//           <button
//             onClick={handleGetStarted}
//             className="bg-primary hover:bg-[rgb(250,122,35)] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//           >
//             Get Started Free
//           </button>
//           {/* <button
//             onClick={handleSeeHowItWorks}
//             className="border border-[#E96230] text-[#E96230] hover:bg-[rgb(250,122,35)] hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
//           >
//             See How It Works
//           </button> */}
//         </div>
//       </div>

//       {/* Right Side Image */}
//       <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
//         <img
//           src={HomeImage}
//           alt="BuzzPaye Platform Preview"
//           className="w-full max-w-lg rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import HomeImage from "../assets/Homepage.png"; // Ensure this image exists

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/register");
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-grayCustom text-white">
//       {/* Left Side Text */}
//       <div className="md:w-1/2 flex flex-col items-start space-y-6">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-snug">
//           Find Your Perfect Influencer. Launch Your Campaign
//         </h1>
//         <p className="text-lg md:text-xl text-gray-400 max-w-lg">
//           BuzzPaye’s AI-powered platform connects you with authentic creators,
//           manages campaigns, and tracks every conversion. All in one place.
//         </p>

//         <div className="flex gap-4">
//           <button
//             onClick={handleGetStarted}
//             className="bg-primary hover:bg-[rgb(250,122,35)] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//           >
//             Get Started Free
//           </button>
//         </div>
//       </div>

//       {/* Right Side Image */}
//       <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
//         <img
//           src={HomeImage}
//           alt="BuzzPaye Platform Preview"
//           className="
//             w-[80%]                 /* Slightly smaller */
//             max-w-md
//             rounded-2xl
//             shadow-lg
//             transition-all
//             duration-500
//             transform
//             hover:scale-105
//             hover:shadow-[0_0_25px_rgba(233,98,48,0.7)]   /* Glowing primary border */
//             hover:border-2
//             hover:border-primary
//           "
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import HomeImage from "../assets/Homepage.png"; // Ensure this image exists

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/register");
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-grayCustom text-white">
//       {/* Left Side Text */}
//       <div className="md:w-1/2 flex flex-col items-start space-y-6">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-snug">
//           Find Your Perfect Influencer. Launch Your Campaign
//         </h1>
//         <p className="text-lg md:text-xl text-gray-400 max-w-lg">
//           BuzzPaye’s AI-powered platform connects you with authentic creators,
//           manages campaigns, and tracks every conversion. All in one place.
//         </p>

//         <div className="flex gap-4">
//           <button
//             onClick={handleGetStarted}
//             className="bg-primary hover:bg-[rgb(250,122,35)] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//           >
//             Get Started Free
//           </button>
//         </div>
//       </div>

//       {/* Right Side Image */}
//       <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
//         <img
//           src={HomeImage}
//           alt="BuzzPaye Platform Preview"
//           className="
//             w-[78%]                      /* Slightly smaller */
//             max-w-md
//             rounded-2xl
//             transition-all
//             duration-500
//             transform
//             hover:scale-105
//             shadow-lg
//             hover:shadow-[0_0_45px_10px_rgba(233,98,48,0.7)] /* Glowy aura only */
//             hover:brightness-110
//           "
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import HomeImage from "../assets/Homepage.png"; // Ensure this image exists
// import "../styles/glow.css"; // <-- We'll create this small CSS file

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/register");
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-grayCustom text-white">
//       {/* Left Side Text */}
//       <div className="md:w-1/2 flex flex-col items-start space-y-6">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-snug">
//           Find Your Perfect Influencer. Launch Your Campaign
//         </h1>
//         <p className="text-lg md:text-xl text-gray-400 max-w-lg">
//           BuzzPaye’s AI-powered platform connects you with authentic creators,
//           manages campaigns, and tracks every conversion. All in one place.
//         </p>

//         <div className="flex gap-4">
//           <button
//             onClick={handleGetStarted}
//             className="bg-primary hover:text-black hover:bg-white text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//           >
//             Get Started Free
//           </button>
//         </div>
//       </div>

//       {/* Right Side Image */}
//       <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
//         <img
//           src={HomeImage}
//           alt="BuzzPaye Platform Preview"
//           className="
//             w-[78%]
//             max-w-md
//             rounded-2xl
//             transition-all
//             duration-500
//             transform
//             hover:scale-105
//             glow-hover
//           "
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ClipboardList, Users, Mail, CheckCircle } from "lucide-react";
// import HomeImage from "../assets/Homepage.png";
// import "../styles/glow.css";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/register");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-between bg-[#0d0d0d] text-white">
//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 w-full">
//         {/* Left Side Text */}
//         <div className="md:w-1/2 flex flex-col items-start space-y-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-[#fa7a23] leading-snug">
//             Find Your Perfect Influencer. Launch Your Campaign
//           </h1>
//           <p className="text-lg md:text-xl text-gray-400 max-w-lg">
//             BuzzPaye’s AI-powered platform connects you with authentic creators,
//             manages campaigns, and tracks every conversion — all in one place.
//           </p>

//           <button
//             onClick={handleGetStarted}
//             className="bg-[#fa7a23] hover:bg-[#ff8c42] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//           >
//             Get Started Free
//           </button>
//         </div>

//         {/* Right Side Image */}
//         <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
//           <img
//             src={HomeImage}
//             alt="BuzzPaye Platform Preview"
//             className="w-[78%] max-w-md rounded-2xl transition-all duration-500 transform hover:scale-105 glow-hover"
//           />
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <div className="w-full bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
//         <h2 className="text-4xl font-extrabold text-[#fa7a23] mb-4">
//           How It Works
//         </h2>
//         <p className="text-gray-400 mb-12">
//           Here’s how <span className="text-[#fa7a23] font-semibold">BuzzPaye</span> streamlines your influencer marketing:
//         </p>

//         {/* Steps Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
//           {/* Step 1 */}
//           <div className="border border-[#fa7a23] rounded-2xl p-6 shadow-[0_0_10px_#fa7a23aa] hover:shadow-[0_0_20px_#fa7a23cc] transition-all duration-300">
//             <div className="flex justify-center mb-4">
//               <ClipboardList size={50} className="text-[#fa7a23]" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               1. Brand Creates Campaign
//             </h3>
//           </div>

//           {/* Connector Line */}
//           <div className="hidden md:flex absolute top-[50%] left-[25%] w-[50%] border-t-2 border-dotted border-[#fa7a23]" />

//           {/* Step 2 */}
//           <div className="border border-[#fa7a23] rounded-2xl p-6 shadow-[0_0_10px_#fa7a23aa] hover:shadow-[0_0_20px_#fa7a23cc] transition-all duration-300">
//             <div className="flex justify-center mb-4">
//               <Users size={50} className="text-[#fa7a23]" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               2. BuzzPaye Suggests Influencers
//             </h3>
//           </div>

//           {/* Step 3 */}
//           <div className="border border-[#fa7a23] rounded-2xl p-6 shadow-[0_0_10px_#fa7a23aa] hover:shadow-[0_0_20px_#fa7a23cc] transition-all duration-300">
//             <div className="flex justify-center mb-4">
//               <Mail size={50} className="text-[#fa7a23]" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               3. Send Invite & Collaborate
//             </h3>
//           </div>

//           {/* Step 4 */}
//           <div className="border border-[#fa7a23] rounded-2xl p-6 shadow-[0_0_10px_#fa7a23aa] hover:shadow-[0_0_20px_#fa7a23cc] transition-all duration-300">
//             <div className="flex justify-center mb-4">
//               <CheckCircle size={50} className="text-[#fa7a23]" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               4. Influencers Accept & Collaborate
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ClipboardList, Users, Mail, CheckCircle } from "lucide-react";
// import HomeImage from "../assets/Homepage.png";
// import "../styles/glow.css";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/register");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-between bg-grayCustom text-white">
//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 w-full">
//         {/* Left Side Text */}
//         <div className="md:w-1/2 flex flex-col items-start space-y-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-snug">
//             Find Your Perfect Influencer. Launch Your Campaign
//           </h1>
//           <p className="text-lg md:text-xl text-gray-400 max-w-lg">
//             BuzzPaye’s AI-powered platform connects you with authentic creators,
//             manages campaigns, and tracks every conversion — all in one place.
//           </p>

//           <button
//             onClick={handleGetStarted}
//             className="bg-primary hover:bg-lightRed text-white font-bold py-3 px-6 rounded-lg glow-hover"
//           >
//             Get Started Free
//           </button>
//         </div>

//         {/* Right Side Image */}
//         <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
//           <img
//             src={HomeImage}
//             alt="BuzzPaye Platform Preview"
//             className="w-[78%] max-w-md rounded-2xl transition-all duration-500 transform hover:scale-105 glow-border"
//           />
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <div className="w-full bg-grayCustom text-white py-16 px-6 md:px-20">
//         <h2 className="text-4xl font-extrabold text-primary mb-4">
//           How It Works
//         </h2>
//         <p className="text-gray-400 mb-12">
//           Here’s how <span className="text-primary font-semibold">BuzzPaye</span> streamlines your influencer marketing:
//         </p>

//         {/* Steps Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
//           {/* Step 1 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <ClipboardList size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               1. Brand Creates Campaign
//             </h3>
//           </div>

//           {/* Connector Line */}
//           <div className="hidden md:flex absolute top-[50%] left-[25%] w-[50%] border-t-2 border-dotted border-primary" />

//           {/* Step 2 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <Users size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               2. BuzzPaye Suggests Influencers
//             </h3>
//           </div>

//           {/* Step 3 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <Mail size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               3. Send Invite & Collaborate
//             </h3>
//           </div>

//           {/* Step 4 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <CheckCircle size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               4. Influencers Accept & Collaborate
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ClipboardList, Users, Mail, CheckCircle } from "lucide-react";
// import HomeImage from "../assets/Homepage.png";
// import "../styles/glow.css";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/register");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-between bg-grayCustom text-white">
//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 w-full">
//         {/* Left Side Text */}
//         <div className="md:w-1/2 flex flex-col items-start space-y-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-snug">
//             Find Your Perfect Influencer. Launch Your Campaign
//           </h1>
//           <p className="text-lg md:text-xl text-gray-400 max-w-lg">
//             BuzzPaye’s AI-powered platform connects you with authentic creators,
//             manages campaigns, and tracks every conversion — all in one place.
//           </p>

//           <button
//             onClick={handleGetStarted}
//             className="bg-primary hover:bg-lightRed text-white font-bold py-3 px-6 rounded-lg glow-hover"
//           >
//             Get Started Free
//           </button>
//         </div>

//         {/* Right Side Image */}
//         <div className="md:w-1/2 flex justify-end mt-10 md:mt-0 pr-6">
//           <img
//             src={HomeImage}
//             alt="BuzzPaye Platform Preview"
//             className="w-[95%] max-w-sm rounded-2xl transition-all duration-500 transform hover:scale-105 glow-border"
//           />
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <div className="w-full bg-grayCustom text-white py-10 px-6 md:px-20">
//         <h2 className="text-4xl font-extrabold text-primary mb-4">
//           How It Works
//         </h2>
//         <p className="text-gray-400 mb-10">
//           Here’s how{" "}
//           <span className="text-primary font-semibold">BuzzPaye</span>{" "}
//           streamlines your influencer marketing:
//         </p>

//         {/* Steps Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
//           {/* Step 1 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <ClipboardList size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               1. Brand Creates Campaign
//             </h3>
//           </div>

//           {/* Connector Line */}
//           <div className="hidden md:flex absolute top-[50%] left-[25%] w-[50%] border-t-2 border-dotted border-primary" />

//           {/* Step 2 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <Users size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               2. BuzzPaye Suggests Influencers
//             </h3>
//           </div>

//           {/* Step 3 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <Mail size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               3. Send Invite & Collaborate
//             </h3>
//           </div>

//           {/* Step 4 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <CheckCircle size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               4. Influencers Accept & Collaborate
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ClipboardList, Users, Mail, CheckCircle } from "lucide-react";
// import HomeImage from "../assets/Homepage.png";
// import "../styles/glow.css";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/register");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-between bg-grayCustom text-white">
//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 w-full">
//         {/* Left Side Text */}
//         <div className="md:w-1/2 flex flex-col items-start space-y-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-snug">
//             Find Your Perfect Influencer. Launch Your Campaign
//           </h1>
//           <p className="text-lg md:text-xl text-gray-400 max-w-lg">
//             BuzzPaye’s AI-powered platform connects you with authentic creators,
//             manages campaigns, and tracks every conversion — all in one place.
//           </p>

//           <button
//             onClick={handleGetStarted}
//             className="bg-primary hover:bg-lightRed text-white font-bold py-3 px-6 rounded-lg glow-hover"
//           >
//             Get Started Free
//           </button>
//         </div>

//         {/* Right Side Image */}
//         <div className="md:w-1/2 flex justify-end mt-10 md:mt-0 pr-6">
//           <img
//             src={HomeImage}
//             alt="BuzzPaye Platform Preview"
//             className="w-[65%] max-w-sm rounded-2xl transition-all duration-500 transform hover:scale-105 glow-border"
//           />
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <div className="w-full bg-grayCustom text-white py-10 px-6 md:px-20">
//         <h2 className="text-4xl font-extrabold text-primary mb-4">
//           How It Works
//         </h2>
//         <p className="text-gray-400 mb-10">
//           Here’s how <span className="text-primary font-semibold">BuzzPaye</span> streamlines your influencer marketing:
//         </p>

//         {/* Steps Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
//           {/* Step 1 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <ClipboardList size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               1. Brand Creates Campaign
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Set your goals, budget, and campaign details in minutes.
//             </p>
//           </div>

//           {/* Connector Line */}
//           <div className="hidden md:flex absolute top-[50%] left-[25%] w-[50%] border-t-2 border-dotted border-primary" />

//           {/* Step 2 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <Users size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               2. BuzzPaye Suggests Influencers
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Our AI matches you with the perfect creators for your brand.
//             </p>
//           </div>

//           {/* Step 3 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <Mail size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               3. Send Invite & Collaborate
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Reach out directly and start building long-term relationships.
//             </p>
//           </div>

//           {/* Step 4 */}
//           <div className="glow-card">
//             <div className="flex justify-center mb-4">
//               <CheckCircle size={50} className="text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               4. Influencers Accept & Collaborate
//             </h3>
//             <p className="text-gray-300 text-sm">
//               Track progress and measure success in real-time.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ClipboardList,
  Users,
  Mail,
  CheckCircle,
  Lock,
  MessageSquare,
  Brain,
  UserSquare2,
} from "lucide-react";
import HomeImage from "../assets/Homepage.png";
import "../styles/glow.css";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-grayCustom text-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 w-full">
        {/* Left Side Text */}
        <div className="md:w-1/2 flex flex-col items-start space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-snug">
            Find Your Perfect Influencer. Launch Your Campaign
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg">
            BuzzPaye’s AI-powered platform connects you with authentic creators,
            manages campaigns, and tracks every conversion — all in one place.
          </p>

          <button
            onClick={handleGetStarted}
            className="bg-primary hover:bg-lightRed text-white font-bold py-3 px-6 rounded-lg glow-hover"
          >
            Get Started Free
          </button>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-end mt-10 md:mt-0 pr-6">
          <img
            src={HomeImage}
            alt="BuzzPaye Platform Preview"
            className="w-[65%] max-w-sm rounded-2xl transition-all duration-500 transform hover:scale-105 glow-border"
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-grayCustom text-white py-10 px-6 md:px-20">
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          How It Works
        </h2>
        <p className="text-gray-400 mb-10">
          Here’s how{" "}
          <span className="text-primary font-semibold">BuzzPaye</span>{" "}
          streamlines your influencer marketing:
        </p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
          <div className="glow-card p-6 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800">
            <ClipboardList size={50} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">
              1. Brand Creates Campaign
            </h3>
            <p className="text-gray-400">
              Set your goals, budget, and campaign details in minutes.
            </p>
          </div>

          <div className="glow-card p-6 rounded-xl bg-gradient-to-b from-black to-gray-900 border border-gray-800">
            <Users size={50} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">
              2. BuzzPaye Suggests Influencers
            </h3>
            <p className="text-gray-400">
              Our AI matches you with the perfect creators for your brand.
            </p>
          </div>

          <div className="glow-card p-6 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800">
            <Mail size={50} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">
              3. Send Invite & Collaborate
            </h3>
            <p className="text-gray-400">
              Reach out directly and start building relationships.
            </p>
          </div>

          <div className="glow-card p-6 rounded-xl bg-gradient-to-b from-black to-gray-900 border border-gray-800">
            <CheckCircle size={50} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">
              4. Influencers Accept & Collaborate
            </h3>
            <p className="text-gray-400">
              Track progress and measure success in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Platform Features Section */}
      <div className="w-full bg-grayCustom text-white py-16 px-6 md:px-20">
        <h2 className="text-4xl font-extrabold text-primary mb-4 text-center">
          Platform Features
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover how BuzzPaye simplifies influencer marketing with intelligent
          tools, private collaborations, and seamless communication.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glow-card p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg border border-gray-800 hover:scale-[1.02] transition-transform">
            <UserSquare2 size={40} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-primary">
              A Diverse Universe of Creators
            </h3>
            <p className="text-gray-400 mb-4">
              Access thousands of verified influencers. Filter by niche, values,
              and audience to find your authentic brand voice.
            </p>
            <span className="text-primary cursor-pointer hover:underline">
              Learn more →
            </span>
          </div>

          <div className="glow-card p-8 rounded-2xl bg-gradient-to-br from-black to-gray-900 shadow-lg border border-gray-800 hover:scale-[1.02] transition-transform">
            <Brain size={40} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-primary">
              AI-Based Matching
            </h3>
            <p className="text-gray-400 mb-4">
              Our smart system analyzes your goals to recommend the most
              compatible and high-performing creators for your brand.
            </p>
            <span className="text-primary cursor-pointer hover:underline">
              Learn more →
            </span>
          </div>

          <div className="glow-card p-8 rounded-2xl bg-gradient-to-br from-black to-gray-900 shadow-lg border border-gray-800 hover:scale-[1.02] transition-transform">
            <Lock size={40} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-primary">
              Private & Confidential
            </h3>
            <p className="text-gray-400 mb-4">
              Keep your campaign details secret. Create invite-only campaigns
              visible only to the influencers you select.
            </p>
            <span className="text-primary cursor-pointer hover:underline">
              Learn more →
            </span>
          </div>

          <div className="glow-card p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg border border-gray-800 hover:scale-[1.02] transition-transform">
            <MessageSquare size={40} className="text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-primary">
              All-in-One Workflow
            </h3>
            <p className="text-gray-400 mb-4">
              Find, filter, and communicate directly. Manage your entire
              influencer relationship from one simple dashboard.
            </p>
            <span className="text-primary cursor-pointer hover:underline">
              Learn more →
            </span>
          </div>
        </div>
      </div>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
};

export default Home;
