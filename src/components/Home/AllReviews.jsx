import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPulic";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // Fetch podcasts
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axiosPublic.get("/allReviews");
        setReviews(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, [axiosPublic]);

  if (loading) {
    return <p>Loading podcasts...</p>;
  }

  return (
    <section id="testimonies" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="mb-12 space-y-5 md:mb-16 md:text-center">
          <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
            Words from Others
          </div>
          <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
            It&apos;s not just us.
          </h1>
          <p className="text-xl text-gray-100 md:text-center md:text-2xl">
            Here&apos;s what others have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reviews.map((review, index) => (
            <li key={index} className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>

                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                  <div className="flex items-center space-x-4">
                    <img
                      src={
                        review?.photoURL ||
                        "https://i.ibb.co.com/C09dnMY/default-Img-removebg-preview.png"
                      } // Assuming your review object has avatarUrl
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                      alt={review?.displayName} // Assuming your review object has a name property
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {review?.displayName || "Anonymous"}
                        {/* Assuming your review object has a name property */}
                      </h3>
                      <p className="text-gray-500 text-md">
                        {review?.email || "Email not provided"}
                        {/* Assuming your review object has a position property */}
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-300 text-md">
                    {review?.feedback || "No feedback text provided!"}
                    {/* Assuming your review object has a comment property */}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
