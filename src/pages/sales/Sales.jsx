import React, { useEffect, useState, useRef } from "react";
import { obtenerProductos, obtenerUsuarios } from "utils/api";
import { nanoid } from "nanoid";
import { crearVenta } from "utils/api";

const Sales = () => {
  const form = useRef(null);
  const [vendedores, setVendedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  useEffect(() => {
    const fetchVendedores = async () => {
      await obtenerUsuarios(
        (response) => {
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

  useEffect(() => {
    console.log("Productos Seleccionados", productosSeleccionados);
  }, [productosSeleccionados]);

  const agregarNuevoProducto = () => {
    setProductosSeleccionados([...productosSeleccionados, dropDownProductos]);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

console.log("Nueva Venta", nuevaVenta)

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
        <form ref={form} onSubmit={submitForm} className="flex flex-col">
          <label className="flex flex-col" htmlFor="vendedor">
            <span className="text-2xl font-gray-900">Vendedor</span>
            <select name="Vendedor" className="p-2" defaultValue={-1}>
              <option disabled value={-1}>
                Seleccione un Vendedor
              </option>
              {vendedores.map((el) => {
                return (
                  <option
                    key={nanoid()}
                    value={el._id}
                  >{`${el.nombre} ${el.apellido}`}</option>
                );
              })}
            </select>
          </label>
          <div className="flex flex-col">
            <span>Selección de Productos</span>
            <button
              onClick={agregarNuevoProducto}
              className="sm:w-40 md:w-72 bg-blue-500 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-700 hover:text-white shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14  text-white rounded-lg h-14 w-3/4 text-xl"
            >
              Agregar Nuevo Producto
            </button>
          </div>
          {productosSeleccionados.map((DropDownProducto, index) => {
            return (
              <div className="flex">
              <DropDownProducto
                key={nanoid()}
                productos={productos}
                nombre={`producto_${index}`}
              />
                <button>Eliminar</button>
              </div>
            );
          })}

          <label className="flex flex-col">
            <span className="text-2xl font-gray-900">Valor Total Venta</span>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg"
              type="number"
              name="valor"
            />
          </label>
          <button
            type="submit"
            className="sm:w-40 md:w-72 bg-blue-500 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-700 hover:text-white shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14  text-white rounded-lg h-14 w-3/4 text-xl"
          >
            Crear Venta
          </button>
        </form>
      </div>
    </>
  );
};

export default Sales;

const dropDownProductos = ({ productos, nombre }) => {
  return (
    <label className="flex flex-col" htmlFor="producto">
      <span className="text-2xl font-gray-900">Producto</span>
      <select name={nombre} className="p-2" defaultValue={-1}>
        <option disabled value={-1}>
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
  );
};
