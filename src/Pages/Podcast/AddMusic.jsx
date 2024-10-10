import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";
import useAxiosPublic from "../../Hooks/useAxiosPulic";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const AddMusic = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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
    const userEmail = formData.userEmail.value;
    const tags = selectedTags.map((tag) => tag.value);
    const data = {
      title,
      musician,
      description,
      coverImage,
      audioFile,
      releaseDate,
      category,
      userEmail,
      tags: JSON.stringify(tags),
    };
    // console.log(data);
    axiosPublic.post("/upload", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Music added successfully!");
        navigate('/dashboard/my-music');
      })
      .catch((error) => {
        console.error(error);
        console.log("Failed to upload music");
      });
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "##171717",
      boxShadow: "none",
      border: "none",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#171717",
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? "#111827" : isFocused ? "#1E40AF" : "",
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
    <div className="bg-gradient-to-br from-black via-[#171717] to-[#171717] min-h-screen flex justify-center items-center ">
      <div className="max-w-2xl w-full p-8 bg-black shadow-4xl rounded-lg m-5 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#dededecc]">
          Upload New Music
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* First Column */}
            <div>
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
                  className="w-full p-3 bg-[#171717] text-white rounded-lg focus:ring focus:ring-red-800 border border-gray-700"
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
                  className="w-full p-3 bg-[#171717] text-white rounded-lg focus:ring focus:ring-red-800 border border-gray-700"
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
                  className="w-full p-3 bg-[#171717] text-white rounded-lg focus:ring focus:ring-red-800 border border-gray-700"
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
                  className="w-full p-3 bg-[#171717] text-white rounded-lg focus:ring focus:ring-red-500 border border-gray-700"
                  placeholder="Enter cover image URL"
                  required
                />
              </div>
            </div>

            {/* Second Column */}
            <div>
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
                  className="w-full p-3 bg-[#171717] text-white rounded-lg focus:ring focus:ring-red-800 border border-gray-700"
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
                  className="w-full p-3 bg-[#171717] text-white rounded-lg focus:ring focus:ring-red-800 border border-gray-700"
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
                  className="w-full p-3 bg-[#171717] text-white rounded-lg focus:ring focus:ring-red-800 border border-gray-700"
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

              <div className="mb-5 ">
                <label
                  htmlFor="tags"
                  className="block text-lg font-medium text-white mb-1"
                >
                  Tags
                </label>
                <div className="bg-[#171717] border border-gray-700 rounded-lg p-1">
                  <Select
                    isMulti
                    options={tag_options}
                    value={selectedTags}
                    onChange={handleChange}
                    styles={customStyles}
                    placeholder="Select tags..."
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="userEmail"
                    className="block text-lg font-medium text-white mb-1"
                  >
                    User Email
                  </label>
                  <input
                    type="text"
                    id="userEmail"
                    name="userEmail"
                    defaultValue={user?.email}
                    className="w-full p-3 bg-[#171717] text-white rounded-lg focus:ring focus:ring-red-800 border border-gray-700"
                    placeholder="Enter song URL"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Centered Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2 p-3 bg-gradient-to-r from-red-800 to-black text-white text-lg font-semibold rounded-lg hover:from-red-700 hover:to-gray-800 transition duration-300"
            >
              Upload Music
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AddMusic;
