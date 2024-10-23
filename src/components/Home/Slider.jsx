import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import slide1 from "../../assets/images/newslide5.webp";
import slide2 from "../../assets/images/newslide2.webp";
import slide3 from "../../assets/images/newslide3.webp";
import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <style>
        {`
          /* Style the pagination bullets */
          .swiper-pagination-bullet {
              background-color: #c92626cc; 
              opacity: 1; 
          }

          .swiper-pagination-bullet-active {
              background-color: #c92626cc; 
          }

          /* Style the navigation buttons */
          .swiper-button-next,
          .swiper-button-prev {
              color: #c92626cc; 
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
              color: #c92626cc; 
          }
        `}
      </style>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
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
      >
        <SwiperSlide>
          <div
            className="image relative justify-center items-center flex w-full"
            style={{
              backgroundImage:
                "url(https://cdn.prod.website-files.com/5fac161927bf86485ba43fd0/6710f97216a2fb06ae9f7b6b_66d71f37e7e72db476ad15d5_659a9004ea40dffd68ab2867_How%252520to%252520start%252520a%252520podcast.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "full",
            }}
          >
            <div className="overlay absolute inset-0 bg-black opacity-50"></div>
            <div className="justify-center text-center z-10 relative px-2 animate__animated animate__backInLeft animate__delay-1s">
              <div className="px-6 py-12">
                <h1 className="lg:text-5xl md:text-4xl text-xl font-bold text-white leading-snug mb-3">
                  🎧 Stream Your Favorite Tunes Anytime 🎧
                </h1>
                <p className="py-6 text-sm md:text-base text-[#dededecc] lg:px-56 px-2">
                  With unlimited streaming options, you can listen to your
                  favorite podcasts anytime, anywhere. From artist interviews to
                  album reviews, stay connected to the latest trends in the
                  industry while you relax, work, or commute.
                </p>
                <div className="flex space-x-4 justify-center mt-4">
                  <button className="lg:px-6 px-3 lg:py-4 py-2 bg-red-800 text-white rounded-md">
                    Explore Now
                  </button>
                  <NavLink to="all-podcasts">
                    {" "}
                    <button className="lg:px-6 px-3 lg:py-4 py-2 border-4 border-red-800 text-white rounded-md">
                      All Podcasts
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="image relative justify-center items-center flex w-full"
            style={{
              backgroundImage:
                "url(https://cdn.prod.website-files.com/65a6b58faca14a2d6efd5c6d/661fd89b4d3b1ec43c5835b3_cost-build-podcast-studio-1920x1120.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "full",
            }}
          >
            <div className="overlay absolute inset-0 bg-black opacity-50"></div>
            <div className="justify-center text-center z-10 relative px-2 animate__animated animate__backInLeft animate__delay-1s">
              <div className="px-6 py-12">
                <h1 className="lg:text-5xl md:text-4xl text-xl font-bold text-white leading-snug mb-3">
                  🎧 Discover Exclusive Podcasts Episode 🎧
                </h1>
                <p className="py-6 text-sm md:text-base text-[#dededecc] lg:px-56 px-2">
                  Dive into a world of rhythm and beats with our curated
                  podcasts. Whether you’re into the latest chart-toppers or
                  underground hits, our collection has something for every
                  podcast lover. Listen, explore, and get inspired!
                </p>
                <div className="flex space-x-4 justify-center mt-4">
                  <button className="lg:px-6 px-3 lg:py-4 py-2 bg-red-800 text-white rounded-md">
                    Explore Now
                  </button>
                  <NavLink to="all-podcasts">
                    {" "}
                    <button className="lg:px-6 px-3 lg:py-4 py-2 border-4 border-red-800 text-white rounded-md">
                      All Podcasts
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="image relative justify-center items-center flex w-full"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/professional-podcast-setup-with-sleek-microphone-laptop-welllit-studio-table-creating-perfect-ambience-recording-home_14117-509022.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "full",
            }}
          >
            <div className="overlay absolute inset-0 bg-black opacity-60"></div>
            <div className="justify-center text-center z-10 relative px-2 animate__animated animate__backInLeft animate__delay-1s">
              <div className="px-6 py-12">
                <h1 className="lg:text-5xl md:text-4xl text-xl font-bold text-white leading-snug mb-3">
                  🎧 Join to community of content creators & listeners 🎧
                </h1>
                <p className="py-6 text-sm md:text-base text-[#dededecc] lg:px-56 px-2">
                  Connect with fellow podcast enthusiasts, share your thoughts,
                  and enjoy personalized recommendations. Subscribe to your
                  favorite podcasts and never miss an episode. Be a part of the
                  podcast related conversation and discover hidden gems with us!
                </p>
                <div className="flex space-x-4 justify-center mt-4">
                  <button className="lg:px-6 px-3 lg:py-4 py-2 bg-red-800 text-white rounded-md">
                    Explore Now
                  </button>
                  <NavLink to="all-podcasts">
                    {" "}
                    <button className="lg:px-6 px-3 lg:py-4 py-2 border-4 border-red-800 text-white rounded-md">
                      All Podcasts
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
