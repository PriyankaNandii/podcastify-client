import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import slide1 from "../../assets/images/newslide5.webp";
import slide2 from "../../assets/images/newslide2.webp";
import slide3 from "../../assets/images/newslide3.webp";

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
              backgroundImage: `url(${slide1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "full"
            }}
          >
            <div className="overlay absolute inset-0 bg-black opacity-60"></div>
            <div className="justify-center text-center z-10 relative px-2 animate__animated animate__backInLeft animate__delay-1s">
              <div className="px-6 py-12">
                <h1 className="md:text-6xl text-xl font-bold text-white leading-snug mb-3">
                  {/* 🎶 Discover Exclusive Music Podcasts 🎶 */}
                  🎧 Discover Exclusive Music Podcasts 🎧
                </h1>
                <p className="py-6 text-xs md:text-lg text-[#dededecc] lg:px-56 px-2">
                  Dive into a world of rhythm and beats with our curated music
                  podcasts. Whether you’re into the latest chart-toppers or
                  underground hits, our collection has something for every music
                  lover. Listen, explore, and get inspired!
                </p>
                <div className="flex space-x-4 justify-center mt-4">
                  <button className="lg:px-6 px-3 lg:py-4 py-2 bg-red-800 text-white rounded-md">
                    Explore Now
                  </button>
                  <button className="lg:px-6 px-3 lg:py-4 py-2 border-4 border-red-800 text-white rounded-md">
                    All Music
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="image relative justify-center items-center flex w-full"
            style={{
              backgroundImage: `url(${slide2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "full"
            }}
          >
            <div className="overlay absolute inset-0 bg-black opacity-60"></div>
            <div className="justify-center text-center z-10 relative px-2 animate__animated animate__backInLeft animate__delay-1s">
              <div className="px-6 py-12">
                <h1 className="lg:text-6xl text-xl font-bold text-white leading-snug mb-3">
                  🎧 Stream Your Favorite Tunes Anytime 🎧
                </h1>
                <p className="py-6 text-xs lg:text-lg text-[#dededecc] lg:px-56 px-2">
                  With unlimited streaming options, you can listen to your
                  favorite music podcasts anytime, anywhere. From artist
                  interviews to album reviews, stay connected to the latest trends
                  in the music industry while you relax, work, or commute.
                </p>
                <div className="flex space-x-4 justify-center mt-4">
                  <button className="lg:px-6 px-3 lg:py-4 py-2 bg-red-800 text-white rounded-md">
                    Explore Now
                  </button>
                  <button className="lg:px-6 px-3 lg:py-4 py-2 border-4 border-red-800 text-white rounded-md">
                    All Music
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="image relative justify-center items-center flex w-full"
            style={{
              backgroundImage: `url(${slide3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "full"
            }}
          >
            <div className="overlay absolute inset-0 bg-black opacity-60"></div>
            <div className="justify-center text-center z-10 relative px-2 animate__animated animate__backInLeft animate__delay-1s">
              <div className="px-6 py-12">
                <h1 className="md:text-6xl text-xl font-bold text-white leading-snug mb-3">
                  {/* 🔥 Join a Thriving Community of Music Fans 🔥 */}
                  🎧 Join a Thriving Community of Music Fans 🎧
                </h1>
                <p className="py-6 text-xs md:text-lg text-[#dededecc] lg:px-56 px-2">
                  Connect with fellow music enthusiasts, share your thoughts, and
                  enjoy personalized recommendations. Subscribe to your favorite
                  podcasts and never miss an episode. Be a part of the music
                  conversation and discover hidden gems with us!
                </p>
                <div className="flex space-x-4 justify-center mt-4">
                  <button className="lg:px-6 px-3 lg:py-4 py-2 bg-red-800 text-white rounded-md">
                    Explore Now
                  </button>
                  <button className="lg:px-6 px-3 lg:py-4 py-2 border-4 border-red-800 text-white rounded-md">
                    All Music
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
