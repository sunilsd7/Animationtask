import React, { useState } from "react";
import { items } from "../Data/Content"; 
import { IoIosArrowRoundForward } from "react-icons/io";

import ReactImg from "../assets/react.png"; 
import LikeImg from "../assets/like.png";
import PencilImg from "../assets/pencil.png";
import VueImg from "../assets/Vuejs.png";

const VerticalTextList = () => {
  const [activeId, setActiveId] = useState(1); // id: 1 is activated at first
  const [animate, setAnimate] = useState(false); // For triggering rotational animation

  const toggleOrientation = (id) => {
    setAnimate(true); // Start animation
    setActiveId((prevId) => (prevId === id ? null : id)); // Toggle active state
    setTimeout(() => setAnimate(false), 700); // Reset animation after transition
  };

  return (
    <div className="flex justify-center gap-6 p-6">
      {items.map((item) => (
        <div
          key={item.id}
          className={`relative rounded-4xl border-4 p-6 cursor-pointer transition-all duration-700 ease-in-out transform ${
            activeId === item.id
              ? `bg-red-500 text-white border-red-500 w-[350px] h-[400px] scale-110 ${
                  animate ? "translate-y-[150px] translate-x-[50px] rotate-[90deg]" : ""
                }` // Expanded and animated state
              : "bg-lightblue-100 text-red-500 border-lightblue-500 w-[250px] h-[400px]" // Collapsed state
          }`}
          onClick={() => toggleOrientation(item.id)}
        >
          {/* "View all courses" text (top-right corner) */}
          {activeId === item.id && (
            <p className="absolute top-2 right-2 text-sm font-semibold text-white flex items-center">
              View all courses{" "}
              <span>
                <IoIosArrowRoundForward className="text-4xl font-medium arrow-icon" />
              </span>
            </p>
          )}

          {/* Number and "+" sign */}
          <div
            className={`absolute ${
              activeId === item.id
                ? "bottom-4 left-4"
                : "bottom-4 left-1/2 transform -translate-x-1/2"
            }`}
          >
            <div className="flex items-end relative">
              <span className="text-6xl font-bold">{item.number}</span>
              <span className="text-4xl font-bold absolute -top-3 -right-4">
                {item.numberSign}
              </span>
            </div>
          </div>

          {/* Text: Heading and Subtext */}
          <div
            className={`absolute ml-2 ${
              activeId === item.id ? "bottom-4 left-24" : "-bottom-14 left-20"
            }`}
          >
            <div
              className={`${
                activeId === item.id ? "horizontal-text" : "vertical-text"
              }`}
            >
              <div className="">
                <h1 className="font-bold text-2xl">{item.text}</h1>
                <p className="text-sm">{item.subText}</p>
              </div>
            </div>
          </div>

          {/* Icons/Images (visible only when clicked) */}
          {activeId === item.id && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-4">
                <img
                  src={ReactImg}
                  alt="icon1"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src={VueImg}
                  alt="icon2"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src={PencilImg}
                  alt="icon3"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src={LikeImg}
                  alt="icon4"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalTextList;
