import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Router/Route.jsx";
import EmployeeState from "./context/EmployeeState.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <EmployeeState>
    <React.StrictMode>
      <RouterProvider router={Routes} />
    </React.StrictMode>
    <ToastContainer />
  </EmployeeState>
);
