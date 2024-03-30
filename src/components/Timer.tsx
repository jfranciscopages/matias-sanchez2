"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const initialTime = 15 * 60; // 15 minutes in seconds
  const [secondsRemaining, setSecondsRemaining] = useState(initialTime);

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
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <h2 className="flex flex-col justify-center items-center gap-5 text-center text-xl lg:text-4xl md:text-4xl sm:text-3xl leading-4 ">
        ¡ÚLTIMOS CUPOS!
      </h2>
      <p className="text-xl lg:text-4xl md:text-4xl sm:text-3xl">{formatTime(secondsRemaining)}</p>
    </>
  );
};

export default Timer;