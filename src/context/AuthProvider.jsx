// src/context/AuthProvider.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { AuthContext } from "../hooks/useAuth.jsx";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (credentials) => {

    if (!credentials.username || !credentials.password) {
      throw new Error("Username and password are required");
    }


    if (token || user) {
      throw new Error("User is already logged in");
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/auth/login",
        credentials,
        { withCredentials: true }
      );

      const { accessToken, user } = response.data;
      setToken(accessToken);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return response.data;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error;
    }
  };

  const logout = () => {
    axios.post(
      "http://localhost:5001/api/v1/auth/logout",
      {},
      { withCredentials: true }
    );
    setToken(null);
    setUser(null);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
