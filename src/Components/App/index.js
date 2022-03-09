import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Login from "../../Pages/Login";
import Foods from "../Foods/index";
import FoodDetail from "../FoodDetail/index";
import MyNabvar from "../MyNavbar/index";
import * as ROUTES from "../../constants/routes";

export default class App extends Component {
  state = {
    token: null,
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ token: null });
    this.router.history.push("/");
    console.log("logged out");

    // document.cookie =
    //   "amazon-token=; expires=" +
    //   new Date(Date.now() - 360 * 24 * 60 * 60 * 1000);

    axios
      .get("http://localhost:8000/api/v1/users/logout")
      .then((result) => this.router.history.push("/"))
      .catch((err) => console.log(err));
  };

  handleLogin = (token) => {
    this.setState({ token });
    localStorage.setItem("token", token);
    this.router.history.push("/");
    // console.log("logged in... " + token);
  };
  render() {
    return (
      <Router ref={(router) => (this.router = router)}>
        <div>
          <MyNabvar onLogout={this.handleLogout} />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route
              exact
              path={ROUTES.LOGIN}
              render={() => <Login onLogin={this.handleLogin} />}
            />
            <Route path="/books/:id" component={FoodDetail} />
            {/* <Route exact path={ROUTES.FOODDETAIL} component={FoodDetail} /> */}
            <Route exact path={ROUTES.FOODS} component={Foods} />
          </Switch>
        </div>
      </Router>
    );
  }
}
