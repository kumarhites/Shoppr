import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginInput, setLoginInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loginClick, setLoginClick] = useState(false);
  //validate email
  const validateEmailPassword = (loginInput) => {
    setLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(loginInput.email);
    const passwordRegex = /^\w{6,}$/; // At least 6 letters or digits
    const isValidPassword = passwordRegex.test(loginInput.password);

    if (isValidEmail && isValidPassword) {
      // Email and password are valid
      console.log("Email and password are valid");
    } else {
      if (!isValidEmail || !isValidPassword) {
        setErrorMsg("Email or Password not valid");
      }
    }
  };

  useEffect(() => {
    if (loginClick) {
      setErrorMsg("");
      validateEmailPassword(loginInput);
    }
    setTimeout(() => {
      setLoading(false);
      setErrorMsg("");
    }, 2000);
  }, [loginClick, loginInput]);

  return (
    <AuthContext.Provider
      value={{ setLoginInput, loading, setLoginClick, errorMsg }}
    >
      {children}
    </AuthContext.Provider>
  );
};
