import React from "react";
import Footer from "components/Footer";

const Auth = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-col items-center h-screen py-2 px-4">
        Este es el layout de Autenticación
        <div className="w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
