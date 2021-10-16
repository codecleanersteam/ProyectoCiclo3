import React from "react";
import {Link} from "react-router-dom";

const ListProduct = () => {
  return  <div className="place-content-center pl-60 pr-60">
            <div className="text-5xl font-semibold text-center mt-4">
              Administración de Productos
            </div>
            <p className="pt-12 pl-12 text-2xl">Lista de Productos</p>
            <div className="border-4 border-black border-double place-content-center w-full pr-32 pl-32 pt-20 pb-16">
              <table className="table-fixed border-2 w-full">
                <thead>
                  <tr className="bg-blue-300 h-14">
                    <th className="w-1/4">Identificador</th>
                    <th className="w-1/4">Descripción</th>
                    <th className="w-1/4">Valor Unitario</th>
                    <th className="w-1/4">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-blue-100 h-10">
                    <td className="text-center">001</td>
                    <td>Producto 1</td>
                    <td className="text-center">50000</td>
                    <td className="text-center">Disponible</td>
                  </tr>
                  <tr class="bg-blue-200 h-10">
                    <td className="text-center">002</td>
                    <td>Producto 2</td>
                    <td className="text-center">112000</td>
                    <td className="text-center">Disponibible</td>
                  </tr>
                  <tr className="bg-blue-100 h-10">
                    <td className="text-center">003</td>
                    <td>Producto 3</td>
                    <td className="text-center">1524000</td>
                    <td className="text-center">No Disponible</td>
                  </tr>
                  <tr className="bg-blue-200 h-10">
                    <td className="text-center">004</td>
                    <td>Producto 4</td>
                    <td className="text-center">1124000</td>
                    <td className="text-center">Disponible</td>
                  </tr>
                  <tr className="bg-blue-100 h-10">
                    <td className="text-center">005</td>
                    <td>Producto 5</td>
                    <td className="text-center">15000</td>
                    <td className="text-center">No Disponible</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-2 place-content-center w-full pr-32 pl-32 pt-12 pb-20">
                <div className="text-center">
                  <Link to="/product">
                    <button className="bg-blue-500 text-white rounded-lg h-14 w-1/2 text-xl">
                      Cancelar
                    </button>
                  </Link>
                </div>
                <div className="text-center">
                  <button className="bg-blue-500 text-white rounded-lg h-14 w-1/2 text-xl"
                    type="submit">
                    Buscar Producto
                  </button>
                </div>
              </div>
          </div>
  ;
};

export default ListProduct;
