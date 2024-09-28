import { useState } from "react";
import { FaShareSquare, FaVolumeUp } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { MdForward10, MdReplay10 } from "react-icons/md";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const Podcast = ({ podcast }) => {
  const { title, coverImageUrl, audioFileUrl } = podcast;

  //   localhost sharing url
  const shareUrl = `http://localhost:5000${audioFileUrl}`;

  // Modal state for toggling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg lg:w-96 w-full">
      <div className="flex justify-end items-center text-red-800 gap-4 mr-2">
        <button onClick={toggleModal} className="text-2xl">
          <FaShareSquare />
        </button>
        <button className="text-2xl">
          <FiDownload />
        </button>
        <button className="text-sm border border-red-800 p-1">1px</button>
      </div>

      {/* Podcast cover image */}
      <div className="relative py-4 md:px-2 px-2">
        <img
          src={`http://localhost:5000${coverImageUrl}`}
          alt="Episode Cover"
          className="w-full h-56 object-cover rounded"
        />
      </div>

      {/* Podcast details */}
      <div className="mt-4">
        <div className="md:flex-row flex-col items-center text-lg mb-2">
          <span className="mr-2">📚 Episode 47</span>
          <span className="mr-2">📅 August 12, 2022</span>
          <span>⏱️ 00:13:59</span>
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      {/* Audio player controls */}
      <div className="mt-6 flex items-center lg:gap-6 gap-4 text-red-800">
        <div className="audio-timing lg:text-lg text-xs">
          <span id="current-time">0:00</span> /{" "}
          <span id="total-duration">0:00</span>
        </div>
        <div className="flex lg:gap-2 gap-1">
          <button className="lg:text-2xl text-xl">
            <IoPlaySkipBackSharp />
          </button>
          <button className="lg:text-2xl text-xl">
            <MdReplay10 />
          </button>
          <button className="p- lg:text-3xl text-2xl">
            <FaCirclePlay />
          </button>
          <button className="lg:text-2xl text-xl">
            <MdForward10 />
          </button>
          <button className="lg:text-2xl text-xl">
            <IoPlaySkipForward />
          </button>
        </div>
        <button className="lg:text-2xl text-xl">
          <FaVolumeUp />
        </button>
      </div>

      {/* Modal for social sharing */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96 max-w-xs z-50">
            <h4 className="text-lg font-bold mb-4 text-black">
              Share this Podcast via
            </h4>
            <div className="flex space-x-4">
              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <EmailShareButton
                url={shareUrl}
                subject={`Check out this podcast: ${title}`}
                body={`I found this amazing podcast titled "${title}". You can listen to it here: ${shareUrl}`}
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
            <button
              onClick={toggleModal}
              className="mt-4 text-red-500 hover:text-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Podcast;
