"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutPage() {
  const team = [
    {
      name: "Tiburce KETOUNOU",
      role: "Founder & Technical Director",
      img: "/images/team1.jpg",
      objectPosition: "top", // centré sur haut
    },
    {
      name: "Elie PADONOU",
      role: "Founder & Business Development Lead",
      img: "/images/team2.jpg",
      objectPosition: "center 30%", // décalé légèrement vers le bas
    },
    {
      name: "Esquilin HOUNDOFI",
      role: "Founder & Field Specialist",
      img: "/images/team3.jpg",
      objectPosition: "center", // centré
    },
    {
      name: "Sebastien KOUTA",
      role: "Founder & Field Operation Lead",
      img: "/images/team4.jpg",
      objectPosition: "center 30%", // décalé légèrement vers le bas
    },
  ];

  const renderMember = (member, index) => (
    <div
      key={index}
      className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center"
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-28 h-28 rounded-full mb-3 object-cover"
        style={{ objectPosition: member.objectPosition }}
      />
      <h3 className="text-lg font-semibold text-[color:var(--color-primary)] text-center">
        {member.name}
      </h3>
      <p className="text-gray-600 text-center">{member.role}</p>
    </div>
  );

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[color:var(--color-primary)] text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Drone Expertise Services (DREX) is revolutionizing agriculture with
          drone technology, IoT, and AI.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[color:var(--color-primary)] mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          We provide cutting-edge drone and IoT solutions to enhance crop
          monitoring, optimize resource management, and empower farmers with
          actionable insights for sustainable agriculture.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-[color:var(--color-primary)] mb-12">
          Meet Our Team
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={15}
            slidesPerView={1}
            className="relative"
          >
            {team.map((member, i) => (
              <SwiperSlide
                key={i}
                className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center"
              >
                {renderMember(member, i)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map(renderMember)}
        </div>
      </section>

      <Footer />
    </div>
  );
}
