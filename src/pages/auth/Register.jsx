import React from "react";
import ImagenLogo from "../../components/ImagenLogo"

const Register = () => {
  return(
    <form class="w-full h-full flex items-center justify-center flex-col space-y-16 ">
      <div class="pb-10 pr-14 "> 
          <ImagenLogo />
      </div>
      <div>
        <h1> ADMINISTRADOR DE USUARIOS</h1>
      </div>
      <div class="space-y-8 justify-around"> 
        <p>Seleccione la tarea que desea realizar </p>
      </div>
      <div>
      <div class= "pl-50">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         Regresar
        </button>
        <button class="btn btn-blue">
        </button>
        </div>
      </div>
    </form>
  )
};

export default Register;
