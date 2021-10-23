import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDarkMode } from "context/darkMode";

const productosBackend = [
  {
    nombre: "iphone 20",
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
    nombre: "Nokia 1100",
    marca: "Nokia",
    modelo: "1100",
    valorunitario: "120000",
    estado: "No Disponible",
  },
  {
    nombre: "iphone 12",
    marca: "Apple",
    modelo: "A1170",
    valorunitario: "3999000",
    estado: "Disponible",
  },
];

const Products = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Nuevo Producto");
  const [colorBoton, setColorBoton] = useState("green");
  const { darkMode } = useDarkMode()

  useEffect(() => {
    setProductos(productosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Nuevo Producto");
      setColorBoton("blue");
    } else {
      setTextoBoton("Lista de Productos");
      setColorBoton("green");
    }
  }, [mostrarTabla]);

  return (
    <div className={`place-content-center pl-60 pr-60 bg-${darkMode ? "black":"white"} text-${darkMode ? "white":"black"}`}>
      <div className="text-5xl font-semibold text-center mt-4">
        <h2>Administración de Productos</h2>
      </div>
      <div>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-500 p-5 rounded-full -6 w-28 self-end`}
        >
          {textoBoton}
        </button>
      </div>

      {mostrarTabla ? (
        <TablaProductos listaProductos={productos} />
      ) : (
        <AddProduct
          setMostrarTabla={setMostrarTabla}
          listaProductos={productos}
          setProductos={setProductos}
        />
      )}

      {/* <div className="grid grid-cols-2 place-content-center w-full pr-32 pl-32 pt-12 pb-20">
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
        </div> */}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

const TablaProductos = ({ listaProductos }) => {
const {darkMode} = useDarkMode();
  useEffect(() => {
    console.log("Este es el listado de productos en la Tabla", listaProductos);
  });
  return (
    <div className="place-content-center w-full pr-32 pl-32 pt-20 pb-16">
      <p className="my-5 text-2xl">Lista de Productos</p>
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
          {listaProductos.map((producto) => {
            return (
              <tr className="h-14">
                <td className="text-center border border-black">
                  {producto.nombre}
                </td>
                <td className=" border border-black">{producto.marca}</td>
                <td className="text-center border border-black">
                  {producto.modelo}
                </td>
                <td className="text-center border border-black">
                  {producto.valorunitario}
                </td>
                <td className="text-center border border-black">
                  {producto.estado}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const AddProduct = ({ setMostrarTabla, listaProductos, setProductos }) => {
  const form = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });
    setMostrarTabla(true);
    setProductos([...listaProductos, nuevoProducto]);
    toast.success("Producto agregado exitosamente");
  };
  const {darkMode} = useDarkMode();

  return (
    <div className="place-content-center pl-60 pr-60">
      <p className="pt-24 pl-12 text-2xl">Registrar Nuevo Producto</p>
      <form ref={form} onSubmit={submitForm}>
        <div className="grid grid-cols-3 border-4 border-double border-black items-center justify-center w-full pr-32 pl-32 pt-20 pb-20">
          <div className="m-5">
            <label>Nombre o Descripción</label>
            <br />
            <input
              name="nombre"
              className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm font-bold my-2"
              type="text"
              required
            />
          </div>
          <div className="m-5">
            <label>Marca</label>
            <br />
            <input
              name="marca"
              className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm font-bold my-2"
              type="text"
              required
            />
          </div>
          <div className="m-5">
            <label>Modelo</label>
            <br />
            <input
              name="modelo"
              className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm font-bold my-2"
              type="text"
              required
            />
          </div>
          <div className="m-5">
            <label>Valor Unitario</label>
            <br />
            <input
              name="valorunitario"
              className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm font-bold my-2"
              type="number"
              required
            />
          </div>
          <div className="m-5">
            <label>Estado</label>
            <br />
            <select
              name="estado"
              className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm font-bold my-2"
              required
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccionar Opción
              </option>
              <option>Disponible</option>
              <option>No Disponible</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 place-content-center w-full pr-32 pl-32 pt-12 pb-20">
          <div className="p-4 text-center">
            <Link to="/product">
              <button
                className="bg-blue-500 text-white rounded-lg h-14 w-3/4 text-xl"
                type="button"
              >
                Cancelar
              </button>
            </Link>
          </div>
          <div className="p-4 text-center">
            <Link to="/product/list">
              <button
                className="bg-blue-500 text-white rounded-lg h-14 w-3/4 text-xl"
                type="button"
              >
                Ver Lista de Productos
              </button>
            </Link>
          </div>
          <div className="p-4 text-center">
            <button
              className="bg-blue-500 text-white rounded-lg h-14 w-3/4 text-xl"
              type="submit"
            >
              Registrar Producto
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Products;
