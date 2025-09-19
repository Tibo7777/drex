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
      name: "Tiburce Ketounou",
      role: "Founder & CEO",
      img: "/images/team1.jpg",
      objectPosition: "top",
    },
    {
      name: "Elie PADONOU",
      role: "CTO",
      img: "/images/team2.jpg",
      objectPosition: "10% 30%", // push image slightly down
    },
    {
      name: "Esquilin HOUNDOFI",
      role: "Lead Engineer",
      img: "/images/team3.jpg",
      objectPosition: "center",
    },
    {
      name: "Sebastien KOUTA",
      role: "Operations Manager",
      img: "/images/team4.jpg",
      objectPosition: "10% 30%", // push image slightly down
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      <section className="relative bg-[color:var(--color-primary)] text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Drone Expertise Services (DREX) is revolutionizing agriculture with
          drone technology, IoT, and AI.
        </p>
      </section>

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

      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-[color:var(--color-primary)] mb-12">
          Meet Our Team
        </h2>

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
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mb-3 object-cover"
                  style={{ objectPosition: member.objectPosition }}
                />
                <h3 className="text-lg font-semibold text-[color:var(--color-primary)]">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mb-3 object-cover"
                style={{ objectPosition: member.objectPosition }}
              />
              <h3 className="text-lg font-semibold text-[color:var(--color-primary)]">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
