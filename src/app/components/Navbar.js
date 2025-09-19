"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* Mobile Hamburger (left on mobile) */}
        <button
          className="md:hidden absolute left-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo centered on mobile */}
        <a href="/" className="flex items-center mx-auto md:mx-0">
          {/*<img src="/images/logo.png" alt="DREX Logo" className="h-10 mr-3" />*/}
          <span className="font-bold text-green-700 text-lg">DREX</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-green-700 ml-auto font-medium">
          <li><a href="/" className="hover:text-green-900 transition">Home</a></li>
          <li><a href="/services" className="hover:text-green-900 transition">Services</a></li>
          <li><a href="/testimonials" className="hover:text-green-900 transition">Testimonials</a></li>
          <li><a href="/about" className="hover:text-green-900 transition">About</a></li>
          <li><a href="/contact" className="hover:text-green-900 transition">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-3 text-green-700 mt-2 font-medium shadow-md">
          <li><a href="/" className="hover:text-green-900 block">Home</a></li>
          <li><a href="/services" className="hover:text-green-900 block">Services</a></li>
          <li><a href="/testimonials" className="hover:text-green-900 block">Testimonials</a></li>
           <li><a href="/about" className="hover:text-green-900 block">About</a></li>
          <li><a href="/contact" className="hover:text-green-900 block">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
