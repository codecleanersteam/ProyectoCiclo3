import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";

const Public = ({ children }) => {
  return (
    // Los contenidos se van a mostrar 
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
        <main className="h-full overflow-y-scroll bg-gray-100">{children}</main>
      <Footer/>
    </div>
  );
};

export default Public;
