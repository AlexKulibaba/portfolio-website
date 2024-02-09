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
import ProjectEntry from "./ProjectEntry";

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
          <ProjectEntry
            items={sampleElectricalCollection}
            website_name={"Sample Electrical"}
            website_link={"https://sample-electrics-page-1.vercel.app/"}
            isTextLeft={true}
          />
          <ProjectEntry
            items={augustusCollection}
            website_name={"Augustus"}
            website_link={"https://augustus.vercel.app/"}
            isTextLeft={false}
          />
          <ProjectEntry
            items={jimsElectricalCollection}
            website_name={"Jim's Electrical"}
            website_link={"https://jims-electrical.vercel.app/"}
            isTextLeft={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
