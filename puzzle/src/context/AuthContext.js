import { createContext, useEffect, useState } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();

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

  const signIn = async ({user_email, user_password}) => {
    try {
      const response = await api.post("/auth/login", { user_email, user_password });
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.tokenApi}`;
        console.log(response)
        localStorage.setItem("@Auth:user", JSON.stringify(response.data.data[0].name));
        localStorage.setItem("@Auth:token", response.data.data[0].token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const singOut = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return <AuthContext.Provider value={{user, signed: !!user, signIn, singOut}}>{children}</AuthContext.Provider>;
}