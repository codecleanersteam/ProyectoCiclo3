import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDarkMode } from "context/darkMode";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import { obtenerProductos, crearProducto, editarProducto, eliminarProducto } from "utils/api";

const Products = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Nuevo Producto");
  const [colorBoton, setColorBoton] = useState("blue-300");
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    console.log("Consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerProductos(
        (response) => {
          setProductos(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
      setEjecutarConsulta(false);
    }
    // }, [mostrarTabla]);
  }, [ejecutarConsulta]);

  //useEffect para actualizar la tabla de productos dinámicamente
  useEffect(() => {
    if (mostrarTabla) {
      setEjecutarConsulta(true);
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
      className={`place-content-center h-full w-full pl-48 pr-48 bg-${
        darkMode ? "black" : "gray-50"
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
          className={`text-white bg-${colorBoton} rounded-md self-end sm:w-40 md:w-72 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-gray-700 hover:text-white shadow-xl sm:my-2 md:my-3 lg:my-7 xl:my-12 2xl:my-14  text-white h-14 w-3/4 text-xl`}
        >
          {textoBoton}
        </button>
      </div>

      {mostrarTabla ? (
        <TablaProductos
          listaProductos={productos}
          setEjecutarConsulta={setEjecutarConsulta}
        />
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

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
  const [search, setSearch] = useState("");
  const { darkMode } = useDarkMode();
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(search.toLowerCase());
      })
    );
  }, [search, listaProductos]);

  return (
    <div className="flex flex-col h-full w-full pr-32 pl-32">
      <div className="flex w-full justify-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar Productos"
          className="flex w-96 border-2 border-gray-700 px-5 py-3 rounded-md focus:outline-none focus:border-blue-500 font-semibold italic text-lg text-black"
        />
      </div>
      <p className="my-5 text-2xl">Lista de Productos</p>
      <div className="hidden md:block">
        <table
          className={`border-2 border-${
            darkMode ? "white" : "black"
          } w-full tabla`}
        >
          <thead>
            <tr className="h-14">
              <th
                className={`w-1/4 border border-${
                  darkMode ? "white" : "black"
                } text-${darkMode ? "white" : "black"}`}
              >
                ID
              </th>
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
              <th
                className={`w-1/4 border border-${
                  darkMode ? "white" : "black"
                } text-${darkMode ? "white" : "black"}`}
              >
                Tareas
              </th>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.map((producto) => {
              return (
                <FilaProducto
                  key={nanoid}
                  producto={producto}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col w-full m-2 md:hidden">
        {productosFiltrados.map((el) => {
          return (
            <div className="bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl">
              <span>{el.nombre}</span>
              <span>{el.marca}</span>
              <span>{el.modelo}</span>
              <span>{el.valorunitario}</span>
              <span>{el.estado}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FilaProducto = ({ producto, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { darkMode } = useDarkMode();
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    _id: producto._id,
    nombre: producto.nombre,
    marca: producto.marca,
    modelo: producto.modelo,
    valorunitario: producto.valorunitario,
    estado: producto.estado,
  });

  const actualizarProducto = async () => {
    await editarProducto(
      producto._id,
      {
        nombre: infoNuevoProducto.nombre,
        marca: infoNuevoProducto.marca,
        modelo: infoNuevoProducto.modelo,
        valorunitario: infoNuevoProducto.valorunitario,
        estado: infoNuevoProducto.estado,
      },
      (response) => {
        console.log(response.data);
        toast.success("Producto modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error("Error modificando el producto");
        console.error(error);
      }
    );
  };

  const deleteProduct = async () => {
    await eliminarProducto(
      producto._id,
      (response) => {
        console.log(response.data);
        toast.success("Producto eliminado con éxito");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando producto");
      }
    );
    setOpenDialog(false);
  };

  return (
    <tr className="h-10">
      {edit ? (
        <>
          <td
            className={`bg-gray-${
              darkMode ? 900 : 50
            } border border-gray-600 p-2 rounded-lg m-2 text-center`}
          >
            {producto._id.slice(19)}
          </td>
          <td>
            <input
              className={`bg-gray-${
                darkMode ? 900 : 50
              } border border-gray-600 p-2 rounded-lg m-2`}
              type="text"
              value={infoNuevoProducto.nombre}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  nombre: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className={`bg-gray-${
                darkMode ? 900 : 50
              } border border-gray-600 p-2 rounded-lg m-2`}
              type="text"
              value={infoNuevoProducto.marca}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  marca: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className={`bg-gray-${
                darkMode ? 900 : 50
              } border border-gray-600 p-2 rounded-lg m-2`}
              type="text"
              value={infoNuevoProducto.modelo}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  modelo: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className={`bg-gray-${
                darkMode ? 900 : 50
              } border border-gray-600 p-2 rounded-lg m-2`}
              type="text"
              value={infoNuevoProducto.valorunitario}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  valorunitario: e.target.value,
                })
              }
            />
          </td>
          <td>
            <select
              className={`bg-gray-${
                darkMode ? 900 : 50
              } border border-gray-600 p-2 rounded-lg m-2`}
              value={infoNuevoProducto.estado}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  estado: e.target.value,
                })
              }
            >
              <option value="Disponible">Disponible</option>
              <option value="No Disponible">No Disponible</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td
            className={`text-center border border-${
              darkMode ? "white" : "black"
            } text-${darkMode ? "white" : "black"}`}
          >
            {producto._id.slice(19)}
          </td>
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
        </>
      )}
      <td
        className={`text-center border border-${
          darkMode ? "white" : "black"
        } text-${darkMode ? "white" : "black"}`}
      >
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow placement="top">
                <i
                  onClick={() => actualizarProducto()}
                  className="fas fa-check text-green-700 hover:text-green-500"
                />
              </Tooltip>
              <Tooltip title="Cancelar Edición" arrow placement="top">
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-ban text-blue-700 hover:text-blue-400"
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Editar Producto" arrow placement="top">
                <i
                  onClick={() => setEdit(!edit)}
                  className={`fas fa-pencil-alt text-${
                    darkMode ? "white" : "black"
                  } hover:text-blue-400`}
                />
              </Tooltip>

              <Tooltip title="Eliminar Producto" arrow placement="top">
                <i
                  onClick={() => setOpenDialog(true)}
                  className={`fas fa-trash text-${
                    darkMode ? "white" : "black"
                  } hover:text-red-700`}
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div
            className={`p-8 flex flex-col bg-${darkMode ? "black" : "white"}`}
          >
            <h1
              className={`text-gray-${
                darkMode ? "50" : "900"
              } text-2xl font-bold`}
            >
              ¿Está seguro de que quiere eliminar el producto?
            </h1>
            <div className="flex w-full justify-center my-4">
              <button
                onClick={() => deleteProduct()}
                className="mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md"
              >
                Si
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className="mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md"
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
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

    await crearProducto(
      {
        nombre: nuevoProducto.nombre,
        marca: nuevoProducto.marca,
        modelo: nuevoProducto.modelo,
        valorunitario: nuevoProducto.valorunitario,
        estado: nuevoProducto.estado,
      },
      (response) => {
        console.log(response.data);
        toast.success("Producto agregado exitosamente");
      },
      (error) => {
        console.error(error);
        toast.error("Se ha producido un error creando el producto");
      }
    );
    setMostrarTabla(true);
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
              defaultValue=""
              required
            >
              <option disabled value="">
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
