import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const dashboard = useLocation();

  if (dashboard.pathname === "/dashboard") {
    return;
  }
  const { logOut, user } = useAuth();
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-800 text-xl font-bold"
              : "text-blue-800 text-xl font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "text-blue-800 text-xl font-bold"
              : "text-blue-800 text-xl font-bold"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="sticky top-0 pt-6 z-50">
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-red-700 italic font-bold text-2xl">
            Podcastify
          </a>
          <a className="btn btn-ghost text-red-700 italic font-bold text-2xl">
            Podcastify
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user?.photoURL}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-2"
              />
              <button onClick={handleSignOut} className="btn mr-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn mr-2">
                Login
              </NavLink>
              <NavLink to="/registration" className="btn">
                Registration
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
