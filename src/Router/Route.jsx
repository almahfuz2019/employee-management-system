import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Employees from "../Pages/Employees/Employees";
import SingleEmployee from "../Pages/Employees/SingleEmployee";
import UpdateEmployee from "../Pages/Employees/updateEmployee";
import AddEmployee from "../Pages/Home/AddEmployee";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AddEmployee />,
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
