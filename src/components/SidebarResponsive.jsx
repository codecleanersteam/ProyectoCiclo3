import React, { useState } from 'react';
import { Link } from 'react-router-dom'; import DarkModeSwitch from "./DarkModeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileInvoiceDollar,
    faMobileAlt,
    faUsers,
    faUser,
    faSignOutAlt,
    faSun,
    faMoon,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "context/darkMode";
import useActiveRoute from "hooks/useActiveRoute";
import LogoSmall from './LogoSmall';

const SidebarResponsive = () => {
    const { darkMode } = useDarkMode();
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
    return (
        <div
            className='bg-blue-700 lg:hidden'
            onClick={() => {
                setMostrarNavegacion(!mostrarNavegacion);
            }}
        >
            <div className="flex flex-row my-2">
                <FontAwesomeIcon
                    className="text-white mx-4 my-4 lg:hidden"
                    icon={faBars}
                ></FontAwesomeIcon>
                <div className="w-1/4 md:w-1/2 flex text-right">
                    <LogoSmall/>
                </div>
                <div className="w-2/3 text-2xl text-white pt-2 font-bold text-left">
                    Code Cleaners Tech
                </div>
            </div>

            {mostrarNavegacion && (
                <ul className={`bg-blue-500 items-center  bg-${darkMode ? "blue-600" : "blue-500"}`}>
                    <ResponsiveRoute icono={faMobileAlt} ruta={"/products"} nombre={"Administrador de Productos"} />
                    <ResponsiveRoute icono={faFileInvoiceDollar} ruta={"/sale"} nombre={"Administrador de Ventas"} />
                    <ResponsiveRoute icono={faUsers} ruta={"/user"} nombre={"Administrador de Usuarios"} />
                    <DarkModeSwitch estilo={`pl-3 flex flex-row p-2 text-white text-xl md:text-2xl`} icono={darkMode ? faSun : faMoon} />
                    <ResponsiveRoute icono={faUser} ruta={"/profile"} nombre={"Mi Cuenta"} />
                    <ResponsiveRoute icono={faSignOutAlt} ruta={"/login"} nombre={"Salir"} />
                </ul>
            )}
        </div>
    );
};

const ResponsiveRoute = ({ ruta, nombre, icono }) => {
    const isActive = useActiveRoute(ruta);
    return (
        <Link to={ruta}>
            <li className={`flex flex-row text-xl md:text-2xl text-white p-2 bg-${isActive ? "blue-900" : "blue-500"}`}>
                <div className="flex flex-row py-1">
                    <FontAwesomeIcon
                        className="flex"
                        icon={icono}
                    ></FontAwesomeIcon>
                </div>
                <div className="pl-4">
                    {nombre}
                </div>
            </li>
        </Link>
    );
};

export default SidebarResponsive;