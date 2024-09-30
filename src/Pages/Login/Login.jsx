import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import login from "../../assets/images/login.webp";

const Login = () => {
  const { signInUser, signInWithGoogle, signInWithGithub } = useAuth();

  const [loginError, setLoginError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoginError("");

    signInUser(email, password)
      .then((result) => {
        toast.success("User logged in Successfully!");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setLoginError("Check your Email or Password again!");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google Login Successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch(console.error);
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(() => {
        toast.success("Github Login Successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch(console.error);
  };

  return (
    <div className="bg-[#171717] min-h-screen flex items-center justify-center ">
      <div className="relative w-full max-w-4xl h-[600px] bg-gradient-to-r from-[#18284c] to-[#18284c] rounded-lg overflow-hidden shadow-lg flex">
        <div className="w-2/3 relative">
          <img
            src={login}
            alt="Podcast"
            className="object-cover h-full w-full p-4"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-1/2 bg-black p-8 flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center mb-6 bg-gradient-to-b bg-[#253259] p-5 rounded-t-lg">
            <FaMusic className="text-5xl text-red-950 mb-3"></FaMusic>
            <h2 className="text-center italic text-gray-300 text-3xl font-bold mb-2">
              Listen on!
            </h2>
            <p className="text-center text-sm text-gray-400 mb-8 italic">
              Anywhere, anytime.
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-white block mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 rounded-lg border border-gray-600 bg-transparent text-white outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="text-white block mb-2">Password</label>
              <div className="relative mb-2">
                <input
                  type={passwordShow ? "text" : "password"}
                  name="password"
                  className="w-full p-2 rounded-lg border border-gray-600 bg-transparent text-white outline-none"
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setPasswordShow(!passwordShow)}
                >
                  {passwordShow ? (
                    <IoEye className="text-lg text-gray-400"></IoEye>
                  ) : (
                    <IoEyeOff className="text-lg text-gray-400"></IoEyeOff>
                  )}
                </span>
              </div>
            </div>

            {loginError && (
              <p className="text-base italic font-semibold text-center text-red-500">
                {loginError}
              </p>
            )}
            <button className="w-full mt-4 bg-purple-700 text-white p-2 rounded-lg font-semibold">
              Sign In
            </button>
          </form>

          {/* Social Login */}
          <div className="flex mt-4 justify-center space-x-4">
            <button
              className="bg-gray-700 p-2 rounded-full"
              onClick={handleGoogleSignIn}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
                className="w-5 h-5"
              />
            </button>
            <button
              className="bg-gray-300 p-2 rounded-full"
              onClick={handleGithubSignIn}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                alt="Github"
                className="w-5 h-5"
              />
            </button>
          </div>

          <p className="text-white text-center text-sm mt-2">
            Don’t have an account?{" "}
            <Link to="/registration" className="text-purple-400">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
