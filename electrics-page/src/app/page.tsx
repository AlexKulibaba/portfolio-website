// pages/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import landingImage from "../images/landing_image.jpg"; // Import the image
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-700">
        {/* Hero section with a large image, overlay text and contact form */}
        <section className="relative md:flex md:items-center h-96 md:h-96 lg:h-[600px]">
          <img
            src={landingImage.src}
            alt="Electrician Work"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="w-full z-10 absolute inset-0 bg-black bg-opacity-50 p-4 text-white text-center md:text-left md:relative flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              Your Best Local Electrician
            </h1>
          </div>
          <div className="z-10 hidden lg:flex md:absolute lg:right-10 items-center justify-center md:w-[400px]">
            <ContactForm />
          </div>
        </section>
        <div className="lg:hidden p-5 flex justify-center items-center w-full">
          <ContactForm />
        </div>
        <Testimonials />

        <Services />
      </main>
      <Footer />
    </>
  );
}
