import { createContext, useContext } from "react";
import { AuthContextType } from "../../types/auth";

export const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);
