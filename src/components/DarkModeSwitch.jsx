import React from "react";
import { useDarkMode } from "context/darkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkModeSwitch = ({ estilo, icono }) => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      className={estilo}
    >
      <div className="flex justify-center">
        <FontAwesomeIcon
          className="flex fill-current mt-1"
          icon={icono}
        ></FontAwesomeIcon>
      </div>
      <div className="pl-5">{darkMode ? "Modo Claro" : "Modo Oscuro"}</div>
    </button>
  );
};

export default DarkModeSwitch;
