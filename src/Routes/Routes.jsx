import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Home from "../components/Home/Home";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MiddleNavbar from "../components/dashboard-component/MiddleNavbar";
import AllUsers from "../components/dashboard-component/allUsers/AllUsers";

import UserProfile from "./../Pages/UserProfile/UserProfile";
import AddMusic from "../Pages/Podcast/AddMusic";
import OurMusicCollectionsDetailsPage from "../Pages/OurMusicCollectionsDetailsPage/OurMusicCollectionsDetailsPage";
import MyMusic from "../Pages/Dashboard/Podcaster/MyMusic";
import EditPodcast from "../Pages/Dashboard/Podcaster/EditPodcast";
import AllPodCaster from "../Pages/Dashboard/Admin/AllPodCaster";
import PodcasterRequest from "../Pages/Dashboard/Admin/PodcasterRequest";
import MyPlaylist from "../Pages/Dashboard/Podcaster/MyPlaylist";
import Notifications from "../components/dashboard-component/notifications/Notifications";
import NotificationDetails from "../components/dashboard-component/notifications/NotificationDetails";
import Allpodcasts from "../Pages/AllPodcasts/Allpodcasts";
import TrendingPodcasts from "../components/Home/TrendingPodcasts";
import MakeAnnouncement from "../Pages/Dashboard/Admin/MakeAnnouncement";
import Redirect from "../components/Home/Redirect";
import AllReviews from "../components/Home/AllReviews";
import AdminRoute from "./AdminRoute";
import PodcasterRoute from "./PodcasterRoute";
import UsersMessage from "../Pages/Dashboard/Admin/UsersMessage";
import MySubscribers from "../Pages/Dashboard/Podcaster/MySubscribers";
import AllMusic from "../components/dashboard-component/allmusic/AllMusic";

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
        path: "/categories/:category",
        element: <Redirect></Redirect>,
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/trending-podcasts",
        element: <TrendingPodcasts></TrendingPodcasts>,
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
        element: <OurMusicCollectionsDetailsPage />,
      },
      {
        path: "/all-podcasts",
        element: <Allpodcasts></Allpodcasts>,
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
      // Admin route only
      {
        path: "all-users",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "all-podcasters",
        element: (
          <AdminRoute>
            <AllPodCaster></AllPodCaster>
          </AdminRoute>
        ),
      },
      {
        path: "users-message",
        element: (
          <AdminRoute>
            <UsersMessage />
          </AdminRoute>
        ),
      },
      {
        path: "all-podcast",
        element: <AllMusic></AllMusic>,
      },
      {
        path: "my-music",
        element: <MyMusic />,
      },
      {
        path: "new-request",
        element: <PodcasterRequest />,
      },
      {
        path: "my-playlist",
        element: <MyPlaylist />,
      },
      {
        path: "my-music/edit/:id",
        element: <EditPodcast />,
      },
      {
        path: "add-music",
        element: (
          <PodcasterRoute>
            <AddMusic />
          </PodcasterRoute>
        ),
      },
      {
        path: "release-new-video",
        element: <h1>new video</h1>,
      },
      {
        path: "live-stream",
        element: "Live stream",
      },
      {
        path: "my-subscribers",
        element: (
          <PodcasterRoute>
            <MySubscribers />
          </PodcasterRoute>
        ),
      },
      {
        path: "make-announcement",
        element: <MakeAnnouncement></MakeAnnouncement>,
      },
      {
        path: "settings",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "notification",
        element: <Notifications />,
      },
      {
        path: "notification/:id/details",
        element: <NotificationDetails />,
      },
    ],
  },
]);

export default router;
