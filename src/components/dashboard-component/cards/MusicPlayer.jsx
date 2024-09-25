import mike from "/music.jpg";
import { TiArrowShuffle } from "react-icons/ti";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { TbPlayerPause } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useState } from "react";

export default function MusicPlayer() {
  const [musicPlayOrPause, setMusicPlayOrPause] = useState(false);
  return (
    <div className="text-center space-y-8 p-5 rounded-xl bg-[#23232A] select-none">
      <h1 className="text-white text-lg">Now Playing</h1>
      <img src={mike} alt="" className="w-full h-36 rounded-2xl mx-auto" />
      <div className="font-bold text-center">
        <h1 className="text-white">Eventually</h1>
        <h1 className="text-[#616166]">By monir khan</h1>
      </div>
      <div className="font-black flex items-center justify-evenly text-[12px]">
        <h1 className="text-white">2:20</h1>
        <div className="h-2 bg-[#616166] rounded-lg w-40 relative">
          <div className="h-2 bg-white rounded-lg w-20 absolute top-0 left-0"></div>
        </div>
        <h1 className="text-[#616166]">5:20</h1>
      </div>
      <div className="flex items-center justify-between text-white *:text-xl *:cursor-pointer">
        <HiArrowPathRoundedSquare />
        <div className="flex items-center justify-center gap-3">
          <IoMdSkipBackward />
          <div
            onClick={() => setMusicPlayOrPause(!musicPlayOrPause)}
            className="border-2 p-2 rounded-2xl bg-white text-black">
            {musicPlayOrPause ? <TbPlayerPause /> : <TbPlayerPlayFilled />}
          </div>
          <IoMdSkipForward />
        </div>
        <TiArrowShuffle />
      </div>
    </div>
  );
}
