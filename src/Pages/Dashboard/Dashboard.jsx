import { Outlet } from "react-router-dom";
import LeftNavbar from "../../components/dashboard-component/LeftNavbar";
import { useState } from "react";

export default function Dashboard() {
  const [open, isOpen] = useState(false);
  return (
    <div>
      <div
        className="bg-[#18181F] z-10 w-full p-3 block fixed left-0 top-0 lg:hidden"
        onClick={() => isOpen(!open)}>
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 text-white cursor-pointer`}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white cursor-pointer hover:text-red-700 transition-colors">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>

      <div
        className={`fixed w-full ${
          !open ? "h-0" : "h-[200px]"
        }  lg:w-64 lg:left-0 lg:top-0 mt-0 z-20 lg:m-0 top-12 overflow-y-scroll lg:h-screen`}>
        <LeftNavbar />
      </div>
      <div
        className={`ml-0 lg:mt-0 lg:ml-64 ${
          open ? "mt-[248px]" : "mt-[50px] bg-[#616166] text-white"
        }`}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
