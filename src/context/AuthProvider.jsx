import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { AuthContext } from "../hooks/useAuth.jsx";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    if (!credentials.username || !credentials.password) {
      throw new Error("Username and password are required");
    }

    if (user) {
      throw new Error("User is already logged in");
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/auth/login",
        credentials,
        { withCredentials: true }
      );

      const { user } = response.data;
      setUser(user);
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
    setUser(null);
    window.location.href = "/";
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
