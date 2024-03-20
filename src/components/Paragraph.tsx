import { TParagraph } from "../types";
import React from "react";

const Paragraph = ({ title, texts, list }: TParagraph) => {
  return (
    <div className="p-6 w-full">
      <div className="flex gap-4 items-center justify-center md:justify-start md:items-left">
        <div className="w-5 h-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#ffffff"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
        </div>
        <h3 className="font-extrabold text-xl md:text-2xl 2xl:text-3xl my-2">
          {title}
        </h3>
      </div>
      <div>
        {texts.map((text, index) => (
          <p
            key={index}
            className="font-medium text-sm 2xl:text-base text-left my-4"
          >
            {text}
          </p>
        ))}
        {list && (
          <>
            <h3 className="font-medium text-sm 2xl:text-base my-4 text-left">
              Además
            </h3>
            <ul className="pl-4 list-disc">
              {list.map((text, index) => (
                <li
                  key={index}
                  className="bullets font-medium text-sm 2xl:text-base text-left my-4"
                >
                  {text}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Paragraph;
