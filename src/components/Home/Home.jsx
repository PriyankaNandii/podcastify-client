import RecentEpisodes from "./RecentEpisodes";
import Slider from "./Slider";

const Home = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="/" className="text-white font-bold">
            Vanished
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Episodes
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            About
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Subscribe
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Home;
