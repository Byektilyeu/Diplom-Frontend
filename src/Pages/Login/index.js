import React, { Component } from "react";
import Spinner from "../../Components/Spinner/index";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Footer from "../../Components/MyFooter";

export default class Login extends Component {
  state = {
    email: null,
    password: null,
    error: null,
    loading: false,
  };

  handleType = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      error: null,
    });
  };

  handleClick = () => {
    this.setState({ loading: true });
    axios
      .post("http://localhost:8000/api/v1/users/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((result) => {
        this.setState({ loading: false });
        this.props.onLogin(result.data.token);
      })
      .catch((err) =>
        this.setState({
          loading: false,
          error: err.response.data.error.message,
        })
      );
  };

  render() {
    // console.log(document.cookie);
    return (
      <div>
        {document.cookie && <Redirect to="/" />}
        {this.state.loading && <Spinner />}
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4 bg-light">
            <div class="login align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 col-xl-10 mx-auto">
                    <h1 class="display-5">Login Form</h1>
                    <p class="text-muted mb-4"></p>
                    <div class="mb-4">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email address"
                        onChange={this.handleType}
                        class="form-control rounded-pill border-0 shadow-sm px-4"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleType}
                        class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      />
                    </div>
                    <div class="d-grid gap-2 mt-2">
                      <button
                        type="submit"
                        onClick={this.handleClick}
                        class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <Footer />
        </div> */}
      </div>
    );
  }
}
