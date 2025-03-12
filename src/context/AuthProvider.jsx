import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { AuthContext } from "../hooks/useAuth.jsx";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (credentials) => {
    if (!credentials.username || !credentials.password) {
      throw new Error("Username and password are required");
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/auth/login",
        credentials,
        { withCredentials: true }
      );
      const { user } = response.data;
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return response.data;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:5001/api/v1/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
      console.log("hello");
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
