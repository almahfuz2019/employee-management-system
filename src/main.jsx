import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Router/Route.jsx";
import EmployeeState from "./context/EmployeeState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <EmployeeState>
    <React.StrictMode>
      <RouterProvider router={Routes} />
    </React.StrictMode>
  </EmployeeState>
);
