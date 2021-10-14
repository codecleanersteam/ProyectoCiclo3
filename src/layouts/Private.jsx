import Head from "components/Head";
import React from "react";

const Private = ({ children} ) => {
  return (
    <div>
      <Head />
      {children}
    </div>
  );
};

export default Private;
