"use client";

// ./src/app/components/Header.tsx
import Link from "next/link";
import { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons for the menu

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="fixed top-0 z-50 bg-blue text-white w-full">
        {/* Top bar */}
        <div className="bg-blue-dark text-white py-2">
          <div className="container mx-auto flex justify-between items-center px-6">
            {/* Call now button */}
            <div className="inline-flex items-center px-4 py-2 border-2 border-white rounded-md hover:bg-white hover:text-blue-dark transition-colors">
              <PhoneIcon className="h-5 w-5  font-bold" />
              <span className="ml-2 font-bold">Call Now: (123) 456-7890</span>
            </div>

            {/* Social media icons */}
            <div className="flex items-center space-x-4">
              <SocialIcon url="https://linkedin.com/in/couetilc" />

              <SocialIcon url="https://facebook.com" />
            </div>
          </div>
        </div>

        {/* Main header */}
        <header className="bg-blue text-white py-4">
          <div className="container mx-auto flex items-center justify-between px-6">
            {/* Hamburger Menu Icon for Mobile */}
            <div className="md:hidden">
              <Bars3Icon className="h-6 w-6" onClick={toggleSidebar} />
            </div>
            {/* Logo and Home link */}
            <Link
              href="/"
              className="text-xl font-bold hover:text-blue-300 transition duration-300"
            >
              Electrician Service
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex justify-center items-center space-x-4">
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
                className="p-4 py-2 rounded-md font-bold text-white transition duration-300 bg-vibrant-dark"
              >
                Get Started!
              </Link>
            </nav>

            {/* Close Sidebar Icon */}
            <div
              className={`absolute top-0 right-0 pt-4 pr-4 md:hidden ${
                isSidebarOpen ? "block" : "hidden"
              }`}
            >
              <XMarkIcon className="h-6 w-6" onClick={toggleSidebar} />
            </div>
          </div>
        </header>
        {/* Sidebar */}
        <div
          className={`fixed inset-0 bg-blue-500 z-50 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Sidebar content */}
          <XMarkIcon className="h-16 w-16 absolute" onClick={toggleSidebar} />
          <nav className="flex flex-col items-center space-y-4 p-4 text-[24px]">
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
