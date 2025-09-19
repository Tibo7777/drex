"use client";

import Image from "next/image";

export default function HeroSection({ onExploreClick }) {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/drex-hero4.png"
          alt="Precision Agriculture with DREX"
          fill
          className="object-cover object-[center_40%] md:object-[center_50%] scale-100 md:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-lg md:text-2xl text-white max-w-2xl drop-shadow">
          We use drones, IoT sensors, and AI to improve farming efficiency and soil science.
        </p>
      </div>

      {/* Button at the bottom */}
      <div className="absolute bottom-16 w-full flex justify-center">
        <button
          onClick={onExploreClick}
          className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition"
        >
          Explore Solutions
        </button>
      </div>
    </section>
  );
}
