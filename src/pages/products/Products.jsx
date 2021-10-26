import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDarkMode } from "context/darkMode";
import axios from "axios";

//Aqui iban los datos de la tabla incluidos en el código.

const Products = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Nuevo Producto");
  const [colorBoton, setColorBoton] = useState("blue-300");
  const { darkMode } = useDarkMode();

  //useEffect para lectura de productos desde la base de datos.
  useEffect(() => {
    const obtenerProductos = async () => {
      const options = { method: "GET", url: "https://ccteam.com/addproduct" }; //Cambiar URL

      await axios
        .request(options)
        .then(function (response) {
          //console.log(response.data);
          setProductos(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    if (mostrarTabla) {
      obtenerProductos();
    }
  }, [mostrarTabla]);

  //useEffect para cambiar el color y el texto del botón.
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
      className={`flex flex-col items-center h-full w-full px-5 bg-${darkMode ? "black" : "white"
        } text-${darkMode ? "white" : "black"}
      lg:px-56`}
    >
      <div className="font-semibold text-center mt-4 text-4xl lg:text-5xl">
        <h2>Administración de Productos</h2>
      </div>
      <div>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`w-64 h-14 text-2xl my-8 text-white bg-${colorBoton} rounded-md self-end lg:hover:bg-gray-700 hover:text-white shadow-xl lg:w-80`}
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
    <div className="place-content-center h-full w-full pb-16">
      <p className="my-5 text-2xl">Lista de Productos</p>
      <table
        className={`border-2 border-${darkMode ? "white" : "black"} w-full`}
      >
        <thead>
          <tr className="h-14">
            <th
              className={`w-48 border border-${darkMode ? "white" : "black"
                } text-${darkMode ? "white" : "black"}`}
            >
              Nombre o Descripción
            </th>
            <th
              className={`w-24 border border-${darkMode ? "white" : "black"
                } text-${darkMode ? "white" : "black"}`}
            >
              Marca
            </th>
            <th
              className={`w-24 border border-${darkMode ? "white" : "black"
                } text-${darkMode ? "white" : "black"}`}
            >
              Modelo
            </th>
            <th
              className={`w-24 border border-${darkMode ? "white" : "black"
                } text-${darkMode ? "white" : "black"}`}
            >
              Valor Unitario
            </th>
            <th
              className={`w-24 border border-${darkMode ? "white" : "black"
                } text-${darkMode ? "white" : "black"}`}
            >
              Estado
            </th>
            <th
              className={`w-1/4 border border-${darkMode ? "white" : "black"
                } text-${darkMode ? "white" : "black"}`}
            >
              Tareas
            </th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((producto) => {
            return (
              <tr className="h-14">
                <td
                  className={`text-center border border-${darkMode ? "white" : "black"
                    } text-${darkMode ? "white" : "black"}`}
                >
                  {producto.nombre}
                </td>
                <td
                  className={`text-center border border-${darkMode ? "white" : "black"
                    } text-${darkMode ? "white" : "black"}`}
                >
                  {producto.marca}
                </td>
                <td
                  className={`text-center border border-${darkMode ? "white" : "black"
                    } text-${darkMode ? "white" : "black"}`}
                >
                  {producto.modelo}
                </td>
                <td
                  className={`text-center border border-${darkMode ? "white" : "black"
                    } text-${darkMode ? "white" : "black"}`}
                >
                  {producto.valorunitario}
                </td>
                <td
                  className={`text-center border border-${darkMode ? "white" : "black"
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
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });
    // Código para crear producto y enviar la información a la base de datos.

    const options = {
      method: "POST",
      url: "https://ccteam.com/addproduct", //Hay que cambiar esta URL
      headers: { "Content-Type": "application/json" },
      data: {
        nombre: nuevoProducto.nombre,
        marca: nuevoProducto.marca,
        modelo: nuevoProducto.modelo,
        valorunitario: nuevoProducto.valorunitario,
        estado: nuevoProducto.estado,
      },
    };
    // Los valores anteriores de los datos que se envían, deberán con toda seguridad ser cambiados y actualizados, aquí se puede producir un error.

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Producto agregado exitosamente");
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Se ha producido un error creando el producto");
      });

    setMostrarTabla(true);
  };
  const { darkMode } = useDarkMode();

  return (
    <div className="w-full h-full px-28 lg:px-56">
      <p className="pl-12 text-2xl my-5">Registrar Nuevo Producto</p>
      <form ref={form} onSubmit={submitForm}>
        <div
          className={`w-full h-full border-4 border-double border-${darkMode ? "white" : "black"
            } items-center justify-center px-12 py-10 lg:px-0 lg:grid grid-cols-3`}
        >
          <div className="m-5">
            <label>Nombre o Descripción</label>
            <br />
            <input
              name="nombre" //Este valor y todos los nombres de los input con seguridad deberán cambiarse.
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