// pages/page.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import landingImage from "./images/landing_image.jpg"; // Import the image
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-700">
        {/* Hero section with a large image and overlay text */}

        <section className="relative">
          <img
            src={landingImage.src} // Use the imported image
            alt="Electrician Work"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-3/4 -translate-y-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Best Local Electrician
            </h1>
          </div>

          <ContactForm />
        </section>
        <Testimonials />
        <Services />
      </main>
      <Footer />
    </>
  );
}
