import React, { createContext, useState,useEffect } from "react";

export const UserContext = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState();
  const [role, setRole] = useState("");
    useEffect(() => {
      const savedUser = localStorage.getItem("user");
      setUser(savedUser ? JSON.parse(savedUser) : null);
    }, []);

  // fallback if null
  
  return (
    <UserContext.Provider value={{ user, setUser, role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

export default Auth;
