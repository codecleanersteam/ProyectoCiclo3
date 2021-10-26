import React, { useEffect, useState, useRef } from "react";
import { obtenerProductos, obtenerUsuarios } from "utils/api";
import { nanoid } from "nanoid";
import { useDarkMode } from "context/darkMode";
import { crearVenta } from "utils/api";

const Sales = () => {
  const form = useRef(null);
  const [vendedores, setVendedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosTabla, setProductosTabla] = useState([]);

  useEffect(() => {
    const fetchVendedores = async () => {
      await obtenerUsuarios(
        (response) => {
          console.log("respuesta de usuarios", response);
          setVendedores(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    const fetchProductos = async () => {
      await obtenerProductos(
        (response) => {
          setProductos(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    fetchVendedores();
    fetchProductos();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    console.log("Nueva Venta", nuevaVenta);

    const listaProductos = Object.keys(nuevaVenta)
      .map((k) => {
        if (k.includes("producto")) {
          return productosTabla.filter((p) => p._id === nuevaVenta[k])[0];
        }
        return null;
      })
      .filter((p) => p);

    console.log("Lista antes de cantidad", listaProductos);

    Object.keys(nuevaVenta).forEach((k) => {
      if (k.includes("cantidad")) {
        const indice = parseInt(k.split("_")[1]);
        listaProductos[indice]["cantidad"] = nuevaVenta[k];
      }
    });

    console.log("Lista después de cantidad", listaProductos);

    const datosVenta = {
      vendedor: vendedores.filter((v) => v._id === nuevaVenta.vendedor)[0],
      // cantidad: nuevaVenta.valor,
      totalventa: nuevaVenta.valor,
      productos: listaProductos,
    };

    console.log("Lista de Productos: ", listaProductos);

    await crearVenta(
      datosVenta,
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    // const infoConsolidada = {
    //   valor: nuevaVenta.valor,
    //   vendedor: vendedores.filter((v) => v.id === nuevaVenta.vendedor)[0], //Aqui hay un error, siempre va a enviar el mismo vendedor
    //   producto: productos.filter((p) => p.id === nuevaVenta.producto)[0], //Aqui hay un error...
    // };

    // console.log(infoConsolidada);

    // await crearVenta(
    //   infoConsolidada,
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  };

  return (
    <>
      <div>
        <div className="text-5xl font-semibold text-center mt-4">
          <h2>Administración de Ventas</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full overflow-y-scroll">
        <form ref={form} onSubmit={submitForm} className="flex flex-col h-full">
          <label className="flex flex-col" htmlFor="vendedor">
            <span className="text-2xl font-gray-900 mt-20">Vendedor</span>
            <select
              name="Vendedor"
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg"
              defaultValue=""
              required
            >
              <option disabled value="">
                Seleccione un Vendedor
              </option>
              {vendedores.map((el) => {
                return <option key={nanoid()} value={el._id}>{`${el.nombre} ${el.apellido}`}</option>;
              })}
            </select>
          </label>
          <TablaProductos
            productos={productos}
            setProductos={setProductos}
            setProductosTabla={setProductosTabla}
          />
          <label className="flex flex-col">
            <span className="text-2xl font-gray-900">Valor Total Venta</span>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg"
              type="number"
              name="valor"
              required
            />
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className="sm:w-40 md:w-72 bg-blue-500 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-700 hover:text-white shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14  text-white rounded-lg h-14 w-3/4 text-xl"
            >
              Crear Venta
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

const TablaProductos = ({ productos, setProductos, setProductosTabla }) => {
  const [productoAAgregar, setProductoAAgregar] = useState({});
  const { darkMode } = useDarkMode();
  const [filasTabla, setFilasTabla] = useState([]);

  useEffect(() => {
    console.log(productoAAgregar);
  }, [productoAAgregar]);

  useEffect(() => {
    console.log("filastabla:", filasTabla);
    setProductosTabla(filasTabla);
  }, [filasTabla, setProductosTabla]);

  const agregarNuevoProducto = () => {
    setFilasTabla([...filasTabla, productoAAgregar]);
    setProductos(productos.filter((p) => p._id !== productoAAgregar._id));
    setProductoAAgregar({});
  };

  const eliminarProducto = (productoAEliminar) => {
    setFilasTabla(filasTabla.filter((p) => p._id !== productoAEliminar._id));
    setProductos([...productos, productoAEliminar]);
  };

  return (
    <div>
      <div className="flex">
        <label className="flex flex-col" htmlFor="producto">
          <select
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg"
            value={productoAAgregar._id ?? ""}
            onChange={(e) =>
              setProductoAAgregar(
                productos.filter((p) => p._id === e.target.value)[0]
              )
            }
          >
            <option disabled value="">
              Seleccione un Producto
            </option>
            {productos.map((el) => {
              return (
                <option
                  key={nanoid()}
                  value={el._id}
                >{`${el.nombre} ${el.marca} ${el.modelo} ${el.valorunitario} ${el.estado}`}</option>
              );
            })}
          </select>
        </label>
        <button
          type="button"
          onClick={() => agregarNuevoProducto()}
          className="col-span-2 bg-blue-500 p2 rounded-md shadow-md hover:bg-blue-700 text-white"
          // className="col-span-2 sm:w-40 md:w-72 bg-blue-500 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-700 hover:text-white shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14  text-white rounded-lg h-14 w-3/4 text-xl"
        >
          Agregar Producto
        </button>
      </div>
      <table
        className={`border-2 border-${
          darkMode ? "white" : "black"
        } w-full tabla`}
      >
        <thead className="h-14">
          <tr>
            <th
              className={`w-1/4 border border-${
                darkMode ? "white" : "black"
              } text-${darkMode ? "white" : "black"}`}
            >
              Id
            </th>
            <th
              className={`w-1/4 border border-${
                darkMode ? "white" : "black"
              } text-${darkMode ? "white" : "black"}`}
            >
              Nombre
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
              Cantidad
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
              Eliminar
            </th>
            <th className="hidden">Input</th>
          </tr>
        </thead>
        <tbody>
          {filasTabla.map((el, index) => {
            return (
              <tr key={nanoid()}>
                <td>{el._id.slice(19)}</td>
                <td>{el.nombre}</td>
                <td> {el.marca}</td>
                <td>{el.modelo}</td>
                <td>{el.valorunitario}</td>
                <td>
                  <label htmlFor={`cantidad_${index}`}>
                    <input
                      type="number"
                      name={`cantidad_${index}`}
                      className="text-center bg-gray-100"
                      placeholder="0"
                      min="0"
                      required
                    />
                  </label>
                </td>
                <td>{el.estado}</td>
                <td>
                  <div className="flex w-full place-content-center">
                    <i
                      onClick={() => {
                        eliminarProducto(el);
                      }}
                      className="far fa-minus-square text-blue-500 cursor-pointer"
                    />
                  </div>
                </td>
                <td>
                  <input
                    hidden
                    defaultValue={el._id}
                    name={`producto_${index}`}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;
