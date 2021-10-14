import "styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Public from "layouts/Public";
import Auth from "layouts/Auth";
import Private from "layouts/Private";
import Index from "pages/Index";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Pending from "pages/auth/Pending";
import Product from "pages/products/Index";
import AddProduct from "pages/products/Add";
import ListProduct from "pages/products/List";
import ModifyProduct from "pages/products/Modify";
import SearchProduct from "pages/products/Search";
import Sale from "pages/sales/Index";
import AddSale from "pages/sales/Add";
import ListSale from "pages/sales/List";
import ModifySale from "pages/sales/Modify";
import SearchSale from "pages/sales/Search";
import User from "pages/users/Index";
import Profile from "pages/users/Profile";
import Update from "pages/users/Update";

function App() {
  return (
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
               
        <Route path={["/product", "/product/add", "/product/list", "/product/search", "/product/modify","/sale", "sale/add", "/sale/list", "/sale/search", "/sale/modify", "/user", "/user/profile", "/user/update"]}>
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
              <Route path="/product">
                <Product />
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
              <Route path="/sale">
                <Sale />
              </Route>
              <Route path="/user/profile">
                <Profile />
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

        
        <Route path="/">
          <Public>
            <Switch>
              <Route path="/" exact>
                <Index />
              </Route>
            </Switch>
          </Public>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
