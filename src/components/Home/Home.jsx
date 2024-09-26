import AboutUs from "./AboutUs";
import Contact from "./Contact";
import OurMusicCollections from "./OurMusicCollections";
import RecentEpisodes from "./RecentEpisodes";
import Reviews from "./Reviews";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <RecentEpisodes></RecentEpisodes>
           <AboutUs />
           <Reviews />
           <OurMusicCollections />
           <Contact />
        </div>
    );
};

export default Home;