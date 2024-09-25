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
      <div className="flex items-center justify-center py-4 relative">
        <img
          src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/feature/home-ai-bg@2x_resize_1x.webp"
          alt=""
        />
        <div className="absolute top-6 pl-7 flex items-center justify-between w-3/4">
          <img
            src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/feature/home-ai-transcription@2x_resize_1x.webp"
            alt=""
            className="animate__animated animate__backInLeft"
          />
          <img
            src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/feature/home-aipreview@2x_resize_1x.webp"
            alt=""
            className="animate__animated animate__backInRight"
          />
        </div>
      </div>
      <div className="my-10">
        <MeetOurHost />
      </div>
      </div>
      </div>
  );
}
