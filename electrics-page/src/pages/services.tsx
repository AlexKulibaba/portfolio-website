// pages/services.js
import React from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <Testimonials />
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
