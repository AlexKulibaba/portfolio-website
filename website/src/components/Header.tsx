"use client";

// ./src/app/components/Header.tsx
import Link from "next/link";
import { useState } from "react";
import { PhoneIcon, AtSymbolIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons for the menu

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <header className=" bg-blue text-white w-full fixed top-0 z-10">
        {/* Top bar */}
        <div className="bg-slate-900 text-white py-1">
          <div className="container mx-auto flex justify-between items-center px-6">
            {/* Call now button */}
            <div>
              <div
                className="inline-flex items-center px-4 py-1 border-white rounded-md hover:bg-white hover:text-blue-dark transition-colors cursor-pointer"
                onClick={() => copyToClipboard("0493 824 029")}
              >
                <PhoneIcon className="h-5 w-5  font-bold" />
                <span className="ml-2 font-bold">0493 824 029</span>
              </div>
              <div
                className="md:ml-2 inline-flex items-center px-4 py-1 border-white rounded-md hover:bg-white hover:text-blue-dark transition-colors cursor-pointer"
                onClick={() => copyToClipboard("alex.kulibaba@icloud.com")}
              >
                <AtSymbolIcon className="h-5 w-5  font-bold" />
                <span className="ml-2 font-bold">alex.kulibaba@icloud.com</span>
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex items-center space-x-4">
              <SocialIcon
                url="https://linkedin.com/in/couetilc"
                style={{ height: 40, width: 40 }}
              />

              {/* <SocialIcon url="https://facebook.com" /> */}
            </div>
          </div>
        </div>

        {/* Main header */}
        <header className="bg-white text-black py-4">
          <div className="container mx-auto flex items-center justify-between px-6">
            {/* Hamburger Menu Icon for Mobile */}
            <div className="md:hidden">
              <Bars3Icon className="h-6 w-6" onClick={toggleSidebar} />
            </div>
            {/* Logo and Home link */}
            <Link
              href="/"
              className="text-3xl font-bold hover:text-blue-300 transition duration-300"
            >
              [akk]
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex justify-center items-center space-x-4">
              {/* <Link
                href="/about"
                className="hover:text-blue-300 transition duration-300"
              >
                About Us
              </Link> */}
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
                className="p-2 py-2 rounded-md font-bold text-white transition duration-300 bg-black hover:bg-white hover:text-black border-2 border-black "
              >
                Get a Quote
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
            {/* <Link href="/about">About Us</Link> */}
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
