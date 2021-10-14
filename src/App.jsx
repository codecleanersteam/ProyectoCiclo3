import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Index from "pages/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/login">
          <Login/>
        </Route>
        <Route to="/register">
          <Register/>
        </Route>
        <Route to="/">
          <Index/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
