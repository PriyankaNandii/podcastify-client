import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/images/newlogo.png";
import useAuth from "../../Hooks/useAuth";
import { MdDashboardCustomize } from "react-icons/md";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { logOut, user } = useAuth();

  const handleSignOut = () => {
    logOut().then().catch();
  };
  if (!user && isDropdownOpen) {
    setIsDropdownOpen(false);
  }

  const activeRouteStyle = ({ isActive, isPending, isTransitioning }) => {
    return {
      borderBottom: isActive ? "2px solid red" : "",
      color: isPending ? "red" : "",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  };
  return (
    <nav className="bg-black opacity-9 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-[70px] relative">
        <Link to="/">
          <img src={logo} className="lg:w-44 w-36" alt="Microphone GIF" />
        </Link>

        <div className="hidden lg:flex space-x-6">
          {user ? (
            <>
              <NavLink
                to="/"
                className="hover:text-red-400 text-white text-base font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className="hover:text-red-400 text-white text-base font-medium"
              >
                About Us
              </NavLink>
              <NavLink
                to="dashboard"
                className="hover:text-red-400 text-white text-base font-medium"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/addmusic"
                className="hover:text-red-400 text-white text-base font-medium"
              >
                Add Music
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className="hover:text-red-400 text-white text-base font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className="hover:text-red-400 text-white text-base font-medium"
              >
                About Us
              </NavLink>
              <NavLink
                to="dashboard"
                className="hover:text-red-400 text-white text-base font-medium"
              >
                Dashboard
              </NavLink>
            </>
          )}
        </div>

        {user ? (
          <div className="relative">
            <img
              src={
                user?.photoURL ||
                "https://marketplace.canva.com/EAFKBYNjwjk/1/0/1600w/canva-dark-blue-and-purple-neon-podcast-nnl4QxKxhsk.jpg"
              }
              alt="User Profile"
              className="w-10 ml-16 lg:ml-0 h-10 rounded-full cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div className="absolute mt-2 w-36 bg-white rounded-lg shadow-lg py-2 lg:-left-20 z-50">
                <NavLink
                  to="/user-profile"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  <FaUserCircle className="mr-2" /> Profile
                </NavLink>
                <NavLink
                  to="dashboard"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  <MdDashboardCustomize className="mr-2 text-base" />
                  Dashboard
                </NavLink>
                <hr className="my-1" />
                <button
                  onClick={handleSignOut}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  <FaSignOutAlt className="mr-2" /> Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden lg:block gap-4">
            <NavLink
              to="/registration"
              className="bg-red-700 text-base mr-3 text-white px-4 py-2 rounded-md"
            >
              Sign up free
            </NavLink>
            <NavLink
              to="/login"
              className="hover:text-red-400 text-white text-[17px] font-semibold"
            >
              Log in
            </NavLink>
          </div>
        )}

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden pb-6">
          {user ? (
            <>
              <NavLink
                to="/"
                className="block px-4 py-2 hover:text-red-400 text-white text-[15px] font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className="block px-4 py-2 hover:text-red-400 text-white text-[15px] font-medium"
              >
                About Us
              </NavLink>
              <NavLink
                to="dashboard"
                className="block px-4 py-2 hover:text-red-400 text-white text-[15px] font-medium"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/addmusic"
                className="block px-4 py-2 hover:text-red-400 text-white text-[15px] font-medium"
              >
                Add Music
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className="block px-4 py-2 hover:text-red-400 text-white text-[15px] font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className="block px-4 py-2 hover:text-red-400 text-white text-[15px] font-medium"
              >
                About Us
              </NavLink>
              <NavLink
                to="dashboard"
                className="block px-4 py-2 hover:text-red-400 text-white text-[15px] font-medium"
              >
                Dashboard
              </NavLink>
              {/* Only show login and signup if user doesn't exist */}
              <NavLink
                to="/login"
                className="block px-5 py-2 hover:text-red-500 text-white text-[17px] font-semibold"
              >
                <hr className="my-4 border-gray-600" />
                Log in
              </NavLink>
              <NavLink
                to="/registration"
                className="block px-4 py-2 mt-3 w-11/12 mx-auto bg-red-800 text-base text-white rounded-md"
              >
                Sign up free
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
