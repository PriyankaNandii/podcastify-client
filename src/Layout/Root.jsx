import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Loader from "../Layout/Loader";

const Root = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  if (!loaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Root;
