import React from "react";
import {Link} from "react-router-dom";

const ListProduct = () => {
  return  <div className="place-content-center pl-60 pr-60">
            <div className="text-5xl font-semibold text-center mt-4">
              Administración de Productos
            </div>
            <p className="pt-12 pl-12 text-2xl">Lista de Productos</p>
            <div className="place-content-center w-full pr-32 pl-32 pt-20 pb-16">
              <table className="table-fixed border-2 w-full">
                <thead>
                  <tr className="h-14">
                    <th className="w-1/4 border border-black">Identificador</th>
                    <th className="w-1/4 border border-black">Descripción</th>
                    <th className="w-1/4 border border-black">Valor Unitario</th>
                    <th className="w-1/4 border border-black">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="h-10">
                    <td className="text-center border border-black">001</td>
                    <td className=" border border-black">Producto 1</td>
                    <td className="text-center border border-black">50000</td>
                    <td className="text-center border border-black">Disponible</td>
                  </tr>
                  <tr className="h-10">
                    <td className="text-center border border-black">002</td>
                    <td className=" border border-black">Producto 2</td>
                    <td className="text-center border border-black">112000</td>
                    <td className="text-center border border-black">Disponibible</td>
                  </tr>
                  <tr className="h-10">
                    <td className="text-center border border-black">003</td>
                    <td className=" border border-black">Producto 3</td>
                    <td className="text-center border border-black">1524000</td>
                    <td className="text-center border border-black">No Disponible</td>
                  </tr>
                  <tr className="h-10">
                    <td className="text-center border border-black">004</td>
                    <td className=" border border-black">Producto 4</td>
                    <td className="text-center border border-black">1124000</td>
                    <td className="text-center border border-black">Disponible</td>
                  </tr>
                  <tr className="h-10">
                    <td className="text-center border border-black">005</td>
                    <td className=" border border-black">Producto 5</td>
                    <td className="text-center border border-black">15000</td>
                    <td className="text-center border border-black">No Disponible</td>
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
