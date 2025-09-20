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
    slug: "crop-prediction",
    title: "Crop prediction",
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

      {/* Hero Section */}
      <section
        className="relative h-[500px] sm:h-[600px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/drex-hero7.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 px-6 max-w-3xl">
          <h5 className="text-4xl sm:text-5xl text-white font-bold mb-4 drop-shadow-lg">
            Empowering Agriculture with Drones, IoT & AI
          </h5>
          <p className="text-lg sm:text-xl mb-6 text-white drop-shadow-md">
            Explore our services to monitor crops, optimize irrigation, and get AI-powered insights for better yields.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-green-700 mb-12 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition flex flex-col h-full">
                {/* Image */}
                <div className="relative h-40 sm:h-52 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-green-600 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base flex-1">
                    {service.description}
                  </p>
                  <span className="text-yellow-500 mt-3 font-medium text-sm sm:text-base">
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
