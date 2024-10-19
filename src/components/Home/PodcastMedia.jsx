import React from 'react';

const PodcastMedia = () => {
  return (
   <div className=''>
     <div className="bg-black flex justify-center items-center py-32">
      <div className="flex space-x-10 bg-[#171717] w-full items-center justify-center p-4">
        {/* Google Podcasts */}
        <div className="text-center text- flex">
          <img
            className="w-12 h-12 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Google_Podcasts_icon.svg/1200px-Google_Podcasts_icon.svg.png"
            alt="Google Podcasts"
          />
          <div className="mt-2 text-white">Google Podcasts</div>
        </div>

        {/* Apple Podcasts */}
        <div className="text-center text-white">
          <img
            className="w-12 h-12 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Apple_Podcasts_logo.svg/1024px-Apple_Podcasts_logo.svg.png"
            alt="Apple Podcasts"
          />
          <div className="mt-2 text-base">Apple Podcasts</div>
        </div>

        {/* Spotify */}
        <div className="text-center text-white">
          <img
            className="w-12 h-12 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Spotify"
          />
          <div className="mt-2 text-base">Spotify</div>
        </div>

        {/* RSS */}
        <div className="text-center text-white">
          <img
            className="w-12 h-12 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Feed-icon.svg/1200px-Feed-icon.svg.png"
            alt="RSS"
          />
          <div className="mt-2 text-base">RSS</div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default PodcastMedia;
