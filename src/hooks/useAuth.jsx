// src/hooks/useAuth.js
import { useContext, createContext } from "react";

export const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};