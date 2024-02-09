import React from "react";
import globe_wireframe from "../Images/globe_wireframe.png";
import Image from "next/image";

const MainView = () => {
  return (
    <div className="container mx-auto px-6 flex flex-wrap justify-between md:pt-[124px] pt-[141px]">
      <div className=" w-full border-2 border-black p-8 relative">
        <h1
          className="md:text-[100px] text-[40px] md:w-1/2 font-['Playfair'] italic md:pt-20 pt-96"
          style={{ lineHeight: "1" }}
        >
          Level up your web presence
        </h1>
        <p className="text-[24px] md:w-1/2 pt-10">
          Bridge the gap between your business and the digital world.
        </p>
        <div className="flex flex-row pt-16">
          <div className="">
            <button className="p-8 py-4 rounded-md font-bold text-black transition duration-300 bg-white  border-2 hover:underline border-black ">
              My Projects
            </button>
          </div>
          <div className="pl-4">
            <button className="p-8 py-4 rounded-md font-bold text-white transition duration-300 bg-black  hover:underline border-2 border-black ">
              Get a Quote
            </button>
          </div>
        </div>
        <Image
          src={globe_wireframe}
          alt="Image"
          className="absolute top-0 right-0 md:w-1/3 -z-10" // Adjust the width here
        />
      </div>
    </div>
  );
};

export default MainView;
