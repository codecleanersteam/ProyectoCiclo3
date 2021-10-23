import React from "react";
import { useDarkMode } from "context/darkMode";

const Index = () => {
  const {darkMode} = useDarkMode();
  return <div className={`w-full h-full bg-${darkMode ? "black":"white"} text-${darkMode ? "white":"black"}`}>Contenido Landing Distribuidora de Tecnología</div>;
};

export default Index;
