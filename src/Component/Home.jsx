import React, { useState } from "react";
import { items } from "../Data/Content";
import { IoIosArrowRoundForward } from "react-icons/io";
import ReactImg from "../assets/react.png";
import LikeImg from "../assets/like.png";
import PencilImg from "../assets/pencil.png";
import VueImg from "../assets/Vuejs.png";

const VerticalTextList = () => {
  const [activeId, setActiveId] = useState(1); // Activate the first component by default

  const toggleOrientation = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
    <div >
    
      <p className="text-2xl px-12 py-5">Explore our classes and master trending skills!</p>
    
    <h2 className="text-3xl px-12 font-bold">Dive Into <span className="firstheading">What's Hot Right Now!</span></h2></div>
     
  <div className="flex justify-center gap-10 py-20">
      {items.map((item) => (
        <div
          key={item.id}
          className={`relative rounded-4xl border-4 p-6 cursor-pointer transition-all duration-700 
            bg-lightblue-100 overflow-hidden
            before:content-[''] before:absolute before:inset-0 before:bg-red-500  before:opacity-0
             before:duration-900 
         
            ${
              activeId === item.id
                ? "text-white border-red-500 scale-110 w-[592px] h-[461px] before:opacity-100 before:scale-100 before:rotate-[180deg]"
                : "text-red-500 border-lightblue-500 w-[280px] h-[461px] before:rotate-[0deg] before:scale-90"
            }`}
          onClick={() => toggleOrientation(item.id)}
        >
          {/* "View all courses" text */}
          {activeId === item.id && (
            <p className="absolute top-2 right-2 text-xl font-semibold text-white flex items-center z-10">
              View all courses{" "}
              <IoIosArrowRoundForward className="text-4xl  arrow-icon" />
            </p>
          )}

          {/* Number and "+" sign */}
          <div
            className={`absolute ${
              activeId === item.id
                ? "bottom-4 left-4"
                : "bottom-4 left-1/2 -translate-x-1/2"
            } z-10 transition-all duration-700`}
          >
            <div className="flex items-end relative">
              <span className="text-8xl font-bold">{item.number}</span>
              <span className="text-5xl font-bold absolute -top-3 -right-4">
                {item.numberSign}
              </span>
            </div>
          </div>

          {/* Text */}
          <div
            className={`absolute ml-2 z-10 transition-all duration-700 ${
              activeId === item.id ? "bottom-12 left-36" : "-bottom-14 left-20"
            }`}
          >
            <div
              className={
                activeId === item.id ? "horizontal-text" : "vertical-text"
              }
            >
              <div>
                <h1 className="font-bold text-3xl">{item.text}</h1>
                <p className="text-sm">{item.subText}</p>
              </div>
            </div>
          </div>

          {/* Icons */}
          {activeId === item.id && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex space-x-4 ">
                <img src={ReactImg} alt="React" className="w-75px h-75px " />
                <img src={VueImg} alt="Vue" className="w-75px h-75px " />
                <img src={PencilImg} alt="Pencil" className="w-75px h-75px " />
                <img src={LikeImg} alt="Like" className="w-75px h-75px rotation-16.67" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default VerticalTextList;
