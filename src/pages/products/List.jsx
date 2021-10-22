import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListProduct = () => {

  const celularesBackend = [{
    nombre: "iphone 13",
    marca: "Apple",
    modelo: "A1260",
    valorunitario: "4599000",
    estado: "Disponible",
  },
  {
    nombre: "Galaxy S21",
    marca: "Samsung",
    modelo: " SM-G998B",
    valorunitario: "4199000",
    estado: "Disponible",
  },
  {
    nombre: "Mi 11",
    marca: "Samsung",
    modelo: "Ultra",
    valorunitario: "2799000",
    estado: "Disponible",
  },
  {
    nombre: "iphone 12",
    marca: "Apple",
    modelo: "A1170",
    valorunitario: "3999000",
    estado: "Disponible",
  }
  ]

  const [celulares, setCelulares] = useState([])
  useEffect(() => {
    setCelulares(celularesBackend);
  }, []);

  return <div className="place-content-center pl-60 pr-60">
    <div className="text-5xl font-semibold text-center mt-4">
      Administración de Productos
    </div>
    <p className="pt-12 pl-12 text-2xl">Lista de Celulares</p>
    <TablaCelulares listaCelulares={celulares} />
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

const TablaCelulares = ({ listaCelulares }) => {
  return (
    <div className="place-content-center w-full pr-32 pl-32 pt-20 pb-16">
      <table className="border-2 w-full">
        <thead>
          <tr className="h-14">
            <th className="w-1/4 border border-black">Nombre o Descripción</th>
            <th className="w-1/4 border border-black">Marca</th>
            <th className="w-1/4 border border-black">Modelo</th>
            <th className="w-1/4 border border-black">Valor Unitario</th>
            <th className="w-1/4 border border-black">Estado</th>
          </tr>
        </thead>
        <tbody>
          {listaCelulares.map((celular) => {
            return (
              <tr className="h-10">
                <td className="text-center border border-black">{celular.nombre}</td>
                <td className=" border border-black">{celular.marca}</td>
                <td className="text-center border border-black">{celular.modelo}</td>
                <td className="text-center border border-black">{celular.valorunitario}</td>
                <td className="text-center border border-black">{celular.estado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;
