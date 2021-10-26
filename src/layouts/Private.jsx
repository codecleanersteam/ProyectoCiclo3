import Footer from "components/Footer";
import Head from "components/Head";
import React from "react";
import SidebarResponsive from 'components/SidebarResponsive';

const Private = ({ children} ) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Head />
      <SidebarResponsive />
      <main className="h-full overflow-y-scroll bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
};

export default Private;
