import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Podcastify</title>
      </Helmet>
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
