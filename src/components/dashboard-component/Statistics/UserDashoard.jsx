import { FaHeart, FaListUl, FaPause, FaPlay } from "react-icons/fa";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";

import { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";
import { TiArrowShuffle } from "react-icons/ti";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { LuVote } from "react-icons/lu";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useDataFetcher from "../../../Hooks/useDataFetcher";
import Loader from "../../../Layout/Loader";

const UserDashoard = () => {
  const [userData, setUserData] = useState(null);
  const { data, isLoading } = useDataFetcher("users");
  const [totalSubscriber, setTotalSubscriber] = useState([]);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [trackList, setTrackList] = useState([]);
  const [loadingg, setLoadingg] = useState(true);
  const axiosPublic = useAxiosPublic();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  // Function to format the ISO date (releaseDate)
  const formatReleaseDate = (isoDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", options);
  };

  const handlePodcasterRequest = async () => {
    try {
      const response = await axiosPublic.post("/request-podcaster", {
        email: user?.email,
      });
      if (response.data.success) {
        toast.success("Your request has been submitted!");
      } else {
        toast.error(
          response.data.message || "There was an issue with your request."
        );
      }
    } catch (error) {
      toast.log("Failed to submit the request.", error);
    }
  };

  const addToPlaylist = async (music_id, title) => {
    const user_email = user?.email;
    if (user_email) {
      try {
        const response = await axiosSecure.post("/playlist", {
          music_id,
          title,
          user_email,
        });

        if (response.data.insertedId !== null) {
          toast.success("Added to playlist successfully!");
        } else {
          toast.error("Already exists in playlist.");
        }
      } catch (error) {
        console.error("Error adding to playlist:", error);
        toast.error("An error occurred while adding to the playlist.");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingg(true);
        const response = await axiosPublic.get("/trendingPodcasts");
        setTrackList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingg(false);
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

  useEffect(() => {
    const mySubscription = async () => {
      try {
        const response = await axiosPublic.get("/totalSubscriber");
        setTotalSubscriber(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    mySubscription();
  }, [user?.email]);

  const podcasters = data?.filter((podcast) => podcast?.role === "podcaster");

  const sortedPodcasters = podcasters
    ?.map((podcaster) => {
      const subscribersCount = totalSubscriber.filter(
        (subscriber) => subscriber.podcasterUid === podcaster.uid
      ).length;
      return { ...podcaster, subscribersCount };
    })
    .sort((a, b) => b.subscribersCount - a.subscribersCount);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-900 text-white">
        {/* Main Content */}
        <div className="flex-1 flex flex-col p-6">
          <header className="flex justify-between mb-8">
            <div className="flex items-center space-x-1">
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/com/C09dnMY/default-Img-removebg-preview.png"
                }
                alt="Profile"
                className={
                  user?.photoURL
                    ? `rounded-full w-12 h-12`
                    : `rounded-full w-12 h-12 mr-2`
                }
              />
              <p className="text-base font-medium">{userData?.name}</p>
            </div>
          </header>
          {/* Banner */}
          <section className="mb-12">
            <div
              className="bg-cover bg-center rounded-lg p-6 h-44 flex items-center justify-between"
              style={{
                backgroundImage:
                  "url('https://stories.purdue.edu/app/uploads/2024/03/cropped-ThisIsPurduePodcast-2023_RM24282-1920x1080-1.jpg')",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <div>
                <h4 className="md:text-2xl text-lg font-bold text-white">
                  {trackList[currentTrackIndex]?.title}
                </h4>
                <p className="text-gray-300 mt-4">
                  With {trackList[currentTrackIndex]?.musician}
                </p>
              </div>
              <img
                src={trackList[currentTrackIndex]?.coverImageUrl}
                alt="The Beautiful Mind"
                className="rounded-lg shadow-md md:w-20 md:h-20 w-14 h-14"
              />
            </div>
          </section>
          {/* Trending Podcasts */}
          <section className="mb-10 lg:block hidden">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Trending Podcasts
            </h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-11/12">
              {trackList?.slice(0, 6).map((podcast, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black overflow-hidden shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={podcast.coverImageUrl}
                      alt={podcast.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    {/* UpVote Badge */}
                    <div className="absolute top-4 right-4 bg-red-800 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                      <span className="">{podcast.upVote}</span>
                      <LuVote className="text-base" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h4 className="text-lg font-bold text-white truncate">
                      {podcast.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{podcast.musician}</p>
                    <p className="text-gray-500 text-xs">
                      {formatReleaseDate(podcast.releaseDate)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Now Playing Section */}
        <div className="lg:w-2/5 w-full bg-gray-900 shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Now Playing
          </h3>
          <div className="bg-gray-800 rounded-lg p-4">
            {/* Now Playing Info */}
            <h1 className="text-white text-xl text-center font-semibold mb-4">
              {trackList[currentTrackIndex]?.title}
            </h1>

            <img
              src={trackList[currentTrackIndex]?.coverImageUrl}
              alt="Now Playing"
              className="rounded-lg mb-4 w-full h-56 object-cover"
            />

            <p className="text-gray-300 text-center mb-2">
              By: {trackList[currentTrackIndex]?.musician}
            </p>

            <div className="flex justify-center space-x-4 mb-6">
              {/* Favorite and Playlist Icons */}
              <button className="text-red-400 text-2xl hover:text-red-500">
                <FaHeart />
              </button>
              <button
                onClick={() =>
                  addToPlaylist(
                    trackList[currentTrackIndex]?._id,
                    trackList[currentTrackIndex]?.title
                  )
                }
                className="text-blue-400 text-2xl hover:text-blue-500"
              >
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
          {/* Podcaster reqest */}
          <div>
            <h2 className="text-xl mt-4">Do you want to be a Podcaster?</h2>
            <button
              className="text-xl mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
              onClick={handlePodcasterRequest}
            >
              Click here to request to be a Podcaster
            </button>
          </div>
          {/* Top Podcasters Section */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Top Podcasters</h3>
            <div className="grid grid-cols-2 gap-4">
              {sortedPodcasters?.map((podcaster, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={
                      podcaster.photoURL ||
                      "https://i.ibb.co.com/C09dnMY/default-Img-removebg-preview.png"
                    }
                    alt={podcaster.name}
                    className="rounded-full w-20 h-20 object-cover shadow-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{podcaster.name}</h4>
                    <p className="text-gray-400 text-base">{podcaster.role}</p>
                    {
                      totalSubscriber.filter(
                        (subscriber) =>
                          subscriber.podcasterUid === podcaster.uid
                      ).length
                    }{" "}
                    subscribers
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Trending Podcasts */}
        <section className="mt-10 text-center lg:hidden">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Trending Podcasts
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:w-11/12 w-10/12 mx-auto">
            {trackList?.slice(0, 6).map((podcast, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black overflow-hidden shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={podcast.coverImageUrl}
                    alt={podcast.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  {/* UpVote Badge */}
                  <div className="absolute top-4 right-4 bg-red-800 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                    <span className="">{podcast.upVote}</span>
                    <LuVote className="text-base" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 space-y-3">
                  <h4 className="text-lg font-bold text-white truncate">
                    {podcast.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{podcast.musician}</p>
                  <p className="text-gray-500 text-xs">
                    {formatReleaseDate(podcast.releaseDate)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default UserDashoard;
