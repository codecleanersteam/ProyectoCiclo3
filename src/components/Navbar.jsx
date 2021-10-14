import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-blue-300">
      <ul className="flex justify-between my-0">
        <li>
          <div className="p-5">Logo</div>
        </li>
        <li>
          <button className="px-10 py-5 hover:bg-blue-400">
            Quienes Somos
          </button>
        </li>
        <li>
          <button className="px-5 py-5 hover:bg-blue-400">
            Descripción Aplicativo
          </button>
        </li>
        <li>
          <button className="px-20 py-5 hover:bg-blue-400 ">Ayuda</button>
        </li>
        <li>
          <Link to="/login">
            <button className="bg-gray-200 shadow-md p-5 hover:bg-gray-400">
            Iniciar Sesión
            </button>
          </Link>
      
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
