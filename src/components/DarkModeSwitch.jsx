import React from "react";
import { useDarkMode } from "context/darkMode";

const DarkModeSwitch = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      className={`px-20 py-5 hover:bg-${darkMode ? "white" : "black"} text-${
        darkMode ? "black" : "white"
      }`}
    >
      {darkMode ? "Desactivar" : "Activar"} Modo Oscuro
    </button>
  );
};

export default DarkModeSwitch;
