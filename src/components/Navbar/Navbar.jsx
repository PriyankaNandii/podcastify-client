import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from '../../assets/images/newlogo.png';
import { MdOutlineLogin } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";


const Navbar = () => {
  const { logOut, user } = useAuth();
  const navLinks = (
    <>
      <li>
      <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-red-800 text-xl font-bold border-b-2 border-b-red-800"
      : "text-white text-xl"
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
            ? "text-red-800 text-xl font-bold border-b-2 border-b-red-800"
      : "text-white text-xl"
          }>
          About
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-red-700 italic font-bold ">
  <img src={logo} className="md:w-52 w-32 " alt="Microphone GIF" />
</a>

         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end p-3">
          {user ? (
            <>
              <button onClick={handleSignOut} className="btn mr-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className=" mr-5 ">
              <MdOutlineLogin className="text-white text-3xl" />  
              </NavLink>
              <NavLink to="/registration" className="mr-2">
              <IoPersonAdd className="text-white text-3xl" />
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
