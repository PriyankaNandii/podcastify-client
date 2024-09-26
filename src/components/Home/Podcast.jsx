import { FaShareSquare, FaVolumeUp } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { MdForward10, MdReplay10 } from "react-icons/md";

const Podcast = ({ podcast }) => {
    const { title, coverImageUrl, audioFileUrl } = podcast;
    return (
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
                    src={`http://localhost:5000${coverImageUrl}`}
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
                    {title}
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
    );
};

export default Podcast;