import React from "react";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex p-7 justify-center font-bold text-xl mb-20">
        ADMINISTRADOR DE VENTAS
      </div>
      <ul className="w-full text-center grid grid-cols-2 gap-10">
        <li>
          <Link to="/sale/add">
            <button className="bg-blue-400 h-16 w-72 rounded-md hover:bg-blue-700 hover:text-white">
              Registrar Venta Nueva
            </button>
          </Link>
        </li>
        <li>
          <Link to="/sale/list">
            <button className="bg-blue-400 h-16 w-72 rounded-md hover:bg-blue-700 hover:text-white">
              Ver Lista de Ventas
            </button>
          </Link>
        </li>
        <li>
          <Link to="/sale/search">
            <button className="bg-blue-400 h-16 w-72 rounded-md hover:bg-blue-700 hover:text-white">
              Buscar Venta
            </button>
          </Link>
        </li>
        <li>
          <Link to="/sale/modify">
            <button className="bg-blue-400 h-16 w-72 rounded-md hover:bg-blue-700 hover:text-white">
              Modificar/Actualizar Venta
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sale;
