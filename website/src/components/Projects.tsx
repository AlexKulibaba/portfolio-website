import React from "react";

const Projects = () => {
  return (
    <div className="container mx-auto px-6 flex flex-wrap justify-between">
      <div className=" w-full border-2 border-black p-16 ">
        <h1 className=" pt-8 text-4xl">- My Projects -</h1>
        <div className="pt-4 w-1/2 text-[20px]">
          {
            "These are the Projects I already completed, some are just designs, some are online and being used right now (just like this one). Feel free to click and visit them yourself!"
          }
        </div>
        <div className="pt-4 flex flex-col">
          <div className="flex flex-row">
            <div className="w-1/2 h-64 bg-slate-600"></div>
            <div className="w-1/2 h-64 bg-green-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
