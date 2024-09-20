import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div className="">
      <Outlet></Outlet>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Root;
