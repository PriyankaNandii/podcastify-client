import "animate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "../../App.css";
import MeetOurHost from "./MeetOurHost";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";

export default function About() {
  return (
    <div>
      <div className="my-10">
        <AboutUs></AboutUs>
      </div>
      <div className="my-10">
        <Testimonial></Testimonial>
      </div>
      <div className="my-10">
        <MeetOurHost />
      </div>
      </div>
  );
}
