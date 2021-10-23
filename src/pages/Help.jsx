import React from 'react'
import { useDarkMode } from 'context/darkMode'

const Help = () => {
    const {darkMode} = useDarkMode();
    return (
        <div className={`w-full h-full bg-${darkMode ? "black":"white"} text-${darkMode ? "white":"black"}`}>
            Esta es la pagina de ayuda, llámanos, (+57) 3012345678
        </div>
    )
}

export default Help
