import { Outlet } from "react-router-dom";
import LeftNavbar from "../../components/dashboard-component/LeftNavbar";
import MiddleNavbar from "../../components/dashboard-component/MiddleNavbar";
import RightNavbar from "../../components/dashboard-component/RightNavbar";

export default function Dashboard() {
  return (
    <div>
      <div className="fixed w-64 hidden lg:block left-0 top-0 overflow-y-scroll h-screen">
        <LeftNavbar />
      </div>
      <div className="ml-0 lg:ml-64">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
