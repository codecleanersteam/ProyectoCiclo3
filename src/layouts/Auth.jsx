import React from "react";
import Footer from "components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

// import Logo from "components/ImagenLogo";

const Auth = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen w-full">
      <div className="h-full flex flex-col items-center">
        <main className="h-full w-full">
          <div className="pt-2 pl-4">
            <Link to="/">
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </Link>
            {/* <Logo/> */}
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Auth;
