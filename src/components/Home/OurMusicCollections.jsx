import { MdForward10 } from "react-icons/md";
import { MdReplay10 } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import pic from "../../assets/images/ai-generated-8640312_1280.webp";
import axios from "axios";
import { useEffect, useState } from "react";
import Podcast from "./Podcast";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
const OurMusicCollections = () => {
  const [podcasts, setPodcasts] = useState([]);
  console.log(podcasts);
  const [loading, setLoading] = useState(true);

  // Fetch podcasts
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axiosPublic.get("/podcast");
        setPodcasts(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
    console.log('Podcast Length: ',podcasts.length)
  }, []);

  const handlePlay = (id) => {
    if (currentPodcastId === id) {
      setCurrentPodcastId(null);
    } else {
      setCurrentPodcastId(id);
    }
  };

  const handlePlayNext = (currentId) => {
    if (currentPodcastId === currentId) {
      const currentIndex = podcasts.findIndex(podcast => podcast._id === currentId);
      const nextIndex = (currentIndex + 1) % podcasts.length;
      setCurrentPodcastId(podcasts[nextIndex]._id);
    }
  };

  const handlePlayPrevious = (currentId) => {
    if (currentPodcastId === currentId) {
      const currentIndex = podcasts.findIndex(podcast => podcast._id === currentId);
      const previousIndex = (currentIndex - 1 + podcasts.length) % podcasts.length;
      setCurrentPodcastId(podcasts[previousIndex]._id);
    }
  };

  if (loading) {
    return <p className="text-center p-4 text-xl">Loading podcasts...</p>;
  }


  return (
    <div>
      <div className="bg-[#171717] text-white py-24">
        <h2 className="text-center text-red-800 text-lg p-3">
          Start Listening Today
        </h2>
        <h1 className="text-center text-2xl lg:text-5xl font-bold mb-10">
          Our Music Collections
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:px-20 px-5">
        {podcasts?.map(podcast => (<Podcast key={podcast._id} podcast={podcast}></Podcast>))}
      
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
