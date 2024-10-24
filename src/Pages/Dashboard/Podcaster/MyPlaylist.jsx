import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";
import { AuthContext } from "../../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import ReactPaginate from "react-paginate";

const MyPlaylist = () => {
  const { user } = useContext(AuthContext);
  const [playlist, setPlaylist] = useState([]);
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
          `/manage-playlist?userEmail=${user?.email}&page=${page}&limit=${itemsPerPage}`
        );
        setPlaylist(response.data.playlist);
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

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setPage(selectedPage);
  };

  const deleteItem = async (id) => {
    try {
      await axiosPublic.delete(`/playlist/${id}`);
      setPlaylist(playlist.filter((item) => item._id !== id));
      toast.success("Delete podcast from playlist successfully");
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
        <h1 className="text-3xl font-bold text-white">My Playlist</h1>
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
          <table className="table-auto w-full bg-black rounded-lg shadow-md">
            <thead>
              <tr className="bg-red-800 text-white">
                <th className="p-4 text-left">SL#</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {playlist?.map((podcast, index) => (
                <tr
                  key={podcast._id}
                  className="border-b text-[#dededecc] hover:bg-blue-50 hover:text-black"
                >
                  <td className="p-4">{index + 1 + page * itemsPerPage}</td>
                  <td className="p-4">{podcast.title}</td>
                  <td className="p-4 text-right">
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

export default MyPlaylist;
