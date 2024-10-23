/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { FaShareSquare, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { MdForward10, MdOutlinePlaylistAdd, MdReplay10 } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import { useMutation } from "@tanstack/react-query";
import { BiUpvote } from "react-icons/bi";
import toast from "react-hot-toast";

const Podcast = ({ podcast, isPlay, onPlay, onPlayNext, onPlayPrevious }) => {
  const {
    _id,
    title,
    releaseDate,
    coverImageUrl,
    audioFileUrl,
    voters,
    userEmail,
    upVote,
  } = podcast;

  const { user } = useContext(AuthContext);

  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalDuration, setTotalDuration] = useState("0:00");
  const [isMuted, setIsMuted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [UpVotee, setUpVotee] = useState(upVote || 0);

  const dateObj = new Date(releaseDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = dateObj.toLocaleDateString("en-US", options);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/login";

  //   localhost sharing url
  const shareUrl = `http://localhost:5000${audioFileUrl}`;

  // Modal state for toggling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Vote to a podcast
  const { mutateAsync: voteIncrement } = useMutation({
    mutationFn: async ({ id }) =>
      await axiosPublic.put(`/voteCount/${id}`, { emailUser: user?.email }),
  });

  // Vote handler
  const handleVoteCount = async (podcasts) => {
    if (!user) {
      navigate(from, { replace: true });
      return;
    }

    if (voters?.includes(user.email)) {
      toast.error("You've already voted for this podcast");
      return;
    }

    try {
      await voteIncrement({ id: podcasts._id, emailUser: user.email });
      setUpVotee((prev) => prev + 1);
      toast.success("Woww! Vote done", { icon: "👏" });

      voters.push(user.email);
    } catch (error) {
      console.error(error || "Error voting for podcast");
    }
  };
  useEffect(() => {
    // Perform any side effects or updates after vote count changes
    console.log("Vote count updated:", UpVotee);
  }, [UpVotee]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Download handler
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(audioFileUrl); // Consider updating this URL if CORS is an issue
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${title}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Download failed. Please try again."); // Improved error handling
    } finally {
      setIsDownloading(false);
    }
  };

  // Play/Pause handler
  useEffect(() => {
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlay]);

  // Toggle Mute/Unmute
  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted; // Toggle the muted property of the audio element
    setIsMuted(!isMuted);
  };

  // Skip 10 seconds forward
  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  // Skip 10 seconds backward
  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  // Format time in "minutes:seconds"
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Update current time and total duration
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(formatTime(audioRef.current.currentTime));
      setTotalDuration(formatTime(audioRef.current.duration || 0));
    };
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);

    const handleEnded = () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      if (isPlay) {
        onPlay();
      }
    };
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateTime);
    };
  }, [onPlayNext]);

  const handlePlaylist = (e) => {
    e.preventDefault();
    const user_email = user?.email;
    if (user_email) {
      const music_id = _id;
      const playlistData = {
        user_email,
        music_id,
        title,
      };
      axiosPublic
        .post("/playlist", playlistData)
        .then((response) => {
          if (response.data.insertedId !== null) {
            toast.success("Playlist added successfully!");
          } else {
            toast.error("Podcast already exists in playlist.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#1c171e] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-6 w-full">
      <div className="flex justify-end items-center text-red-800 gap-4 mr-2">
        <button
          onClick={toggleModal}
          className="text-2xl"
          title="Share this song"
        >
          <FaShareSquare />
        </button>
        <button
          onClick={handleDownload}
          className="text-2xl"
          title="Download this song"
        >
          <FiDownload />
        </button>
        <button onClick={handlePlaylist} className="text-2xl">
          <MdOutlinePlaylistAdd />
        </button>
        {/* Vote Button */}

        <button
          onClick={() => {
            handleVoteCount(podcast);
          }}
          disabled={user?.email === userEmail}
          className={`py-1 px-4 hover:text-purple-800 hover:scale-105 hover:shadow text-center border rounded-md border-gray-800 h-8 text-sm flex items-center gap-1 lg:gap-2 ${
            user?.email === userEmail
              ? "cursor-not-allowed opacity-60 hover:text-black"
              : ""
          }`}
          title="Like this podcast"
        >
          <BiUpvote className="text-xl"></BiUpvote>
          <span className="text-lg">{UpVotee}</span>
        </button>
      </div>
      <div className="relative  py-4 md:px-2 px-2">
        <img
          src={coverImageUrl}
          alt="Episode 47"
          className="w-full h-56 object-cover rounded"
        />
      </div>

      <div className="mt-4">
        <div className="md:flex-row flex-col items-center text-lg mb-2">
          <span className="mr-2">📚 47</span>
          <span className="mr-2">📅 {date}</span>
          <span>⏱️{totalDuration}</span>
        </div>
        <h3 className="text-2xl font-bold">
          <Link to={`/podcast/${_id}`}>{title}</Link>
        </h3>
      </div>
      <div className="mt-6 flex items-center lg:gap-6 gap-4 text-red-800">
        <audio ref={audioRef} src={audioFileUrl} />

        <div className="audio-timing lg:text-lg text-xs">
          <span id="current-time">{currentTime}</span> /
          <span id="total-duration"> {totalDuration}</span>
        </div>

        {/* Audio Controls */}
        <div className="flex lg:gap-2 gap-1">
          <button onClick={onPlayPrevious} className="lg:text-2xl text-xl">
            <IoPlaySkipBackSharp />
          </button>

          <button onClick={skipBackward} className="lg:text-2xl text-xl">
            <MdReplay10 />
          </button>

          <button onClick={onPlay} className="lg:text-3xl text-2xl">
            {isPlay ? <FaCirclePause /> : <FaCirclePlay />}
          </button>

          <button onClick={skipForward} className="lg:text-2xl text-xl">
            <MdForward10 />
          </button>

          <button onClick={onPlayNext} className="lg:text-2xl text-xl">
            <IoPlaySkipForward />
          </button>
        </div>

        <button onClick={toggleMute} className="lg:text-2xl text-xl">
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>

      {/* Downloading message */}
      {isDownloading && (
        <div className="mt-4 flex items-center text-white">
          <ClipLoader color="#FFFFFF" size={30} />
          <span className="ml-2">Downloading...</span>
        </div>
      )}

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
