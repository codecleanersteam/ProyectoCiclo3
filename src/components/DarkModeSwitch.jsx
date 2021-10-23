import React from "react";
import { useDarkMode } from "context/darkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DarkModeSwitch = ({estilo, icono}) => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      className={estilo}
    >
              <div className="flex justify-center w-10">
          <FontAwesomeIcon
            className="flex fill-current"
            icon={icono}
          ></FontAwesomeIcon>
        </div>
      {darkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};

export default DarkModeSwitch;
