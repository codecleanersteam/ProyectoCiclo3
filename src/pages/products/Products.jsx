import React, { useEffect, useState, useRef } from "react";
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
  const [colorBoton, setColorBoton] = useState("blue-300");
  const { darkMode } = useDarkMode();

  useEffect(() => {
    setProductos(productosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Nuevo Producto");
      setColorBoton("blue-700");
    } else {
      setTextoBoton("Lista de Productos");
      setColorBoton("blue-400");
    }
  }, [mostrarTabla]);

  return (
    <div
      className={`place-content-center h-full w-full pl-48 pr-48 bg-${
        darkMode ? "black" : "white"
      } text-${darkMode ? "white" : "black"}`}
    >
      <div className="text-5xl font-semibold text-center mt-4">
        <h2>Administración de Productos</h2>
      </div>
      <div>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton} rounded-md self-end sm:w-40 md:w-72 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-gray-700 hover:text-white shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14  text-white h-14 w-3/4 text-xl`}
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

      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

const TablaProductos = ({ listaProductos }) => {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    console.log("Este es el listado de productos en la Tabla", listaProductos);
  });
  return (
    <div className="place-content-center h-full w-full pr-32 pl-32 pb-16">
      <p className="my-5 text-2xl">Lista de Productos</p>
      <table
        className={`border-2 border-${darkMode ? "white" : "black"} w-full`}
      >
        <thead>
          <tr className="h-14">
            <th
              className={`w-1/4 border border-${
                darkMode ? "white" : "black"
              } text-${darkMode ? "white" : "black"}`}
            >
              Nombre o Descripción
            </th>
            <th
              className={`w-1/4 border border-${
                darkMode ? "white" : "black"
              } text-${darkMode ? "white" : "black"}`}
            >
              Marca
            </th>
            <th
              className={`w-1/4 border border-${
                darkMode ? "white" : "black"
              } text-${darkMode ? "white" : "black"}`}
            >
              Modelo
            </th>
            <th
              className={`w-1/4 border border-${
                darkMode ? "white" : "black"
              } text-${darkMode ? "white" : "black"}`}
            >
              Valor Unitario
            </th>
            <th
              className={`w-1/4 border border-${
                darkMode ? "white" : "black"
              } text-${darkMode ? "white" : "black"}`}
            >
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((producto) => {
            return (
              <tr className="h-14">
                <td
                  className={`text-center border border-${
                    darkMode ? "white" : "black"
                  } text-${darkMode ? "white" : "black"}`}
                >
                  {producto.nombre}
                </td>
                <td
                  className={`text-center border border-${
                    darkMode ? "white" : "black"
                  } text-${darkMode ? "white" : "black"}`}
                >
                  {producto.marca}
                </td>
                <td
                  className={`text-center border border-${
                    darkMode ? "white" : "black"
                  } text-${darkMode ? "white" : "black"}`}
                >
                  {producto.modelo}
                </td>
                <td
                  className={`text-center border border-${
                    darkMode ? "white" : "black"
                  } text-${darkMode ? "white" : "black"}`}
                >
                  {producto.valorunitario}
                </td>
                <td
                  className={`text-center border border-${
                    darkMode ? "white" : "black"
                  } text-${darkMode ? "white" : "black"}`}
                >
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
  const { darkMode } = useDarkMode();

  return (
    <div className="place-content-center pl-60 pr-60">
      <p className="pl-12 text-2xl my-5">Registrar Nuevo Producto</p>
      <form ref={form} onSubmit={submitForm}>
        <div
          className={`grid grid-cols-3 border-4 border-double border-${
            darkMode ? "white" : "black"
          } items-center justify-center w-full pr-32 pl-32 pt-20 pb-20`}
        >
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
        <div className="flex flex-col justify-center items-center p-4 text-center">
          <button
            className="sm:w-40 md:w-72 bg-blue-500 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-700 hover:text-white shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14  text-white rounded-lg h-14 w-3/4 text-xl"
            type="submit"
          >
            Registrar Producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default Products;
