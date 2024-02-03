import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="about-us-section py-12">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">About Tenmen Electrical</h2>
            <p className="mb-4">
              Tenmen Electrical is a local family-owned business providing
              exceptional service for your electrical, solar, and air
              conditioning needs. We pride ourselves on being punctual,
              competitively priced, customer-focused, and thorough.
            </p>
            <p className="mb-4">
              With us, you&apos;ll receive quality workmanship and
              affordability, along with innovative and user-friendly solutions
              to maximize efficiency. Trust us to show up on time, complete the
              job to the highest standard, and clean up after ourselves. Choose
              Tenmen Electrical for a reliable and trustworthy electrician that
              cares about our customers.
            </p>
            <blockquote className="italic border-l-4 pl-4">
              “We believe in providing exceptional service with quality
              workmanship and affordability, as a reliable and trustworthy
              electrician that cares about our customers”
            </blockquote>
            <span className="block mt-4 font-bold">- Isaac Jamieson</span>
          </div>
          <div className="w-full lg:w-1/2 lg:p-16 lg:pr-0">
            {/* Responsive iframe container */}
            <div
              className="relative overflow-hidden w-full"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/watch?v=S3QJk-f0WiQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
