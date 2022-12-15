import React from "react";

import BGImage from "../../../assets/container/BG.png";
export default function FirstContainer() {
  return (
    <>
      <div id="" className="h-fit lg:px-10 lg:py-3 px-5 py-10  w-full bg-[#FBFBFF]">
        <div className="grid sm:grid-cols-5  py-5 space-y-10 sm:space-y-0 sm:space-x-5">
          <div className="sm:col-span-2 justify-self-start h-full  sm:grid  sm:content-center space-y-3 text-[#6A6A6A]">
            <h1 className="lg:text-4xl text-2xl sm:text-lg font-extrabold text-black uppercase "><span className="text-[#F94F4F]">company</span> with a strong <span className="text-[#F94F4F]">motive</span></h1>
            <p className="text-xs ">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <p>Lets Get Started &nbsp;- <span className="text-[#F94F4F] font-extrabold">Rato Guras Technology</span></p>
            <button className="bg-[#6A6A6A] text-white   rounded-2xl rounded-t-none rounded-l-2xl  px-5 py-3 sm:px-4 sm:py-2 lg:w-1/2 w-2/3 hover:bg-[#969393] ">Take a Tour</button>
          </div>
          <div className="sm:justify-self-end sm:col-span-3 bg-[#DADADA] sm:bg-transparent p-4 rounded-md">
            <img src={BGImage} alt="" className="h-" />
          </div>
        </div>
      </div>
    </>
  );
}
