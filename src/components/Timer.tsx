"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const initialTime = 15 * 60; // 15 minutes in seconds
  const [secondsRemaining, setSecondsRemaining] = useState(initialTime);

  const TimerDigit = ({ value }) => {
    return (
      <span className="countdown lg:text-4xl md:text-4xl sm:text-sm" style={{"--value": value}}>
        {value.toString().padStart(2, "0")}
      </span>
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          // ends
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return { minutes, seconds };
  };

  const { minutes, seconds } = formatTime(secondsRemaining);

  return (
    <>
      <div className="grid grid-flow-col gap-3 text-center justify-center auto-cols-max">
        <div className="flex flex-col text-base">
          <span className="countdown lg:text-4xl md:text-4xl sm:text-sm">
          <TimerDigit value={minutes} />
          </span>
          min
        </div>
        <div className="flex flex-col text-base">
          <span className="countdown lg:text-4xl md:text-4xl sm:text-sm">
          <TimerDigit value={seconds} />
          </span>
          seg
        </div>
      </div>
    </>
  );
};

export default Timer;
