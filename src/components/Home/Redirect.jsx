import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import Podcast from "./Podcast";

const Redirect = () => {
  const { category } = useParams();
  const [currentPodcastId, setCurrentPodcastId] = useState(null);
  const [podcasts, setPodcasts] = useState([]);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosPublic.get(`/categories/${category}`); // Update with your backend URL
        setPodcasts(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCategories();
  }, [axiosPublic, category]);

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

  return (
    <div className="bg-[#171717] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-20 pt-8 pb-8 text-white">
      {podcasts?.map((podcast) => (
        <Podcast
          key={podcast._id}
          podcast={podcast}
          isPlay={currentPodcastId === podcast._id}
          onPlay={() => handlePlay(podcast._id)}
          onPlayNext={() => handlePlayNext(podcast._id)}
          onPlayPrevious={() => handlePlayPrevious(podcast._id)}
        />
      ))}
    </div>
  );
};

export default Redirect;
