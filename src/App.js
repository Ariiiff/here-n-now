import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/HomePage/Home/Home';
import LoginPage from './Component/LoginPage/LoginPage';
import PrivateRoute from './Component/LoginPage/PrivateRoute';
import CustomerPlaceOrder from './Component/Customer/CustomerPlaceOrder/CustomerPlaceOrder';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser], [isAdmin, setIsAdmin]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/customer/placeOrder">
            <CustomerPlaceOrder></CustomerPlaceOrder>
          </Route>
          {/* <PrivateRoute path="/customer/placeOrder">
            <CustomerPlaceOrder></CustomerPlaceOrder>
          </PrivateRoute> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
