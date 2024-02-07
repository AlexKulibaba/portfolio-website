import React from "react";
import globe_wireframe from "../Images/globe_wireframe.png";
import Image from "next/image";

const MainView = () => {
  return (
    <div className="container mx-auto px-6 flex flex-wrap justify-between md:pt-[124px] pt-[141px]">
      <div className="h-[700px] w-full border-2 border-black p-8 relative">
        <Image
          src={globe_wireframe}
          alt="Image"
          className="absolute top-0 right-0 w-1/3" // Adjust the width here
        />
        <h1
          className="text-[100px] w-1/2 font-['Playfair'] font-medium italic pt-20"
          style={{ lineHeight: "1" }}
        >
          Level up your online presence
        </h1>
        <p className="text-[24px] w-1/2 pt-10">
          Bridging the gap between your business and the digital world.
        </p>
      </div>
    </div>
  );
};

export default MainView;
