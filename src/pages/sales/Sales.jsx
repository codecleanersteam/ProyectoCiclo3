import axios from "axios";
import { nanoid } from "nanoid";
import React, { useEffect, useState, useRef } from "react";
import { obtenerUsuarios } from "utils/api";
import { obtenerProductos } from "utils/api";

const Sales = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  const form = useRef(null);

  useEffect(() => {
    obtenerProductos(setProductos);
    obtenerUsuarios(setUsuarios);
  }, []);

  useEffect(() => {
    console.log(productos);
  }, [productos]);
  useEffect(() => {
    console.log(usuarios);
  }, [usuarios]);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });
      
      const informacionConsolidada = {
          valor: nuevaVenta.cantidadVenta,
          producto: productos.filter((el) => el._id === nuevaVenta.producto)[0],
          vendedor: usuarios.filter((el) => el._id === nuevaVenta.vendedor)[0],
          
      };
      console.log(informacionConsolidada)

    const options = {
      method: "POST",
      url: "http://192.168.0.100:3001/sales/",
      headers: { "Content-Type": "application/json" },
      data: 
        nuevaVenta,
        // nombre: nuevoProducto.nombre,
        // marca: nuevoProducto.marca,
        // modelo: nuevoProducto.modelo,
        // valorunitario: nuevoProducto.valorunitario,
        // estado: nuevoProducto.estado,
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        // toast.success("Producto agregado exitosamente");
      })
      .catch(function (error) {
        console.error(error);
        // toast.error("Se ha producido un error creando el producto");
      });
  };

  return (
    <div>
      Crear nueva Venta
      <form ref={form} onSubmit={submitForm} className="flex flex-col">
        <label>
          Seleccionar Vendedor
          <select name="Vendedor">
            {usuarios.map((u) => {
              return (
                <option key={nanoid()} value={u._id}>
                  {u.email}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Seleccionar Producto
          <select name="Producto">
            {productos.map((p) => {
              return (
                <option key={nanoid()} value={p._id}>
                  {p.nombre}
                </option>
              );
            })}
          </select>
        </label>

        <input type="number" name="cantidadVenta" />
        <button type="submit">Enviar Venta</button>
      </form>
    </div>
  );
};

export default Sales;
