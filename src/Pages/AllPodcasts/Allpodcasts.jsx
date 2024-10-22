import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import Podcast from "../../components/Home/Podcast";

const AllPodcasts = () => {
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
          All Podcasts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:px-20 px-5">
          {podcasts?.map((podcast) => (
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
      </div>
    </div>
  );
};

export default AllPodcasts;
