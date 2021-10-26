import React from "react";
import { useDarkMode } from "context/darkMode";

const User = () => {
  const { darkMode } = useDarkMode();
  return <div className={`place-content-center h-full w-full pl-48 pr-48 bg-${
    darkMode ? "black" : "white"
  } text-${darkMode ? "white" : "black"}`}>Página principal de Gestión de Usuarios</div>;
};

export default User;
