import React from "react";
import { Link } from "react-router-dom";

const DiscoverMoreMusic = ({ podcast }) => {
  const { _id, title, releaseDate, coverImageUrl, audioFileUrl } = podcast;
  return (
    <div>
      <div>
        <Link
          to={`/podcast/${_id}`}
          className="text-red-800 text-xl capitalize hover:text-blue-400"
        >
          {podcast.title}
        </Link>

        <h1 className="block mt-2 font-medium text-[#dededecc] hover:underline hover:text-gray-500 dark:text-gray-400 ">
          {podcast.tags}
        </h1>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
      </div>
    </div>
  );
};

export default DiscoverMoreMusic;
