import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const AllMusic = () => {
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
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-xl shadow-lg min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-900"
            role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl text-center font-semibold text-red-900 mb-4">
            Podcast Music List
          </h2>
          <table className="table-auto w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-red-900 text-white">
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
                  className="border-b text-gray-700 hover:bg-blue-50">
                  <td className="p-4">{index + 1}</td>{" "}
                  {/* SL# (Serial Number) */}
                  <td className="p-4">{podcast.title}</td>
                  <td className="p-4">{podcast.musician}</td>
                  <td className="p-4">{podcast.category}</td>
                  <td className="p-4">
                    {new Date(podcast.releaseDate).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow mr-2 transition-transform hover:scale-105">
                      <FaEdit />
                    </button>
                    <button className="bg-red-800 text-white px-4 py-2 rounded-lg shadow transition-transform hover:scale-105">
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

export default AllMusic;
