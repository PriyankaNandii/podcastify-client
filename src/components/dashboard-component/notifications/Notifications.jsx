import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";
import { Button, Heading } from "@chakra-ui/react";
import Loader from "../../../Layout/Loader";
import { Link } from "react-router-dom";

export default function Notifications() {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading } = useQuery({
    queryKey: ["notification"],
    queryFn: async () => {
      const response = await axiosPublic("/announcements");
      return response.data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-5 h-full min-h-screen bg-gradient-to-r to-[#0f172a] from-[#0e1f49] text-white">
      <h1 className="text-lg md:text-2xl tec">Notification</h1>
      <div className="space-y-10 w-full md:w-3/4 mx-auto  p-3 md:p-10">
        {data.map((item) => (
          <div key={item._id}>
            <h3 className="text-lg text-white">{item.title}</h3>
            <h1>Admin mentioned {item.email}</h1>
            <h1>{item.description.slice(0, 15)}...</h1>
            <Link
              className="btn btn-xs mt-3 btn-accent"
              to={`/dashboard/notification/${item._id}/details`}>
              View details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
