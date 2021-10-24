import React from "react";
import ImagenLogo from "../../components/ImagenLogo";

const Pending = () => {
  return(
    <form class="w-full h-full flex items-center justify-center flex-col space-y-16 ">
      <div class="pb-10 pr-14 "> 
          <ImagenLogo />
      </div>
      <div>
        <h2>¡La creación de su cuenta ha sido: EXITOSA!</h2>
      </div>
      <div>
          <p>Su solicitud de acceso se encuentra en estado PENDIENTE, y debe ser aprobada por un Administrador. </p>
      </div>
      <div class= "pl-50">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         Regresar
        </button>
        <button class="btn btn-blue">
        </button>
        </div>
    </form>
  )
};

export default Pending;
