// pages/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import landingImage from "../images/landing_image.jpg"; // Import the image
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import QualityWork from "@/components/QualityWorkStatement";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[125px] bg-white text-gray-700">
        {/* Hero section with a large image, overlay text and contact form */}
        <section className="relative md:flex md:items-center h-96 md:h-96 lg:h-[600px]">
          <Image
            src={landingImage.src}
            alt="Electrician Work"
            width={landingImage.width}
            height={landingImage.height}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="lg:w-[600px] w-full h-full z-10 absolute inset-0 bg-black bg-opacity-50 p-4 text-white items-center justify-center text-center md:text-left md:relative flex flex-col pt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              Your Best Local Electrician
            </h1>
            <h2 className="w-96 text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-normal mb-4">
              Your Go-to Electricians for any Electrical, Air Conditioning or
              Solar Services.
            </h2>
            <button className="p-4 mt-10 rounded-md bg-vibrant-dark font-bold">
              Get a free Quote!
            </button>
          </div>
          <div className="z-10 hidden lg:flex md:absolute lg:right-10 items-center justify-center md:w-[400px]">
            <ContactForm />
          </div>
        </section>
        <div className="lg:hidden p-5 flex justify-center items-center w-full">
          <ContactForm />
        </div>
        <Testimonials />
        <QualityWork />
        <AboutUs />
        <Services />
      </main>
      <Footer />
    </>
  );
}
