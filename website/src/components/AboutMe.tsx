import React from "react";

const AboutMe = () => {
  return (
    <div className="container mx-auto px-6 flex flex-wrap justify-between pt-12">
      <div className="flex justify-end w-full border-0 border-black p-2 pt-4 ">
        <div className="md:w-1/2">
          <h1 className=" text-3xl font-400">- About Me -</h1>
          <p className="pt-4 text-[20px]">
            I’m a Computer Science Student originally from Aachen, Germany with
            web development experience ranging from small startups and
            businesses to large companies. In 2023 I have moved to Sydney and
            have since worked in web development as well as marketing for small
            businesses and tradespeople, and with my backgound in Computer
            Science and Trade I'm excited to apply my skills and gro your online
            presence
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
