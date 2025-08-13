import React, { useEffect, useContext, useState } from 'react';
import Login from "./components/auth/login";
import Employee from "./components/dashboard/employee.jsx";
import Admin from './components/dashboard/admin.jsx';
import { UserContext } from "./context/auth.jsx";
import { getLocalStorage } from "./utils/local.jsx";

const App = () => {
  const { user } = useContext(UserContext);

  // Load saved role from localStorage (only runs once on first render)
  const [role, setRole] = useState(() => localStorage.getItem("role") || "");

  const { employees, admin } = getLocalStorage();

  const isEmployee = user && employees.some(emp => emp.email === user.email);

  useEffect(() => {
    // Wait until user data is loaded from context
    if (!user) return;

    if (isEmployee) {
      setRole("employee");
      localStorage.setItem("role", "employee");
    } else if (user.email === admin.email) {
      setRole("admin");
      localStorage.setItem("role", "admin");
    } else {
      // Means logged in user is neither admin nor employee
      setRole("");
      localStorage.removeItem("role");
    }
  }, [user, isEmployee, admin]);

  // UI rendering
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
