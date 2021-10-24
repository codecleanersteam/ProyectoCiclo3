import axios from "axios";

export const obtenerProductos = async (setProductos, setEjecutarConsulta) => {
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
    setEjecutarConsulta(false);
  };