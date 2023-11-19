// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4">
        {/* Company information */}
        <section className="mb-6">
          <h4 className="text-xl font-bold mb-2">Electrician Service</h4>
          <p>
            Providing reliable electrical solutions for your home and business.
          </p>
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
          <p className="mb-1">123 Electric Ave, Spark City, ZZ</p>
          <p className="mb-1">Phone: (123) 456-7890</p>
          <p>Email: contact@electricianservice.com</p>
        </section>

        {/* Social media links */}
        <section className="mb-6">
          <h4 className="text-xl font-bold mb-2">Follow Us</h4>
          <div className="flex items-center space-x-4">
            <a
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
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>

      {/* Copyright notice */}
      <div className="py-4 border-t border-gray-700 text-center">
        <p>
          &copy; {new Date().getFullYear()} Electrician Service. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
