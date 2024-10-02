import { useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";
import useAxiosPublic from "../../Hooks/useAxiosPulic";

const AddMusic = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedTags, setSelectedTags] = useState([]);
  const tag_options = [
    { value: "Arijit Singh", label: "Arijit Singh" },
    { value: "Bengali", label: "Bengali" },
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Love Song", label: "Love Song" },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;
    const title = formData.title.value;
    const musician = formData.musician.value;
    const description = formData.description.value;
    const coverImage = formData.coverImage.value;
    const audioFile = formData.audioFile.value;
    const releaseDate = formData.releaseDate.value;
    const category = formData.category.value;
    const tags = selectedTags.map((tag) => tag.value);
    const data = {
      title,
      musician,
      description,
      coverImage,
      audioFile,
      releaseDate,
      category,
      tags: JSON.stringify(tags),
    };
    console.log(data);
    axiosPublic.post("/upload", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Music added successfully!");
      })
      .catch((error) => {
        console.error(error);
        console.log("Failed to upload music");
      });
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "#1E293B",
      boxShadow: "none",
      border:"none",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#1E293B",
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? "#111827" : isFocused ? "#93C5FD" : "#1E293B",
      color: isSelected ? "white" : "white",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#B45309",
      color: "white",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "white",
    }),
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-800 to-red-900 min-h-screen flex justify-center items-center">
      <div className="max-w-3xl w-full p-8 bg-gray-900 shadow-2xl rounded-lg">
        <h2 className="text-4xl font-semibold mb-6 text-center text-red-900">
          Upload New Music
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-white mb-1"
            >
              Music Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring focus:ring-blue-500 border border-gray-700"
              placeholder="Enter music title"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="musician"
              className="block text-lg font-medium text-white mb-1"
            >
              Musician Name
            </label>
            <input
              type="text"
              id="musician"
              name="musician"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring focus:ring-blue-500 border border-gray-700"
              placeholder="Enter musician name"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-white mb-1"
            >
              Music Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring focus:ring-blue-500 border border-gray-700"
              placeholder="Enter music description"
              required
            ></textarea>
          </div>

          <div className="mb-5">
            <label
              htmlFor="coverImage"
              className="block text-lg font-medium text-white mb-1"
            >
              Cover Image URL
            </label>
            <input
              type="text"
              id="coverImage"
              name="coverImage"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring focus:ring-blue-500 border border-gray-700"
              placeholder="Enter cover image URL"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="audioFile"
              className="block text-lg font-medium text-white mb-1"
            >
              Song URL
            </label>
            <input
              type="text"
              id="audioFile"
              name="audioFile"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring focus:ring-blue-500 border border-gray-700"
              placeholder="Enter song URL"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="releaseDate"
              className="block text-lg font-medium text-white mb-1"
            >
              Release Date
            </label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring focus:ring-blue-500 border border-gray-700"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="category"
              className="block text-lg font-medium text-white mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring focus:ring-blue-500 border border-gray-700"
              required
            >
              <option value="">Select category</option>
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="Jazz">Jazz</option>
              <option value="Blues">Blues</option>
              <option value="Classical">Classical</option>
              <option value="Folk">Folk</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Romantic">Romantic</option>
              <option value="Love">Love</option>
              <option value="Party">Party</option>
              <option value="Freedom">Freedom</option>
              <option value="Friendship">Friendship</option>
              <option value="Relaxing">Relaxing</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="tags"
              className="block text-lg font-medium text-white mb-1"
            >
              Tags
            </label>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-1">
              <Select
                isMulti
                options={tag_options}
                value={selectedTags}
                onChange={handleChange}
                styles={customStyles}
                placeholder="Select tags..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-red-800 to-black text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-gray-800 transition duration-300"
          >
            Upload Music
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMusic;
