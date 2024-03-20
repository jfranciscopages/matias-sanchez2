"use client";
import ReactPlayer from "react-player";
import React, { useEffect, useState } from "react";

interface VideoPlayerProps {
  src: string;
}

const Player: React.FC<VideoPlayerProps> = ({ src }) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      {hasWindow && (
        <div className="rounded-[30px]">
          <ReactPlayer
            className={`rounded-[60px] w-full h-full max-w-[1000px] max-h-[1200px] `}
            url={src}
            width="100%"
            loop
            playing
            height="auto"
            controls
            muted
          />
        </div>
      )}
    </div>
  );
};

export default Player;
