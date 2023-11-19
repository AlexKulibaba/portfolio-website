import React from "react";

import roofImage from "../images/roof_image.jpg";
import solarImage from "../images/solar_image.jpg";
import voltageImage from "../images/voltage_image.jpg";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img
            src={solarImage.src}
            alt="Service 1"
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">Service 1</h3>
          <ul className="list-disc list-inside">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
          </ul>
          <a
            href="services/service1"
            className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
          >
            Learn More
          </a>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img
            src={roofImage.src}
            alt="Service 2"
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">Service 2</h3>
          <ul className="list-disc list-inside">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
          </ul>
          <a
            href="services/service2"
            className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
          >
            Learn More
          </a>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img
            src={voltageImage.src}
            alt="Service 3"
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">Service 3</h3>
          <ul className="list-disc list-inside">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
          </ul>
          <a
            href="services/service3"
            className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
