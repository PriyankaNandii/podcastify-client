import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../../Layout/Loader";

export default function NotificationDetails() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["notificationDetails", id],
    queryFn: async (id) => {
      const response = await axiosPublic(`/announcements/${id}`);

      return response.data;
    },
    enabled: !!id,
  });
  if (isLoading) {
    return <Loader />;
  }

  return <div>{id} Number</div>;
}
