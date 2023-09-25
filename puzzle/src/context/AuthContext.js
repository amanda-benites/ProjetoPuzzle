import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {
        setUser(storageUser);
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async ({ user_email, user_password }) => {
    try {
      const response = await api.post("/auth/login", { user_email, user_password });
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        setUser(response.data);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.tokenApi}`;
        console.log(response)
        localStorage.setItem("@Auth:user", JSON.stringify(response.data[0].user_name));
        localStorage.setItem("@Auth:token", response.data.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate()

  const singOut = () => {
    localStorage.clear();
    setUser(null);
    return navigate('/auth');
  };

  return (
    <AuthContext.Provider value={{user, signIn, singOut, signed: !!user,}}>
      {children}
    </AuthContext.Provider>
  );
};