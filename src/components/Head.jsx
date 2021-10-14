import React from "react";

const Head = () => {
  return (
    <nav className="bg-blue-500">
      <div>
        <ul className="flex justify-between">
          <li>
            <div className="text-white p-5">Logo</div>
          </li>
          <li>
            <button className="text-white px-10 py-5">
              Administrador de Productos
            </button>
          </li>
          <li>
            <button className="text-white px-5 py-5">
              Administrador de Ventas
            </button>
          </li>
          <li>
            <button className="text-white px-20 py-5">
              Gestión de Usuarios
            </button>
          </li>
          <li>
            <button className="text-white px-8 p-5">Usuario</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Head;
