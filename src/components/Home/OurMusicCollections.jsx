import { MdForward10 } from "react-icons/md";
import { MdReplay10 } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import pic from "../../assets/images/ai-generated-8640312_1280.webp";
const OurMusicCollections = () => {
    return (
        <div>
             <div className="bg-[#171717] text-white py-24">
      <h2 className="text-center text-red-800 text-lg p-3">
        Start Listening Today
      </h2>
      <h1 className="text-center text-2xl lg:text-5xl font-bold mb-10">Our Music Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:px-20 px-5">
        <div className="bg-black p-6 rounded-lg shadow-lg lg:w-96 w-full">
        <div className="flex justify-end items-center text-red-800 gap-4 mr-2">
            <button className="text-2xl">
              <FaShareSquare />
            </button>
            <button className="text-2xl">
              <FiDownload />
            </button>
            <button className="text-sm border border-red-800 p-1">1px</button>
          </div>
          <div className="relative  py-4 md:px-2 px-2">
            <img
              src={pic}
              alt="Episode 47"
              className="w-full h-56 object-cover rounded"
            />
            <div className="absolute top-2 left-2 text-green-500 font-bold">
              {/* DEMO PODCAST */}
            </div>
            <div className="absolute bottom-2 right-2 text-green-500 font-bold">
              {/* SEASON 1 | EP #47 */}
            </div>
          </div>
          <div className="mt-4">
            <div className="md:flex-row flex-col items-center text-lg mb-2">
              <span className="mr-2">📚 47</span>
              <span className="mr-2">📅 August 12, 2022</span>
              <span>⏱️ 00:13:59</span>
            </div>
            <h3 className="text-2xl font-bold">
              Episode 47: How to create a beautiful podcast website?
            </h3>
          </div>
          <div
            className="mt-6 flex items-center lg:gap-6 gap-4  text-red-800
           "
          >
            <div class="audio-timing lg:text-lg text-xs">
              <span id="current-time">0:00</span> /
              <span id="total-duration"> 0:00</span>
            </div>
            <div className="flex lg:gap-2 gap-1">
              <button className=" lg:text-2xl text-xl ">
                <IoPlaySkipBackSharp />
              </button>
              <button className="lg:text-2xl text-xl ">
                <MdReplay10 />
              </button>
              <button className=" p- lg:text-3xl text-2xl ">
                <FaCirclePlay />
              </button>
              <button className=" lg:text-2xl text-xl">
                <MdForward10 />
              </button>
              <button className=" lg:text-2xl text-xl">
                <IoPlaySkipForward />
              </button>
            </div>
            <button className=" lg:text-2xl text-xl ">
              <FaVolumeUp />
            </button>
          </div>
       
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-red-800 text-white lg:px-6 px-3 lg:py-4 py-2 text-lg rounded-md">
          Load More
        </button>
      </div>
    </div>
        </div>
    );
};

export default OurMusicCollections;