import React from "react";
import "../../App.css";

class LoginPage extends React.Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4 bg-light">
              <div class="login align-items-center py-5">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-10 col-xl-10 mx-auto">
                      <h1 class="display-5">Login Form</h1>
                      <p class="text-muted mb-4"></p>
                      <form>
                        <div class="mb-4">
                          <input
                            id="inputEmail"
                            type="email"
                            placeholder="Email address"
                            required=""
                            autofocus=""
                            class="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </div>
                        <div class="mb-4">
                          <input
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            required=""
                            class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          />
                        </div>
                        <div class="form-check">
                          <input
                            id="customCheck1"
                            type="checkbox"
                            // checked
                            class="form-check-input"
                          />
                          <label for="customCheck1" class="form-check-label">
                            Remember password
                          </label>
                        </div>
                        <div class="d-grid gap-2 mt-2">
                          <button
                            type="submit"
                            class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
