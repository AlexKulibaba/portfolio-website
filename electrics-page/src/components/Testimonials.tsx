import React from "react";
import TestimonialBox from "./TestimonialBox"; // Import the new TestimonialBox component

const Testimonials: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TestimonialBox
          text="Excellent service, professional and reliable. Highly recommend!"
          author="John Doe"
          date="March 10, 2023"
        />
        <TestimonialBox
          text="They did a fantastic job with our home wiring. Fast and efficient."
          author="Jane Smith"
          date="April 22, 2023"
        />
        <TestimonialBox
          text="Very knowledgeable and affordable. Best in town!"
          author="Alex Johnson"
          date="May 5, 2023"
        />
        <TestimonialBox
          text="I'm extremely satisfied with their work. Great attention to detail."
          author="Emily Davis"
          date="June 18, 2023"
        />
      </div>
    </section>
  );
};

export default Testimonials;
