import React from "react";
import "../styles/Register.css";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <div className="loginCard">
        <div className="heading">
          <h2>Create a new <br /> account!</h2>
          <p>
            Already have an account? <NavLink to="/login"> Login</NavLink>
          </p>
        </div>
        <div className="loginForm">
          <form>
            <div className="firstName">
              <label htmlFor="firstNameInput">FirstName</label>
              <input type="text" name="firstNameInput" className="input" />
            </div>
            <div className="lastName">
              <label htmlFor="lastNameInput">LastName</label>
              <input type="text" name="lastNameInput" className="input" />
            </div>
            <div className="email">
              <label htmlFor="emailInput">Email address</label>
              <input type="email" name="emailInput" className="input" />
            </div>
            <div className="password">
              <label htmlFor="passwordInput">Password</label>
              <input type="password" name="passwordInput" className="input" />
            </div>
            <div className="submit">
              <input type="submit" value="Register" className="loginBtn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
