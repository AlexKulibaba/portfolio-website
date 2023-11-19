import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Header />
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* CTA paragraph */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We&apos;re here to help with all your electrical needs. Reach out to
            us through the form, or visit us at our location. Let&apos;s connect
            and discuss how we can make your project a success.
          </p>
        </section>

        {/* Map and contact form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Google Maps Embedding */}
          <div
            className="map-container w-full h-64 md:h-auto"
            style={{
              position: "relative",
              paddingBottom: "56.25%", // This maintains a 16:9 aspect ratio
              height: "0",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0043436526466!2d151.20144967626752!3d-33.88954197321875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d8cea6c041%3A0x2043d921863675b5!2sThe%20Village%20Surry%20Hills!5e0!3m2!1sde!2sau!4v1700367756277!5m2!1sde!2sau"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                border: "0",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
