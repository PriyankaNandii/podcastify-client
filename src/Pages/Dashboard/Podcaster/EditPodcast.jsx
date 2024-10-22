import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";

const EditPodcast = () => {
  // const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [selectedTags, setSelectedTags] = useState([]);
  const [musicData, setMusicData] = useState({});
  const [category, setCategory] = useState("");
  // const [tags, setTags] = useState(musicData.tags || []);
  const { id } = useParams();
  const tag_options = [
    { value: "Arijit Singh", label: "Arijit Singh" },
    { value: "Bengali", label: "Bengali" },
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Love Song", label: "Love Song" },
  ];

  useEffect(() => {
    axiosPublic
      .get(`/podcast/${id}`)
      .then((response) => {
        const data = response.data;
        setMusicData(data);
        const tags = JSON.parse(data.tags);
        console.log("Tags-", JSON.parse(data.tags));
        const preselectedTags = tags.map((tag) => ({ value: tag, label: tag }));
        setSelectedTags(preselectedTags);
        setCategory(data.category);
      })
      .catch((error) => {
        console.error("Failed to fetch music data:", error);
      });
  }, [id, axiosPublic]);

  const handleChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // const handleTagsChange = (selectedTags) => {
  //     setTags(selectedTags);
  // };

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

    const updatedData = {
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

    console.log(updatedData);

    axiosPublic
      .put(`/podcast/${id}`, updatedData)
      .then((response) => {
        toast.success("Podcast updated successfully!");
        navigate("/dashboard/my-music");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update music");
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
  console.log("Music Data-", musicData);
  return (
    <div className="bg-gradient-to-br from-black via-[#171717] to-[#171717] min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full p-8 bg-black shadow-4xl rounded-lg m-5">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#dededecc]">
          Edit Music
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
                  defaultValue={musicData?.title || ""}
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
                  defaultValue={musicData?.musician || ""}
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
                  defaultValue={musicData?.description || ""}
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
                  defaultValue={musicData?.coverImageUrl || ""}
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
                  defaultValue={musicData?.audioFileUrl || ""}
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
                  defaultValue={
                    musicData && musicData.releaseDate
                      ? new Date(musicData.releaseDate)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
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
                  value={category}
                  onChange={handleCategoryChange}
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
                <Select
                  styles={customStyles}
                  options={tag_options}
                  isMulti
                  onChange={handleChange}
                  value={selectedTags}
                  className="bg-[#171717] text-white rounded-lg"
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
                  defaultValue={musicData?.userEmail}
                  className="w-full p-3 bg-[#171717] text-white rounded-lg focus:ring focus:ring-red-800 border border-gray-700"
                  placeholder="Enter song URL"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2 p-3 bg-gradient-to-r from-red-800 to-black text-white text-lg font-semibold rounded-lg hover:from-red-700 hover:to-gray-800 transition duration-300"
            >
              Update Music
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPodcast;
