import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

import Home from "../components/Home/Home";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MiddleNavbar from "../components/dashboard-component/MiddleNavbar";
import Statistics from "../components/dashboard-component/Statistics/Statistics";
import AllUsers from "../components/dashboard-component/allUsers/AllUsers";
import AllArticles from "../components/dashboard-component/articles/AllArticles";
import AddPublisher from "../components/dashboard-component/addPublisher/AddPublisher";
import AllRecentEpisodes from "../components/Home/AllRecentEpisodes";
import UserProfile from "./../Pages/UserProfile/UserProfile";
import AddMusic from "../Pages/Podcast/AddMusic";
import AllMusic from "../components/dashboard-component/allmusic/AllMusic";
import OurMusicCollectionsDetailsPage from "../Pages/OurMusicCollectionsDetailsPage/OurMusicCollectionsDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: (
      <h1 className="text-center text-lg">Oops! something went wrong</h1>
    ),
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
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },

      {
        path: "/about-us",
        element: <About></About>,
      },
      {
        path: "/allrecentepisodes",
        element: <AllRecentEpisodes />,
      },

      {
        path: "/addmusic",
        element: (
          <PrivateRoute>
            <AddMusic />
          </PrivateRoute>
        ),
      },
      {
        path: "/podcast/:id",
        element: (
         
            <OurMusicCollectionsDetailsPage />
         
        )
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: (
      <h1 className="text-center text-lg">Oops! something went wrong</h1>
    ),
    children: [
      {
        path: "",
        element: <MiddleNavbar />,
      },
      {
        path: "home",
        element: <MiddleNavbar />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "all-podcasters",
        element: <AddPublisher />,
      },

      {
        path: "all-music",
        element: <AllMusic />,
      },
    ],
  },
]);

export default router;
