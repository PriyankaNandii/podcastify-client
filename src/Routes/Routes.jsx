import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import UpdatedUser from "../Pages/UpdateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        // need to redirect home page, for now I redirect it to register page!
        element: <Registration></Registration>,
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
    ],
  },
]);

export default router;
