import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { ClipLoader } from "react-spinners";
import { FaTrashAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import Swal from "sweetalert2";
import { ImCross } from "react-icons/im";

const PodcasterRequest = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch users data
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axiosSecure.get("/request-podcaster");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [axiosSecure]);

    const handleAcceptPodcaster = async (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user a Podcaster!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1E3A8A",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Do it!",
            customClass: {
                popup: "bg-gray-800 border-gray-600",
                title: "text-gray-300",
                content: "text-gray-400",
                confirmButton: "bg-blue-950 text-gray-300",
                cancelButton: "bg-red-600 text-gray-300",
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                const updatedData = {
                    flag: 'accept',
                    role: 'podcaster'
                };
                try {
                    const response = await axiosSecure.put(`/users/request/${email}`, updatedData);
                    if (response.status === 200) {
                        Swal.fire({
                            title: "Profile Updated ✅",
                            text: "You're all set! Your profile looks great 👏",
                            imageWidth: 80,
                            imageHeight: 80,
                            confirmButtonText: "Yay! 🤩",
                            timer: 3000,
                            timerProgressBar: true,
                            background: "#E2E8F0",
                            customClass: {
                                confirmButton: "custom-button",
                            },
                        }).then(() => {
                            fetchUsers();
                        });
                    }
                } catch (error) {
                    console.error("Error updating profile:", error);
                }
            }
        });
    };

    const handleDeclinePodcaster = async (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to decline this user a Podcaster!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1E3A8A",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Do it!",
            customClass: {
                popup: "bg-gray-800 border-gray-600",
                title: "text-gray-300",
                content: "text-gray-400",
                confirmButton: "bg-blue-950 text-gray-300",
                cancelButton: "bg-red-600 text-gray-300",
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                const updatedData = {
                    flag: 'decline',
                    role: 'user'
                };
                try {
                    const response = await axiosSecure.put(`/users/request/${email}`, updatedData);
                    if (response.status === 200) {
                        Swal.fire({
                            title: "Profile Updated ✅",
                            text: "You're all set! Your profile looks great 👏",
                            imageWidth: 80,
                            imageHeight: 80,
                            confirmButtonText: "Yay! 🤩",
                            timer: 3000,
                            timerProgressBar: true,
                            background: "#E2E8F0",
                            customClass: {
                                confirmButton: "custom-button",
                            },
                        }).then(() => {
                            fetchUsers();
                        });
                    }
                } catch (error) {
                    console.error("Error updating profile:", error);
                }
            }
        });
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://cdn-gcpap.nitrocdn.com/JTfyFksfXBELKzRNrLoDthpJRsbOZfCt/assets/images/optimized/rev-f01517a/wiredclip.com/wp-content/uploads/2023/07/Before-and-After-Podcast-Background-Ideas-1024x585.jpg')",
            }}
        >
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
                                        <td className="px-6 py-4 whitespace-nowrap text-base font-bold">
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
                                                onClick={() => handleAcceptPodcaster(user.email)}
                                            >
                                                <SiTicktick className="inline-block mr-1 text-2xl text-green-600" />
                                            </button>
                                            <button
                                                className="ml-2 px-3 py-2 text-base text-red-600 hover:text-red-500 focus:outline-none"
                                                onClick={() => handleDeclinePodcaster(user.email)}
                                            >
                                                <ImCross className="inline-block mr-1 text-2xl text-red-600" />
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
    );
};

export default PodcasterRequest;
