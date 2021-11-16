import React from "react";
import ImagenLogo from "../../components/ImagenLogo";
const User = () => {
  
  return (
    <form class="w-full h-full flex items-center justify-center flex-col ">
      <div class="pb-10 pr-14 "> 
        <ImagenLogo />
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
      </div>
      <div class="flex items-center border-b border-teal-500 py-2 bg-blue-200 ">
        <button class="flex-shrink-0 bg-teal-500 content-between 	align-content: space-between hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-black py-1 px-2 rounded" type="button">
        Crear cuenta
        </button>
      </div>
    </form>

  );
};

export default User;
