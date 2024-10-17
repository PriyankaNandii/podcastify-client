import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

export default function useCheckUserRole() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { email } = user || {};

  const checkUserRole = async () => {
    const response = await axiosSecure.get(`/users/email/${email}`);
    return response.data;
  };

  const { isLoading, data, error } = useQuery({
    queryKey: ["userRole", email],
    queryFn: checkUserRole,
  });

  let role = "";

  switch (data?.role) {
    case "admin":
      role = "admin";
      break;
    case "podcaster":
      role = "podcaster";
      break;
    case "user":
      role = "user";
      break;
    default:
      break;
  }
  return { role, isLoading, error, data };
}
