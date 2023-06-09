import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthContext, AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
export { AuthContext };

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);
