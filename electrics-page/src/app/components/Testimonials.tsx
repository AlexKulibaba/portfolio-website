import React from "react";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Replace with actual testimonial content */}
        <div className="border p-4 rounded-lg shadow-md">
          <p>
            "Excellent service, professional and reliable. Highly recommend!"
          </p>
          <span>- John Doe</span>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <p>
            "They did a fantastic job with our home wiring. Fast and efficient."
          </p>
          <span>- Jane Smith</span>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <p>"Very knowledgeable and affordable. Best in town!"</p>
          <span>- Alex Johnson</span>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <p>
            "I'm extremely satisfied with their work. Great attention to
            detail."
          </p>
          <span>- Emily Davis</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
