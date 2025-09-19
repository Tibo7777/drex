"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutSection() {
  const features = [
    {
      title: "Precision Agriculture",
      description:
        "We leverage drones and IoT devices to collect and analyze field data efficiently.",
    },
    {
      title: "AI-Powered Decisions",
      description:
        "Machine learning provides actionable insights for optimal crop management.",
    },
    {
      title: "Sustainable Practices",
      description:
        "Our solutions help farmers reduce costs, increase yields, and support climate-smart agriculture.",
    },
    {
      title: "Real-Time Monitoring",
      description:
        "Farmers get live updates on soil, water, and crop conditions for faster decision-making.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 text-center">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl font-bold text-green-700 mb-6">About DREX</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          Drone Expertise Services (DREX) is a pioneer in precision agriculture in Benin. We combine drones, IoT sensors, and AI to optimize crop selection, soil health, and sustainable farming.
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 mt-10 px-4 lg:px-0">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-10 px-2">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            loop
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-gray-50 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-green-600 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
