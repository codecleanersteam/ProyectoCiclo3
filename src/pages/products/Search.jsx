import React from "react";

const SearchProduct = () => {
  return  <div className="place-content-center pl-60 pr-60">
            <div className="text-5xl font-semibold text-center mt-4">
              Administración de Productos
            </div>
            <p className="pt-12 pl-12 text-2xl">Buscar Productos</p>
            <div className="place-content-center w-full pr-32 pl-32 pt-8 pb-16">
              <div className="grid grid-cols-3 place-content-center w-full pr-32 pl-32 pt-4 pb-12">
                <div className="pt-3 pr-4 text-right">
                  <label className="text-xl">Buscar Producto:</label>
                </div>
                <div>
                  <input className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm font-bold my-2" 
                    type="search" placeholder="Búsqueda por ID, Cliente o Descripción"
                  />
                </div>
                <div className="pt-2 pl-8">
                    <button className="bg-blue-500 text-white rounded-lg h-10 w-1/2 text-xl"
                      type="button">
                      Buscar
                    </button>
                </div>
              </div>
              <table className="table-fixed border-4 border-black border-double  w-full">
                <thead>
                  <tr className="bg-blue-300 h-14">
                    <th className="w-1/4 border border-black">Identificador</th>
                    <th className="w-1/4 border border-black">Descripción</th>
                    <th className="w-1/4 border border-black">Valor Unitario</th>
                    <th className="w-1/4 border border-black">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-blue-100 h-10">
                    <td className="text-center border border-black">003</td>
                    <td className=" border border-black">Producto 3</td>
                    <td className="text-center border border-black">1524000</td>
                    <td className="text-center border border-black">No Disponible</td>
                  </tr>
                  <tr className="bg-blue-200 h-10">
                    <td className=" border border-black"> </td>
                    <td className=" border border-black"> </td>
                    <td className=" border border-black"> </td>
                    <td className=" border border-black"> </td>
                  </tr>
                  <tr className="bg-blue-100 h-10">
                    <td className=" border border-black"> </td>
                    <td className=" border border-black"> </td>
                    <td className=" border border-black"> </td>
                    <td className=" border border-black"> </td>
                  </tr>
                  <tr className="bg-blue-200 h-10">
                    <td className=" border border-black"> </td>
                    <td className=" border border-black"> </td>
                    <td className=" border border-black"> </td>
                    <td className=" border border-black"> </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-2 place-content-center w-full pr-32 pl-32 pt-12 pb-20">
                <div className="text-center">
                  <a href="/product">
                    <button className="bg-blue-500 text-white rounded-lg h-14 w-1/2 text-xl">
                      Regresar
                    </button>
                  </a>
                </div>
                <div className="text-center">
                  <button className="bg-blue-500 text-white rounded-lg h-14 w-1/2 text-xl">
                    Nueva Búsqueda
                  </button>
                </div>
              </div>
          </div>
  ;
};

export default SearchProduct;
