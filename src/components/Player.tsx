"use client";
import ReactPlayer from "react-player";
import React, { Suspense, useEffect, useState } from "react";

interface VideoPlayerProps {
  src: string;
  playing?: boolean;
  muted?: boolean;
}

const Player: React.FC<VideoPlayerProps> = ({ src, playing = true, muted = true }) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      {hasWindow && (
        <div className="rounded-[30px]">
          <ReactPlayer
            className={`rounded-[60px] w-full h-full max-w-[1000px] max-h-[1200px] `}
            url={src}
            width="100%"
            loop
            playing={playing}
            height="auto"
            controls
            muted={muted}
          />
        </div>
      )}
    </Suspense>
  );
};

export default Player;
