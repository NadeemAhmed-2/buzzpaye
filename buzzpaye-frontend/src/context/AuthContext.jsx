// // // // import { createContext, useContext, useState } from "react";

// // // // const AuthContext = createContext();

// // // // export function AuthProvider({ children }) {
// // // //   const [user, setUser] = useState(null);

// // // //   // Mock register
// // // //   const register = (formData) => {
// // // //     const newUser = {
// // // //       name: formData.name,
// // // //       email: formData.email,
// // // //       role: formData.role,
// // // //     };
// // // //     setUser(newUser);
// // // //     localStorage.setItem("buzzpayeUser", JSON.stringify(newUser));
// // // //   };

// // // //   // Mock login
// // // //   const login = (email) => {
// // // //     const storedUser = JSON.parse(localStorage.getItem("buzzpayeUser"));
// // // //     if (storedUser && storedUser.email === email) {
// // // //       setUser(storedUser);
// // // //       return true;
// // // //     }
// // // //     return false;
// // // //   };

// // // //   const logout = () => {
// // // //     setUser(null);
// // // //     localStorage.removeItem("buzzpayeUser");
// // // //   };

// // // //   return (
// // // //     <AuthContext.Provider value={{ user, register, login, logout }}>
// // // //       {children}
// // // //     </AuthContext.Provider>
// // // //   );
// // // // }

// // // // export function useAuth() {
// // // //   return useContext(AuthContext);
// // // // }

// // // import { createContext, useContext, useState, useEffect } from "react";

// // // const AuthContext = createContext();

// // // export function AuthProvider({ children }) {
// // //   const [user, setUser] = useState(null);

// // //   // Load user from localStorage on app start
// // //   useEffect(() => {
// // //     const storedUser = localStorage.getItem("buzzpayeUser");
// // //     if (storedUser) setUser(JSON.parse(storedUser));
// // //   }, []);

// // //   // ✅ Register — instantly logs in the new user
// // //   const register = (formData) => {
// // //     const newUser = {
// // //       name: formData.name,
// // //       email: formData.email,
// // //       role: formData.role,
// // //     };
// // //     setUser(newUser);
// // //     localStorage.setItem("buzzpayeUser", JSON.stringify(newUser));
// // //   };

// // //   const login = (email) => {
// // //     const storedUser = JSON.parse(localStorage.getItem("buzzpayeUser"));
// // //     if (storedUser && storedUser.email === email) {
// // //       setUser(storedUser);
// // //       return true;
// // //     }
// // //     return false;
// // //   };

// // //   const logout = () => {
// // //     setUser(null);
// // //     localStorage.removeItem("buzzpayeUser");
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ user, register, login, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // }

// // // export function useAuth() {
// // //   return useContext(AuthContext);
// // // }

// // // import { createContext, useContext, useState } from "react";

// // // const AuthContext = createContext();

// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(
// // //     JSON.parse(localStorage.getItem("user")) || null
// // //   );

// // //   const register = (name, email, password, role) => {
// // //     const newUser = { name, email, password, role };
// // //     localStorage.setItem("user", JSON.stringify(newUser));
// // //     setUser(newUser); // Auto-login
// // //   };

// // //   const login = (email, password) => {
// // //     const savedUser = JSON.parse(localStorage.getItem("user"));
// // //     if (
// // //       savedUser &&
// // //       savedUser.email === email &&
// // //       savedUser.password === password
// // //     ) {
// // //       setUser(savedUser);
// // //       return true;
// // //     }
// // //     return false;
// // //   };

// // //   const logout = () => {
// // //     localStorage.removeItem("user");
// // //     setUser(null);
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ user, register, login, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // export const useAuth = () => useContext(AuthContext);

// // // import { createContext, useContext, useState } from "react";

// // // const AuthContext = createContext();

// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(
// // //     JSON.parse(localStorage.getItem("user")) || null
// // //   );

// // //   const register = (name, email, password, role) => {
// // //     const newUser = { _id: Date.now().toString(), name, email, password, role };
// // //     localStorage.setItem("user", JSON.stringify(newUser));
// // //     setUser(newUser); // Auto-login
// // //   };

// // //   const login = (email, password) => {
// // //     const savedUser = JSON.parse(localStorage.getItem("user"));
// // //     if (
// // //       savedUser &&
// // //       savedUser.email === email &&
// // //       savedUser.password === password
// // //     ) {
// // //       setUser(savedUser);
// // //       return true;
// // //     }
// // //     return false;
// // //   };

// // //   const logout = () => {
// // //     localStorage.removeItem("user");
// // //     setUser(null);
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ user, register, login, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // export const useAuth = () => useContext(AuthContext);

// // import { createContext, useContext, useState, useEffect } from "react";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);

// //   // Load user and token from localStorage on mount
// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem("user"));
// //     const token = localStorage.getItem("token");
// //     if (storedUser) setUser({ ...storedUser, token }); // merge token into user object
// //   }, []);

// //   const register = (name, email, password, role) => {
// //     const newUser = {
// //       _id: Date.now().toString(),
// //       name,
// //       email,
// //       password,
// //       role,
// //       token: "dummy-token", // or real token from backend
// //     };
// //     localStorage.setItem("user", JSON.stringify(newUser));
// //     localStorage.setItem("token", newUser.token);
// //     setUser(newUser);
// //   };

// //   const login = (email, password) => {
// //     const savedUser = JSON.parse(localStorage.getItem("user"));
// //     const token = localStorage.getItem("token");
// //     if (savedUser && savedUser.email === email && savedUser.password === password) {
// //       setUser({ ...savedUser, token });
// //       return true;
// //     }
// //     return false;
// //   };

// //   const logout = () => {
// //     localStorage.removeItem("user");
// //     localStorage.removeItem("token");
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, register, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);

// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // wait until user is loaded

//   // Load user and token from localStorage on mount
//   // useEffect(() => {
//   //   const storedUser = JSON.parse(localStorage.getItem("user"));
//   //   const token = localStorage.getItem("token");
//   //   if (storedUser) setUser({ ...storedUser, token });
//   //   setLoading(false);
//   // }, []);

// useEffect(() => {
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   if (storedUser) setUser(storedUser); // token is already included
//   setLoading(false);
// }, []);


//    const register = async (name, email, password, role) => {
//     try {
//       const res = await api.post("/auth/register", { name, email, password, role });
//       localStorage.setItem("token", res.data.token);
//       const me = await api.get("/auth/me");
//       setUser(me.data);
//       return true;
//     } catch (err) {
//       console.error("Registration failed:", err.response?.data || err);
//       return false;
//     }
//   }; 

// const login = async (email, password) => {
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       const me = await api.get("/auth/me");
//       setUser(me.data);
//       return true;
//     } catch (err) {
//       console.error("Login failed:", err.response?.data || err);
//       return false;
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, register, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);





// import { createContext, useContext, useState, useEffect } from "react";
// import api from "../utils/api";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Load user from localStorage when app starts
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) setUser(storedUser);
//     setLoading(false);
//   }, []);

//   const register = async (name, email, password, role) => {
//     try {
//       const res = await api.post("/auth/register", {
//         name,
//         email,
//         password,
//         role,
//       });

//       localStorage.setItem("token", res.data.token);

//       const me = await api.get("/auth/me");

//       setUser(me.data);
//       localStorage.setItem("user", JSON.stringify(me.data));

//       return true;
//     } catch (err) {
//       console.error("Registration failed:", err.response?.data || err);
//       return false;
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const res = await api.post("/auth/login", { email, password });

//       localStorage.setItem("token", res.data.token);

//       const me = await api.get("/auth/me");

//       setUser(me.data);
//       localStorage.setItem("user", JSON.stringify(me.data));

//       return true;
//     } catch (err) {
//       console.error("Login failed:", err.response?.data || err);
//       return false;
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, register, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



import { createContext, useContext, useState, useEffect } from "react";
import api from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const register = async (name, email, password, role) => {
    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      const userData = res.data;

      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData));

      localStorage.setItem("userRole", userData.role);
      localStorage.setItem("userName", userData.name);


      setUser(userData);

      return true;
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });

      const userData = res.data;

      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData));

      localStorage.setItem("userRole", userData.role);
      localStorage.setItem("userName", userData.name);


      setUser(userData);

      return true;
    } catch (err) {
      console.error("Login failed:", err.response?.data || err);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);