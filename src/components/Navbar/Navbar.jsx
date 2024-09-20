import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = <>
  <li><NavLink to='/' className={({isActive}) => isActive? 'text-red-600 font-bold mr-2': ''}>Home</NavLink></li>
  <li><NavLink to='/about' className={({isActive}) => isActive? 'text-red-600 font-bold': ''}>About</NavLink></li>
  </>

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
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl">Podcastify</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mr-2">Login</a>
    <a className="btn">Registration</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;