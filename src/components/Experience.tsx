import { experience } from "../utils/experience";
import React from "react";
import Video from "./Video";

const Experience = () => {
  return (
    <section className="flex w-full min-h-screen flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1200px] mx-auto">
      <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold">
        SU EXPERIENCIA
      </h2>
      <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold">
        TRABAJANDO CONMIGO
      </h2>
      <div className="my-20 w-full h-full max-w-[1000px] mx-auto">
        {experience.map((exp, index) => (
          <div
            key={index}
            className={`w-full h-full flex flex-col my-10 ${
              exp.invert ? "lg:flex-row-reverse" : "lg:flex-row"
            } justify-between`}
          >
            <div className="h-full w-full">
              <Video
                experience
                source={exp.video}
                height="max-h-[600px]"
                width="max-w-[500px]"
              />
            </div>
            <div className="p-4 px-8 h-full lg:min-h-[600px] w-full flex flex-col items-center justify-center gap-10">
              <h3 className="text-4xl font-extrabold">{exp.name}</h3>
              <p className="font-semibold lg:text-base  text-center">
                {exp.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
