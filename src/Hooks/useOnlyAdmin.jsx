import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

export default function useOnlyAdmin() {
  const { user } = useAuth();
  const { email } = user || {};
  const [allUsers, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axiosSecure.get("/users");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  const u = allUsers.find((us) => us.email === email);
  const isAdmin = u?.role === "admin" ? true : false;
  return { isAdmin, loading, allUsers };
}
