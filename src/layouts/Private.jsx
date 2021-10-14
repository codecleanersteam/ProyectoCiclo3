import Footer from "components/Footer";
import Head from "components/Head";
import React from "react";

const Private = ({ children} ) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Head />
      <main className="h-full overflow-y-scroll bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
};

export default Private;
