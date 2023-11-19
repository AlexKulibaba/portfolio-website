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
            &quot;Excellent service, professional and reliable. Highly
            recommend!&quot;
          </p>
          <span>- John Doe</span>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <p>
            &quot;They did a fantastic job with our home wiring. Fast and
            efficient.&quot;
          </p>
          <span>- Jane Smith</span>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <p>&quot;Very knowledgeable and affordable. Best in town!&quot;</p>
          <span>- Alex Johnson</span>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <p>
            &quot;I&apos;m extremely satisfied with their work. Great attention
            to detail.&quot;
          </p>
          <span>- Emily Davis</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
