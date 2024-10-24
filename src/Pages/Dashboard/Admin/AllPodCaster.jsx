import useDataFetcher from "../../../Hooks/useDataFetcher";
import Loader from "../../../Layout/Loader";
import { FaTrashAlt } from "react-icons/fa";

const AllPodCaster = () => {
  const { data, isLoading } = useDataFetcher("users");

  const podcasters = data?.filter(
    (podcaster) => podcaster?.role === "podcaster"
  );

  if (isLoading) {
    return (
      <div className="flex justify-center mt-8">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn-gcpap.nitrocdn.com/JTfyFksfXBELKzRNrLoDthpJRsbOZfCt/assets/images/optimized/rev-f01517a/wiredclip.com/wp-content/uploads/2023/07/Before-and-After-Podcast-Background-Ideas-1024x585.jpg')",
        }}
      >
        <div className="container mx-auto py-10">
          <div className="overflow-x-auto bg-gray-800 shadow-md rounded-lg">
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
                {podcasters.map((podcasterr) => (
                  <tr key={podcasterr._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-300 font-bold">
                      {podcasterr.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-400">
                      {podcasterr.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-400">
                      {podcasterr.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="ml-2 px-3 py-2 text-base text-red-600 hover:text-red-500 focus:outline-none">
                        <FaTrashAlt className="inline-block mr-1 text-base" />{" "}
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPodCaster;
