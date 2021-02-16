import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/registrarse" component={SignUp} />
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
