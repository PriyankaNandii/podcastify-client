import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";
import ReactPaginate from "react-paginate";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyMusic = () => {
  const { user } = useContext(AuthContext);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get(
          `/manage-podcast?userEmail=${user?.email}&page=${page}&limit=${itemsPerPage}`
        );
        setPodcasts(response.data.podcasts);
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [page, user?.email]);

  console.log(podcasts, "form music");

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setPage(selectedPage);
  };

  const deleteItem = async (id) => {
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
    <div className="container mx-auto p-6 bg-[#171717] shadow-lg min-h-screen">
      <div className="bg-gradient-to-r from-[hsl(0,95%,22%)] to-[hsl(7,81%,4%)] p-6 rounded-lg shadow-md mb-6 flex items-center justify-between">
        <h1 className="md:text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
          My Music List
        </h1>
        <div className="flex items-center space-x-4">
          <button className="btn btn-accent">
            <Link to="/dashboard/release-new-music">Add Music</Link>
          </button>
          <button onClick={handleRefresh} className="btn btn-primary">
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
        <div className="bg-black rounded-xl shadow-lg p-6 overflow-x-auto">
          <table className="table table-auto w-full bg-black rounded-lg shadow-md">
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
                  <td className="p-4">{index + 1 + page * itemsPerPage}</td>
                  <td className="p-4">{podcast.title}</td>
                  <td className="p-4">{podcast.musician}</td>
                  <td className="p-4">{podcast.category}</td>
                  <td className="p-4">
                    {new Date(podcast.releaseDate).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow mr-2 transition-transform hover:scale-105">
                      <Link to={`/dashboard/my-music/edit/${podcast._id}`}>
                        <FaEdit />
                      </Link>
                    </button>
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

          {/* Pagination Component */}
          <div className="mt-6 flex justify-center">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"flex items-center space-x-2"}
              pageClassName={"bg-red-900 px-3 py-2 text-white rounded"}
              pageLinkClassName={"text-white"}
              previousClassName={"px-3 py-2 bg-red-900 text-white rounded"}
              nextClassName={"px-3 py-2 bg-red-900 text-white rounded"}
              activeClassName={"bg-green-700 text-white px-3 py-2 rounded"}
              forcePage={page}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyMusic;
