import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import Podcast from "./Podcast";
import { NavLink } from "react-router-dom";

const TrendingPodcasts = () => {
  const axiosPublic = useAxiosPublic();
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPodcastId, setCurrentPodcastId] = useState(null);

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
  }, [axiosPublic]);

  const handlePlay = (id) => {
    if (currentPodcastId === id) {
      setCurrentPodcastId(null);
    } else {
      setCurrentPodcastId(id);
    }
  };

  const handlePlayNext = (currentId) => {
    if (currentPodcastId === currentId) {
      const currentIndex = podcasts.findIndex(
        (podcast) => podcast._id === currentId
      );
      const nextIndex = (currentIndex + 1) % podcasts.length;
      setCurrentPodcastId(podcasts[nextIndex]._id);
    }
  };

  const handlePlayPrevious = (currentId) => {
    if (currentPodcastId === currentId) {
      const currentIndex = podcasts.findIndex(
        (podcast) => podcast._id === currentId
      );
      const previousIndex =
        (currentIndex - 1 + podcasts.length) % podcasts.length;
      setCurrentPodcastId(podcasts[previousIndex]._id);
    }
  };

  if (loading) {
    return <p>Loading podcasts...</p>;
  }

  return (
    <div>
      <div className="bg-[#171717] text-white py-24">
        <h2 className="text-center text-red-800 text-lg p-3">
          Start Listening Today
        </h2>
        <h1 className="text-center text-2xl lg:text-5xl font-bold mb-10">
          Trending Podcast&apos;s
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:px-20 px-5">
          {podcasts?.slice(0, 6).map((podcast) => (
            <Podcast
              key={podcast._id}
              podcast={podcast}
              isPlay={currentPodcastId === podcast._id}
              onPlay={() => handlePlay(podcast._id)}
              onPlayNext={() => handlePlayNext(podcast._id)}
              onPlayPrevious={() => handlePlayPrevious(podcast._id)}
            ></Podcast>
          ))}
        </div>

        <div className="text-center mt-8">
          <NavLink to="/all-podcasts">
            {" "}
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-red-800 shadow-lg shadow-red-400/50 dark:shadow-lg dark:shadow-red-800/80 font- rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-lg italic"
            >
              Explore All Podcasts
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TrendingPodcasts;