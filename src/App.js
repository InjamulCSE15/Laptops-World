import { createContext, useState } from "react";
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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header />
      <button className="btn btn-outline-success m-2">User: {loggedInUser.name}</button>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/addProducts">
          <AddProducts />
          </PrivateRoute>
          <Route path="/login">
          <Login/>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
