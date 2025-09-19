"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  const testimonials = [
    { name: "Jean, Farmer", quote: "With DREX drones, I reduced pesticide use and increased my yields by 30%." },
    { name: "Amina, Agronomist", quote: "The IoT sensors gave us real-time soil data, saving us weeks of analysis." },
    { name: "Samuel, Farmer", quote: "Thanks to DREX, I improved irrigation efficiency and crop quality." },
    { name: "Fatima, Agronomist", quote: "The AI recommendations helped us plan planting cycles better." },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 md:px-10 lg:px-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">What Farmers Say</h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto px-2 lg:px-0">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-lg shadow h-full flex flex-col justify-between">
            <p className="italic text-gray-600 mb-4">"{t.quote}"</p>
            <p className="font-semibold text-green-600 mt-auto">- {t.name}</p>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden mt-6 px-2">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.05}
          pagination={{ clickable: true }}
          navigation
          loop
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 bg-gray-50 rounded-lg shadow flex flex-col justify-between text-center">
                <p className="italic text-gray-600 mb-4">"{t.quote}"</p>
                <p className="font-semibold text-green-600 mt-auto">- {t.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
