// components/Services.js
import React from "react";
import roofImage from "../images/roof_image.jpg";
import solarImage from "../images/solar_image.jpg";
import voltageImage from "../images/voltage_image.jpg";
import Link from "next/link";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Service 1: Solar Panel Installation */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img
            src={solarImage.src}
            alt="Solar Panel Installation"
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">
            Solar Panel Installation
          </h3>
          <p className="mt-2">
            High-quality solar solutions for residential and commercial
            properties.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Energy efficiency assessments</li>
            <li>Custom solar panel setups</li>
            <li>Continuous maintenance and support</li>
          </ul>
          <Link
            href="/services/solar-panel-installation"
            className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
          >
            Learn More
          </Link>
        </div>

        {/* Service 2: Roof Repair */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img
            src={roofImage.src}
            alt="Roof Repair"
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">
            Roof Repair & Maintenance
          </h3>
          <p className="mt-2">
            Comprehensive roofing services to ensure the integrity of your home
            or office.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Leak repairs</li>
            <li>Shingle replacement</li>
            <li>Periodic inspections</li>
          </ul>
          <Link
            href="/services/roof-repair"
            className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
          >
            Learn More
          </Link>
        </div>

        {/* Service 3: Electrical Services */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <img
            src={voltageImage.src}
            alt="Electrical Services"
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">
            Electrical Installations & Repairs
          </h3>
          <p className="mt-2">
            Safe and reliable electrical services from certified technicians.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Wiring upgrades</li>
            <li>Electrical safety inspections</li>
            <li>Emergency services</li>
          </ul>
          <Link
            href="/services/electrical-services"
            className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
