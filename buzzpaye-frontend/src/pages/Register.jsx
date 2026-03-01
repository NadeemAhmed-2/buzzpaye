// // // export default function Register() {
// // //   return <div className="p-6 text-center text-lg">Register Page</div>;
// // // }

// // export default function Register() {
// //   return (
// //     <div className="flex justify-center items-center h-[80vh] bg-grayCustom">
// //       <div className="bg-secondary p-8 rounded-lg shadow-lg w-[90%] sm:w-[400px] text-white">
// //         <h2 className="text-2xl font-bold text-center mb-4 text-primary">
// //           Create an Account
// //         </h2>
// //         <form className="space-y-4">
// //           <input
// //             type="text"
// //             placeholder="Full Name"
// //             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
// //           />
// //           <select className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary">
// //             <option value="">Select Role</option>
// //             <option value="brand">Brand</option>
// //             <option value="influencer">Influencer</option>
// //           </select>
// //           <button
// //             type="submit"
// //             className="w-full bg-primary hover:bg-lightRed text-white py-2 rounded font-bold transition"
// //           >
// //             Register
// //           </button>
// //         </form>
// //         <p className="text-sm text-center mt-3 text-white/70">
// //           Already have an account?{" "}
// //           <a href="/login" className="text-primary font-semibold hover:text-lightRed">
// //             Login
// //           </a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";

// // export default function Register() {
// //   const { register } = useAuth();
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     role: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     register(formData);
// //     navigate("/login");
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-[80vh] bg-grayCustom">
// //       <div className="bg-secondary p-8 rounded-lg shadow-lg w-[90%] sm:w-[400px] text-white">
// //         <h2 className="text-2xl font-bold text-center mb-4 text-primary">
// //           Create an Account
// //         </h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Full Name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
// //           />
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
// //           />
// //           <select
// //             name="role"
// //             value={formData.role}
// //             onChange={handleChange}
// //             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
// //           >
// //             <option value="">Select Role</option>
// //             <option value="brand">Brand</option>
// //             <option value="influencer">Influencer</option>
// //           </select>
// //           <button
// //             type="submit"
// //             className="w-full bg-primary hover:bg-lightRed text-white py-2 rounded font-bold transition"
// //           >
// //             Register
// //           </button>
// //         </form>
// //         <p className="text-sm text-center mt-3 text-white/70">
// //           Already have an account?{" "}
// //           <a
// //             href="/login"
// //             className="text-primary font-semibold hover:text-lightRed"
// //           >
// //             Login
// //           </a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Register() {
//   const { register } = useAuth();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     register(formData);
//     navigate("/dashboard"); // ✅ Go straight to dashboard
//   };

//   return (
//     <div className="flex justify-center items-center h-[80vh] bg-grayCustom">
//       <div className="bg-secondary p-8 rounded-lg shadow-lg w-[90%] sm:w-[400px] text-white">
//         <h2 className="text-2xl font-bold text-center mb-4 text-primary">
//           Create an Account
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
//           />
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
//           >
//             <option value="">Select Role</option>
//             <option value="brand">Brand</option>
//             <option value="influencer">Influencer</option>
//           </select>
//           <button
//             type="submit"
//             className="w-full bg-primary hover:bg-lightRed text-white py-2 rounded font-bold transition"
//           >
//             Register
//           </button>
//         </form>
//         <p className="text-sm text-center mt-3 text-white/70">
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-primary font-semibold hover:text-lightRed"
//           >
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";

export default function Register() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const { register } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // register(form.name, form.email, form.password, form.role);
  //   // localStorage.setItem("userRole", form.role); // "brand" or "influencer"
  //   // localStorage.setItem("userName", form.name);

  //    try {
  //     const res = await api.post("/auth/register", form);
  //     console.log(res.data);

  //     localStorage.setItem("userRole", form.role);
  //     localStorage.setItem("userName", form.name);

  //     navigate("/"); // Go to home after register

  //   } catch (err) {
  //     setError(err.response?.data?.message || "Registration failed");
  //   }

  // };

  //  const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await api.post("/auth/register", form);
  //     const { _id, name, email, role, token } = res.data;

  //     const user = { _id, name, email, role, token };

  //     // Save in localStorage
  //     localStorage.setItem("user", JSON.stringify(user));
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("userRole", role);
  //     localStorage.setItem("userName", name);

  //     // 🔥 IMPORTANT: Update AuthContext
  //     setUser(user);

  //     navigate("/", { replace: true });

  //   } catch (err) {
  //     setError(err.response?.data?.message || "Registration failed");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await register(
      form.name,
      form.email,
      form.password,
      form.role,
    );

    if (success) {
      navigate("/", { replace: true });
    } else {
      setError("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-grayCustom px-4 m-10">
      <div className="bg-secondary p-8 rounded-lg shadow-lg max-w-[100px] w-1/2 text-white glow-border">
        <h2 className="text-2xl font-bold text-center mb-4 text-primary">
          Create an Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
          />
          <select
            name="role"
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gray-700 bg-grayCustom text-white focus:outline-primary"
          >
            <option value="">Select Role</option>
            <option value="brand">Brand</option>
            <option value="influencer">Influencer</option>
          </select>
          <button
            type="submit"
            className="w-full bg-lightRed hover:bg-primary text-white py-2 rounded font-bold transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-3 text-white/70">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-primary font-semibold hover:text-lightRed"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
