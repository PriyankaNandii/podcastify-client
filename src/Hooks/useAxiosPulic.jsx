import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
<<<<<<< HEAD
  // baseURL: "https://podcastify-server.vercel.app"
=======
  // baseURL: "https://podcastify-server.vercel.app",
>>>>>>> 47646b6f672f042d5da7ddf0075d227908a9afc1
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
