import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import UpdatedUser from "../Pages/UpdateUser/UpdateUser";
import Home from "../components/Home/Home";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddPodCast from "../Pages/Podcast/AddPodCast";
import MiddleNavbar from "../components/dashboard-component/MiddleNavbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/update-user",
        element: (
          <PrivateRoute>
            {" "}
            <UpdatedUser></UpdatedUser>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/addpodcast",
        element: <AddPodCast />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <MiddleNavbar />,
      },
    ],
  },
]);

export default router;
