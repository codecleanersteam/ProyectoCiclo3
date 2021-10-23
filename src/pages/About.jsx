import React from "react";
import { useDarkMode } from "context/darkMode";

const About = () => {
  const {darkMode} = useDarkMode();
  return (
    <div className={`w-full h-full bg-${darkMode ? "black":"white"} text-${darkMode ? "white":"black"}`}>
      <label>Somos Code Cleaners Team!!! Estamos conformados por:</label>
      <br />
      <label>Mauricio Cendales</label>
      <br />
      <label>Daniela Rodriguez</label>
      <br />
      <label>William Santamaria</label>
      <br />
    </div>
  );
};

export default About;
