// components/Header.tsx
import Link from "next/link";
import {
  PhoneIcon,
  //   FacebookIcon,
  //   LinkedInIcon,
  //   GoogleIcon,
} from "@heroicons/react/24/outline"; // Replace GoogleIcon with an appropriate one
import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <>
      {/* Top bar */}
      <div className="bg-blue-500 text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Call now button */}
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5" />
            <span>Call Now: (123) 456-7890</span>
          </div>

          {/* Social media icons */}
          <div className="flex items-center space-x-4">
            <SocialIcon url="https://linkedin.com/in/couetilc" />

            <SocialIcon url="https://facebook.com" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo and Home link */}
          <Link
            href="/"
            className="text-xl font-bold hover:text-blue-300 transition duration-300"
          >
            Electrician Service
          </Link>

          {/* Navigation Links */}
          <nav className="flex space-x-4">
            <Link
              href="/about"
              className="hover:text-blue-300 transition duration-300"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="hover:text-blue-300 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-blue-300 transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-300 transition duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
