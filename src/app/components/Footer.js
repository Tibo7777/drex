"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-200 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-white mb-3">DREX</h2>
          <p className="text-sm">
            Improving farming productivity and sustainability through precision agriculture with drones, IoT, and AI in Benin.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#impact" className="hover:text-white transition">Impact</a></li>
            <li><a href="contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:contact@drex.com" className="hover:text-white transition">info@droneexpertise.com</a></li>
            <li>Phone: <a href="tel:+2290154419781" className="hover:text-white transition">+229 01 54 41 97 81 </a></li>
            <li>Location: Cotonou, Benin</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <FaFacebookF size={20} className="hover:text-[#1877F2] transition" />
            <FaInstagram size={20} className="hover:text-[#E4405F] transition" />
            <FaTwitter size={20} className="hover:text-[#1DA1F2] transition" />
            <FaYoutube size={20} className="hover:text-[#FF0000] transition" />
            <FaTiktok size={20} className="hover:text-black transition" />
            <FaSnapchatGhost size={20} className="hover:text-[#FFFC00] transition" />
          </div>
        </div>

      </div>

      <div className="border-t border-green-800 mt-8 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} DREX. All rights reserved.
      </div>
    </footer>
  );
}
