import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [userType, setUserType] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const getAuthToken = async () => {
    if (userType === "") {
      return;
    }
    if (userType === "existing") {
      try {
        const response = await axios.post("/api/auth/login", loginInput);
      } catch (error) {
        const errorType = "Auth";
        if (
          error.response.data.errors[0].includes("Unauthorized access error.")
        ) {
          setErrorMsg("Invalid email or password");
        } else if (error.response.data.errors[0].includes("Not Found")) {
          setErrorMsg("User not registered");
        }
      }
      setUserType("");
    }
  };

  useEffect(() => {
    getAuthToken();
  }, [loginInput]);

  return (
    <AuthContext.Provider
      value={{
        setLoginInput,
        setUserType,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
