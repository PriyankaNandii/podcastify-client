import { FaDesktop, FaHome, FaTimes, FaVoteYea } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { FaBook, FaCompass, FaUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

export default function LeftNavbar() {
  const { user } = useAuth();
  const { photoURL, displayName } = user || {};
  return (
    <div className="bg-gradient-to-r from-[#1C144C] from-5% via-[#18171E] via-30% to-[#1b1f24] to-90% text-[#a3a3a3]">
      {/*  */}
      <div>
        <div className="flex items-center justify-center p-5 rounded-full flex-col gap-y-2">
          <img src={photoURL} alt="" className="w-20 h-20 rounded-full" />
          <h1 className="text-xl font-bold">Hi, {displayName}</h1>
        </div>
        <div className="pl-5 pt-2 font-black ">
          <h1 className="text-white">Menu</h1>
          <aside className="mt-3 space-y-4 hover:*:text-white">
            <div className="flex items-center justify-start gap-3">
              <FaHome />
              <h1>Home</h1>
            </div>
            <div className="flex items-center justify-start gap-3">
              <FaCompass />
              <h1>Discover</h1>
            </div>
            <div className="flex items-center justify-start gap-3">
              <FaBook />
              <h1>Albums</h1>
            </div>
            <div className="flex items-center justify-start gap-3">
              <FaUser />
              <h1>Artist</h1>
            </div>
          </aside>
        </div>

        {/* Library */}

        <div className="pl-5 pt-2 font-black mt-6">
          <h1 className="text-white">Library</h1>
          <aside className="mt-3 space-y-4 hover:*:text-white">
            <div className="flex items-center justify-start gap-3">
              <FaTimes />
              <h1>Recent</h1>
            </div>
            <div className="flex items-center justify-start gap-3">
              <FaVoteYea />
              <h1>Favorites</h1>
            </div>
            <div className="flex items-center justify-start gap-3">
              <FaDesktop />
              <h1>Local</h1>
            </div>
          </aside>
        </div>
        {/* General */}

        <div className="pl-5 pt-2 font-black mt-6">
          <h1 className="text-white">General</h1>
          <aside className="mt-3 space-y-4 hover:*:text-white">
            <div className="flex items-center justify-start gap-3">
              <IoSettings />
              <h1>Settings</h1>
            </div>
            <div className="flex items-center justify-start gap-3">
              <MdLogout />
              <h1>Logout</h1>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
