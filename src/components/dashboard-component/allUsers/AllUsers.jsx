import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import useCheckUserRole from "../../../Hooks/useCheckUserRole";

export default function AllUsers() {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axiosSecure.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1E3A8A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: "bg-gray-800 border-gray-600",
        title: "text-gray-300",
        content: "text-gray-400",
        confirmButton: "bg-blue-950 text-gray-300",
        cancelButton: "bg-red-600 text-gray-300",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            setUsers((prevUsers) =>
              prevUsers.filter((user) => user._id !== id)
            );
            Swal.fire({
              title: "Deleted!",
              text: "The user has been deleted successfully.",
              icon: "success",
              customClass: {
                popup: "bg-gray-800 border-gray-600",
                title: "text-gray-300",
                content: "text-gray-400",
              },
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn-gcpap.nitrocdn.com/JTfyFksfXBELKzRNrLoDthpJRsbOZfCt/assets/images/optimized/rev-f01517a/wiredclip.com/wp-content/uploads/2023/07/Before-and-After-Podcast-Background-Ideas-1024x585.jpg')",
        }}>
        <div className="container mx-auto py-10">
          <div className="overflow-x-auto bg-gray-800 shadow-md rounded-lg">
            {loading ? (
              <div className="flex justify-center items-center py-10">
                <ClipLoader color="#1E3A8A" loading={loading} size={70} />
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-950">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y divide-gray-700">
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-300 font-bold">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-400">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-400">
                        {user.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="ml-2 px-3 py-2 text-base text-red-600 hover:text-red-500 focus:outline-none"
                          onClick={() => handleDelete(user._id)}>
                          <FaTrashAlt className="inline-block mr-1 text-base" />{" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
