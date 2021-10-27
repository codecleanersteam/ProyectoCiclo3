import axios from "axios";

const getToken = () => {
  return `Bearer ${localStorage.getItem("Token")}`
}

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://192.168.0.100:3001/products/",
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://192.168.0.100:3001/products/",
    headers: { "Content-Type": "application/json", Authorization: getToken()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (
  id,
  data,
  successCallback,
  errorCallback
) => {
  const options = {
    method: "PATCH",
    url: `http://192.168.0.100:3001/products/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://192.168.0.100:3001/products/${id}/`, //Cambiar la URL
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    // data: { id: producto._id },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://192.168.0.100:3001/users",
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://192.168.0.100:3001/sales/",
    headers: { "Content-Type": "application/json", Authorization: getToken(),},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// export const obtenerUsuarios = async (
//   setUsuarios,
//   setEjecutarConsulta = () => {}
// ) => {
//   const options = { method: "GET", url: "http://192.168.0.100:3001/users/" }; //Cambiar URL

//   await axios
//     .request(options)
//     .then(function (response) {
//       //console.log(response.data);
//       setUsuarios(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   setEjecutarConsulta(false);
// };
