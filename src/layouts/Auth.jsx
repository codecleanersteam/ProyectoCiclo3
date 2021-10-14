import React from "react";
import Footer from "components/Footer";

const Auth = ( {children} ) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      Este es el layout de Autenticación
      {children}
      <Footer />
    </div>
  );
}

export default Auth;
