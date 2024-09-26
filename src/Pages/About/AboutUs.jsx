import { HiStatusOffline } from "react-icons/hi";
import { GiOldMicrophone } from "react-icons/gi";
import { AiOutlineSound } from "react-icons/ai";
import { VscVerified } from "react-icons/vsc";
import { CgSoftwareDownload } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { MdOutlineNotInterested } from "react-icons/md";
import { useEffect } from "react";
import Aos from "aos";
const AboutUs = () => {
    useEffect(()=> {
        Aos.init({duration: 2000});
      },[])
    return (
        <div>

			<div>
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
			</div>
            {/* hero 1 */}
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between" data-aos="fade-up">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co.com/7ygTqz7/Why-choose-us.jpg" alt="" className="object-contain h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mt-20" />
		</div>
		<div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left" data-aos="fade-down">
        <h1 className="text-xl font-semibold pb-6">WHY CHOOSE US</h1>
			<h1 className="text-4xl font-bold leading-none sm:text-3xl"><span className="text-red-500">Easy & Quick</span> Way To <br /> Listen podcast 
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
			</p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded flex flex-row items-center gap-3"><HiStatusOffline className="text-5xl text-red-500" />Listen podcast on offline</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"><GiOldMicrophone  className="text-5xl text-red-500"  />
                Live Podcast Streaming</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"><AiOutlineSound className="text-5xl text-red-500" />Best Sound Quality</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"><VscVerified className="text-5xl text-red-500"/>All Types Of Podcasts</a>
			</div>
		</div>
	</div>
</section>
   {/* hero 2 */}
   <section className="dark:bg-gray-800 dark:text-gray-100 my-10">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between" >
    <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left" data-aos="zoom-in-right">
        <h1 className="text-xl font-semibold pb-6">WHY CHOOSE US</h1>
			<h1 className="text-4xl font-bold leading-none sm:text-3xl">Easy To Listen <br /><span className="text-red-500"> Anywhere</span> And <br /> <span className="text-red-500"> Anytime</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
			</p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
				<a rel="noopener noreferrer" href="#" className="px-4 py-3 text-lg font-semibold rounded flex flex-row items-center gap-3"><CgSoftwareDownload className="text-5xl text-red-500" />Offline Downloads</a>
				<a rel="noopener noreferrer" href="#" className="px-4 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"><ImMobile className="text-5xl text-red-500"  />
                Mobile-First Design</a>
				<a rel="noopener noreferrer" href="#" className="px-4 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"><MdOutlineNotInterested className="text-5xl text-red-500" />No Ads Disruptions</a>
				<a rel="noopener noreferrer" href="#" className="px-4 py-3 text-lg font-semibold border rounded dark:border-gray-800 flex flex-row items-center gap-3"><VscVerified className="text-5xl text-red-500"/>Wide Variety of Content</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-aos="zoom-in-right">
			<img src="https://i.ibb.co.com/BCz9mXt/why-us.jpg" alt="" className="object-contain h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mt-20" />
		</div>
	</div>
</section>
        </div>
    );
};

export default AboutUs;