import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between">
        {/* Flex container for content and map */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left side: Content */}
          <div className="w-full lg:w-2/3">
            {/* Company, links, contact, and social media sections here */}
            {/* Company information */}
            <section className="mb-6">
              <h4 className="text-xl font-bold mb-2">[aak] web development</h4>
              <p>Building websites for small businesses and startups.</p>
            </section>

            {/* Quick links or navigation */}
            <section className="mb-6">
              <h4 className="text-xl font-bold mb-2">Quick Links</h4>
              <ul className="list-none space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-blue-300 hover:text-blue-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-blue-300 hover:text-blue-500 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-blue-300 hover:text-blue-500 transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-blue-300 hover:text-blue-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </section>

            {/* Contact information */}
            <section className="mb-6">
              <h4 className="text-xl font-bold mb-2">Contact Us</h4>

              <p className="mb-1">Phone: 0493 824 029</p>
              <p>Email: alex.kulibaba@icloud.com</p>
            </section>

            {/* Social media links */}
            <section className="mb-6">
              <h4 className="text-xl font-bold mb-2">Follow Me</h4>
              <div className="flex items-center space-x-4">
                {/* <a
                  href="https://facebook.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com"
                  className="hover:text-pink-400 transition-colors"
                >
                  Instagram
                </a> */}
                <a
                  href="https://linkedin.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </section>
          </div>

          {/* Right side: Google Maps Embedding */}
          <div className="w-full lg:w-1/2 lg:pl-4">
            <div
              className="map-container"
              style={{
                position: "relative",
                paddingBottom: "56.25%",
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
          </div>
        </div>
      </div>

      {/* Copyright notice */}
      <div className="py-4 border-t border-gray-200 text-center">
        <p>
          &copy; {new Date().getFullYear()} Alexander Kulibaba. All rights
          reserved. ABN: 15285203733
        </p>
      </div>
    </footer>
  );
}
