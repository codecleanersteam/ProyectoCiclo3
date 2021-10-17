import React from "react";
import { Link } from "react-router-dom";

const AddSale = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-center m-10 text-2xl  font-bold">
        ADMINISTRADOR DE VENTAS
      </div>
      <div className="flex bg-gray-100 justify-center">
        <div></div>
        <div>
          <div className="w-full flex flex-col justify-center">
            <div className="flex text-xl px-20">Registro de Venta</div>
            <div className="flex">
              <div className="flex px-10 items-center">
                Identificador de Venta:
                <div className="px-2">V0001</div>
              </div>
              <div className="flex flex-col">
                <div className="flex font-semibold">
                  Identificación:
                  <div className="px-2 font-semibold">1018369041</div>
                </div>
                <div className="flex font-semibold">
                  Cliente:
                  <div className="px-2 font-semibold">Mauricio Cendales</div>
                </div>
              </div>
              <div className="px-5 font-semibold">
                Seleccionar Cliente:
                <form>
                  <select className="border border-gray-300 rounded-md">
                    <option>Daniela Rodriguez</option>
                    <option>William Santamaria</option>
                    <option selected>Mauricio Cendales</option>
                  </select>
                </form>
              </div>
              <div className="flex items-center">
                Fecha:
                <input
                  className="ml-2 py-2 border border-gray-300 rounded-md text-right"
                  type="date"
                />
              </div>
            </div>
            <div className="flex pl-10">
              <table>
                <thead>
                  <th className="px-1 py-2 w-32">Identificador</th>
                  <th className="px-1 py-2 w-80">Descripción</th>
                  <th className="px-1 py-2 w-36">Cantidad</th>
                  <th className="px-1 py-2 w-36">Valor Unitario</th>
                  <th className="px-1 py-2 w-36">Total</th>
                </thead>
                <tbody className="overflow-y-scroll">
                  <tr>
                    <td>
                      <select className="flex w-full">
                        <option className="text-center">-</option>
                        <option selected className="text-center">
                          001
                        </option>
                        <option className="text-center">002</option>
                      </select>
                    </td>
                    <td>
                      <select className="flex w-full">
                        <option className="text-center">-</option>
                        <option selected className="text-center">
                          Producto 1
                        </option>
                        <option className="text-center">Producto 2</option>
                      </select>
                    </td>
                    <td className="text-center">2</td>
                    <td className="text-center">$ 1000</td>
                    <td className="text-center">$ 2000</td>
                  </tr>
                  <tr>
                    <td>
                      <select className="flex w-full">
                        <option className="text-center">-</option>
                        <option className="text-center">001</option>
                        <option selected className="text-center">
                          002
                        </option>
                      </select>
                    </td>
                    <td>
                      <select className="flex w-full">
                        <option className="text-center">-</option>
                        <option className="text-center">Producto 1</option>
                        <option selected className="text-center">
                          Producto 2
                        </option>
                      </select>
                    </td>
                    <td className="text-center">4</td>
                    <td className="text-center">$ 2000</td>
                    <td className="text-center">$ 8000</td>
                  </tr>
                  <tr>
                    <td>
                      <select className="flex w-full">
                        <option className="text-center">-</option>
                        <option className="text-center">001</option>
                        <option className="text-center">002</option>
                      </select>
                    </td>
                    <td>
                      <select className="flex w-full">
                        <option className="text-center">-</option>
                        <option className="text-center">Producto 1</option>
                        <option className="text-center">Producto 2</option>
                      </select>
                    </td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex pt-5 pr-px justify-end">
              <div className="flex p-3 bg-gray-300 border border-black">
                Valor total Venta:
                <div className="pl-10 font-bold">$ 10000</div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex justify-center">
        <div>
          <Link to="/sale">
            <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
              Regresar
            </button>
          </Link>
        </div>
        <div>
          <Link to="/sale/list">
            <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
              Ver Lista de Ventas
            </button>
          </Link>
        </div>
        <div>
          <Link to="/sale/add">
            <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
              Registrar Venta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddSale;
