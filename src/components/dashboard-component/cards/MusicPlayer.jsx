import { TiArrowShuffle } from "react-icons/ti";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { TbPlayerPause } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPulic";

export default function MusicPlayer() {
  const [trackList, setTrackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get("/podcast");
        setTrackList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosPublic]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrackIndex, isPlaying]);

  const playNextTrack = () => {
    setIsPlaying(false);
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === trackList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const playPreviousTrack = () => {
    setIsPlaying(false);
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? trackList.length - 1 : prevIndex - 1
    );
  };

  const playAudio = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pauseAudio = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };
  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  if (loading) {
    return <h1 className="text-center text-sm">Please wait...</h1>;
  }
  return (
    <div className="text-center space-y-8 p-4 rounded-xl bg-[#23232A] select-none">
      <h1 className="text-white text-lg">Now Playing</h1>
      <img
        src={trackList[currentTrackIndex]?.coverImageUrl}
        alt=""
        className="w-full h-36 rounded-2xl mx-auto"
      />
      <div className="font-bold text-center">
        <h2>Now: {trackList[currentTrackIndex].title}</h2>
        <h2 className="text-[#616166]">
          By: {trackList[currentTrackIndex].musician}
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <audio
          ref={audioRef}
          src={trackList[currentTrackIndex].audioFileUrl}
          onPlay={handlePlay}
          onPause={handlePause}
          controls
        />
      </div>

      <div className="flex items-center justify-between text-white *:text-xl *:cursor-pointer">
        <HiArrowPathRoundedSquare />
        <div className="flex items-center justify-center gap-3">
          <IoMdSkipBackward
            onClick={playPreviousTrack}
            className="hover:bg-slate-300 p-2 rounded-2xl text-4xl"
          />
          <div
            onClick={() => {
              if (isPlaying) {
                pauseAudio();
              } else {
                playAudio();
              }
            }}
            className="border-2 p-2 rounded-2xl bg-white text-black"
          >
            {isPlaying ? <TbPlayerPause /> : <TbPlayerPlayFilled />}
          </div>
          <IoMdSkipForward
            onClick={playNextTrack}
            className="hover:bg-slate-300 p-2 rounded-2xl text-4xl"
          />
        </div>
        <TiArrowShuffle />
      </div>
    </div>
  );
}
