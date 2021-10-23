import React from "react";
import LogoSmall from "./LogoSmall";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

const Head = () => {
  return (
    <nav className="bg-blue-500">
      <div>
        <ul className="flex justify-between">
          <li>
            <Link to="/">
              <div className="text-white p-2">
                <LogoSmall />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/product">
              <button className="text-white px-10 py-5 hover:bg-blue-700">
                Administrador de Productos
              </button>
            </Link>
          </li>
          <li>
            <Link to="/sale">
              <button className="text-white px-5 py-5 hover:bg-blue-700">
                Administrador de Ventas
              </button>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <button className="text-white px-20 py-5 hover:bg-blue-700">
                Gestión de Usuarios
              </button>
            </Link>
          </li>
          <li>
            <DarkModeSwitch />
          </li>
          <li>
            <Link to="/user/profile">
              <button className="text-white px-8 p-5 hover:bg-gray-700">
                Usuario
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Head;
