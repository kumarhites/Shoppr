import React from "react";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="loginCard">
        <div className="heading">
          <h2>Welcome!</h2>
          <p>Log in to awesomeness 😉</p>
        </div>
        <div className="loginForm">
          <form>
            <div className="email">
              <label htmlFor="emailInput">Your Email address</label>
              <input
                type="email"
                name="emailInput"
                className="input"
                placeholder="Enter your Email"
              />
              <span style={{ color: "red", fontSize: "0.9rem" }}>
                Err: Invalid email
              </span>
            </div>
            <div className="password">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                name="passwordInput"
                className="input"
                placeholder="Password"
              />
              <span style={{ color: "red", fontSize: "0.9rem" }}>
                Err: Invalid password
              </span>
            </div>
            <div className="submit">
              <input type="submit" value="Login" className="loginBtn" />
              <input
                type="submit"
                value="Login with Test Credentials"
                className="testLoginBtn"
              />
            </div>
						<div className="registerBtn">
							<p>Don't have an account yet? </p>
							<NavLink to="/register" >Register</NavLink>
						</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
