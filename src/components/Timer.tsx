"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const initialTime = 15 * 60; // 15 minutes in seconds
  const [secondsRemaining, setSecondsRemaining] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prevSeconds) => {
        if (prevSeconds === 0) {
          setSecondsRemaining(initialTime);
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return { minutes, seconds };
  };

  const { minutes, seconds } = formatTime(secondsRemaining);

  const [vacancies, setVacancies] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const decreaseAmount = Math.floor(Math.random() * 2) + 1;
      setVacancies(prevVacancies => {
        const newVacancies = prevVacancies - decreaseAmount;
        return newVacancies >= 11 ? newVacancies : 11;
      });
    }, 31000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        id="countdown-timer"
        className="fixed grid grid-flow-col gap-1 text-center justify-center auto-cols-max md:right-6 z-[100]"
      >
        <div className="flex flex-row justify-center pt-2 md:pt-0 md:gap-x-1">
          <div className="flex flex-col text-sm md:text-base md:leading-4 md:min-w-16 items-center min-w-10 leading-none">
            <span className="countdown lg:text-5xl md:text-4xl text-2xl">
              {minutes.toString().padStart(2, "0")}
            </span>
            min
          </div>
          <div className="flex flex-col text-sm md:text-base md:leading-4 md:min-w-16 items-center min-w-10 leading-none">
            <span className="countdown lg:text-5xl md:text-4xl text-2xl">
              {seconds.toString().padStart(2, "0")}
            </span>
            seg
          </div>
        </div>
        <div className="flex flex-col text-base pt-1 md:pt-px">
          <p className="text-sm md:text-xl hidden md:flex">¡ÚLTIMOS CUPOS!</p>
          <p className="text-sm md:text-xl whitespace-nowrap hidden md:flex">
            <span className="font-extrabold text-blue px-0.5">{vacancies}</span> DISPONIBLES
          </p>
          <p className="text-sm md:hidden whitespace-nowrap">
            ¡ÚLTIMOS <span className="font-extrabold text-blue px-0.5">{vacancies}</span> CUPOS DISPONIBLES!
          </p>
        </div>
      </div>
    </>
  );
};

export default Timer;
