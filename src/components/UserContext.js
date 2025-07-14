import React, { createContext, useState, useEffect } from "react";
import '../App.css';

export const nameContext = createContext();
export default function UserContext({ children }) {
  const [userName, setUserName] = useState(() => localStorage.getItem("userName") || "");

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  return (
    <nameContext.Provider value={{ userName, setUserName }}>
      { children }
    </nameContext.Provider>
  )
}