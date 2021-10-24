import React from "react";
import ImagenLogo from "../components/ImagenLogo";
const Profile = () => {
  return(
    <form class="w-full h-full flex items-center justify-center flex-col ">
      <div class="pb-10 pr-14 "> 
        <ImagenLogo />
      </div>
      <div>
      <h1> MODIFICAR CUENTA DE USUARIO</h1>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Nombre:
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white " id="grid-first-name" type="text" placeholder="Nombre"></input>
          <p class="text-red-500 text-xs italic">Por favor,llena cada campo.</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Apellidos:
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Apellidos"></input>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6 ">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Correo eléctronico:
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="@gmail.com"></input>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Contraseña:
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder="Contraseña"></input>
        </div>
        <div class= "pl-80">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         Confirmar
        </button>
        <button class="btn btn-blue">
        </button>
        </div>
        <div class= "pl-80">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         Cancelar
        </button>
        <button class="btn btn-blue">
        </button>
        </div>
      </div>
      
    </form>
  );
};

export default Profile;
