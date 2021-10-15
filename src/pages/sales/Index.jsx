import React from 'react'

const Sale = () => {
    return (
        < div className="flex flex-col w-full h-full" >
            <div className="flex p-7 justify-center font-bold text-xl">ADMINISTRADOR DE VENTAS</div>
            <div className="flex p-7 justify-center">Seleccione la tarea que desea realizar:</div>
            <div className="flex w-full h-full justify-center">
                <ul className="flex flex-col justify-center">
                    <li>
                        <button>Registrar Venta Nueva</button>
                    </li>
                    <li>
                        <button>Ver Lista de Ventas</button>
                    </li>
                    <li>
                        <button>Buscar Venta</button>
                    </li>
                    <li>
                        <button>Modificar/Actualizar Venta</button>
                    </li>
                </ul>
            </div>
        </div>)
        ;
}

export default Sale
