import React, { useState } from "react";
import { items } from "../Data/Content"; 
import { IoIosArrowRoundForward } from "react-icons/io";
import ReactImg from "../assets/react.png"; 
import LikeImg from "../assets/like.png";
import PencilImg from "../assets/pencil.png";
import VueImg from "../assets/Vuejs.png";

const VerticalTextList = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleOrientation = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex justify-center gap-6 p-6">
      {items.map((item) => (
        <div
          key={item.id}
          className={`relative rounded-4xl border-4 p-6 cursor-pointer 
            transition-all duration-700 ease-in-out transform
            bg-lightblue-100 before:content-[''] before:absolute before:top-0 before:left-0 
            before:w-full before:h-full before:bg-red-500 before:transform before:origin-top-left 
            before:transition-transform before:duration-700 before:ease-in-out before:z-0 
            before:rounded-4xl ${
              activeId === item.id 
                ? "text-white border-red-500 scale-110 w-[350px] h-[400px] before:scale-x-100 before:scale-y-100"
                : "text-red-500 border-lightblue-500 w-[250px] h-[400px] before:scale-x-0 before:scale-y-0"
            }`}
          onClick={() => toggleOrientation(item.id)}
        >
          {/* "View all courses" text */}
          {activeId === item.id && (
            <p className="absolute top-2 right-2 text-sm font-semibold text-white flex items-center z-10">
              View all courses{" "}
              <IoIosArrowRoundForward className="text-4xl font-medium arrow-icon" />
            </p>
          )}

          {/* Number and "+" sign */}
          <div
            className={`absolute ${
              activeId === item.id ? "bottom-4 left-4" : "bottom-4 left-1/2 -translate-x-1/2"
            } z-10 transition-all duration-700`}
          >
            <div className="flex items-end relative">
              <span className="text-6xl font-bold">{item.number}</span>
              <span className="text-4xl font-bold absolute -top-3 -right-4">
                {item.numberSign}
              </span>
            </div>
          </div>

          {/* Text content */}
          <div
            className={`absolute ml-2 z-10 transition-all duration-700 ${
              activeId === item.id ? "bottom-4 left-24" : "-bottom-14 left-20"
            }`}
          >
            <div className={activeId === item.id ? "horizontal-text" : "vertical-text"}>
              <div>
                <h1 className="font-bold text-2xl">{item.text}</h1>
                <p className="text-sm">{item.subText}</p>
              </div>
            </div>
          </div>

          {/* Icons */}
          {activeId === item.id && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex space-x-4 animate-fade-in">
                <img src={ReactImg} alt="icon1" className="w-10 h-10 rounded-full" />
                <img src={VueImg} alt="icon2" className="w-10 h-10 rounded-full" />
                <img src={PencilImg} alt="icon3" className="w-10 h-10 rounded-full" />
                <img src={LikeImg} alt="icon4" className="w-10 h-10 rounded-full" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalTextList;