import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import OurMusicCollections from "./OurMusicCollections";
import OurPodcasters from "./OurPodcasters";
import Reviews from "./Reviews";
import Slider from "./Slider";
import TrendingPodcasts from "./TrendingPodcasts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Podcastify</title>
      </Helmet>
      <Slider></Slider>
      <TrendingPodcasts></TrendingPodcasts>
      <AboutUs />
      <Reviews />
      <OurMusicCollections />
      <OurPodcasters />
      <Contact />
    </div>
  );
};

export default Home;
