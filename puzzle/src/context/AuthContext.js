import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkUser = () => {
      if (!localStorage.getItem('@Auth:token')) {
        setAuthenticated(false);
      } else {
        setAuthenticated(true);
        console.log("Authenticated");
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
