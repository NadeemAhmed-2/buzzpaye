// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { AuthProvider } from "./context/AuthContext";
// // import { ChatProvider } from "./context/ChatContext";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import BrandDashboard from "./pages/BrandDashboard";
// // import InfluencerDashboard from "./pages/InfluencerDashboard";
// // import BrandProfile from "./pages/BrandProfile";
// // import InfluencerProfile from "./pages/InfluencerProfile";
// // import InfluencerList from "./pages/InfluencerList";
// // import InfluencerProfilePage from "./pages/InfluencerProfilePage";
// // import CampaignCreate from "./pages/CampaignCreate";
// // import ChatPage from "./pages/ChatPage";
// // import BrandRecommendations from "./pages/BrandRecommendations";
// // export default function App() {
// //   return (
// //     <AuthProvider>
// //       <ChatProvider>
// //         <Router>
// //           <div className="bg-black text-white min-h-screen">
// //             <Navbar />

// //             {/* Main content area below fixed navbar */}
// //             <div className="pt-20">
// //               <Routes>
// //                 <Route path="/" element={<Home />} />
// //                 <Route path="/login" element={<Login />} />
// //                 <Route path="/register" element={<Register />} />
// //                 <Route path="/brand-dashboard" element={<BrandDashboard />} />
// //                 <Route
// //                   path="/influencer-dashboard"
// //                   element={<InfluencerDashboard />}
// //                 />
// //                 <Route path="/influencer-list" element={<InfluencerList />} />
// //                 <Route path="/brand-profile" element={<BrandProfile />} />
// //                 <Route
// //                   path="/influencer-profile"
// //                   element={<InfluencerProfile />}
// //                 />
// //                 <Route
// //                   path="/influencer/:id"
// //                   element={<InfluencerProfilePage />}
// //                 />
// //                 <Route path="/campaign-create" element={<CampaignCreate />} />
// //                 <Route path="/chats" element={<ChatPage />} />
// //                 <Route
// //                   path="/brand/recommendations"
// //                   element={<BrandRecommendations />}
// //                 />
// //               </Routes>
// //             </div>

// //             <Footer />
// //           </div>
// //         </Router>
// //       </ChatProvider>
// //     </AuthProvider>
// //   );
// // }



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import { ChatProvider } from "./context/ChatContext";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import BrandDashboard from "./pages/BrandDashboard";
// import InfluencerDashboard from "./pages/InfluencerDashboard";
// import BrandProfile from "./pages/BrandProfile";
// import InfluencerProfile from "./pages/InfluencerProfile";
// import InfluencerList from "./pages/InfluencerList";
// import InfluencerProfilePage from "./pages/InfluencerProfilePage";
// import CampaignCreate from "./pages/CampaignCreate";
// import ChatPage from "./pages/ChatPage";
// import BrandRecommendations from "./pages/BrandRecommendations";

// export default function App() {
//   return (
//     <AuthProvider>
//       <ChatProvider>
//         <Router>
//           <div className="flex flex-col min-h-screen">
//             <Navbar />
//             <main className="flex-grow">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/brand-dashboard" element={<BrandDashboard />} />
//                 <Route
//                   path="/influencer-dashboard"
//                   element={<InfluencerDashboard />}
//                 />
//                 <Route path="/influencer-list" element={<InfluencerList />} />
//                 <Route path="/brand-profile" element={<BrandProfile />} />
//                 <Route
//                   path="/influencer-profile"
//                   element={<InfluencerProfile />}
//                 />
//                 <Route
//                   path="/influencer/:id"
//                   element={<InfluencerProfilePage />}
//                 />
//                 <Route path="/campaign-create" element={<CampaignCreate />} />
//                 <Route path="/chats" element={<ChatPage />} />
//                 <Route
//                   path="/brand/recommendations"
//                   element={<BrandRecommendations />}
//                 />
//               </Routes>
//             </main>
//             <Footer />
//           </div>
//         </Router>
//       </ChatProvider>
//     </AuthProvider>
//   );
// }



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ChatProvider } from "./context/ChatContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BrandDashboard from "./pages/BrandDashboard";
import InfluencerDashboard from "./pages/InfluencerDashboard";
import BrandProfile from "./pages/BrandProfile";
import InfluencerProfile from "./pages/InfluencerProfile";
import InfluencerList from "./pages/InfluencerList";
import InfluencerProfilePage from "./pages/InfluencerProfilePage";
import CampaignCreate from "./pages/CampaignCreate";
import ChatPage from "./pages/ChatPage";
import BrandRecommendations from "./pages/BrandRecommendations";

export default function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>

                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route
                  path="/brand-dashboard"
                  element={
                    <ProtectedRoute>
                      <BrandDashboard />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/influencer-dashboard"
                  element={
                    <ProtectedRoute>
                      <InfluencerDashboard />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/campaign-create"
                  element={
                    <ProtectedRoute>
                      <CampaignCreate />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/chats"
                  element={
                    <ProtectedRoute>
                      <ChatPage />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/brand-profile"
                  element={
                    <ProtectedRoute>
                      <BrandProfile />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/influencer-profile"
                  element={
                    <ProtectedRoute>
                      <InfluencerProfile />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/brand/recommendations"
                  element={
                    <ProtectedRoute>
                      <BrandRecommendations />
                    </ProtectedRoute>
                  }
                />

                {/* Public viewing */}
                <Route path="/influencer-list" element={<InfluencerList />} />
                <Route
                  path="/influencer/:id"
                  element={<InfluencerProfilePage />}
                />

              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ChatProvider>
    </AuthProvider>
  );
}