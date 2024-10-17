import {
  FaDesktop,
  FaHome,
  FaLayerGroup,
  FaTimes,
  FaVoteYea,
} from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineNotification } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import { FaBook, FaCompass, FaUser } from "react-icons/fa6";
import { SiWebtrees } from "react-icons/si";
import { MdLogout, MdOutlinePlaylistAdd } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FcStatistics } from "react-icons/fc";
import { FaAddressBook } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import useCheckUserRole from "../../Hooks/useCheckUserRole";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Layout/Loader";

export default function LeftNavbar() {
  const { user, logOut } = useAuth();
  const { role, isLoading } = useCheckUserRole();
  const axiosSecure = useAxiosSecure();
  const [userData, setUserData] = useState(null);
  // Fetch user data by
  const fetchUserData = async () => {
    try {
      const response = await axiosSecure.get(`/users/email/${user?.email}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    if (user?.email) {
      fetchUserData();
    }
  }, [user?.email]);
  const activeRouteStyle = ({ isActive, isPending, isTransitioning }) => {
    return {
      borderLeft: isActive ? "3px solid red" : "",
      color: isPending ? "red" : "",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  };

  return (
    <div className="bg-gradient-to-r py-4 from-[#1C144C] from-5% via-[#18171E] via-30% to-[#1b1f24] to-90% text-[#a3a3a3] w-full h-full overflow-y-auto">
      {/*  */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex items-center justify-center p-5 flex-col gap-y-2">
            <img
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://marketplace.canva.com/EAFKBYNjwjk/1/0/1600w/canva-dark-blue-and-purple-neon-podcast-nnl4QxKxhsk.jpg"
              }
              alt=""
              className="w-20 h-20 rounded-full"
            />
            <h1 className="text-xl font-bold">Hi, {userData?.name}</h1>
          </div>
          <div className="pl-5 pt-2 font-black ">
            <h1 className="text-white">Menu</h1>
            <aside className="mt-3 space-y-4 hover:*:text-white">
              <NavLink
                style={activeRouteStyle}
                to="/dashboard/home"
                className={`flex items-center justify-start gap-3 `}>
                <FaHome />
                <h1>Home</h1>
              </NavLink>
              {role === "admin" && (
                <>
                  {/* Admin routes only */}
                  <NavLink
                    style={activeRouteStyle}
                    to="/dashboard/all-users"
                    className={`flex items-center justify-start gap-3 `}>
                    <FcStatistics />
                    <h1>All users</h1>
                  </NavLink>
                  <NavLink
                    style={activeRouteStyle}
                    to="/dashboard/all-podcasters"
                    className={`flex items-center justify-start gap-3 `}>
                    <FaAddressBook />
                    <h1>All podcasters</h1>
                  </NavLink>
                  <NavLink
                    style={activeRouteStyle}
                    to="/dashboard/all-music"
                    className={`flex items-center justify-start gap-3 `}>
                    <FaLayerGroup />
                    <h1>All Podcast</h1>
                  </NavLink>

                  <NavLink
                    style={activeRouteStyle}
                    to="/dashboard/new-request"
                    className={`flex items-center justify-start gap-3 `}>
                    <MdGroups2 />
                    <h1>Podcasters request</h1>
                  </NavLink>
                  <NavLink
                    style={activeRouteStyle}
                    to="/dashboard/make-announcement"
                    className={`flex items-center justify-start gap-3 `}>
                    <AiOutlineNotification />
                    <h1>Make announcement</h1>
                  </NavLink>
                </>
              )}
              {/* Podcasters only */}
              {role === "podcaster" && (
                <>
                  <NavLink
                    style={activeRouteStyle}
                    to="/dashboard/my-music"
                    className={`flex items-center justify-start gap-3 `}>
                    <FaLayerGroup />
                    <h1>Manage Music</h1>
                  </NavLink>
                  <NavLink
                    style={activeRouteStyle}
                    to="/dashboard/release-new-music"
                    className="flex items-center justify-start gap-3">
                    <FaLayerGroup />
                    <h1>Release new music</h1>
                  </NavLink>
                  <NavLink
                    style={activeRouteStyle}
                    to="/dashboard/release-new-video"
                    className={`flex items-center justify-start gap-3 `}>
                    <FaLayerGroup />
                    <h1>Release new video</h1>
                  </NavLink>
                  {/* <NavLink
                    style={activeRouteStyle}
                    to="/dashboard/live-stream"
                    className={`flex items-center justify-start gap-3 `}>
                    <FaLayerGroup />
                    <h1>Make live</h1>
                  </NavLink> */}
                </>
              )}
              {role === "user" && (
                <>
                  <div className="flex items-center justify-start gap-3">
                    <FaTimes />
                    <h1>Recent</h1>
                  </div>
                  <Link
                    to="/dashboard/my-playlist"
                    className="flex items-center justify-start gap-3">
                    <MdOutlinePlaylistAdd />
                    <h1>Playlist</h1>
                  </Link>
                  <div className="flex items-center justify-start gap-3">
                    <FaVoteYea />
                    <h1>Favorites</h1>
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <FaDesktop />
                    <h1>Local</h1>
                  </div>
                </>
              )}
            </aside>
          </div>

          <div className="pl-5 py-4 font-black mt-6 flex-grow">
            <h1 className="text-white">General</h1>
            <aside className="mt-3 space-y-4 hover:*:text-white">
              <NavLink
                style={activeRouteStyle}
                to="/dashboard/notification"
                className={`flex items-center justify-start gap-3 `}>
                <IoMdNotificationsOutline />
                <h1>Notice</h1>
              </NavLink>
              <div className="flex items-center justify-start gap-3">
                <SiWebtrees />
                <NavLink to="/">
                  <h1>View Site</h1>
                </NavLink>
              </div>
              <div className="flex items-center justify-start gap-3">
                <IoSettings />
                <h1>Settings</h1>
              </div>
              <div
                onClick={() => logOut()}
                className="flex items-center justify-start gap-3 cursor-pointer">
                <MdLogout />
                <h1>Logout</h1>
              </div>
            </aside>
          </div>
        </>
      )}
    </div>
  );
}
