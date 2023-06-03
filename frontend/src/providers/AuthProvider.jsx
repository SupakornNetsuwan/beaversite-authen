import { useState } from "react";
import AuthContext from "../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const getUserFromStorage = () => {
    
    return JSON.parse(localStorage.getItem("beaversite-authen")) || { isAuthen: false, user: "" };
  };

  const [user, setUser] = useState(getUserFromStorage());

  const signIn = (user) => {
    localStorage.setItem(
      "beaversite-authen",
      JSON.stringify({
        isAuthen: true,
        profile: user,
      })
    );
    
    setUser(getUserFromStorage());
  };

  const signOut = () => {
    localStorage.removeItem("beaversite-authen");
    setUser(getUserFromStorage());
  };

  return <AuthContext.Provider value={{ signIn, signOut, user }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
