"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="relative flex flex-col justify-between items-center text-center text-white bg-cover bg-center w-screen"
      style={{
        backgroundImage: "url('/images/farm-bg.png')",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <p className="mb-8 text-white drop-shadow-md">
          Get in touch to see how DREX can optimize your agricultural operations.
        </p>
      </div>
    </section>
  );
}
