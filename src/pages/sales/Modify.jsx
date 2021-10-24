import React from "react";
import { Link } from "react-router-dom";

const ModifySale = () => {
  return (
    <div>
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-center m-10 text-2xl  font-bold">
          ADMINISTRADOR DE VENTAS
        </div>
        <div className="flex bg-gray-100 justify-center">
          <div></div>
          <div>
            <div className="w-full flex flex-col justify-center">
              <div className="flex justify-between items-center">
                <div className="px-10 text-xl">
                  Modificar o Actualizar Venta
                </div>
                <div className="bg-gray-400 p-1 rounded-md">
                  <div>Seleccione la Venta a Modificar:</div>
                  <div>
                    <form>
                      <select className="border border-gray-300 rounded-md w-56 text-center">
                        <option>V0001</option>
                        <option>V0002</option>
                        <option>V0003</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pl-10">
                <div className="flex flex-col items-center">
                  <div className="w-56">Identificador de Venta:</div>
                  <div className="w-56 px-2 border border-black bg-gray-400">
                    V0001
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-56">Cliente:</div>
                  <div className="w-56 px-2 border border-black bg-gray-400">
                    Mauricio Cendales
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-56">Fecha de Venta:</div>
                  <div className="w-56 px-2 border border-black bg-white">
                    17-10-2021
                  </div>
                </div>
              </div>
              <div className="flex mt-2 pl-10">
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
              <div className="flex pt-5 pr-px justify-between items-center">
                <div className="flex mx-10 w w-3/5 bg-gray-300 justify-around">
                  Actualizar estado de Venta:
                  <div>
                    <input name="status" type="radio" />
                    En proceso
                  </div>
                  <div>
                    <input name="status" type="radio" />
                    Cancelada
                  </div>
                  <div>
                    <input name="status" type="radio" />
                    Entregada
                  </div>
                </div>
                <div className="flex p-3 bg-gray-400 border border-black">
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
            <Link to="/sale/modify">
              <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
                Modificar Venta
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifySale;
