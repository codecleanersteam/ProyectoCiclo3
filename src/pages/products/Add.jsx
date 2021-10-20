import React from "react";
import {Link} from "react-router-dom";

const AddProduct = () => {
  return  <div className="place-content-center pl-60 pr-60">
            <div className="text-5xl font-semibold text-center mt-4">
              Administración de Productos
            </div>
            <p className="pt-24 pl-12 text-2xl">Registro de Producto</p>
            <form action="">
              <div className="grid grid-cols-2 border-4 border-double border-black place-content-center w-full pr-32 pl-32 pt-20 pb-20">
                <div className="pr-4">
                  <label>Identificador de Producto</label><br />
                  <input className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm font-bold my-2" 
                    type="text" 
                  />
                </div>
                <div className="pl-4">
                  <label>Descripción</label><br />
                  <input className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm font-bold my-2"
                    type="text" />
                </div>
                <div className="pr-4">
                  <label>Valor Unitario</label><br />
                  <input className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm font-bold my-2"
                    type="text" 
                  />
                </div>
                <div className="pl-4">
                  <label>Estado</label><br />
                  <select className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm font-bold my-2">
                    <option value="">Seleccione</option>
                    <option value="1">Disponible</option>
                    <option value="0">No Disponible</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 place-content-center w-full pr-32 pl-32 pt-12 pb-20">
                <div className="p-4 text-center">
                  <Link to="/product">
                    <button className="bg-blue-500 text-white rounded-lg h-14 w-3/4 text-xl"
                      type="button">
                      Cancelar
                    </button>
                  </Link>
                </div>
                <div className="p-4 text-center">
                  <Link to="/product/list">
                    <button className="bg-blue-500 text-white rounded-lg h-14 w-3/4 text-xl"
                      type="button">
                      Ver Lista de Productos
                    </button>
                  </Link>
                </div>
                <div className="p-4 text-center">
                  <button className="bg-blue-500 text-white rounded-lg h-14 w-3/4 text-xl"
                    type="submit">
                    Registrar
                  </button>
                </div>
              </div>
            </form>
          </div>
  ;
};

export default AddProduct;
