import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPulic";

export default function useDataFetcher(url) {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading } = useQuery({
    queryKey: [`${url}`],
    queryFn: async () => {
      const res = await axiosPublic.get(`/${url}`);
      return res.data;
    },
  });

  return { data, isLoading };
}
