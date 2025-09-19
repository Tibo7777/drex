"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/drex-hero4.png"
          alt="Precision Agriculture with DREX"
          fill
          className="object-cover object-center md:object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
        <p className="text-base md:text-2xl text-white max-w-xs sm:max-w-lg md:max-w-2xl drop-shadow">
          We use drones, IoT sensors, and AI to improve farming efficiency and soil science.
        </p>
      </div>

      {/* Button at the bottom */}
      <div className="absolute bottom-8 md:bottom-16 w-full flex justify-center px-4">
        <Link href="/services">
          <button className="px-6 md:px-8 py-2 md:py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">
            Explore Solutions
          </button>
        </Link>
      </div>
    </section>
  );
}
