import { FaRegClock } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const RecentEpisodes = () => {
    return (
        <div className="my-14 max-w-7xl mx-auto">
            <h2 className="text-4xl text-white text-center"><span className="text-red-600">Recent</span> Episodes</h2>
            <p className="text-center mt-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto.</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10">
                {/* card 1 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/Z1bGSJ5/young-man-headphones-interviewing-woman-table-during-broadcasting-radio-studio.webp"
                            alt="podcast" />
                    </figure>
                    <div className=" flex flex-row gap-10 mt-5 ml-3 text-white">
                        <h1 className="flex flex-row gap-2 items-center"><FaRegClock className="text-red-600" />
                        0h 0m</h1>
                        <h1 className="flex flex-row gap-2 items-center"><FaCalendarAlt className="text-red-600" />0h 0m</h1>
                    </div>
                    <div className="card-body text-white p-3">
                        <h2 className="card-title">Episode Title</h2>
                        <h2 className="card-title">Episode Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, ea.</p>
                        <div className="card-actions justify-start">
                        <button className="btn text-xl font-normal text-white  bg-red-600 ">Listen</button>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/Z1bGSJ5/young-man-headphones-interviewing-woman-table-during-broadcasting-radio-studio.webp"
                            alt="podcast" />
                    </figure>
                    <div className=" flex flex-row gap-10 mt-5 ml-3 text-white">
                        <h1 className="flex flex-row gap-2 items-center"><FaRegClock className="text-red-600" />
                        0h 0m</h1>
                        <h1 className="flex flex-row gap-2 items-center"><FaCalendarAlt className="text-red-600" />0h 0m</h1>
                    </div>
                    <div className="card-body text-white p-3">
                        <h2 className="card-title">Episode Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, ea.</p>
                        <div className="card-actions justify-start">
                        <button className="btn text-xl font-normal text-white  bg-red-600 ">Listen</button>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/Z1bGSJ5/young-man-headphones-interviewing-woman-table-during-broadcasting-radio-studio.webp"
                            alt="podcast" />
                    </figure>
                    <div className=" flex flex-row gap-10 mt-5 ml-3 text-white">
                        <h1 className="flex flex-row gap-2 items-center"><FaRegClock className="text-red-600" />
                        0h 0m</h1>
                        <h1 className="flex flex-row gap-2 items-center"><FaCalendarAlt className="text-red-600" />0h 0m</h1>
                    </div>
                    <div className="card-body text-white p-3">
                        <h2 className="card-title">Episode Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, ea.</p>
                        <div className="card-actions justify-start">
                        <button className="btn text-xl font-normal text-white  bg-red-600 ">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center my-10"><button className=" btn text-xl font-normal text-white  bg-red-600">View All Podcasts</button></div>
        </div>
    );
};

export default RecentEpisodes;