// pages/about.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

import roofImage from "../images/roof_image.jpg";
import solarImage from "../images/solar_image.jpg";
import voltageImage from "../images/voltage_image.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to [Your Company Name], where we&apos;ve been providing
            outstanding electrical services since [Year]. Our commitment to
            exceptional quality and customer service has made us a leader in the
            electrical industry.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to deliver safe, innovative, and reliable electrical
            solutions that power our customers&apos; lives and businesses. We
            strive to exceed expectations with our dedication to craftsmanship
            and our pursuit of new technologies in the electrical field.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image
                src={solarImage}
                alt="Solar Panel"
                className="rounded-lg"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-semibold">
                Innovative Solar Solutions
              </h3>
              <p>
                We specialize in cutting-edge solar technology that reduces your
                energy bill and carbon footprint.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src={roofImage}
                alt="Roof Repair"
                className="rounded-lg"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-semibold">Expert Roofing Services</h3>
              <p>
                Our experienced team ensures the durability and longevity of
                your roof with expert installations and repairs.
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src={voltageImage}
                alt="Electrical Services"
                className="rounded-lg"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-semibold">
                Certified Electrical Work
              </h3>
              <p>
                From residential wiring to commercial electrical needs, we
                provide comprehensive, certified services.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <p className="text-lg">
            [Your Company Name] was founded in [Year] with a vision to provide
            innovative electrical services that meet the evolving needs of our
            clients. Over the years, we have grown from a small local business
            to a trusted name in the electrical industry, while staying true to
            our core values of integrity, quality, and safety.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg">
            Our team of licensed electricians and dedicated support staff are
            the backbone of our company. With a passion for excellence and a
            customer-first approach, our professionals are ready to tackle
            projects of any size with precision and care.
          </p>
          {/* Here you can include pictures and bios of your team members */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
