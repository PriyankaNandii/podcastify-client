import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Registration = () => {
  const { createUser, signInWithGoogle, updateUserProfile, signInWithGithub } =
    useAuth();

  const [registerError, setRegisterError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [conPasswordShow, setConPasswordShow] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const confirmPassword = form?.confirmPassword?.value;
    console.log(name, email, password, confirmPassword);

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError(
        "! Password should be at least 6 characters or longer !"
      );
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).+/.test(password)) {
      setRegisterError(
        "! Password needs at least One Upper and Lowercase letters !"
      );
      return;
    } else if (password !== confirmPassword) {
      setRegisterError("! Password and Confirm password did not matched !");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Congratulation! Registration Successful");
        updateUserProfile(name).then(() => {
          e.target.reset();
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          setRegisterError(
            "The Email is already Used! Please provide a new Email!"
          );
        } else {
          setRegisterError(error.message);
        }
      });
  };

  //   Google
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Google Sign Up Successful!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   Github
  const handleGithubSignUp = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success("Github Sign Up Successful!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-[#253259] to-purple-950 min-h-screen flex items-center justify-center ">
      <div className="relative w-full max-w-4xl h-[600px] bg-gradient-to-r from-[#18284c] to-[#18284c] rounded-lg overflow-hidden shadow-lg flex">
        <div className="w-2/3 relative">
          <img
            src="https://media.istockphoto.com/id/1400623377/photo/studio-microphone-in-neon-lights-sound-recording-equipment.jpg?s=612x612&w=0&k=20&c=kHwik6XC-PJMO96H2ixw5gw8ifpUE7JS_0l0mGlAtaY="
            alt="Podcast"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 bg-[#253259] p-8 flex flex-col justify-center">
          <h2 className="text-white text-center text-3xl italic font-semibold mb-4">
            Create an account
          </h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="text-white block mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded-lg border border-gray-600 bg-transparent text-white outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
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
              <div className="relative">
                <input
                  type={passwordShow ? "text" : "password"}
                  className="w-full p-2 rounded-lg border border-gray-600 bg-transparent text-white outline-none"
                  placeholder="Enter your password"
                  name="password"
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

            <div>
              <label className="text-white block mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type={conPasswordShow ? "text" : "password"}
                  name="confirmPassword"
                  className="w-full p-2 rounded-lg border border-gray-600 bg-transparent text-white outline-none"
                  placeholder="Confirm your password"
                  required
                />
                <span
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setConPasswordShow(!conPasswordShow)}
                >
                  {conPasswordShow ? (
                    <IoEye className="text-lg text-gray-400"></IoEye>
                  ) : (
                    <IoEyeOff className="text-lg text-gray-400"></IoEyeOff>
                  )}
                </span>
              </div>
            </div>

            {registerError && (
              <i>
                <p className="text-base italic font-semibold text-center text-red-500 mt-5 mb-1">
                  {registerError}
                </p>
              </i>
            )}
            <button
              type="submit"
              className="w-full mt-4 bg-purple-700 text-white p-2 rounded-lg font-semibold"
            >
              Create Account
            </button>
          </form>
          {/* Social Login */}
          <div className="flex mt-4 justify-center space-x-4">
            <button
              className="bg-gray-700 p-2 rounded-full"
              onClick={handleGoogleSignUp}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
                className="w-5 h-5"
              />
            </button>
            <button
              className="bg-gray-300 p-2 rounded-full"
              onClick={handleGithubSignUp}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                alt="Github"
                className="w-5 h-5"
              />
            </button>
          </div>
          <p className="text-white text-center text-sm mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-purple-400">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
