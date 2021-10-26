import React from "react";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";
import LogoSmall from "./LogoSmall";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex lg:w-full lg:h-16 bg-blue-300">
      <div className="flex w-full ">
        <ul className="flex justify-between my-0">
          <li>
            <Link to="/">
              <div className="px-4 py-2">
                <LogoSmall />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="px-40 py-5 hover:bg-blue-400">
                Quienes Somos
              </button>
            </Link>
          </li>
          <li>
            <Link to="/description">
              <button className="px-40 py-5 hover:bg-blue-400">
                Descripción Aplicativo
              </button>
            </Link>
          </li>
          <li>
            <Link to="/help">
              <button className="px-40 py-5 hover:bg-blue-400 ">Ayuda</button>
            </Link>
          </li>
          <li>
            <DarkModeSwitch estilo={"px-40 py-5 hover:bg-blue-400 "}/>
          </li>
          <li>
            <Link to="/login">
              <button className="bg-gray-200 shadow-md p-5 hover:bg-gray-400">
                Iniciar Sesión
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
