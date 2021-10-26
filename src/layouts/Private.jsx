import Footer from "components/Footer";
import Head from "components/Head";
import PrivateRoute from "components/PrivateRoute";

const Private = ({ children }) => {
  return (
   <PrivateRoute>
      <div className="flex flex-col justify-between h-screen">
        <Head />
        <main className="h-full overflow-y-scroll bg-gray-100">{children}</main>
        <Footer />
      </div>
    </PrivateRoute>
  );
};

export default Private;
