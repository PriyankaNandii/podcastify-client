import { HiStatusOffline } from "react-icons/hi";
import { GiOldMicrophone } from "react-icons/gi";
import { AiOutlineSound } from "react-icons/ai";
import { VscVerified } from "react-icons/vsc";
import { CgSoftwareDownload } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { MdOutlineNotInterested } from "react-icons/md";
import { useEffect } from "react";
import Aos from "aos";
import pic from "../../assets/images/aboutuspageimage.webp";
import whychooseus from "../../assets/images/whychooseus.webp";
import whychooseus2 from "../../assets/images/whychooseus2.webp";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      {/* <div>
			<div
  className="hero relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/Gdg7NzG/64aa8350638ddb5709eee657-Blog-Cover-2023-06-Podcast-Guests-X-Ways-to-Find-People-Worth-Interviewing.webp)",
	backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
	<div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-red-500 font-bold">Hello there!!!</h1>
      <p className="mb-5 text-3xl text-white">
        Learn more about podcastify by exploring the whole website.
      </p>
      <p className="text-white text-3xl">About Us / Home</p>
    </div>
  </div>
</div>
			</div> */}
      <header className="bg-[#171717] dark:bg-gray-900">
        <Helmet>
          <title>Podcastify | About us</title>
        </Helmet>
        <div className="container px-5 md:px-20 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-white dark:text-white lg:text-5xl">
                  Welcome to Our{" "}
                  <span className="text-red-800 mt-2 ">Podcastify</span>
                </h1>

                <p className="mt-3 text-[#dededecc] dark:text-gray-400 mb-5">
                  Your go-to destination for fresh beats, artist insights, and
                  all things music. Join us and vibe with the rhythm!
                </p>

                <button className="lg:px-4 px-3 lg:py-2 py-2 bg-red-800 text-white rounded-md">
                  Explore Now
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-lg rounded-2xl"
                src={pic}
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* hero 1 */}
      <section className="bg-black dark:text-gray-100 md:px-20 px-5">
        <div
          className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={whychooseus}
              alt=""
              className="object-contain h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mt-20"
            />
          </div>
          <div
            className="flex flex-col justify-center text-center rounded-sm lg:max-w-4xl xl:max-w-4xl lg:text-left"
            data-aos="fade-down"
          >
            <h1 className="text-lg font- text-red-800 pb-6">WHY CHOOSE US</h1>
            <h1 className="text-4xl font-bold leading-none sm:text-3xl text-white mb-14">
              <span className="">Easy & Quick</span> Way To Listen podcast
            </h1>
            {/* <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p> */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded flex flex-row items-center gap-3"
              >
                <HiStatusOffline className="text-5xl text-red-800" />
                <span className="text-white">Listen podcast on offline</span>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"
              >
                <GiOldMicrophone className="text-5xl text-red-800" />
                <span className="text-white"> Live Podcast Streaming</span>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"
              >
                <AiOutlineSound className="text-5xl text-red-800" />
                <span className="text-white">Best Sound Quality</span>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"
              >
                <VscVerified className="text-5xl text-red-800" />
                <span className="text-white">All Types Of Podcasts</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* hero 2 */}
      <section className="bg-[#171717] dark:text-gray-100  md:px-20 px-5">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div
            className="flex flex-col justify-center text-center rounded-sm lg:max-w-4xl xl:max-w-4xl lg:text-left"
            data-aos="zoom-in-right"
          >
            <h1 className="text-lg font-semibold pb-2 text-red-800">
              WHY CHOOSE US
            </h1>
            <h1 className="text-4xl font-bold leading-none sm:text-3xl text-white mb-4">
              Easy To Listen Anywhere And Anytime <br />
              <span className="text-red-500"> </span> <br />{" "}
              <span className="text-red-500"> </span>
            </h1>
            {/* <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p> */}
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-3 text-lg font-semibold rounded flex flex-row items-center gap-3"
              >
                <CgSoftwareDownload className="text-5xl text-red-800" />
                <span className="text-white">Offline Downloads</span>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"
              >
                <ImMobile className="text-5xl text-red-800" />
                <span className="text-white">Mobile-First Design</span>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"
              >
                <MdOutlineNotInterested className="text-5xl text-red-800" />
                <span className="text-white">No Ads Disruptions</span>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-4 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"
              >
                <VscVerified className="text-5xl text-red-800" />
                <span className="text-white">Wide Variety of Content</span>
              </a>
            </div>
          </div>
          <div
            className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            data-aos="zoom-in-right"
          >
            <img
              src={whychooseus2}
              alt=""
              className="object-contain h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mt-20"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
