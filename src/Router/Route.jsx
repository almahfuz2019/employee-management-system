import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/AddEM";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Employees from "../Pages/Employees/Employees";
import SingleEmployee from "../Pages/Employees/SingleEmployee";
import UpdateEmployee from "../Pages/Employees/updateEmployee";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/employee/find/:id",
        element: <SingleEmployee />,
      },
      {
        path: "/employee/update/:id",
        element: <UpdateEmployee />,
      },
    ],
  },
]);
export default Routes;
