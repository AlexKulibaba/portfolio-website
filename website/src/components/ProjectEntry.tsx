import React from "react";
import ImageGalleryComponent from "./ImageGalleryComponent";
import Link from "next/link";

const ProjectEntry = ({
  items,
  bulletpoints,
  website_name,
  website_link,
  isTextLeft,
}: any) => {
  const sample_bulletpoints = [
    "24/7 Emergency Service Available",
    "Expert Electrical Repairs and Installations",
    "Locally Owned and Operated Business",
  ];

  return (
    <div
      className={`flex ${
        isTextLeft ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col pb-16`}
    >
      <div className="md:hidden flex text-[20px] font-bold ">
        {website_name}
      </div>
      <ImageGalleryComponent items={items} />
      <div className="flex flex-col md:w-1/2 p-4">
        <div className="hidden md:flex">
          <div
            className=" text-[50px] font-['Playfair'] pb-4 italic"
            style={{ lineHeight: "1" }}
          >
            {website_name}
          </div>
        </div>

        <ul className="list-disc pl-4">
          {sample_bulletpoints.map((element: string) => (
            <li key={element} className="py-1 text-lg">
              {element}
            </li>
          ))}
        </ul>
        <a href={website_link} target="_blank" rel="noopener noreferrer">
          <button className="p-4 py-2 mt-4 rounded-md font-bold hover:text-black transition duration-300 bg-black text-white border-2 hover:bg-white border-black">
            Visit the Website
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectEntry;
