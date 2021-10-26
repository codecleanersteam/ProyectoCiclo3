import React from "react";
import LogoSmall from "./LogoSmall";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoiceDollar,
  faMobileAlt,
  faUsers,
  faUser,
  faSignOutAlt,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "context/darkMode";
import useActiveRoute from "hooks/useActiveRoute";

const Head = () => {
  const { darkMode } = useDarkMode();
  return (
    <nav className="hidden lg:flex w-full bg-blue-500 ">
      <div className="flex w-full ">
        <ul className="flex w-full justify-between">
          <li>
            <Link to="/">
              <div className="text-white p-2">
                <LogoSmall />
              </div>
            </Link>
          </li>
          <li>
            <Ruta
              icono={faMobileAlt}
              ruta={"/products"}
              nombre={"Administrador de Productos"}
            />
          </li>
          <li>
            <Ruta
              icono={faFileInvoiceDollar}
              ruta={"/sale"}
              nombre={"Administrador de Ventas"}
            />
          </li>
          <li>
            <Ruta
              icono={faUsers}
              ruta={"/user"}
              nombre={"Administrador de Usuarios"}
            />
          </li>
          <li>
            <DarkModeSwitch
              estilo={`flex items-center px-20 py-5 text-white hover:bg-${
                darkMode ? "white" : "black"
              } hover:text-${darkMode ? "black" : "white"}`}
              icono={darkMode ? faSun : faMoon}
            />
          </li>
          <li>
            <Ruta icono={faUser} ruta={"/profile"} nombre={"Mi Cuenta"} />
          </li>
          <li>
            <Ruta icono={faSignOutAlt} ruta={"/login"} nombre={"Salir"} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
const isActive = useActiveRoute(ruta);
  return (
    <Link to={ruta}>
      <button
        className={`flex items-center text-white px-16 py-5 bg-${
          isActive ? "blue-900" : "blue-500"
        } hover:bg-gray-500`}
      >
        <div className="flex justify-center w-10">
          <FontAwesomeIcon
            className="flex fill-current"
            icon={icono}
          ></FontAwesomeIcon>
        </div>
        {nombre}
      </button>
    </Link>
  );
};

export default Head;
