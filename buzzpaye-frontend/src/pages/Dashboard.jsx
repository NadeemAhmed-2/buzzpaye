// import { useAuth } from "../context/AuthContext";

// export default function Dashboard() {
//   const { user, logout } = useAuth();

//   if (!user)
//     return (
//       <div className="h-[80vh] flex justify-center items-center text-white bg-grayCustom">
//         <p>Please login first.</p>
//       </div>
//     );

//   return (
//     <div className="p-8 bg-grayCustom text-white min-h-[80vh]">
//       <h1 className="text-3xl font-bold text-primary mb-4">
//         Welcome, {user.name} 👋
//       </h1>
//       <p className="text-white/80 mb-6">
//         You are logged in as <span className="font-semibold">{user.role}</span>
//       </p>
//       <button
//         onClick={logout}
//         className="bg-primary hover:bg-lightRed px-5 py-2 rounded font-bold"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  if (!user)
    return (
      <div className="h-[80vh] flex justify-center items-center text-white bg-grayCustom">
        <p>Please login first.</p>
      </div>
    );

  return (
    <div className="p-8 bg-grayCustom text-white min-h-[80vh]">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Welcome, {user.name} 👋
      </h1>
      <p className="text-white/80 mb-6">
        You are logged in as a{" "}
        <span className="font-semibold text-primary">{user.role}</span>.
      </p>
      <button
        onClick={logout}
        className="bg-primary hover:bg-lightRed px-5 py-2 rounded font-bold"
      >
        Logout
      </button>
    </div>
  );
}
