import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-colors duration-300 ${
        scrolled || isMenuOpen
          ? "bg-gray-900 text-gray-400"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse flex-shrink-0"
        >
          <span className="self-center text-sm md:text-lg lg:text-2xl font-semibold whitespace-nowrap text-white flex items-center">
            <span className="bg-red-700 text-white font-bold px-2 py-1 rounded-md mr-2">
              GORD&apos;S
            </span>
            AUTO REPAIR
          </span>
        </a>
        <div className="flex md:order-2 items-center gap-x-2 rtl:space-x-reverse">
          <a
            href="tel:604-875-1525"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <Phone className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">
              604-875-1525
            </span>
          </a>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex flex-col bg-gray-900" : "hidden"
          } w-full md:flex md:w-auto md:order-1 transition-colors duration-300`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium md:p-0 mt-4 rounded-lg md:mt-0 md:border-0 rtl:space-x-reverse">
            <li>
              <Link
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 md:px-3 text-yellow-400 md:p-0 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 md:px-3 text-white md:p-0 hover:text-gray-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 md:px-3 text-white md:p-0 hover:text-gray-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 md:px-3 text-white md:p-0 hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
