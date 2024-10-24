import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/images/podcastLogoo.png";
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

  return (
    <nav className="bg-black opacity-9 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-[70px] relative">
        <Link to="/">
          <img
            src={logo}
            className="lg:w-[205px] w-36 text-center"
            alt="Microphone GIF"
          />
        </Link>

        <div className="hidden lg:flex space-x-6">
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text text-lg font-bold transition-colors duration-200 hover:from-red-600 hover:to-red-300 underline underline-offset-8 decoration-gray-400 decoration-2"
                  : "bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text text-lg font-bold transition-colors duration-200 hover:from-red-600 hover:to-red-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text text-lg font-bold transition-colors duration-200 hover:from-red-600 hover:to-red-300 underline underline-offset-8 decoration-gray-400 decoration-2"
                  : "bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text text-lg font-bold transition-colors duration-200 hover:from-red-600 hover:to-red-300"
              }
            >
              About Us
            </NavLink>
            {user && (
              <>
                <NavLink
                  to="dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text text-lg font-bold transition-colors duration-200 hover:from-red-600 hover:to-red-300 underline underline-offset-8 decoration-gray-400 decoration-2"
                      : "bg-gradient-to-r from-red-500 to-white text-transparent bg-clip-text text-lg font-bold transition-colors duration-200 hover:from-red-600 hover:to-red-300"
                  }
                >
                  Dashboard
                </NavLink>
              </>
            )}
          </>
        </div>

        {user ? (
          <div className="relative">
            <img
              src={
                user?.photoURL ||
                "https://i.ibb.co.com/C09dnMY/default-Img-removebg-preview.png"
              }
              alt="User Profile"
              className={
                user?.photoURL
                  ? `lg:w-12 w-11 h-11 ml-16 lg:ml-0 lg:h-12 rounded-full cursor-pointer`
                  : `lg:w-16 w-14 h-14 ml-16 lg:ml-0 lg:h-16 rounded-full cursor-pointer`
              }
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
              className="bg-red-700 text-base mr-3 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
            >
              Sign up free
            </NavLink>
            <NavLink
              to="/login"
              className="bg-gray-600 text-base text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold"
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
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-red-500  text-[15px] font-medium"
                    : "block px-4 py-2  text-white text-[15px] font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-red-500  text-[15px] font-medium"
                    : "block px-4 py-2  text-white text-[15px] font-medium"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-red-500  text-[15px] font-medium"
                    : "block px-4 py-2  text-white text-[15px] font-medium"
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/addmusic"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-red-500  text-[15px] font-medium"
                    : "block px-4 py-2  text-white text-[15px] font-medium"
                }
              >
                Add Music
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-red-500  text-[15px] font-medium"
                    : "block px-4 py-2  text-white text-[15px] font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-red-500  text-[15px] font-medium"
                    : "block px-4 py-2  text-white text-[15px] font-medium"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-red-500  text-[15px] font-medium"
                    : "block px-4 py-2  text-white text-[15px] font-medium"
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/login"
                className="block px-5 lg:ml-0 md:ml-4 py-2 hover:text-red-500 text-white text-[17px] font-semibold"
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
