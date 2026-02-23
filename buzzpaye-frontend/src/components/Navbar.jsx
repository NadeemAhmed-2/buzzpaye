// // // import React from "react";
// // // import { Link, useNavigate } from "react-router-dom";

// // // const Navbar = () => {
// // //   const navigate = useNavigate();
// // //   const userRole = localStorage.getItem("userRole"); // brand or influencer
// // //   const userName = localStorage.getItem("userName");

// // //   const handleLogout = () => {
// // //     localStorage.clear();
// // //     navigate("/login");
// // //   };

// // //   return (
// // //     <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg border-b-2 border-primary">
// // //       <div
// // //         className="text-2xl font-extrabold text-primary cursor-pointer"
// // //         onClick={() => navigate("/")}
// // //       >
// // //         BuzzPaye
// // //       </div>

// // //       <div className="flex gap-6 items-center font-semibold">
// // //         <Link to="/" className="hover:text-lightRed transition">
// // //           Home
// // //         </Link>

// // //         {userRole && (
// // //           <>
// // //             <Link
// // //               to={
// // //                 userRole === "brand"
// // //                   ? "/brand-dashboard"
// // //                   : "/influencer-dashboard"
// // //               }
// // //               className="hover:text-lightRed transition"
// // //             >
// // //               Dashboard
// // //             </Link>

// // //             <Link
// // //               to={
// // //                 userRole === "brand"
// // //                   ? "/brand-profile"
// // //                   : "/influencer-profile"
// // //               }
// // //               className="hover:text-lightRed transition"
// // //             >
// // //               Profile
// // //             </Link>
// // //           </>
// // //         )}

// // //         {!userRole && (
// // //           <>
// // //             <Link
// // //               to="/register"
// // //               className="hover:text-lightRed transition"
// // //             >
// // //               Register
// // //             </Link>
// // //             <Link
// // //               to="/login"
// // //               className="hover:text-lightRed transition"
// // //             >
// // //               Login
// // //             </Link>
// // //           </>
// // //         )}

// // //         {userRole && (
// // //           <button
// // //             onClick={handleLogout}
// // //             className="bg-lightRed px-3 py-1 rounded-lg font-bold hover:bg-white hover:text-black transition"
// // //           >
// // //             Logout
// // //           </button>
// // //         )}
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const userRole = localStorage.getItem("userRole"); // "brand" or "influencer"
// //   const userName = localStorage.getItem("userName");

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate("/login");
// //   };

// //   return (
// //     <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg border-b-2 border-primary">
// //       <div
// //         className="text-2xl font-extrabold text-primary cursor-pointer"
// //         onClick={() => navigate("/")}
// //       >
// //         BuzzPaye
// //       </div>

// //       <div className="flex gap-6 items-center font-semibold">
// //         <Link to="/" className="hover:text-lightRed transition">
// //           Home
// //         </Link>

// //         <Link to="/influencer-list" className="hover:text-lightRed transition">
// //           Influencer List
// //         </Link>

// //         {userRole && (
// //           <>
// //             {/* Dashboard & Profile */}
// //             <Link
// //               to={
// //                 userRole === "brand"
// //                   ? "/brand-dashboard"
// //                   : "/influencer-dashboard"
// //               }
// //               className="hover:text-lightRed transition"
// //             >
// //               Dashboard
// //             </Link>

// //             {/* Brand only links */}
// //             {userRole === "brand" && (
// //               <>

// //                 <Link
// //                   to="/ai-recommendation"
// //                   className="hover:text-lightRed transition"
// //                 >
// //                   AI Recommendation
// //                 </Link>

// //                 <Link
// //                   to="/create-campaign"
// //                   className="hover:text-lightRed transition"
// //                 >
// //                   Create Campaign
// //                 </Link>

// //                 <Link
// //                   to={
// //                     userRole === "brand" ? "/brand-profile" : "/influencer-profile"
// //                   }
// //                   className="hover:text-lightRed transition"
// //                 >
// //                   Profile
// //                 </Link>

// //               </>
// //             )}
// //           </>
// //         )}

// //         {/* Login/Register if not logged in */}
// //         {!userRole && (
// //           <>
// //             <Link to="/register" className="hover:text-lightRed transition">
// //               Register
// //             </Link>
// //             <Link to="/login" className="hover:text-lightRed transition">
// //               Login
// //             </Link>
// //           </>
// //         )}

// //         {/* Logout button */}
// //         {userRole && (
// //           <button
// //             onClick={handleLogout}
// //             className="bg-lightRed px-3 py-1 rounded-lg font-bold hover:bg-white hover:text-black transition"
// //           >
// //             Logout
// //           </button>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const userRole = localStorage.getItem("userRole"); // "brand" or "influencer"
// //   const userName = localStorage.getItem("userName");

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate("/login");
// //   };

// //   return (
// //     <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg border-b-2 border-primary">
// //       <div
// //         className="text-2xl font-extrabold text-primary cursor-pointer"
// //         onClick={() => navigate("/")}
// //       >
// //         BuzzPaye
// //       </div>

// //       <div className="flex gap-6 items-center font-semibold">
// //         <Link to="/" className="hover:text-lightRed transition">
// //           Home
// //         </Link>

// //         <Link to="/influencer-list" className="hover:text-lightRed transition">
// //           Influencer List
// //         </Link>

// //         {userRole && (
// //           <>
// //             {/* Dashboard */}
// //             <Link
// //               to={
// //                 userRole === "brand"
// //                   ? "/brand-dashboard"
// //                   : "/influencer-dashboard"
// //               }
// //               className="hover:text-lightRed transition"
// //             >
// //               Dashboard
// //             </Link>

// //             {/* Profile visible to both brand and influencer */}

// //             {/* Brand-only links */}
// //             {userRole === "brand" && (
// //               <>
// //                 <Link
// //                   to="/ai-recommendation"
// //                   className="hover:text-lightRed transition"
// //                 >
// //                   AI Recommendation
// //                 </Link>

// //                 <Link
// //                   to="/campaign-create"
// //                   className="hover:text-lightRed transition"
// //                 >
// //                   Create Campaign
// //                 </Link>

// //               </>
// //             )}

// //             <Link
// //               to={
// //                 userRole === "brand"
// //                   ? "/brand-profile"
// //                   : "/influencer-profile"
// //               }
// //               className="hover:text-lightRed transition"
// //             >
// //               Profile
// //             </Link>

// //           </>
// //         )}

// //         {/* Login/Register for guests */}
// //         {!userRole && (
// //           <>
// //             <Link to="/register" className="hover:text-lightRed transition">
// //               Register
// //             </Link>
// //             <Link to="/login" className="hover:text-lightRed transition">
// //               Login
// //             </Link>
// //           </>
// //         )}

// //         {/* Logout for logged-in users */}
// //         {userRole && (
// //           <button
// //             onClick={handleLogout}
// //             className="bg-lightRed px-3 py-1 rounded-lg font-bold hover:bg-white hover:text-black transition"
// //           >
// //             Logout
// //           </button>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const userRole = localStorage.getItem("userRole");
// //   const userName = localStorage.getItem("userName");

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate("/login");
// //   };

// //   return (
// //     <nav
// //       className="
// //         fixed top-0 left-0 w-full z-50
// //         bg-black text-white
// //         px-6 py-3  /* smaller height */
// //         flex justify-between items-center
// //         shadow-md border-b border-primary
// //       "
// //     >
// //       <div
// //         className="text-xl font-extrabold text-primary cursor-pointer"
// //         onClick={() => navigate("/")}
// //       >
// //         BuzzPaye
// //       </div>

// //       <div className="flex gap-5 items-center font-semibold text-sm md:text-base">
// //         <Link to="/" className="hover:text-lightRed transition">
// //           Home
// //         </Link>

// //         <Link to="/influencer-list" className="hover:text-lightRed transition">
// //           Influencer List
// //         </Link>

// //         {userRole && (
// //           <>
// //             {/* Dashboard */}
// //             <Link
// //               to={
// //                 userRole === "brand"
// //                   ? "/brand-dashboard"
// //                   : "/influencer-dashboard"
// //               }
// //               className="hover:text-lightRed transition"
// //             >
// //               Dashboard
// //             </Link>

// //             {/* Brand-only links */}
// //             {userRole === "brand" && (
// //               <>
// //                 <Link
// //                   to="/ai-recommendation"
// //                   className="hover:text-lightRed transition"
// //                 >
// //                   AI Recommendation
// //                 </Link>

// //                 <Link
// //                   to="/campaign-create"
// //                   className="hover:text-lightRed transition"
// //                 >
// //                   Create Campaign
// //                 </Link>
// //               </>
// //             )}

// //             {/* Profile */}
// //             <Link
// //               to={
// //                 userRole === "brand" ? "/brand-profile" : "/influencer-profile"
// //               }
// //               className="hover:text-lightRed transition"
// //             >
// //               Profile
// //             </Link>
// //           </>
// //         )}

// //         {/* Guest Links */}
// //         {!userRole && (
// //           <>
// //             <Link to="/register" className="hover:text-lightRed transition">
// //               Register
// //             </Link>
// //             <Link to="/login" className="hover:text-lightRed transition">
// //               Login
// //             </Link>
// //           </>
// //         )}

// //         {/* Logout */}
// //         {userRole && (
// //           <button
// //             onClick={handleLogout}
// //             className="bg-lightRed px-3 py-1 rounded-md font-bold hover:bg-white hover:text-black transition"
// //           >
// //             Logout
// //           </button>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const userRole = localStorage.getItem("userRole");
// //   const userName = localStorage.getItem("userName");

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate("/login");
// //   };

// //   return (
// //     <nav
// //       className="
// //         fixed top-4 left-4 right-4
// //         z-50
// //         bg-black/95 backdrop-blur-md
// //         text-white
// //         px-6 py-3
// //         flex justify-between items-center
// //         shadow-lg border border-primary/40
// //         rounded-2xl
// //       "
// //     >
// //       <div
// //         className="text-xl font-extrabold text-primary cursor-pointer"
// //         onClick={() => navigate("/")}
// //       >
// //         BuzzPaye
// //       </div>

// //       <div className="flex gap-5 items-center font-semibold text-sm md:text-base">
// //         <Link to="/" className="hover:text-lightRed transition">
// //           Home
// //         </Link>

// //         <Link to="/influencer-list" className="hover:text-lightRed transition">
// //           Influencer List
// //         </Link>

// //         {userRole && (
// //           <>
// //             {/* Dashboard */}
// //             <Link
// //               to={
// //                 userRole === "brand"
// //                   ? "/brand-dashboard"
// //                   : "/influencer-dashboard"
// //               }
// //               className="hover:text-lightRed transition"
// //             >
// //               Dashboard
// //             </Link>

// //             {/* Brand-only links */}
// //             {userRole === "brand" && (
// //               <>
// //                 <Link
// //                   to="/ai-recommendation"
// //                   className="hover:text-lightRed transition"
// //                 >
// //                   AI Recommendation
// //                 </Link>

// //                 <Link
// //                   to="/campaign-create"
// //                   className="hover:text-lightRed transition"
// //                 >
// //                   Create Campaign
// //                 </Link>
// //               </>
// //             )}

// //             {/* Profile */}
// //             <Link
// //               to={
// //                 userRole === "brand"
// //                   ? "/brand-profile"
// //                   : "/influencer-profile"
// //               }
// //               className="hover:text-lightRed transition"
// //             >
// //               Profile
// //             </Link>
// //           </>
// //         )}

// //         {/* Guest Links */}
// //         {!userRole && (
// //           <>
// //             <Link to="/register" className="hover:text-lightRed transition">
// //               Register
// //             </Link>
// //             <Link to="/login" className="hover:text-lightRed transition">
// //               Login
// //             </Link>
// //           </>
// //         )}

// //         {/* Logout */}
// //         {userRole && (
// //           <button
// //             onClick={handleLogout}
// //             className="bg-lightRed px-3 py-1 rounded-md font-bold hover:bg-white hover:text-black transition"
// //           >
// //             Logout
// //           </button>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav
      className="
        fixed top-2 left-3 right-3
        z-50
        bg-grayCustom
        text-white
        px-6 py-3
        flex justify-between items-center
        shadow-[0_0_20px_rgba(233,98,48,0.6)]
        border border-primary
        rounded-xl
        transition-all duration-300
      "
    >
      <div
        className="text-xl font-extrabold text-primary cursor-pointer"
        onClick={() => navigate("/")}
      >
        BuzzPaye
      </div>

      <div className="flex gap-5 items-center font-semibold text-sm md:text-base">
        <Link to="/" className="hover:text-lightRed transition">
          Home
        </Link>

        <Link to="/influencer-list" className="hover:text-lightRed transition">
          Influencer List
        </Link>

        {userRole && (
          <>
            {/* Dashboard */}
            <Link
              to={
                userRole === "brand"
                  ? "/brand-dashboard"
                  : "/influencer-dashboard"
              }
              className="hover:text-lightRed transition"
            >
              Dashboard
            </Link>

            {/* Brand-only links */}
            {userRole === "brand" && (
              <>
                <Link
                  to="/brand/recommendations"
                  className="hover:text-lightRed transition"
                >
                  AI Recommendation
                </Link>

                <Link
                  to="/campaign-create"
                  className="hover:text-lightRed transition"
                >
                  Create Campaign
                </Link>
              </>
            )}

             {/* ✅ NEW: Common Chat System Link */}
            <Link
              to="/chats"
              className="hover:text-lightRed transition"
            >
              Chats 💬
            </Link>

            {/* Profile */}
            <Link
              to={
                userRole === "brand" ? "/brand-profile" : "/influencer-profile"
              }
              className="hover:text-lightRed transition"
            >
              Profile
            </Link>
          </>
        )}

        {/* Guest Links */}
        {!userRole && (
          <>
            <Link to="/register" className="hover:text-lightRed transition">
              Register
            </Link>
            <Link to="/login" className="hover:text-lightRed transition">
              Login
            </Link>
          </>
        )}

        {/* Logout */}
        {userRole && (
          <button
            onClick={handleLogout}
            className="bg-lightRed px-3 py-1 rounded-md font-bold hover:bg-white hover:text-black transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
