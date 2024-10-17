import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  //baseURL: "https://podcastify-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
