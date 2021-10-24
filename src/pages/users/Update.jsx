import React from 'react'

const Update = () => {
	return (
		<div className="flex flex-col w-full h-full">
      <div className="flex justify-center m-10 text-2xl  font-bold">
        ADMINISTRADOR DE USUARIOS
      </div>
      <div className="flex bg-gray-100 justify-center pt-5">
        <div></div>
        <div>
          <div className="px-10 py-3 text-xl">Lista de Usuarios</div>
          <div className="flex pl-10">
            <table>
              <thead>
                <th className="px-1 py-2 w-32">ID. Usuario</th>
                <th className="px-1 py-2 w-80">Nombre</th>
                <th className="px-1 py-2 w-36">Rol</th>
                <th className="px-1 py-2 w-36">Estado</th>
              </thead>
              <tbody className="overflow-y-scroll">
                <tr>
                  <td className="text-center">V0001</td>
                  <td className="text-center">Mauricio Cendales</td>
                  <td className="text-center">10000</td>
                  <td className="text-center">En Proceso</td>
                </tr>
                <tr>
                  <td className="text-center">V0002</td>
                  <td className="text-center">Daniela Rodriguez</td>
                  <td className="text-center">35000</td>
                  <td className="text-center">Entregada</td>
                </tr>
                <tr>
                  <td className="text-center">V0003</td>
                  <td className="text-center">William Santamaria</td>
                  <td className="text-center">17000</td>
                  <td className="text-center">Cancelada</td>
                </tr>
                <tr>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          {/* <Link to="/sale/"> */}
            <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
              Regresar
            </button>
          {/* </Link> */}
        </div>
        <div>
          {/* <Link to="/sale/add"> */}
            <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
              Agregar Nuevo Usuario
            </button>
          {/* </Link> */}
        </div>
        <div>
          {/* <Link to="/sale/search"> */}
            <button className="my-5 py-5 sm:w-40 md:w-72 bg-blue-300 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-500 hover:text-white rounded-md shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14">
              Buscar Usuario
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>

	)
}

export default Update;
