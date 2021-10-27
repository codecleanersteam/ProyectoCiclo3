import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from "react-router-dom";
// import ImagenLogo from "./ImagenLogo";
// import Footer from "./Footer";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) return <div>Loading.../</div>;

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return <>{children}</>;
};
//   return isAuthenticated ? (
//     <>{children}</>
//   ) : (
//     <div className="flex justify-center flex-col m-10">
//       <ImagenLogo />
//       <label className="flex text-2xl justify-center font-bold">
//         Code Cleaners Tech
//       </label>
//       <div className="text-2xl text-blue-700">
//         <i class="fas fa-times text-red-600 text-9xl m-8"></i>
//         Opps... Error, No tiene autorización para visualizar este sitio.
//       </div>
//       <div className="flex sm:w-40 md:w-72 bg-blue-500 sm:mx-2 md:mx-5 lg:mx-7 xl:mx-10 2xl:mx-14 hover:bg-blue-700 hover:text-white shadow-xl sm:my-2 md:my-5 lg:my-7 xl:my-12 2xl:my-14  text-white rounded-lg h-14 w-3/4 text-xl justify-center items-center">
//         <Link to="/">Ir al sitio principal</Link>
//       </div>
//       <Footer />
//     </div>
//   );
// };

export default PrivateRoute;
