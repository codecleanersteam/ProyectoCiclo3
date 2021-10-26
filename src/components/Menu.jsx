import React, { useState } from 'react';
import { Link } from 'react-router-dom'; import DarkModeSwitch from "./DarkModeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faHome,
    faUsers,
    faInfoCircle,
    faQuestionCircle,
    faSun,
    faMoon,
    faBars,
    faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "context/darkMode";
import useActiveRoute from "hooks/useActiveRoute";
import LogoSmall from './LogoSmall';

const Menu = () => {
    const { darkMode } = useDarkMode();
    const [mostrarMenu, setMostrarMenu] = useState(false);
    return (
        <div
            className='bg-blue-700 lg:hidden'
        >
            <Link to="/">
                <div className="flex flex-row my-2">
                    <FontAwesomeIcon
                        className="text-white mx-4 my-4 lg:hidden"
                        onClick={() => {
                            setMostrarMenu(!mostrarMenu);
                        }}
                        icon={faBars}
                    ></FontAwesomeIcon>
                    <div className="w-1/4 md:w-1/2 flex text-right">
                        <LogoSmall/>
                    </div>
                    <div className="w-2/3 text-3xl text-white pt-2 font-bold text-left">Code Cleaners Tech</div>
                </div>
            </Link>
            {mostrarMenu && (
                <ul className={`bg-blue-500 items-center  bg-${darkMode ? "blue-600" : "blue-500"}`}>
                    <RutaMenu icono={faUsers} ruta={"/about"} nombre={"Quienes Somos"} />
                    <RutaMenu icono={faInfoCircle} ruta={"/description"} nombre={"Descripción"} />
                    <RutaMenu icono={faQuestionCircle} ruta={"/help"} nombre={"Ayuda"} />
                    <DarkModeSwitch estilo={`pl-3 flex flex-row p-2 text-white text-xl md:text-2xl`} icono={darkMode ? faSun : faMoon} />
                    <RutaMenu icono={faSignInAlt} ruta={"/login"} nombre={"Iniciar Sesión"} />
                </ul>
            )}
        </div>
    );
};

const RutaMenu = ({ ruta, nombre, icono }) => {
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

export default Menu;