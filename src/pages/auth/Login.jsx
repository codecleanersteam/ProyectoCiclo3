import React from "react";
import { Link } from "react-router-dom";
import Google from "media/google_logo.png";

const Login = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="m-3 text-center text-2xl font-extrabold text-gray-700">
        INGRESO AL SISTEMA DE INFORMACIÓN
      </h1>
      <form className="mt-8 max-w-sm">
        <div>
          <div className="flex m-20 justify-center">Logo</div>
          <div className="text-xl text-">
            Inicia Sesión en tu Cuenta de CCTech
          </div>
          <div>
            <button className="bg-gray-200 py-1 mt-2 w-full hover:bg-gray-300">
              <div className="flex">
                <img src={Google} alt="Logo Google" className="mx-2 h-6 w-6"/>
                <span className="mx-4">Continuar con Google</span>
              </div>
            </button>
          </div>
          <input
            className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm my-2"
            type="email"
            placeholder="Escriba su correo electrónico"
            required
          />
          <input
            className="appeareance-none relative block w-full px-3 py-2 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm"
            type="password"
            placeholder="Escriba su contraseña"
            required
          />
        </div>
        <div>
          <label
            className="flex m-3 justify-center text-center"
            htmlFor="recuérdame"
          >
            <input className="m-2" type="checkbox" name="recuérdame" />
            Recuérdame en este equipo
          </label>
        </div>
        <div className="flex justify-center">
          <Link to="/product">
            <button
              className="flex bg-blue-500 text-white py-2 px-16"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </Link>
        </div>
        <div className="flex justify-center m-3">--O--</div>
        <div className="flex justify-center m-5">
          <Link to="/">¿Has olvidado tu Contraseña?</Link>
        </div>
        <div className="flex justify-around">
          <div>¿Aún no tienes cuenta?</div>
          <div className="font-bold">
            <Link to="/register">Registrate</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
