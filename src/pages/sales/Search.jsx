import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SearchSale = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-center m-10 text-2xl font-bold">
        ADMINISTRADOR DE VENTAS
      </div>
      <div className="w-full flex justify-center items-center">
        <div>
          <div className="w-full flex text-xl text-right pr-10">
            Buscar Venta:
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <div className="bg-white border border-gray-400 px-5 rounded-md hover:border-blue-500 mr-36">
              <input
                placeholder="Escriba el id de Venta, Id de Cliente o Nombre Cliente"
                className="w-96 py-3 text-sm outline-none text-center"
              />
              <i>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </i>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex justify-center">
        <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
          Buscar
        </button>
      </div>

      <div className="flex bg-gray-100 justify-center">
        <div></div>
        <div>
          <div className="px-10 py-3 text-xl">Resultado de la búsqueda: </div>
          <div className="flex pl-10">
            <table>
              <thead>
                <th className="px-1 py-2 w-32">ID. Venta</th>
                <th className="px-1 py-2 w-32">ID. Cliente</th>
                <th className="px-1 py-2 w-80">Nombre Cliente</th>
                <th className="px-1 py-2 w-36">Valor Venta</th>
                <th className="px-1 py-2 w-36">Fecha de Venta</th>
                <th className="px-1 py-2 w-36">Estado</th>
              </thead>
              <tbody className="overflow-y-scroll">
                <tr>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                </tr>
                <tr>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                </tr>
                <tr>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                </tr>
                <tr>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                </tr>
                <tr>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                </tr>
                <tr>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                  <td className="text-center h-10"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SearchSale;
