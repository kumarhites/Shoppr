import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginInput, setLoginInput] = useState({});
  const [validCredentials, setValidCredentials] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loginClick, setLoginClick] = useState(false);

  // Test credentials
  const loginWithTestCredentials = () => {
    setValidCredentials({
      email: "iwillbeback@gmail.com",
      password: "arnie123",
    });
  };

  // Validate email and password
  const validateEmailPassword = (loginInput) => {
    const { email, password } = loginInput;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    const passwordRegex = /^\w{6,}$/; // At least 6 letters or digits
    const isValidPassword = passwordRegex.test(password);

    
  };
const getData = async () => {
  try {
    const response = await fetch("/api/auth/login")
  } catch (error) {
    
  }
}
  

  return (
    <AuthContext.Provider
      value={{
        setLoginInput,
        loading,
        setLoginClick,
        errorMsg,
        loginWithTestCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
