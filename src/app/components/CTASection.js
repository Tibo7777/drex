"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="relative flex flex-col justify-between items-center text-center text-white bg-cover"
      style={{
        backgroundImage: "url('/images/farm-bg.png')",
        backgroundPosition: "center bottom",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 black bg-opacity-50"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow py-24 px-6 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Transform Your Farm?
        </h2>
        <p className="mb-8">
          Get in touch to see how DREX can optimize your agricultural operations.
        </p>
      </div>

      {/* Button pinned to bottom */}
      <div className="relative z-10 mb-10">
        <Link href="/contact">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}
