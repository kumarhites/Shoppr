import React, { useContext, useEffect, useState } from "react";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "..";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

function Login() {
  const { setLoginInput, errorMsg, setUserType, setErrorMsg } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMsg("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMsg("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTestLogin = () => {
    setLoginInput({
      email: "testUser@gmail.com",
      password: "test123",
    });
    setUserType("existing");
  };

  // form validation
  const handleLoginClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^\w{6,}$/;
    if (email === "") {
      setErrorMsg("Email cannot be empty!");
    } else if (password === "") {
      setErrorMsg("Password cannot be empty!");
    } else {
      const isValidEmail = emailRegex.test(email);
      const isValidPassword = passwordRegex.test(password);
      switch (true) {
        case !isValidEmail:
        case !isValidPassword:
          setErrorMsg("Email or password is not valid");
          break;
        default:
          setLoading(true);
          setLoginInput({ email, password });
          setEmail("");
          setPassword("");
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          setUserType("existing");
          break;
      }
    }
  };

  return (
    <div className="container">
      <Toaster />
      <div className="loginCard">
        <div className="heading">
          <h2>Welcome!</h2>
          <p>Log in to awesomeness 😉</p>
        </div>

        <div className="loginForm">
          {errorMsg ? <span className="errorMsg">{errorMsg}</span> : ""}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="email">
              <label htmlFor="emailInput">Your Email address</label>
              <input
                type="email"
                name="emailInput"
                className="input"
                placeholder="Enter your Email"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <div className="password">
              <label htmlFor="passwordInput">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="passwordInput"
                className="input"
                placeholder="Password (Min. 6 Characters)"
                onChange={handlePasswordChange}
                value={password}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </button>
            </div>
            <div className="submit">
              {loading ? (
                <span className="loader-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="4" cy="12" r="3" fill="currentColor">
                      <animate
                        id="svgSpinners3DotsBounce0"
                        attributeName="cy"
                        begin="0;svgSpinners3DotsBounce1.end+0.25s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".33,.66,.66,1;.33,0,.66,.33"
                        values="12;6;12"
                      />
                    </circle>
                    <circle cx="12" cy="12" r="3" fill="currentColor">
                      <animate
                        attributeName="cy"
                        begin="svgSpinners3DotsBounce0.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".33,.66,.66,1;.33,0,.66,.33"
                        values="12;6;12"
                      />
                    </circle>
                    <circle cx="20" cy="12" r="3" fill="currentColor">
                      <animate
                        id="svgSpinners3DotsBounce1"
                        attributeName="cy"
                        begin="svgSpinners3DotsBounce0.begin+0.2s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".33,.66,.66,1;.33,0,.66,.33"
                        values="12;6;12"
                      />
                    </circle>
                  </svg>
                </span>
              ) : (
                <input
                  type="submit"
                  value="Login"
                  className="loginBtn"
                  onClick={handleLoginClick}
                />
              )}
              <input
                type="submit"
                value="Login with Test Credentials"
                className="testLoginBtn"
                onClick={handleTestLogin}
              />
            </div>
            <div className="registerBtn">
              <p>Don't have an account yet? </p>
              <NavLink to="/register">Register</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
