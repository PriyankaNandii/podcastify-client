import { FaHome, FaLayerGroup, FaTimes } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineNotification } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import { SiWebtrees } from "react-icons/si";
import { IoLogOut, IoSettings } from "react-icons/io5";
import { FcStatistics } from "react-icons/fc";
import { FaAddressBook } from "react-icons/fa";
import {
  MdFavorite,
  MdGroups2,
  MdLogout,
  MdPlaylistPlay,
  MdSettings,
  MdTrendingUp,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useCheckUserRole from "../../Hooks/useCheckUserRole";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { RiCompassDiscoverLine } from "react-icons/ri";

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

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const activeRouteStyle = ({ isActive, isPending, isTransitioning }) => {
    return {
      borderLeft: isActive ? "3px solid red" : "",
      color: isPending ? "red" : "",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  };

  return (
    <>
      <div>
        <div className="py-4 text-[#a3a3a3] overflow-hidden w-full flex bg-gradient-to-r from-[#1C144C] from-5% via-[#18171E] via-30% to-[#1b1f24] to-90% bg-gray-800 h-screen">
          {/* Content goes here */}
          {isLoading ? (
            <h1 className="text-center text-sm text-white">Please wait...</h1>
          ) : (
            <div>
              {/* Admin routes only */}
              {role === "admin" && (
                <>
                  <div className="pl-5 pt-2 font-black">
                    {" "}
                    <div className="flex items-center justify-center p-5 rounded-full flex-col gap-y-2">
                      <img
                        src={
                          user?.photoURL ||
                          "https://marketplace.canva.com/EAFKBYNjwjk/1/0/1600w/canva-dark-blue-and-purple-neon-podcast-nnl4QxKxhsk.jpg"
                        }
                        alt=""
                        className="w-20 h-20 rounded-full"
                      />
                      <h1 className="text-xl font-bold">
                        Hi, {userData?.name}
                      </h1>
                    </div>{" "}
                    <h1 className="text-white mb-4">Menu</h1>
                    <div className="space-y-4">
                      <NavLink
                        style={activeRouteStyle}
                        to="/dashboard"
                        className={`flex items-center justify-start gap-3`}>
                        <FaHome />
                        <h1>Home</h1>
                      </NavLink>
                      <NavLink
                        style={activeRouteStyle}
                        to="/dashboard/all-users"
                        className={`flex items-center justify-start gap-3`}>
                        <FcStatistics />
                        <h1>All users</h1>
                      </NavLink>
                      <NavLink
                        style={activeRouteStyle}
                        to="/dashboard/all-podcasters"
                        className={`flex items-center justify-start gap-3`}>
                        <FaAddressBook />
                        <h1>All podcasters</h1>
                      </NavLink>
                      <NavLink
                        style={activeRouteStyle}
                        to="/dashboard/all-music"
                        className={`flex items-center justify-start gap-3`}>
                        <FaLayerGroup />
                        <h1>All Podcast</h1>
                      </NavLink>
                      <NavLink
                        style={activeRouteStyle}
                        to="/dashboard/new-request"
                        className={`flex items-center justify-start gap-3`}>
                        <MdGroups2 />
                        <h1>Podcasters request</h1>
                      </NavLink>
                      <NavLink
                        style={activeRouteStyle}
                        to="/dashboard/make-announcement"
                        className={`flex items-center justify-start gap-3`}>
                        <AiOutlineNotification />
                        <h1>Make announcement</h1>
                      </NavLink>
                    </div>
                  </div>
                </>
              )}

              {/* Podcasters only */}
              {role === "podcaster" && (
                <>
                  <div className="pl-5 pt-2 font-black">
                    {" "}
                    <div className="flex items-center justify-center p-5 rounded-full flex-col gap-y-2">
                      <img
                        src={
                          user?.photoURL ||
                          "https://marketplace.canva.com/EAFKBYNjwjk/1/0/1600w/canva-dark-blue-and-purple-neon-podcast-nnl4QxKxhsk.jpg"
                        }
                        alt=""
                        className="w-20 h-20 rounded-full"
                      />
                      <h1 className="text-xl font-bold">
                        Hi, {userData?.name}
                      </h1>
                    </div>{" "}
                    <h1 className="text-white mb-4">Menu</h1>
                    <div className="space-y-4">
                      <NavLink
                        style={activeRouteStyle}
                        to="/dashboard"
                        className={`flex items-center justify-start gap-3`}>
                        <FaHome />
                        <h1>Home</h1>
                      </NavLink>
                      <NavLink
                        style={activeRouteStyle}
                        to="my-music"
                        className={`flex items-center justify-start gap-3`}>
                        <FaLayerGroup />
                        <h1>Manage Music</h1>
                      </NavLink>
                      <NavLink
                        style={activeRouteStyle}
                        to="my-playlist"
                        className={`flex items-center justify-start gap-3`}>
                        <FaLayerGroup />
                        <h1>My Playlist</h1>
                      </NavLink>
                      <NavLink
                        to="add-music"
                        className="flex items-center justify-start gap-3">
                        <FaLayerGroup />
                        <h1>Release new music</h1>
                      </NavLink>
                      <NavLink
                        style={activeRouteStyle}
                        to="release-new-video"
                        className={`flex items-center justify-start gap-3`}>
                        <FaLayerGroup />
                        <h1>Release new video</h1>
                      </NavLink>
                    </div>
                  </div>
                </>
              )}

              {/* Users only */}
              {role === "user" && (
                <>
                  {/* Sidebar */}
                  <aside className="mt-10 p-6">
                    <div>
                      <h1 className="text-2xl font-bold mb-10">Podcastify</h1>
                      <nav>
                        <ul className="space-y-4">
                          <li className="flex items-center space-x-3">
                            <RiCompassDiscoverLine size={24} />
                            <NavLink
                              to="/dashboard"
                              className="hover:text-blue-500">
                              Discover
                            </NavLink>
                          </li>
                          <li className="flex items-center space-x-3">
                            <MdPlaylistPlay size={24} />
                            <NavLink
                              to="my-playlist"
                              className="hover:text-blue-500">
                              Playlist
                            </NavLink>
                          </li>
                          <li className="flex items-center space-x-3">
                            <MdFavorite size={24} />
                            <a
                              href="/favorites"
                              className="hover:text-blue-500">
                              Favorites
                            </a>
                          </li>
                          {/* <li className="flex items-center space-x-3">
                            <MdTrendingUp size={24} />
                            <a href="/trending" className="hover:text-blue-500">
                              Trending
                            </a>
                          </li> */}
                          {/*    <li className="flex items-center space-x-3">
                            <FaTimes size={24} />
                            <a href="/recent" className="hover:text-blue-500">
                              Recent
                            </a>
                          </li> */}
                        </ul>
                      </nav>
                    </div>
                    <div>
                      <nav>
                        <ul className="space-y-4 mt-28">
                          <h1 className="text-white font-bold text-lg">
                            General
                          </h1>
                          {/*   <li className="flex items-center space-x-3">
                            <IoMdNotificationsOutline size={24} />
                            <a
                              href="/notifications"
                              className="hover:text-blue-500"
                            >
                              Notification
                            </a> 
                          </li> */}
                          <li className="flex items-center space-x-3">
                            <SiWebtrees size={24} />
                            <NavLink to="/" className="hover:text-blue-500">
                              View Site
                            </NavLink>
                          </li>
                          <li className="flex items-center space-x-3">
                            <MdSettings size={24} />
                            <NavLink
                              to="/dashboard/settings"
                              className="hover:text-blue-500">
                              Settings
                            </NavLink>
                          </li>
                          <li
                            onClick={() => {
                              handleSignOut();
                            }}
                            className="flex items-center space-x-3 cursor-pointer">
                            <IoLogOut size={24} />
                            <p className="hover:text-blue-500">Log out</p>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </aside>
                </>
              )}

              {role !== "user" && (
                <div className="pl-5 py-4 font-black mt-6 flex-grow">
                  <h1 className="text-white">General</h1>
                  <aside className="mt-3 space-y-4 hover:*:text-white">
                    <NavLink
                      style={activeRouteStyle}
                      to="/dashboard/notification"
                      className={`flex items-center justify-start gap-3`}>
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
                      <NavLink to="/dashboard/settings">
                        <h1>Settings</h1>
                      </NavLink>
                    </div>
                    <div
                      onClick={() => logOut()}
                      className="flex items-center justify-start gap-3 cursor-pointer">
                      <MdLogout />
                      <h1>Logout</h1>
                    </div>
                  </aside>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
