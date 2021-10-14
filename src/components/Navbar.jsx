import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-300">
      <div>
        <ul className="flex justify-between">
          <li>
            <div className="p-5">Logo</div>
          </li>
          <li>
            <button className="px-10 py-5">Quienes Somos</button>
          </li>
          <li>
            <button className="px-5 py-5">Descripción Aplicativo</button>
          </li>
          <li>
            <button className="px-20 py-5">Ayuda</button>
          </li>
          <li>
            <button className="p-5">Iniciar Sesión</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
