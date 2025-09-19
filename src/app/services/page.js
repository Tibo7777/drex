"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    slug: "drone-mapping",
    title: "Drone Mapping",
    description: "Monitor crops from the sky with precision.",
    image: "/images/service-drone-mapping.png",
  },
  {
    slug: "iot-sensors",
    title: "IoT Sensors",
    description: "Track soil and water quality in real time.",
    image: "/images/service-iot.png",
  },
  {
    slug: "crop-selection",
    title: "Crop selection",
    description: "Get AI-powered crop advice for better yields.",
    image: "/images/service-ai.png",
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    description: "Analyze soil and climate data efficiently.",
    image: "/images/service-analytics.png",
  },
  {
    slug: "drone-training",
    title: "Drone Training",
    description: "Hands-on training for safe and effective drone use.",
    image: "/images/service-training.png",
  },
  {
    slug: "crop-monitoring",
    title: "Crop Monitoring",
    description: "Track growth stages and detect stress early.",
    image: "/images/service-crop-monitoring.png",
  },
  {
    slug: "precision-irrigation",
    title: "Smart Irrigation",
    description: "Optimize water usage with smart irrigation systems.",
    image: "/images/service-irrigation.png",
  },
  {
    slug: "consulting",
    title: "Consulting",
    description: "Expert advice to digitalize your farming operations.",
    image: "/images/service-consulting.png",
  },
];

export default function ServicesPage() {
  return (
    <React.Fragment>
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-green-700 mb-12 text-center">
          Our Services
        </h1>

        {/* Base = 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition flex flex-col">
                <div className="relative h-40 sm:h-52 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col">
                  <h2 className="text-lg sm:text-xl font-semibold text-green-600 mb-1">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base flex-1">
                    {service.description}
                  </p>
                  <span className="text-green-700 mt-3 font-medium text-sm sm:text-base">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}
