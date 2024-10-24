/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Categories = ({ categoriess }) => {
  const { category, coverImageUrl } = categoriess;

  return (
    <Link to={`/categories/${category}`}>
      <div className="group cursor-pointer relative">
        <img
          src={coverImageUrl}
          alt="Image 1"
          className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 mt-4">
          <span className="text-2xl font-semibold bg-gray-800 bg-opacity-75 text-white p-2 rounded-lg">
            {category}
          </span>{" "}
          {/* Replace with the desired name or title */}
        </div>
      </div>
    </Link>
  );
};

export default Categories;
