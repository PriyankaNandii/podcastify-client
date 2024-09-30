import { useState } from "react";
import {
  FaArrowLeft,
  FaLock,
  FaPodcast,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const UserProfile = () => {
  const { user, loading, updateUserProfile, logOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = user?.photoURL;
    console.log(name, photoURL);

    // Update profile
    await updateUserProfile(name, photoURL);
  };
  const handleSignOut = () => {
    logOut().then().catch();
  };

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-6/12 bg-white shadow-lg rounded-lg">
        {!isEditing ? (
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex items-center p-4 bg-white shadow-sm">
              <button
                className="text-gray-600 focus:outline-none"
                onClick={handleEdit}
              >
                <FaArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-semibold ml-4">Profile</h1>
            </div>

            {/* Profile details */}
            <div className="flex flex-col items-center mt-6">
              <img
                className="w-24 h-24 rounded-full"
                src={user?.photoURL || "https://i.ibb.co/Zg4S2sb/default.png"}
                alt="Profile"
              />
              <h2 className="text-lg font-semibold mt-4">
                {user?.displayName || "Username not found"}
              </h2>
              <p className="text-gray-500 lowercase italic">
                {user?.email || "Email: not found"}
              </p>
              <button
                onClick={handleEdit}
                className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
              >
                Edit Profile
              </button>
            </div>

            {/* Options */}
            <div className="mt-8 space-y-4">
              {/* My Podcasts */}
              <div className="flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <FaPodcast className="text-gray-600 w-5 h-5" />
                  <span className="ml-4 text-gray-800">My Podcasts</span>
                </div>
                <FaArrowLeft className="text-gray-400 w-4 h-4 transform rotate-180" />
              </div>

              {/* Change Password */}
              <div className="flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <FaLock className="text-gray-600 w-5 h-5" />
                  <span className="ml-4 text-gray-800">Change Password</span>
                </div>
                <FaArrowLeft className="text-gray-400 w-4 h-4 transform rotate-180" />
              </div>

              {/* Help & Support */}
              <div className="flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <FaQuestionCircle className="text-gray-600 w-5 h-5" />
                  <span className="ml-4 text-gray-800">Help & Support</span>
                </div>
                <FaArrowLeft className="text-gray-400 w-4 h-4 transform rotate-180" />
              </div>

              {/* Log out */}
              <div className="flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <FaSignOutAlt className="text-gray-600 w-5 h-5" />
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
          <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Top bar with back button */}
            <div className="flex items-center p-4 bg-white shadow-sm">
              <button
                className="text-gray-600 focus:outline-none"
                onClick={handleEdit}
              >
                <FaArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-semibold ml-4">Edit Profile</h1>
            </div>

            {/* Profile Picture and Username */}
            <div className="flex flex-col items-center mt-6">
              <img
                className="w-24 h-24 rounded-full"
                src={user?.photoURL || "https://i.ibb.co/Zg4S2sb/default.png"}
                alt="Profile"
              />
              <h2 className="text-lg font-semibold mt-4">
                {user?.displayName}
              </h2>
              <p className="text-gray-500 lowercase italic">
                {user?.email || "Email: not found"}
              </p>
            </div>

            <form onSubmit={handleUpdateProfile}>
              {/* Form Inputs */}
              <div className="mt-8 px-6 space-y-4">
                {/* Full Name */}
                <div className="w-10/12">
                  <label className="block text-[15px] font-semibold text-gray-700">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    className="mt-1 italic p-2 border focus:outline-none bg-white block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                {/* Email */}
                <div className="w-10/12">
                  <label className="block text-[15px] font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    readOnly
                    className="mt-1 italic p-2 bg-white border focus:outline-none block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                {/* Phone Number */}
                <div className="w-10/12">
                  <label className="block text-[15px] font-semibold text-gray-700">
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value="+880"
                    className="mt-1 italic p-2 bg-white border focus:outline-none block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="px-6 mt-8">
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
