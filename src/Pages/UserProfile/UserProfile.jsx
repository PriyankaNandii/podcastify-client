import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaLock,
  FaPodcast,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Swal from "sweetalert2";
import "../UserProfile/user.css";
import { FaRegEdit } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPulic";

const UserProfile = () => {
  const { user, loading, logOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const axiosPublic = useAxiosPublic();

  const [userData, setUserData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber || "");

  // Fetch user data by
  const fetchUserData = async () => {
    try {
      const response = await axiosPublic.get(`/users/email/${user?.email}`);
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
    console.log("Updated Data: ", updatedData);
    try {
      const response = await axiosPublic.put(
        `/users/email/${user?.email}`,
        updatedData
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Profile Updated ✅",
          text: "You're all set! Your profile looks great 👏",
          imageUrl:
            user?.photoURL ||
            "https://i.ibb.co.com/C09dnMY/default-Img-removebg-preview.png",
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
    <div className="flex bg-gradient-to-r from-[#142a4c] from-5% via-[#18171E] via-30% to-[#1b1f24] to-90% justify-center items-center min-h-screen">
      <div className="relative w-full  shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://static.vecteezy.com/system/resources/previews/037/169/619/non_2x/ai-generated-recording-a-podcast-in-the-office-free-photo.jpg"
          alt="Podcast Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-10 min-h-screen flex flex-col md:w-5/12 mx-auto m-5">
          {!isEditing ? (
            <div className="flex flex-col">
              <div className="flex items-center mb-">
                <button
                  onClick={handleEdit}
                  className="text-gray-600 focus:outline-none"
                ></button>
              </div>

              {/* Profile details */}
              <div className="flex flex-col items-center  bg-black rounded-lg shadow-md p-8">
                <button
                  onClick={handleEdit}
                  className="flex justify-end text-4xl text-red-800  rounded-lg w-full"
                >
                  <FaRegEdit className="border border-red-800 p-2 rounded-md" />
                </button>

                <img
                  className={
                    user?.photoURL
                      ? `w-28 h-28 rounded-full border-4
                   border-red-800 shadow-md`
                      : `w-32 h-32 rounded-full border-4
                   border-red-800 shadow-md`
                  }
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co.com/C09dnMY/default-Img-removebg-preview.png"
                  }
                  alt="Profile"
                />
                <h2 className="text-2xl font-bold mt-4 text-white">
                  Name : {userData?.name}
                </h2>

                <p className="text-[#dededecc] text-base py-2 ">
                  Email : {userData?.email || "Email: not found"}
                </p>

                <p className="text-[#dededecc] text-base">
                  UserName : @{userData?.username || " Not Set"}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {/* My Podcasts */}
                <div className="flex items-center justify-between px-6 py-4 bg-black rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <FaPodcast className="text-red-800   w-5 h-5" />
                    <span className="ml-4 text-[#dededecc]">My Podcasts</span>
                  </div>
                  <FaArrowLeft className="text-gray-400 w-4 h-4 transform rotate-180" />
                </div>

                {/* Change Password */}
                <div className="flex items-center justify-between px-6 py-4 bg-black rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <FaLock className="text-red-800   w-5 h-5" />
                    <span className="ml-4 text-[#dededecc]">
                      Change Password
                    </span>
                  </div>
                  <FaArrowLeft className="text-gray-400 w-4 h-4 transform rotate-180" />
                </div>

                {/* Help & Support */}
                <div className="flex items-center justify-between px-6 py-4 bg-black rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <FaQuestionCircle className="text-red-800  w-5 h-5" />
                    <span className="ml-4 text-[#dededecc]">
                      Help & Support
                    </span>
                  </div>
                  <FaArrowLeft className="text-gray-400 w-4 h-4 transform rotate-180" />
                </div>

                {/* Log out */}
                <div className="flex items-center justify-between px-6 py-4 bg-black rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <FaSignOutAlt className="text-red-800  w-5 h-5" />
                    <button
                      onClick={handleSignOut}
                      className="ml-4 text-[#dededecc]"
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
                <div className="flex  px-3 py-1 items-center">
                  <button className=" focus:outline-none" onClick={handleEdit}>
                    <FaArrowLeft className="w-6  h-6 text-red-800 mr-3" />
                  </button>
                  <h1 className="text-xl font-bold text-white ">Back</h1>
                </div>
              </div>
              {/* Profile Picture and Username */}
              <div className="flex flex-col items-center">
                <img
                  className={
                    user?.photoURL
                      ? `w-32 h-32 rounded-full border-4
                   border-red-800 shadow-md`
                      : `w-32 h-32 rounded-full border-4
                   border-red-800 shadow-md`
                  }
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co.com/C09dnMY/default-Img-removebg-preview.png"
                  }
                  alt="Profile"
                />
                <h2 className="text-2xl font-semibold mt-4  text-white">
                  Name : {userData?.name}
                </h2>

                <p className="text-[#dededecc]  p-2 text-base">
                  Email : {userData?.email || "Email: not found"}
                </p>
                <p className="text-[#dededecc] text-base ">
                  UserName : @{userData?.username || "Not Set"}
                </p>
              </div>
              <form onSubmit={handleUpdateProfile}>
                <div className="mt-8 px-6 space-y-4">
                  {/* Full Name */}
                  <div className="w-10/12 mx-auto">
                    <label className="block text-base font-semibold text-blue-100">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={userData?.name}
                      className="mt-1 p-2 border bg-[#D1D5DB] block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring focus:ring-red-800"
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
                    <label className="block text-base font-semibold text-blue-100">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      defaultValue={userData?.username}
                      className="mt-1 p-2 border bg-[#D1D5DB] block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring focus:ring-red-800"
                    />
                  </div>

                  {/* Email */}
                  <div className="w-10/12 mx-auto">
                    <label className="block text-base font-semibold text-blue-100">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={userData?.email || "Email: not found"}
                      readOnly
                      className="mt-1 p-2 border bg-[#D1D5DB] block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring focus:ring-red-800"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="px-6 mt-8 w-7/12 mx-auto">
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-red-800 to-black text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 transition duration-300"
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
