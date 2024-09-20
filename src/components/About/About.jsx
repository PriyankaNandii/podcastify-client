import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "../../App.css";
import img from "/Screenshot.png";
import { useRef } from "react";
import MeetOurHost from "../Host/MeetOurHost";
import LatestPodcast from "../Latest/LatestPodcast";
export default function About() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="py-10">
      <div>
        <h1 className="text-6xl text-center md:text-2xl font-black">
          Podastify AI
        </h1>
        <div className="w-3/4 mx-auto pt-5">
          <h1 className="animate__animated animate__backInUp text-center">
            Elevate your podcast to new heights with Podbean AI’s cutting-edge
            features such as Noise Reduction, Intelligent Leveler, Cut Filler
            Words and Silence, Filtering & AutoEQ, Automated Title and Show
            Notes, AI Enhanced Transcripts, and Precisely Crafted Chapter
            Markers. Streamline your post-production tasks, reducing the time
            and effort required.
          </h1>
          <div className="flex items-center justify-center gap-2 border group mt-5">
            <button className="group-hover:text-[#94C62A] group-hover:font-semi-bold transition-colors p-4 font-semibold">
              Learn more about Podastify AI
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-all group-hover:translate-x-1">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4 relative">
        <img
          src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/feature/home-ai-bg@2x_resize_1x.webp"
          alt=""
        />
        <div className="absolute top-6 pl-7 flex items-center justify-between w-3/4">
          {/* <div className="bg-slate-50 p-5 shadow-md">
            <h1 className="text-xl">Episode description</h1>
            <div className="border">
              <div className="p-2">
                <h1 className="font-bold">
                  Embrancing AI tools for streamlined results
                </h1>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum placeat in beatae adipisci quia aut nihil omnis, iste
                  modi aperiam nesciunt eligendi quibusdam esse voluptates hic
                  libero ipsum distinctio. Incidunt?
                </div>
              </div>
              <div className="p-2">
                <h1 className="font-bold">
                  Time consuming for AI video making
                </h1>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum placeat in beatae adipisci quia aut nihil omnis.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 p-5">
              <button className="btn">Save as draft</button>
              <button className="btn bg-[#94C62A]">Publish now</button>
            </div>
          </div>
          <div></div> */}
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
      <div className="bg-[#1D1B25]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          fill="#fff">
          <path d="M0 0v84l500 16 500-16V0H0z" opacity=".2"></path>
          <path d="M0 0v64l500 36 500-36V0H0z" opacity=".4"></path>
          <path d="M0 0v44l500 56 500-56V0H0z" opacity=".4"></path>
          <path d="M0 0v24l500 76 500-76V0H0z" opacity=".5"></path>
          <path d="M0 0v4l500 96 500-96V0H0z"></path>
        </svg>
        <div className="pt-5 w-3/4 text-center mx-auto space-y-6 p-4 bg-[#1D1B25] text-white text-xl font-bold">
          <h1 className="text-4xl">Podcast Hosting with</h1>
          <h1 className="text-4xl">the Best Podcast Websites</h1>
          <h1>
            Every Podbean podcast hosting account comes with a free podcast
            website. The beautifullydesigned, mobile responsive templates are
            built for podcasts. Featuring cutting-edge design and robust
            features so you can easily customize the perfect website to show off
            your podcast.
          </h1>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper">
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
      <div className="my-5">
        <MeetOurHost />
      </div>
      <div className="my-5">
        <LatestPodcast />
      </div>
    </div>
  );
}
