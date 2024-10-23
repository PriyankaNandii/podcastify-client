import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const AllPodCaster = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get("/podcast");
        setPodcasts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteItem = async (id) => {
    console.log("Music Id:", id);
    try {
      await axiosPublic.delete(`/podcast/${id}`);
      setPodcasts(podcasts.filter((item) => item._id !== id));
      toast.success("Delete music successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="container mx-auto p-6 bg-[#171717] rounded-xl shadow-lg min-h-screen">
      <div className="bg-gradient-to-r from-[hsl(0,95%,22%)] to-[hsl(7,81%,4%)] p-6 rounded-lg shadow-md mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">All Podcast</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleRefresh}
            className="bg-white text-[#FF6B6B] font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition duration-300"
          >
            Refresh
          </button>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-900"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="bg-black rounded-xl shadow-lg p-6">
          <h2 className="text-2xl text-center font-semibold text-red-900 mb-4">
            Podcast Music List
          </h2>
          <table className="table-auto w-full bg-black rounded-lg shadow-md">
            <thead>
              <tr className="bg-red-800 text-white">
                <th className="p-4 text-left">SL#</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Musician</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Release Date</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {podcasts.map((podcast, index) => (
                <tr
                  key={podcast._id}
                  className="border-b text-[#dededecc] hover:bg-blue-50 hover:text-black"
                >
                  <td className="p-4">{index + 1}</td>{" "}
                  {/* SL# (Serial Number) */}
                  <td className="p-4">{podcast.title}</td>
                  <td className="p-4">{podcast.musician}</td>
                  <td className="p-4">{podcast.category}</td>
                  <td className="p-4">
                    {new Date(podcast.releaseDate).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteItem(podcast._id)}
                      className="bg-red-800 text-white px-4 py-2 rounded-lg shadow transition-transform hover:scale-105"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllPodCaster;
