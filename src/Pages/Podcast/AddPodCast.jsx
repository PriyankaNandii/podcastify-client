import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const AddPodCast = () => {
    const [tags, setTags] = useState([]);
    const [input, setInput] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = e.target;
        const title = formData.title.value;
        const host = formData.host.value;
        const guest = formData.guest.value;
        const description = formData.description.value;
        const releaseDate = formData.releaseDate.value;
        const category = formData.category.value;
        const data = {title, host, guest, description, releaseDate, category, tags, coverImage, audioFile};
        

        console.log(data);

        // Send POST request to backend
        axios.post('https://podcast-zeta.vercel.app/upload', data, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(response => {
            console.log(response.data);
            toast.success('Podcast added successfully!');
        })
        .catch(error => {
            console.error(error);
            console.log('Failed to upload podcast');
        });
    };

    // // Handle input changes
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    // Handle key press (space or enter to add tag)
    const handleKeyDown = (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (input.trim() !== '') {
                setTags([...tags, input.trim()]);
                setInput('');
            }
        }
    };

    // Remove a tag
    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg mt-10 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                Upload New Podcast
            </h2>

            <form onSubmit={handleSubmit}>
                {/* Podcast Title */}
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Podcast Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full mt-2 p-3 border border-gray-300 bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                        placeholder="Enter podcast title"
                        required
                    />
                </div>

                {/* Host Name */}
                <div className="mb-4">
                    <label
                        htmlFor="host"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Host Name
                    </label>
                    <input
                        type="text"
                        id="host"
                        name="host"
                        className="w-full mt-2 p-3 border border-gray-300 bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                        placeholder="Enter host name"
                        required
                    />
                </div>

                {/* Guest Name */}
                <div className="mb-4">
                    <label
                        htmlFor="guest"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Guest Name(s)
                    </label>
                    <input
                        type="text"
                        id="guest"
                        name="guest"
                        className="w-full mt-2 p-3 border border-gray-300 bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                        placeholder="Enter guest name(s)"
                    />
                </div>

                {/* Podcast Description */}
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Podcast Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows="5"
                        className="w-full mt-2 p-3 border border-gray-300 bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                        placeholder="Enter podcast description"
                        required
                    ></textarea>
                </div>

                {/* Podcast Cover Image */}
                <div className="mb-4">
                    <label
                        htmlFor="coverImage"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Cover Image
                    </label>
                    <input
                        type="file"
                        id="coverImage"
                        name="coverImage"
                        className="w-full mt-2 p-2 border border-gray-300 bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                        onChange={(e) => setCoverImage(e.target.files[0])}
                        required
                    />
                </div>

                {/* Podcast Audio File */}
                <div className="mb-4">
                    <label
                        htmlFor="audioFile"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Podcast Audio File
                    </label>
                    <input
                        type="file"
                        id="audioFile"
                        name="audioFile"
                        accept="audio/*"
                        className="w-full mt-2 p-2 border border-gray-300 bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                        onChange={(e) => setAudioFile(e.target.files[0])}
                        required
                    />
                </div>

                {/* Release Date */}
                <div className="mb-4">
                    <label
                        htmlFor="releaseDate"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Release Date
                    </label>
                    <input
                        type="date"
                        id="releaseDate"
                        name="releaseDate"
                        className="w-full mt-2 p-3 border border-gray-300 bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                        required
                    />
                </div>

                {/* Podcast Category */}
                <div className="mb-4">
                    <label
                        htmlFor="category"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Podcast Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="w-full mt-2 p-3 border border-gray-300 bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400"
                        required
                    >
                        <option value="">Select category</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                        <option value="health">Health</option>
                        <option value="education">Education</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                </div>

                {/* Tags */}
                <div className="mb-4">
                    <label
                        htmlFor="tags"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Tags
                    </label>

                    <div className="w-full mt-2 p-3 border border-gray-300 bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="flex items-center bg-indigo-200 text-indigo-800 rounded-full px-3 py-1 text-sm font-medium"
                                >
                                    {tag}
                                    <button
                                        type="button"
                                        className="ml-2 text-red-500"
                                        onClick={() => removeTag(index)}
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                className="border-none bg-gray-300 outline-none flex-grow focus:ring-0"
                                placeholder="Enter tags and press space/enter"
                                value={input}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-indigo-600 text-white text-lg font-semibold rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                        Upload Podcast
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPodCast;