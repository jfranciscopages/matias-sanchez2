"use client"
import React from "react";
import { vimeoVideos } from "../utils/videos";

const VimeoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % vimeoVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? vimeoVideos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="justify-center  overflow-hidden relative flex">
      <div className=" flex w-full h-full max-w-[600px] max-h-full 2xl:max-h-full transition-transform ease-out duration-1200">
        <iframe
          className="z-10 testimoniosMobile"
          title="vimeo-video"
          src={`https://player.vimeo.com/video/${vimeoVideos[currentVideoIndex]}`}
          width="600"
          height="700"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute w-full h-full max-w-[500px] max-h-[700px] 2xl:max-w-[800px] 2xl:max-h-[1000px] flex items-center justify-between p-4">
        <button
          onClick={prevVideo}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white absolute left-0 top-1/2 transform -translate-y-1/2 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-8"
          >
            <path
              fill="#00000099"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>
        <button
          onClick={nextVideo}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white absolute right-0 top-1/2 transform -translate-y-1/2 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-8"
          >
            <path
              fill="#00000099"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VimeoCarousel;
