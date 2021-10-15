import React from "react";
import Footer from "components/Footer";
import Logo from "components/ImagenLogo";

const Auth = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-col items-center h-screen py-2 px-4">
        <div className="w-full pt-20">
          {/* <Logo/> */}
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
