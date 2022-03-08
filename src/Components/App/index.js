import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Login from "../../Pages/LoginPage";
import Foods from "../Foods/index";
import MyNabvar from "../MyNavbar/index";
import Footer from "../MyFooter/index";
import * as ROUTES from "../../constants/routes";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MyNabvar />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.FOODS} component={Foods} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
