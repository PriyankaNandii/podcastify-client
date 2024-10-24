import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import OurMusicCollections from "./OurMusicCollections";
import OurPodcasters from "./OurPodcasters";
import Reviews from "./Reviews";
import Slider from "./Slider";

import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import Categories from "./Categories";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosPublic.get("/categories");
        setCategories(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCategories();
  }, [axiosPublic]);
  return (
    <div>
      <Helmet>
        <title>Podcastify</title>
      </Helmet>
      <Slider></Slider>
      <div className="bg-gray-800">
        <h1 className="text-4xl font-bold text-white text-center pb-4 pt-6">
          Categories
        </h1>
        <div className="grid lg:grid-cols-3 h-full md:grid-cols-3 w-full md:gap-8 space-y-8 md:space-y-0 p-6">
          {categories.map((categoriess) => (
            <Categories
              key={categoriess._id}
              categoriess={categoriess}
            ></Categories>
          ))}
        </div>
      </div>

      <AboutUs />
      <OurMusicCollections />
      <Reviews />

      <OurPodcasters />
      <Contact />
    </div>
  );
};

export default Home;
