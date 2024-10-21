import { FaHeart, FaListUl, FaPause, FaPlay } from "react-icons/fa";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";

import { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";
import { TiArrowShuffle } from "react-icons/ti";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

const UserDashoard = () => {
  const [userData, setUserData] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [trackList, setTrackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get("/podcast");
        setTrackList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosPublic]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrackIndex, isPlaying]);

  const playNextTrack = () => {
    setIsPlaying(false);
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === trackList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const playPreviousTrack = () => {
    setIsPlaying(false);
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? trackList.length - 1 : prevIndex - 1
    );
  };

  const playAudio = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pauseAudio = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };
  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  // Fetch user data
  const fetchUserData = async () => {
    try {
      const response = await axiosSecure.get(`/users/email/${user?.email}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchUserData();
    }
  }, [user?.email]);

  if (loading) {
    return <h1 className="text-center text-sm">Please wait...</h1>;
  }

  return (
    <>
      <div className="flex  bg-gray-900 text-white">
        {/* Main Content */}

        <div className="flex-1 flex flex-col p-6">
          <header className="flex justify-between mb-8">
            <h2 className="text-3xl font-bold">Discover</h2>
            <div className="flex items-center space-x-4">
              <img
                src={
                  user?.photoURL ||
                  "https://marketplace.canva.com/EAFKBYNjwjk/1/0/1600w/canva-dark-blue-and-purple-neon-podcast-nnl4QxKxhsk.jpg"
                }
                alt="Profile"
                className="rounded-full w-12 h-12"
              />
              <p> {userData?.name}</p>
            </div>
          </header>
          {/* Trending Podcasts */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Trending Podcasts</h3>
            <div
              className="bg-cover bg-center rounded-lg p-6 flex items-center justify-between"
              style={{
                backgroundImage:
                  "url('https://grupos2mkt.com/wp-content/uploads/2022/05/GS2-Podcast-entenda-por-que-utilizar-nas-suas-estrategias-Autores-GS2-Marketing-Freepik.jpg')",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }} // Change the URL to your desired image
            >
              <div>
                <h4 className="text-2xl font-bold text-white">
                  The Beautiful Mind
                </h4>
                <p className="text-gray-300">With Tom Kennedy</p>
              </div>
              <img
                src={trackList[currentTrackIndex]?.coverImageUrl}
                alt="The Beautiful Mind"
                className="rounded-lg shadow-md w-16"
              />
            </div>
          </section>
          {/* Most Popular Podcasts */}
          <section className="mb-10">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Most Popular Podcast
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
              {trackList.map((podcast, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src={podcast.coverImageUrl}
                    alt={podcast.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {podcast.title}
                    </h4>
                    <p className="text-gray-300">{podcast.musician}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recently Played Section */}
            {/*  <div>
              <h3 className="text-xl font-semibold mb-4 mt-10">
                Recently Played
              </h3>
              <div className="bg-gray-700 p-4 rounded-lg space-y-4">
               
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="The Mindset Mentor"
                      className="rounded-lg"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">
                        The Mindset Mentor
                      </h4>
                      <p className="text-gray-400">Rob Dial</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>30:31</span>
                    <FaPlayCircle className="text-blue-500 text-xl" />
                  </div>
                </div>
              </div>
            </div> */}
          </section>
        </div>

        {/* Now Playing Section */}
        <div className="w-full max-w-sm bg-gray-800 shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Now Playing
          </h3>

          <div className="bg-gray-700 rounded-lg p-4">
            {/* Now Playing Info */}
            <h1 className="text-white text-xl text-center font-semibold mb-4">
              {trackList[currentTrackIndex]?.title}
            </h1>

            <img
              src={trackList[currentTrackIndex]?.coverImageUrl}
              alt="Now Playing"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />

            <p className="text-gray-300 text-center mb-2">
              By: {trackList[currentTrackIndex]?.musician}
            </p>

            <div className="flex justify-center space-x-4 mb-6">
              {/* Favorite and Playlist Icons */}
              <button className="text-red-400 text-2xl hover:text-red-500">
                <FaHeart />
              </button>
              <button className="text-blue-400 text-2xl hover:text-blue-500">
                <FaListUl />
              </button>
            </div>

            {/* Audio Element */}
            <div className="flex items-center justify-center my-4">
              <audio
                ref={audioRef}
                src={trackList[currentTrackIndex]?.audioFileUrl}
                onPlay={handlePlay}
                onPause={handlePause}
                controls
                className="w-full"
              />
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-between mt-4 text-white text-2xl">
              <button className="hover:text-gray-400">
                <TiArrowShuffle />
              </button>
              <button
                onClick={playPreviousTrack}
                className="hover:text-gray-400"
              >
                <IoMdSkipBackward />
              </button>
              <button
                onClick={() => (isPlaying ? pauseAudio() : playAudio())}
                className="bg-indigo-500 text-white p-3 rounded-full hover:bg-indigo-600"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={playNextTrack} className="hover:text-gray-400">
                <IoMdSkipForward />
              </button>
              <button className="hover:text-gray-400">
                <HiArrowPathRoundedSquare />
              </button>
            </div>
          </div>

          {/* Top Podcaster Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Top Podcaster
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>01. Tom Kennedy</li>
              <li>02. Julian Wise</li>
              <li>03. Jhonaton Hope</li>
              <li>04. Tony Smart</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashoard;
