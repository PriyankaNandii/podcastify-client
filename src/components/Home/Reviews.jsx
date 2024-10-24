import { useState, useEffect } from "react";

import useAxiosPublic from "../../Hooks/useAxiosPulic";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // State for modal
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
    <div className="w-full bg-[#17191e] py-24 lg:px-20 px-5">
      <h2 className="text-center text-red-800 text-lg p-3">
        Start Listening Today
      </h2>
      <h1 className="text-center text-2xl lg:text-5xl font-bold mb-12 text-white">
        What Our Listener&apos;s Are Saying
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {reviews.slice(0, 3).map((review, index) => (
          <li key={index} className="text-sm leading-6">
            <div className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>

              <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4">
                  <img
                    src={
                      review?.photoURL ||
                      "https://i.ibb.co.com/C09dnMY/default-Img-removebg-preview.png"
                    }
                    className="w-12 h-12 bg-center bg-cover border rounded-full"
                    alt={review?.displayName}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {review?.displayName || "Anonymous"}
                    </h3>
                    <p className="text-gray-500 text-md">
                      {review?.email || "Email not provided"}
                    </p>
                  </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">
                  {review?.feedback || "No feedback text provided!"}
                </p>
              </div>
            </div>
          </li>
        ))}
      </div>

      <button
        className="mt-5 ml-1 text-xl font-bold italic text-red-800 hover:underline focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        See All Reviews
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-[#171a1e] p-6 rounded-lg shadow-lg max-w-md w-full transition-transform transform scale-105">
            <h2 className="text-xl font-bold mb-4 text-white">All Reviews</h2>
            <div className="max-h-60 overflow-y-auto space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-slate-900 p-4 rounded-lg shadow-md"
                >
                  <p className="text-gray-200 mb-2">
                    {review?.feedback || "No feedback text provided!"}
                  </p>
                  <div className="flex items-center">
                    <img
                      className="object-cover rounded-full w-12 h-12 border-2 border-red-800"
                      src={
                        review?.photoURL ||
                        "https://i.ibb.co.com/C09dnMY/default-Img-removebg-preview.png"
                      }
                      alt={review?.displayName}
                    />
                    <div className="ml-3">
                      <h1 className="font-semibold text-red-800">
                        {review?.displayName || "Anonymous"}
                      </h1>
                      <span className="text-sm text-gray-400">
                        {review?.email || "Email not provided"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                className="mt-4 italic text-lg font-bold text-gray-400 hover:underline focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
