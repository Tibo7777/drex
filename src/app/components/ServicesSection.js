"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Drone Mapping",
      description: "Monitor crops from the sky with precision.",
      image: "/images/service-drone-mapping.png",
    },
    {
      title: "IoT Sensors",
      description: "Track soil and water quality in real time.",
      image: "/images/service-iot.png",
    },
    {
      title: "AI Recommendations",
      description: "Get AI-powered crop advice for better yields.",
      image: "/images/service-ai.png",
    },
    {
      title: "Data Analytics",
      description: "Analyze soil and climate data efficiently.",
      image: "/images/service-analytics.png",
    },
  ];

  return (
    <section id="services" className="py-12 px-4 md:px-10 lg:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">Our Services</h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full mx-auto px-2 lg:px-0">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden flex flex-col justify-between">
            <div className="relative h-56 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4 flex flex-col justify-start h-28">
              <h3 className="text-lg font-semibold text-green-600 mb-1">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden mt-4 px-2">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.05}
          pagination={{ clickable: true }}
          navigation
          loop
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col justify-between">
                <div className="relative h-56 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 flex flex-col justify-start h-28">
                  <h3 className="text-lg font-semibold text-green-600 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Single Explore More Button */}
      <div className="flex justify-center mt-10">
        <Link href="/services">
          <button className="px-6 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">
            Explore More
          </button>
        </Link>
      </div>
    </section>
  );
}
