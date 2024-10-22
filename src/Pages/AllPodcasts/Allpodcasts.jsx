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
    <div>
      <div className="bg-[#171717] text-white py-24">
        <h2 className="text-center text-red-800 text-lg p-3">
          Start Listening Today
        </h2>
        <h1 className="text-center text-2xl lg:text-5xl font-bold mb-10">
          All Podcasts
        </h1>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          {/* Language Filter */}
          <select
            className={`p-2 text-base text-black border border-gray-300 rounded-md ${
              selectedLanguage
                ? "bg-neutral-300 text-black font-bold"
                : "bg-white"
            } hover:border-blue-500 focus:outline-none focus:ring-blue-500`}
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="">All Languages</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Bengali">Bangla</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        {/* Search */}
        <div className="mt-6 mx-auto max-w-2xl sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <label
              className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-200"
              htmlFor="search"
            >
              <input
                id="search"
                placeholder="Search a podcast"
                name="search"
                className="px-3 py-[2px] w-full text-xl rounded-md flex-1 outline-none bg-white text-black font-semibold placeholder:font-normal"
                style={{ fontStyle: "italic" }}
                defaultValue={search}
                ref={searchRef}
              />

              <button
                type="submit"
                className="mr-3 px-4 py-1 text-lg text-white font-normal rounded-md bg-blue-500"
              >
                Search
              </button>

              <button
                type="button"
                onClick={handleClearSearch}
                className="p-2 mr-2 text-gray-600 rounded-md flex items-center justify-center"
              >
                <ImCross className="text-base" />
              </button>
            </label>
          </form>
        </div>
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
