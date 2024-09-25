import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaMusic } from "react-icons/fa6";

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
        setLoginError("Please check your Email or Password again!");
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
    <div className="flex items-center justify-center min-h-screen bg-[#253259]">
      <div className="w-full max-w-sm p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        {/* Gradient and Icon Section */}
        <div className="flex flex-col items-center justify-center mb-6 bg-gradient-to-b from-blue-700 to-black p-5 rounded-t-lg">
          <FaMusic className="text-5xl text-gray-900 mb-3"></FaMusic>
          <h2 className="text-center text-gray-300 text-3xl font-bold mb-2">
            Listen on!
          </h2>
          <p className="text-center text-sm text-gray-400 mb-8 italic">
            Anywhere, anytime.
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-gray-600 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              id="password"
              name="password"
              type={passwordShow ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 text-gray-500 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <span
              className="absolute top-2 right-4 text-gray-400 text-xl cursor-pointer"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? <IoEye /> : <IoEyeOff />}
            </span>
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Forgot password?
              </a>
            </div>
          </div>

          {loginError && (
            <p className="text-red-600 text-center mb-3">{loginError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 font-normal py-2 px-4 rounded-lg transition duration-200"
          >
            Start listening
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow bg-gray-600 h-px"></div>
          <span className="text-gray-400 px-4">or</span>
          <div className="flex-grow bg-gray-600 h-px"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-4">
          <button
            className="bg-gray-700 p-2 rounded-full"
            onClick={handleGoogleSignIn}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
              className="w-7 h-7"
            />
          </button>
          <button
            className="bg-gray-300 p-2 rounded-full"
            onClick={handleGithubSignIn}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
              alt="Github"
              className="w-7 h-7"
            />
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500">
            Don’t have an account yet?{" "}
            <Link to="/registration" className="text-blue-500 hover:underline">
              Create one.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
