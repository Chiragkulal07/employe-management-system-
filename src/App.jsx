import React, { useEffect, useContext, useState } from 'react';
import Login from "./components/auth/login";
import Employee from "./components/dashboard/employee.jsx";
import Admin from './components/dashboard/admin.jsx';
import { UserContext } from "./context/auth.jsx";

const App = () => {
  const { user } = useContext(UserContext);
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user && user.email === "admin123.com") {
      setRole("admin");
    } else if (user && user.email === "employee123.com") {
      setRole("employee");
    } else {
      alert("please enter correct email");
      setRole(""); 
    }
  }, [user]);


  if (!role) {
    return <Login />;
  } else if (role === "admin") {
    return <Admin />;
  } else if (role === "employee") {
    return <Employee />;
  } else {
    return null; // fallback
  }
};

export default App;
