import { createContext, useEffect, useState } from "react";

import { api } from "../services/api"
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      if (!localStorage.getItem('@auth:token')) {
        navigate("/");
      } else {
        console.log("Authenticated")
      }
    };
    checkUser();
  }, [navigate]);

  return <AuthContext.Provider value={{user, signed: !!user, signIn, singOut}}>{children}</AuthContext.Provider>;
}