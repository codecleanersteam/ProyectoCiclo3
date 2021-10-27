import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from "react-loading"
// import { Link } from "react-router-dom";
// import ImagenLogo from "./ImagenLogo";
// import Footer from "./Footer";

const PrivateRoute = ({ children }) => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      // Pedir token por ejemplo para validar fecha de expiración.
      // if (localStorage.getItem("Token")) {
      //   //Validar la fecha de expiración del Token
      // } else {
      // }
      const accessToken = await getAccessTokenSilently({
        audience: `api-proyecto-ciclo3-v2`,
      });
      localStorage.setItem("Token", accessToken);
      // console.log(accessToken);
    };

    if (isAuthenticated) {
      //Si está autenticado, pida el token.
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) return (
    <div className="flex h-full w-full items-center justify-center">
      <ReactLoading type="balls" color="#82c0e7" height={667} width={375} />
    </div>
  );

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return <>{children}</>;
};

export default PrivateRoute;
