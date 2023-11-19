import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

import roofImage from "../images/roof_image.jpg";
import solarImage from "../images/solar_image.jpg";
import voltageImage from "../images/voltage_image.jpg";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={solarImage}
              alt="Solar Panel Installation"
              width={500}
              height={300}
              objectFit="cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">Solar Panel Installation</h2>
              <p className="mt-2 text-gray-600">
                Completed in 2021, this solar panel project for a residential
                complex involved the installation of a 100 kW system. It
                resulted in a 60% reduction in electricity costs for the
                residents and contributed to a greener environment.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={roofImage}
              alt="Roof Repair"
              width={500}
              height={300}
              objectFit="cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">Roof Repair Services</h2>
              <p className="mt-2 text-gray-600">
                Our skilled team carried out extensive repairs on a historical
                building's roof in 2020, preserving its architectural integrity
                while ensuring modern safety standards were met.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={voltageImage}
              alt="Electrical Services"
              width={500}
              height={300}
              objectFit="cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold">
                Commercial Electrical Overhaul
              </h2>
              <p className="mt-2 text-gray-600">
                In 2022, we overhauled the electrical systems of a commercial
                retail center, installing state-of-the-art fixtures and ensuring
                all wiring met current electrical codes.
              </p>
            </div>
          </div>
        </div>
        {/* Call to action button */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
