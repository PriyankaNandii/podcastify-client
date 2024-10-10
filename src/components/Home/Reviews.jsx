// import React from "react";

// const Reviews = () => {
//   return (
//     <div>
//       <section className="relative flex flex-col md:flex-row">
//         {/* Left Section (Black and Red Backgrounds) */}
//         <div className="min-h-screen bg-black dark:bg-gray-900 w-full md:w-3/4"></div>
//         <div className="min-h-screen bg-red-800 w-full md:w-2/5"></div>

//         {/* Testimonials Section */}
//         <div className="flex flex-col justify-center w-full min-h-screen px-4 py-10 md:sticky md:top-0 md:mx-24">
//           <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
//             What our <span className="text-blue-500">customers</span> <br /> are
//             saying
//           </h1>

//           {/* Testimonial Grid */}
//           <div className="grid w-full grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
//             <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
//               <p className="leading-loose text-gray-500 dark:text-gray-400">
//                 “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
//                 ea tempora dolores qui eius pariatur odit ad voluptas iste, cum
//                 accusantium beatae tempore quasi nesciunt distinctio. ”
//               </p>

//               <div className="flex items-center mt-6 -mx-2">
//                 <img
//                   className="object-cover mx-2 rounded-full w-14 h-14"
//                   src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
//                   alt=""
//                 />
//                 <div className="mx-2">
//                   <h1 className="font-semibold text-gray-800 dark:text-white">
//                     Robbert
//                   </h1>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">
//                     CTO, Robert Consultancy
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
//               <p className="leading-loose text-gray-500 dark:text-gray-400">
//                 “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
//                 ea tempora dolores qui eius pariatur odit ad voluptas iste, cum
//                 accusantium beatae tempore quasi nesciunt distinctio. ”
//               </p>

//               <div className="flex items-center mt-6 -mx-2">
//                 <img
//                   className="object-cover mx-2 rounded-full w-14 h-14"
//                   src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
//                   alt=""
//                 />
//                 <div className="mx-2">
//                   <h1 className="font-semibold text-gray-800 dark:text-white">
//                     Jeny Doe
//                   </h1>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">
//                     CEO, Jeny Consultancy
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
//               <p className="leading-loose text-gray-500 dark:text-gray-400">
//                 “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
//                 ea tempora dolores qui eius pariatur odit ad voluptas iste, cum
//                 accusantium beatae tempore quasi nesciunt distinctio. ”
//               </p>

//               <div className="flex items-center mt-6 -mx-2">
//                 <img
//                   className="object-cover mx-2 rounded-full w-14 h-14"
//                   src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//                   alt=""
//                 />
//                 <div className="mx-2">
//                   <h1 className="font-semibold text-gray-800 dark:text-white">
//                     Mia Brown
//                   </h1>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">
//                     Marketing Manager at Stech
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800 2xl:block">
//               <p className="leading-loose text-gray-500 dark:text-gray-400">
//                 “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
//                 ea tempora dolores qui eius pariatur odit ad voluptas iste, cum
//                 accusantium beatae tempore quasi nesciunt distinctio. ”
//               </p>

//               <div className="flex items-center mt-6 -mx-2">
//                 <img
//                   className="object-cover mx-2 rounded-full w-14 h-14"
//                   src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//                   alt=""
//                 />
//                 <div className="mx-2">
//                   <h1 className="font-semibold text-gray-800 dark:text-white">
//                     Lead Designer
//                   </h1>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">
//                     Developer at Stech
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Arrows */}
//           <div className="items-center hidden mt-12 md:flex">
//             <button
//               title="left arrow"
//               className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <button
//               title="right arrow"
//               className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Reviews;

import { useState, useEffect } from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { GrEdit } from "react-icons/gr";

const Reviews = () => {
  const [direction, setDirection] = useState(getDirection());

  useEffect(() => {
    const handleResize = () => {
      setDirection(getDirection());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getDirection() {
    return window.innerWidth <= 760 ? "vertical" : "horizontal";
  }

  return (
    <div className=" w-full bg-black py-24 lg:px-20 px-5">
      <h2 className="text-center text-red-800 text-lg p-3">
        Start Listening Today
      </h2>
      <h1 className="text-center text-2xl lg:text-5xl font-bold mb-12 text-white">
        What Our Listener&apos;s Are Saying
      </h1>
      <div className="  flex gap-4 justify-end items-center p-3">
        <h1 className="text-[#dededecc] text-lg">Share Your Experience Here</h1>
        <h1 className="text-red-800 text-xl">
          <GrEdit />
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30} // Added space between slides
        direction={direction}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        onResize={(swiper) => swiper.changeDirection(getDirection())}
        className="swiper"
      >
        <div className="grid w-full grid-cols-1 gap-8 mt-8 2xl:grid-cols-3  lg:mt-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center">
          <div className="w-full p-8 bg-[#151515] rounded-md shadow-lg dark:bg-gray-800">
            <p className="leading-loose text-white dark:text-gray-400">
              &quot;I love using Podcastify for my music podcast needs!
              I&apos;ve learned so much about different music styles and the
              stories behind them. It&apos;s a fantastic resource for music
              lovers everywhere!&quot;
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-red-800 dark:text-white">
                  Robbert
                </h1>
                <span className="text-sm text-[#dededecc] dark:text-gray-400">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="w-full p-8 bg-[#151515] rounded-md shadow-lg dark:bg-gray-800">
            <p className="leading-loose text-white dark:text-gray-400">
              &quot;I had an amazing experience with Podcastify! The interface
              is user-friendly, making it easy to navigate through various
              genres and episodes. I highly recommend this platform to anyone
              looking to explore new music content!&quot;
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-red-800 dark:text-white">
                  Emily Carter
                </h1>
                <span className="text-sm text-[#dededecc] dark:text-gray-400">
                  Los Angeles, CA, USA
                </span>
              </div>
            </div>
          </div>

          <div className="w-full p-8 bg-[#151515] rounded-md shadow-lg dark:bg-gray-800">
            <p className="leading-loose text-white dark:text-gray-400">
              &quot;The quality of the podcasts is top-notch, and I appreciate
              how easy it is to subscribe and keep up with my favorite shows.
              The recommendations are spot on, and I always discover new artists
              and trends!&quot;
            </p>

            <div className="flex items-center mt-6 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-2">
                <h1 className="font-semibold text-red-800 dark:text-white">
                  Jake Thompson
                </h1>
                <span className="text-sm text-[#dededecc] dark:text-gray-400">
                  New York City, NY, USA
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center hidden mt-12 md:flex p-5">
          <button
            title="left arrow"
            className="p-2 text-red-800 hover:text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-black border-red-700 dark:hover:bg-red-800 hover:bg-red-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            title="right arrow"
            className="p-2 text-red-800 hover:text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-black border-red-700 lg:mx-6 dark:hover:bg-red-800 hover:bg-red-800
             "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Reviews;
