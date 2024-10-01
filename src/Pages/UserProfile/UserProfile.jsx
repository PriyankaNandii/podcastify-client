import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLock,
  FaPodcast,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import "../UserProfile/user.css";

const UserProfile = () => {
  const { user, loading, logOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [userData, setUserData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber || "");

  // Fetch user data by ID
  const fetchUserData = async () => {
    try {
      const response = await axiosSecure.get(`/users/email/${user?.email}`);
      setUserData(response.data);
      setPhoneNumber(response.data.phoneNumber || "");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchUserData();
    }
  }, [user?.email]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      name: form?.name?.value,
      username: form?.username?.value,
      phoneNumber: phoneNumber,
    };

    try {
      const response = await axiosSecure.put(
        `/users/email/${user?.email}`,
        updatedData
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Profile Updated ✅",
          text: "You're all set! Your profile looks great 👏",
          imageUrl:
            user?.photoURL ||
            "https://marketplace.canva.com/EAFKBYNjwjk/1/0/1600w/canva-dark-blue-and-purple-neon-podcast-nnl4QxKxhsk.jpg",
          imageWidth: 80,
          imageHeight: 80,
          confirmButtonText: "Yay! 🤩",
          timer: 3000,
          timerProgressBar: true,
          background: "#E2E8F0",
          customClass: {
            confirmButton: "custom-button",
          },
        }).then(() => {
          fetchUserData();
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  const handleSignOut = () => {
    logOut().then().catch();
  };

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div className="flex bg-gradient-to-r from-[#142a4c] from-5% via-[#18171E] via-30% to-[#1b1f24] to-90% justify-center items-center min-h-screen p-4">
      <div className="relative md:w-8/12  shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://static.vecteezy.com/system/resources/previews/037/169/619/non_2x/ai-generated-recording-a-podcast-in-the-office-free-photo.jpg"
          alt="Podcast Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-10 min-h-screen flex flex-col p-6">
          {!isEditing ? (
            <div className="flex flex-col">
              <div className="flex items-center mb-6">
                <button
                  onClick={handleEdit}
                  className="text-gray-600 focus:outline-none"
                >
                  <div className="flex items-center bg-gray-800 px-3 py-1 rounded-lg">
                    <h1 className="text-2xl italic font-bold text-blue-700">
                      Profile
                    </h1>
                    <FaArrowRight className="w-6 italic h-6 text-blue-700 ml-2" />
                  </div>
                </button>
              </div>

              {/* Profile details */}
              <div className="flex flex-col items-center mt-6 bg-gray-300 rounded-lg shadow-md p-4">
                <img
                  className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-md"
                  src={
                    user?.photoURL ||
                    "https://marketplace.canva.com/EAFKBYNjwjk/1/0/1600w/canva-dark-blue-and-purple-neon-podcast-nnl4QxKxhsk.jpg"
                  }
                  alt="Profile"
                />
                <h2 className="text-xl font-bold mt-4 text-gray-800">
                  {userData?.name}
                </h2>

                <p className="text-gray-600 text-sm mt-1 mb-1 lowercase italic">
                  {userData?.email || "Email: not found"}
                </p>

                <p className="text-gray-600 text-base lowercase italic">
                  @{userData?.username}
                </p>

                <button
                  onClick={handleEdit}
                  className="mt-4 px-6 py-2 text-white rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/80 dark:shadow-lg dark:shadow-blue-800/80"
                >
                  Edit Profile
                </button>
              </div>

              <div className="mt-8 space-y-4">
                {/* My Podcasts */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-300 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <FaPodcast className="text-blue-500 w-5 h-5" />
                    <span className="ml-4 text-gray-800">My Podcasts</span>
                  </div>
                  <FaArrowLeft className="text-gray-400 w-4 h-4 transform rotate-180" />
                </div>

                {/* Change Password */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-300 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <FaLock className="text-blue-500 w-5 h-5" />
                    <span className="ml-4 text-gray-800">Change Password</span>
                  </div>
                  <FaArrowLeft className="text-gray-400 w-4 h-4 transform rotate-180" />
                </div>

                {/* Help & Support */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-300 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <FaQuestionCircle className="text-blue-500 w-5 h-5" />
                    <span className="ml-4 text-gray-800">Help & Support</span>
                  </div>
                  <FaArrowLeft className="text-gray-400 w-4 h-4 transform rotate-180" />
                </div>

                {/* Log out */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-300 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <FaSignOutAlt className="text-blue-500 w-5 h-5" />
                    <button
                      onClick={handleSignOut}
                      className="ml-4 text-gray-800"
                    >
                      Log out
                    </button>
                  </div>
                  <FaArrowLeft className="text-gray-400 w-4 h-4 transform rotate-180" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              {/* Top bar with back button */}
              <div className="flex items-center mb-6">
                <div className="flex bg-gray-800 px-3 py-1 items-center">
                  <button
                    className="text-gray-600 focus:outline-none"
                    onClick={handleEdit}
                  >
                    <FaArrowLeft className="w-6 italic h-6 text-blue-700 mr-3" />
                  </button>
                  <h1 className="text-xl italic font-bold text-blue-700">
                    Edit Profile
                  </h1>
                </div>
              </div>
              {/* Profile Picture and Username */}
              <div className="flex flex-col items-center mt-6">
                <img
                  className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-md"
                  src={
                    user?.photoURL ||
                    "https://marketplace.canva.com/EAFKBYNjwjk/1/0/1600w/canva-dark-blue-and-purple-neon-podcast-nnl4QxKxhsk.jpg"
                  }
                  alt="Profile"
                />
                <h2 className="text-xl font-semibold mt-4 italic text-white">
                  {userData?.name}
                </h2>

                <p className="text-gray-300 mt-1 mb-1 lowercase italic">
                  {userData?.email || "Email: not found"}
                </p>
                <p className="text-gray-300 lowercase italic">
                  @{userData?.username}
                </p>
              </div>
              <form onSubmit={handleUpdateProfile}>
                <div className="mt-8 px-6 space-y-4">
                  {/* Full Name */}
                  <div className="w-10/12 mx-auto">
                    <label className="block text-sm italic font-semibold text-blue-100">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={userData?.name}
                      className="mt-1 p-2 border bg-gray-300 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
                    />
                  </div>

                  {/* Phone number */}
                  <div className="flex flex-col w-10/12 mx-auto">
                    <label className="block text-sm italic font-semibold text-blue-100 mb-1">
                      Phone number
                    </label>
                    <PhoneInput
                      country={"bd"}
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                      inputStyle={{ width: "100%", backgroundColor: "#D1D5DB" }}
                      containerStyle={{ width: "100%" }}
                      className="mt-1"
                    />
                  </div>

                  {/* Username */}
                  <div className="w-10/12 mx-auto">
                    <label className="block text-sm italic font-semibold text-blue-100">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      defaultValue={userData?.username}
                      className="mt-1 lowercase p-2 border bg-gray-300 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="w-10/12 mx-auto">
                    <label className="block text-sm italic font-semibold text-blue-100">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={userData?.email || "Email: not found"}
                      readOnly
                      className="mt-1 p-2 bg-gray-300 border block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="px-6 mt-8 w-7/12 mx-auto">
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
