"use client";

import React from "react";
import Image from "next/image";
import augustus_1 from "../Images/augustus_1.png";
import ImageGallery from "react-image-gallery";
import ImageGalleryComponent from "./ImageGalleryComponent";

import {
  sampleElectricalCollection,
  augustusCollection,
  jimsElectricalCollection,
  placeholderImages,
} from "@/Images/imageCollection";

const Projects = () => {
  return (
    <div className="container mx-auto px-6 flex flex-wrap justify-between">
      <div className=" w-full border-2 border-black md:p-16 p-4">
        <h1 className=" pt-8 text-4xl">- My Projects -</h1>
        <div className="pt-4 md:w-1/2 text-[20px]">
          {
            "These are the Projects I already completed, some are just designs, some are online and being used right now (just like this one). Feel free to click and visit them yourself!"
          }
        </div>

        <div className="pt-12 flex flex-col">
          <div className="flex md:flex-row flex-col pb-8">
            <div className="md:hidden flex text-[20px] font-bold ">
              Jim's Electrical
            </div>
            <ImageGalleryComponent items={sampleElectricalCollection} />
            <div className="flex flex-col md:w-1/2 p-4">
              <div className="hidden md:flex">
                <div className=" text-[20px] font-bold ">Jim's Electrical</div>
              </div>

              <ul className="list-disc pl-4">
                <li className="py-1 text-lg">
                  24/7 Emergency Service Available
                </li>
                <li className="py-1 text-lg">
                  Expert Electrical Repairs and Installations
                </li>
                <li className="py-1 text-lg">
                  Locally Owned and Operated Business
                </li>
              </ul>
              <button className="p-4 py-2 mt-2 rounded-md font-bold hover:text-black transition duration-300 bg-black text-white border-2 hover:bg-white border-black">
                Visit the Website
              </button>
            </div>
          </div>
          <div className="flex md:flex-row-reverse flex-col pb-8">
            <div className="md:hidden flex text-[20px] font-bold ">
              Jim's Electrical
            </div>
            <ImageGalleryComponent items={augustusCollection} />
            <div className="flex flex-col md:w-1/2 p-4">
              <div className="hidden md:flex">
                <div className=" text-[20px] font-bold ">Jim's Electrical</div>
              </div>

              <ul className="list-disc pl-4">
                <li className="py-1 text-lg">
                  24/7 Emergency Service Available
                </li>
                <li className="py-1 text-lg">
                  Expert Electrical Repairs and Installations
                </li>
                <li className="py-1 text-lg">
                  Locally Owned and Operated Business
                </li>
              </ul>
              <button className="p-4 py-2 mt-2 rounded-md font-bold hover:text-black transition duration-300 bg-black text-white border-2 hover:bg-white border-black">
                Visit the Website
              </button>
            </div>
          </div>
          <div className="flex md:flex-row flex-col pb-8">
            <div className="md:hidden flex text-[20px] font-bold ">
              Jim's Electrical
            </div>
            <ImageGalleryComponent items={jimsElectricalCollection} />
            <div className="flex flex-col md:w-1/2 p-4">
              <div className="hidden md:flex">
                <div className=" text-[20px] font-bold ">Jim's Electrical</div>
              </div>

              <ul className="list-disc pl-4">
                <li className="py-1 text-lg">
                  24/7 Emergency Service Available
                </li>
                <li className="py-1 text-lg">
                  Expert Electrical Repairs and Installations
                </li>
                <li className="py-1 text-lg">
                  Locally Owned and Operated Business
                </li>
              </ul>
              <button className="p-4 py-2 mt-2 rounded-md font-bold hover:text-black transition duration-300 bg-black text-white border-2 hover:bg-white border-black">
                Visit the Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
