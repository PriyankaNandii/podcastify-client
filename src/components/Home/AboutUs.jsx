import pic from "../../assets/images/aboutus-home.webp";
const AboutUs = () => {
  return (
    <div className="bg-[#1c171e]  flex py-24 items-center justify-center">
      <div className="max-w-full px-5  mx-auto lg:px-20 flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Image Section */}
        <div className="w-full lg:w-2/6">
          <img
            src={pic}
            alt="Mahalia Princeton"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-4/6 text-white mt-8 lg:mt-0 lg:ml-8">
          <h2 className="text-red-800 text-2xl lg:text-3xl font-semibold">
            About Us
          </h2>
          <h1 className="text-2xl lg:text-5xl font-bold mt-2">
            We've Created This Podcast Based on True Stories.
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            I'm an artist, writer, and podcast host. My background as a reporter
            helped me plan and create this award-winning podcast.
          </p>
          <button className="bg-red-800 text-white font-semibold lg:px-6 px-3 lg:py-4 py-2 rounded-md mt-6">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
