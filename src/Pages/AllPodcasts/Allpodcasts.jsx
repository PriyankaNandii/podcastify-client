import { useEffect, useRef, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import Podcast from "../../components/Home/Podcast";
import { ImCross } from "react-icons/im";
import Loader from "../../Layout/Loader";

const AllPodcasts = () => {
  const axiosPublic = useAxiosPublic();
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPodcastId, setCurrentPodcastId] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const searchRef = useRef(null);

  // Fetch podcasts
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axiosPublic.get("/podcast", {
          params: {
            search,
            category: selectedCategory,
            language: selectedLanguage,
          },
        });
        setPodcasts(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, [axiosPublic, search, selectedCategory, selectedLanguage]);

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

  const handleClearSearch = () => {
    setSearch("");
    if (searchRef.current) searchRef.current.value = ""; // Clear the input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchRef.current) {
      setSearch(searchRef.current.value); // Set search state from ref value
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center mt-28">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#141c4c] via-[#18171E] to-[#1b1f24] text-[#a3a3a3] py-24">
      <h2 className="text-center text-red-800 text-lg p-3">
        Start Listening Today
      </h2>
      <h1 className="text-center text-2xl lg:text-5xl font-bold mb-10 text-white">
        All Podcasts
      </h1>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row gap-4 w-9/12 mx-auto justify-start items-center mb-8">
        {/* Category Filter */}
        <select
          className={`p-3 text-base text-white border border-gray-600 rounded-lg ${
            selectedCategory
              ? "bg-[#2d2d2d] text-white font-bold"
              : "bg-[#171717] text-gray-400"
          } hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200`}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Love">Love</option>
          <option value="Sad">Sad</option>
          <option value="Happy">Happy</option>
          <option value="Romantic">Romantic</option>
          <option value="Relaxing">Relaxing</option>
          <option value="Party">Party</option>
        </select>

        {/* Language Filter */}
        <select
          className={`p-3 text-base text-white border border-gray-600 rounded-lg ${
            selectedLanguage
              ? "bg-[#2d2d2d] text-white font-bold"
              : "bg-[#171717] text-gray-400"
          } hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200`}
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Bengali">Bangla</option>
        </select>

        {/* Search Bar */}
        <div className="w-full md:w-auto flex-1">
          <form onSubmit={handleSubmit}>
            <label
              className="relative bg-[#171717] flex items-center justify-between border border-gray-700 py-1 px-4 rounded-2xl shadow-lg focus-within:ring-1 w-10/12  transition-all duration-200"
              htmlFor="search"
            >
              <input
                id="search"
                placeholder="Search a podcast"
                name="search"
                className="w-full text-lg font-semibold placeholder:font-normal px-4 py-2 rounded-md focus:outline-none bg-[#2d2d2d] text-white placeholder-gray-400"
                style={{ fontStyle: "italic" }}
                defaultValue={search}
                ref={searchRef}
              />

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-6 py-1 ml-6 text-white font-semibold rounded-md text-base bg-blue-800 hover:bg-blue-900 transition-colors duration-200"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <ImCross className="text-lg" />
                </button>
              </div>
            </label>
          </form>
        </div>
      </div>

      {/* Podcasts List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-20 mt-8">
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
    </div>
  );
};

export default AllPodcasts;
