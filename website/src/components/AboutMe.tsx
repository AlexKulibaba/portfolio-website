import React from "react";
import alex_headshot from "../Images/alex_headshot.jpeg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="container mx-auto md:px-32 px-4 flex flex-wrap justify-between py-12">
      <div className="flex md:flex-row-reverse flex-col justify-between border-0 border-black p-2 pt-4 ">
        <div className=" md:pl-12 md:w-2/3">
          <h1 className=" text-3xl font-400">- About Me -</h1>
          <p className="pt-4 text-[20px] pb-4 md:pb-0">
            I&#39;m a Computer Science Student originally from Aachen, Germany
            with web development experience ranging from small startups and
            businesses to large companies. In 2023 I have moved to Sydney and
            have since worked in web development as well as marketing for small
            businesses and tradespeople, and with my backgound in Computer
            Science and Trade I&#39;m excited to apply my skills and grow your
            online presence
          </p>
        </div>
        <Image src={alex_headshot} alt="Image" className=" md:w-1/3 -z-10" />
      </div>
    </div>
  );
};

export default AboutMe;
