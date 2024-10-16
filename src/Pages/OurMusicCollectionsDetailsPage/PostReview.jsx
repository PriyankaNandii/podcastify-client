/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PostReview = ({ podcastId }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(0);
  const [userData, setUserData] = useState(null);
  const queryClient = useQueryClient();

  const { mutateAsync: addReview } = useMutation({
    mutationFn: async (usersReview) =>
      await axiosPublic.post("/addReview", usersReview),
    onSuccess: () => {
      queryClient.invalidateQueries("allReviews");
    },
  });

  // Fetch user data
  const fetchUserData = async () => {
    try {
      const response = await axiosSecure.get(`/users/email/${user?.email}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchUserData();
    }
  }, [user?.email]);

  const handleAddPodcast = async (event) => {
    event.preventDefault();

    const form = event.target;
    const feedback = form.feedback.value;

    const usersReview = {
      feedback,
      rating,
      podcastId,
      displayName: userData?.name,
      email: userData?.email,
      photoURL:
        user?.photoURL ||
        "https://marketplace.canva.com/EAFKBYNjwjk/1/0/1600w/canva-dark-blue-and-purple-neon-podcast-nnl4QxKxhsk.jpg",
    };

    try {
      await addReview(usersReview);
      form.reset();
      setRating(0);
      toast.success("Thanks for your Feedback");

      // Close the modal after submission
      document.getElementById("my_modal_3").close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Trigger button for the modal */}
      <button
        className="btn bg-red-800 text-white mt-2"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Share your thoughts
      </button>

      {/* Modal dialog */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Close button */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-black"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>

          {/* Feedback form */}
          <form
            onSubmit={handleAddPodcast}
            className="p-6 bg-white border rounded-lg shadow-lg"
          >
            <h2 className="text-[22px] font-bold mb-6 text-red-800">
              Hey Listener! Share Your Feedback 📝
            </h2>
            {/* User displayName and photo */}
            <div className="flex items-center mb-4">
              <img
                src={
                  user?.photoURL ||
                  "https://marketplace.canva.com/EAFKBYNjwjk/1/0/1600w/canva-dark-blue-and-purple-neon-podcast-nnl4QxKxhsk.jpg"
                }
                className="w-9 h-9 rounded-full mr-3"
              />
              <span className="text-lg font-semibold text-gray-700">
                {userData?.name}
              </span>
            </div>
            <div className="mb-6 mt-6">
              <Rating
                value={rating}
                onChange={setRating}
                style={{ maxWidth: 160 }}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-base font-semibold mb-3"
                htmlFor="feedback"
              >
                Your thoughts:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="feedback"
                name="feedback"
                rows={5}
                placeholder="Enter your feedback"
              />
            </div>

            <button
              className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default PostReview;
