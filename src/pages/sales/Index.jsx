import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "context/darkMode";

const Sale = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`flex flex-col w-full h-full bg-${
      darkMode ? "black" : "white"
    } text-${darkMode ? "white" : "black"}`}>
      <div className="flex p-7 justify-center font-bold md:text-xl lg:text-xl m-20 xl:text-2xl 2xl:text-3xl">
        ADMINISTRADOR DE VENTAS
      </div>
      <div className="flex justify-center mb-8">
        Seleccione la tarea que desea realizar:
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Link to="/sale/add">
            <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-14 xl:mx-24 2xl:mx-40 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
              Registrar Venta Nueva
            </button>
          </Link>
          <Link to="/sale/list">
            <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-14 xl:mx-24 2xl:mx-40 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
              Ver Lista de Ventas
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/sale/search">
            <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-14 xl:mx-24 2xl:mx-40 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
              Buscar Venta
            </button>
          </Link>
          <Link to="/sale/modify">
            <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-14 xl:mx-24 2xl:mx-40 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
              Modificar/Actualizar Venta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
