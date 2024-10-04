import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OurMusicCollectionsDetailsPage = () => {
  const { id } = useParams(); // Get the ID from the URL params
  const [podcast, setPodcast] = useState(null); // State to hold podcast data
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage error state

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

  if (loading) return <p>Loading...</p>; // Loading state
  if (error) return <p>{error}</p>; // Error state

  // Render podcast details if data is present
  return podcast ? (
    <div className="md:px-20 px-5 bg-[#171717]">
      <section class=" ">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:-mx-6 gap-10">
            <div class="lg:w-3/4 lg:px-6">
                <img class="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src={podcast.coverImageUrl} alt=""/>

                <div>
                    <p class="mt-6 text-sm text-blue-500 italic">Category: {podcast.category}</p>

                    <h1 class="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                        {podcast.title}
                    </h1>
                    <h1 class="max-w-3xl mt-2 text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                        {podcast.description}
                    </h1>

                    <div class="flex items-center mt-6">
                        <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                        <div class="mx-4">
                            <h1 class="text-sm text-gray-700 dark:text-gray-200">{podcast.musician}</h1>
                            <p class="text-sm text-gray-500 dark:text-gray-400">{podcast.releaseDate}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 lg:w-2/4 lg:mt-0 lg:px-6">
                <div>
                    <h3 class="text-blue-500 capitalize">Design instument</h3>

                    <a href="#" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                        How to raise $100k+ by using blox ui kit on your design
                    </a>
                </div>

                <hr class="my-6 border-gray-200 dark:border-gray-700"/>

                <div>
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
                </div>
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
