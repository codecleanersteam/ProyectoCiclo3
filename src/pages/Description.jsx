import React from "react";
import { useDarkMode } from "context/darkMode";

const Description = () => {
  const {darkMode} = useDarkMode();
  return (
    <div className={`w-full h-full bg-${darkMode ? "black":"white"} text-${darkMode ? "white":"black"}`}>
      <p>
        Este aplicativo es un software que permite realizar el seguimiento de
        las ventas de nuestros productos y servicios de tecnología para hacerles
        el correspondiente seguimiento.{" "}
      </p>
    </div>
  );
};

export default Description;
