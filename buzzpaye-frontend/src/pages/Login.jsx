import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      console.log(res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userRole", res.data.role);
      localStorage.setItem("userName", res.data.name);

      if (res.data.role === "brand") {
        navigate("/", { replace: true });
        window.location.reload(); // 🔥 trigger AuthContext fetchUser
      } else {
        navigate("/", { replace: true });
        window.location.reload();
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="flex justify-center items-center h-[80vh] bg-grayCustom m-20">
      <div
        className="bg-secondary p-8 rounded-lg shadow-lg max-w-[300px] w-1/2
 text-white glow-border"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-primary">
          Login
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="w-full bg-primary hover:bg-lightRed text-white py-2 rounded font-bold transition"
          >
            Login
          </button>
          <p className="text-sm text-center mt-3 text-white/70">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-primary font-semibold hover:text-lightRed"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
