import AboutUs from "./AboutUs";
import Contact from "./Contact";
import OurMusicCollections from "./OurMusicCollections";
import OurPodcasters from "./OurPodcasters";
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
           <OurPodcasters />
           <Contact />
        </div>
    
  );
};

export default Home;
