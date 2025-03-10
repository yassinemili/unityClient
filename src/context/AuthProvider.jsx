// src/context/AuthProvider.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { AuthContext } from "../hooks/useAuth.jsx";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      console.log(credentials);
      const response = await axios.post(
        "http://localhost:5001/api/v1/auth/login",
        credentials,
        { withCredentials: true }
      );
      const { accessToken, user } = response.data;
      setToken(accessToken);
      setUser(user);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    window.location.href = "/login";
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
