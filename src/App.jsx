import React, { useState, useEffect } from "react";
import "styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Public from "layouts/Public";
import Auth from "layouts/Auth";
import Private from "layouts/Private";
import Index from "pages/Index";
import Profile from "pages/Profile";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Pending from "pages/auth/Pending";
import Product from "pages/products/Index";
import Products from "pages/products/Products";
import AddProduct from "pages/products/Add";
import ListProduct from "pages/products/List";
import ModifyProduct from "pages/products/Modify";
import SearchProduct from "pages/products/Search";
import Sale from "pages/sales/Index";
import Sales from "pages/sales/Sales";
import AddSale from "pages/sales/Add";
import ListSale from "pages/sales/List";
import ModifySale from "pages/sales/Modify";
import SearchSale from "pages/sales/Search";
import User from "pages/users/Index";
import Update from "pages/users/Update";
import About from "pages/About";
import Description from "pages/Description";
import Help from "pages/Help";
import { DarkModeContext } from "context/darkMode";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log("Modo Oscuro", darkMode);
  }, [darkMode]);
  return (
    <Auth0Provider
      domain="proyectociclo3.us.auth0.com"
      clientId="5WiXryJJwMNw7gRE08EbqUTaOd0BAzys"
      redirectUri={window.location.origin}
      //redirectUri="http://localhost:3000/sales"
    >
      <div>
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <Router>
            <Switch>
              <Route path={["/login", "/register", "/pending"]}>
                <Auth>
                  <Switch>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/register">
                      <Register />
                    </Route>
                    <Route path="/pending">
                      <Pending />
                    </Route>
                  </Switch>
                </Auth>
              </Route>
              <Route
                path={[
                  "/product",
                  "/products",
                  "/product/add",
                  "/product/list",
                  "/product/search",
                  "/product/modify",
                  "/profile",
                  "/sale",
                  "/sales",
                  "sale/add",
                  "/sale/list",
                  "/sale/search",
                  "/sale/modify",
                  "/user",
                  "/user/update",
                ]}
              >
                <Private>
                  <Switch>
                    <Route path="/product/add">
                      <AddProduct />
                    </Route>
                    <Route path="/product/list">
                      <ListProduct />
                    </Route>
                    <Route path="/product/search">
                      <SearchProduct />
                    </Route>
                    <Route path="/product/modify">
                      <ModifyProduct />
                    </Route>
                    <Route path="/products">
                      <Products />
                    </Route>
                    <Route path="/product">
                      <Product />
                    </Route>
                    <Route path="/profile">
                      <Profile />
                    </Route>
                    <Route path="/sale/add">
                      <AddSale />
                    </Route>
                    <Route path="/sale/list">
                      <ListSale />
                    </Route>
                    <Route path="/sale/search">
                      <SearchSale />
                    </Route>
                    <Route path="/sale/modify">
                      <ModifySale />
                    </Route>
                    <Route path="/sales">
                      <Sales />
                    </Route>
                    <Route path="/sale">
                      <Sale />
                    </Route>
                    <Route path="/user/update">
                      <Update />
                    </Route>
                    <Route path="/user">
                      <User />
                    </Route>
                  </Switch>
                </Private>
              </Route>
              <Route path={["/", "/about", "/description", "/help"]}>
                <Public>
                  <Switch>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/description">
                      <Description />
                    </Route>
                    <Route path="/help">
                      <Help />
                    </Route>
                    <Route path="/">
                      <Index />
                    </Route>
                  </Switch>
                </Public>
              </Route>
            </Switch>
          </Router>
        </DarkModeContext.Provider>
      </div>
    </Auth0Provider>
  );
}

export default App;
