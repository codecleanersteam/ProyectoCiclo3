import React from "react";
import {Link} from "react-router-dom";

const Product = () => {
  return(
    <div className="pt-8 text-center w-full">
            <div className="text-5xl font-semibold ">
              Administración de Productos
            </div>
            <div className="pt-40 items-center">
              <div className="grid grid-cols-2">
                <div className="text-right pr-4">
                  <Link to="/product/add">
                    <button className="text-white bg-blue-500 rounded-lg h-20 w-2/4 text-xl">
                      Registrar Productos
                    </button>
                  </Link>
                </div>
                <div className="text-left pl-4">
                  <Link to="/product/modify">
                    <button className="text-white bg-blue-500 rounded-lg h-20 w-2/4 text-xl">
                      Modificar Productos
                    </button>
                  </Link>
                </div>
                <div className="text-right pr-4 pt-4">
                  <Link to="/product/list">
                    <button className="text-white bg-blue-500 rounded-lg h-20 w-2/4 text-xl">
                      Listar Productos
                    </button>
                  </Link>
                </div>
                <div className="text-left pl-4 pt-4">
                  <Link to="/product/search">
                    <button className="text-white bg-blue-500 rounded-lg h-20 w-2/4 text-xl">
                      Buscar Productos
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Product;
