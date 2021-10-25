import axios from "axios";

export const obtenerProductos = async (setProductos, setEjecutarConsulta) => {
    const options = { method: "GET", url: "http://localhost:3001/products" }; //Cambiar URL
    
    await axios
    .request(options)
    .then(function (response) {
      //console.log(response.data);
      setProductos(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    setEjecutarConsulta(false);
  };