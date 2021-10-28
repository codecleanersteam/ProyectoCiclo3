import React from 'react'
import { useUser } from 'context/userContext';

const PrivateComponent = ({ roleList, children }) => {
    const { userData } = useUser();
    // console.log("Datos de usuario en el componente privado", userData);

    if (roleList.includes(userData.rol)) {
        return children;
    }

    return <></>;
}

export default PrivateComponent
