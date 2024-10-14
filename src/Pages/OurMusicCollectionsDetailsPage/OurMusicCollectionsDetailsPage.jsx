import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import DiscoverMoreMusic from "./DiscoverMoreMusic";
import { MdForward10 } from "react-icons/md";
import { MdReplay10 } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";

const OurMusicCollectionsDetailsPage = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();
  const [currentPodcastId, setCurrentPodcastId] = useState(null);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const response = await fetch(`http://localhost:5000/podcast/${id}`);
        const data = await response.json();

        if (response.ok) {
          setPodcast(data); // Update state with fetched data
        } else {
          setError("Podcast not found");
        }
      } catch (error) {
        setError("Error fetching podcast details");
      } finally {
        setLoading(false); // Turn off loading spinner
      }
    };

    fetchPodcast();
  }, [id]);

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

  if (loading) return <p>Loading...</p>; // Loading state
  if (error) return <p>{error}</p>; // Error state

  // Render podcast details if data is present
  return podcast ? (
    <div className="md:px-20 px-5 bg-[#171717]">
      <section className=" ">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6 gap-10">
            <div className="lg:w-3/4 lg:px-6">
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src={podcast.coverImageUrl}
                alt=""
              />

              <div
                className="mt-6 flex items-center justify-center lg:gap-6 gap-4  text-red-800
           "
              >
                {/* <div class="audio-timing lg:text-lg text-xs">
              <span id="current-time">0:00</span> /
              <span id="total-duration"> 0:00</span>
            </div> */}
                <div className="flex lg:gap-5 gap-1">
                  <button className=" lg:text-3xl text-xl ">
                    <IoPlaySkipBackSharp />
                  </button>
                  <button className="lg:text-3xl text-xl ">
                    <MdReplay10 />
                  </button>
                  <button className=" p- lg:text-4xl text-2xl ">
                    <FaCirclePlay />
                  </button>
                  <button className=" lg:text-3xl text-xl">
                    <MdForward10 />
                  </button>
                  <button className=" lg:text-3xl text-xl">
                    <IoPlaySkipForward />
                  </button>
                </div>
                <button className=" lg:text-3xl text-xl ">
                  <FaVolumeUp />
                </button>
              </div>
              <div className="mt-5 flex justify-end items-center text-red-800 gap-4">
                <button className="text-3xl">
                  <FaShareSquare />
                </button>
                <button className="text-3xl">
                  <FiDownload />
                </button>
              </div>

              <div>
                <p className="mt-6 text-base text-red-800 italic">
                  Category: {podcast.category}
                </p>

                <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-white dark:text-white">
                  {podcast.title}
                </h1>
                <h1 className="max-w-3xl mt-2 text-base leading-tight text-[#dededecc] dark:text-white">
                  <span className="text-2xl font-bold">Lyrics -</span> &quot;{" "}
                  {podcast.description} &quot;
                </h1>

                <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />

                  <div className="flex gap-10">
                    <div className="ml-5">
                      <h1 className="text-lg text-red-800 dark:text-gray-200">
                        {podcast.musician}
                      </h1>
                      <p className="text-sm text-[#dededecc] dark:text-gray-400">
                        {podcast.tags}
                      </p>
                    </div>
                    <div>
                      {/* You can open the modal using document.getElementById('ID').showModal() method */}
                      <button
                        className="btn bg-red-800 text-white mt-2"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Share your thoughts
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-black">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-lg text-red-800">
                            Hello Listener!
                          </h3>
                          <p className="py-4">
                            <div className="rating rating-base pb-2 items-center flex justify-center">
                              <input
                                type="radio"
                                name="rating-9"
                                className="rating-hidden"
                              />
                              <input
                                type="radio"
                                name="rating-9"
                                className="mask mask-star-2"
                              />
                              <input
                                type="radio"
                                name="rating-9"
                                className="mask mask-star-2"
                                defaultChecked
                              />
                              <input
                                type="radio"
                                name="rating-9"
                                className="mask mask-star-2"
                              />
                              <input
                                type="radio"
                                name="rating-9"
                                className="mask mask-star-2"
                              />
                              <input
                                type="radio"
                                name="rating-9"
                                className="mask mask-star-2"
                              />
                            </div>
                            <label className="form-control w-full max-w-xs ">
                              <div className="label">
                                <span className="label-text">
                                  Write Review Here
                                </span>
                              </div>
                              <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                              />
                            </label>
                            <button className="btn bg-red-800 text-white mt-5">
                              Submit
                            </button>
                          </p>
                        </div>
                      </dialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-2/4 lg:mt-0 lg:px-6">
              <h1 className="text-2xl text-white  py-5">Discover More Music</h1>
              <div>
                {podcasts?.map((podcast) => (
                  <DiscoverMoreMusic
                    key={podcast._id}
                    podcast={podcast}
                    isPlay={currentPodcastId === podcast._id}
                    onPlay={() => handlePlay(podcast._id)}
                    onPlayNext={() => handlePlayNext(podcast._id)}
                    onPlayPrevious={() => handlePlayPrevious(podcast._id)}
                  ></DiscoverMoreMusic>
                ))}
              </div>

              {/* <div>
                    <h3 class="text-blue-500 capitalize">UI Resource</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Should you creat UI Product by using Blox?
                    </a>
                </div>

                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
                    <h3 class="text-blue-500 capitalize">Premium Collection</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Top 10 Blocks you can get on Blox's collection.
                    </a>
                </div>

                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
                    <h3 class="text-blue-500 capitalize">Premium kits</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        Top 10 Ui kit you can get on Blox's collection.
                    </a>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <p>No podcast details available</p>
  );
};

export default OurMusicCollectionsDetailsPage;
