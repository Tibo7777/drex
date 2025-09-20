"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaSnapchatGhost
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-200 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h5 className="text-2xl font-bold text-white mb-3">DREX</h5>
          <p className="text-sm">
            Driving agricultural transformation in Africa with drones, IoT, and AI-powered precision farming solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:info@droneexpertise.org"
                className="hover:text-white transition"
              >
                info@droneexpertise.org
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+2290154419781"
                className="hover:text-white transition"
              >
                +229 01 54 41 97 81
              </a>
            </li>
            <li>Location: Cotonou, Benin</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><FaFacebookF size={20} className="hover:text-[#1877F2] transition" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={20} className="hover:text-[#E4405F] transition" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter size={20} className="hover:text-[#1DA1F2] transition" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube size={20} className="hover:text-[#FF0000] transition" /></a>
            <a href="#" aria-label="TikTok"><FaTiktok size={20} className="hover:text-black transition" /></a>
            <a href="#" aria-label="Snapchat"><FaSnapchatGhost size={20} className="hover:text-[#FFFC00] transition" /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-green-800 mt-8 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} DREX. All rights reserved.
      </div>
    </footer>
  );
}
