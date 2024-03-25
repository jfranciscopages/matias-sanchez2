"use client";
import { TVideo } from "../types";
import React, { Suspense, useRef, useState } from "react";

const Video = ({
  source,
  width,
  height,
  mutedVideo,
  autoPlay,
  styles,
}: TVideo) => {
  const [muted, setMuted] = useState(mutedVideo);
  const videoRef = useRef(null);
  const isWindowDefined = typeof window !== "undefined";

  const isMobile = () => {
    return isWindowDefined && window.innerWidth <= 768;
  };

  const getStyles = () => {
    if (isMobile()) {
      return {
        border: "2px solid #fff",
        borderRadius: "30px",
      };
    } else {
      return {
        border: "3px solid #fff",
        borderRadius: "60px",
      };
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
    if (muted && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <Suspense fallback={<p>Cargando feed...</p>}>
      <div className="relative w-auto" style={styles}>
        <video
          autoPlay={autoPlay}
          muted={muted}
          loop
          playsInline
          ref={videoRef}
          className={`rounded-[30px] md:rounded-[60px] w-full h-full ${height} ${width}`}
          onClick={togglePlay}
          style={getStyles()}
        >
          <source src={source} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={toggleMute}
          className="z-[99] absolute top-[10px] right-[10px] md:top-[20px] md:right-[20px] rounded-full p-2 lg:p-4 bg-black border-none cursor-pointer"
        >
          {muted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-4 h-4 lg:w-8 lg:h-8"
            >
              <path
                fill="#ffffff"
                d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-4 h-4 lg:w-8 lg:h-8"
            >
              <path
                fill="#ffffff"
                d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
              />
            </svg>
          )}
        </button>
      </div>
    </Suspense>
  );
};


export default Video;
