import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddProducts from "./components/AddProducts/AddProducts";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/addProducts">
          <AddProducts />
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
