import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState(""); // initialize as empty string or null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default Auth;
