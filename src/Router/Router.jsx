import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../Pages/Dashboard/AddTask";
import AllTask from "../Pages/Dashboard/AllTask";
import UpdateTodoTask from "../Pages/Dashboard/UpdateTodoTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/add-task",
        element: <AddTask></AddTask>,
      },
      {
        path: "/dashboard/all-task",
        element: <AllTask></AllTask>,
      },
      {
        path: "/dashboard/update-task/:id",
        element: <UpdateTodoTask></UpdateTodoTask>,
      },
    ],
  },
]);

export default router;
