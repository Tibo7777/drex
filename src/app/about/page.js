"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutPage() {
  const team = [
  {
    name: "Tiburce KETOUNOU",
    role: "Co-Founder & Technical Director",
    img: "/images/team1.jpg",
    objectPosition: "top",
    linkedin: "https://www.linkedin.com/in/tiburce-ketounou127",
    email: "ketounoutiburce@gmail.com",
  },
  {
    name: "Elie PADONOU",
    role: "Co-Founder & Business Development Lead",
    img: "/images/team2.jpg",
    objectPosition: "center 30%",
    linkedin: "https://www.linkedin.com/in/elie-padonou-42b15190/",
    email: "padonouelie@gmail.com",
  },
  {
    name: "Esquilin HOUNDOFI",
    role: "Co-Founder & Field Specialist",
    img: "/images/team3.jpg",
    objectPosition: "center",
    linkedin: "https://www.linkedin.com/in/msc-esquilin-balt-houndofi-8937a71b9/",
    email: "ehoundofi12@gmail.com",
  },
  {
    name: "Sebastien KOUTA",
    role: "Co-Founder & Field Operation Lead",
    img: "/images/team4.jpg",
    objectPosition: "center 30%",
    linkedin: "https://www.linkedin.com/in/s%C3%A9bastien-kouta-80b897224/",
    email: "sbastienkouta@gmail.com",
  },
];


  const renderMember = (member, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
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
      <p className="text-gray-600 text-center mb-3">{member.role}</p>
      <div className="flex gap-4">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800" />
        </a>
        <a href={`mailto:${member.email}`}>
          <FaEnvelope className="text-gray-600 text-xl hover:text-gray-800" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

     {/* Hero Section */}
<section className="relative bg-[color:var(--color-primary)] text-white text-center">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="/images/about-hero.png"
      alt="Drone mapping farmland"
      className="w-full h-full object-cover"
      style={{
        objectPosition: "center top", // default for desktop
      }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-30"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 py-24 px-4">
    <h5 className="text-5xl font-bold mb-4">About Us</h5>
    <p className="text-lg max-w-3xl mx-auto">
      Drone Expertise Services (DREX) empowers agriculture in Africa with cutting-edge drone technology, IoT, and AI-driven insights for smarter, more sustainable farming.
    </p>
  </div>

  <style jsx>{`
    img {
        object-position: center -30%; /* pushes image up */

    }

    @media (max-width: 768px) {
      img {
        object-position: left center; /* Focus left on mobile */
      }
    }
  `}</style>
</section>


      {/* Vision & Mission */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-bold text-[color:var(--color-primary)] mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            To become a global leader in smart agriculture solutions by leveraging drones, IoT, and AI to ensure food security, climate resilience, and sustainable livelihoods.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[color:var(--color-primary)] mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To deliver innovative, accessible, and data-driven services that empower farmers, optimize agricultural productivity, and protect ecosystems.
          </p>
        </div>
      </section>

      {/* Core Values */}
<section className="py-6 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold text-center text-[color:var(--color-primary)] mb-12">
    Our Core Values
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
      {["Innovation", "Sustainability", "Excellence", "Impact"].map((value, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{value}</h3>
            <p className="text-gray-600">
              {value === "Innovation" &&
                "We use the latest drone, IoT, and AI technologies to revolutionize agriculture."}
              {value === "Sustainability" &&
                "We promote eco-friendly practices that preserve resources and fight climate change."}
              {value === "Excellence" &&
                "We deliver reliable, accurate, and professional solutions to every partner."}
              {value === "Impact" &&
                "We aim to transform communities through better yields, food security, and growth."}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
    {["Innovation", "Sustainability", "Excellence", "Impact"].map((value, i) => (
      <div
        key={i}
        className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
      >
        <h3 className="text-xl font-semibold mb-2">{value}</h3>
        <p className="text-gray-600">
          {value === "Innovation" &&
            "We use the latest drone, IoT, and AI technologies to revolutionize agriculture."}
          {value === "Sustainability" &&
            "We promote eco-friendly practices that preserve resources and fight climate change."}
          {value === "Excellence" &&
            "We deliver reliable, accurate, and professional solutions to every partner."}
          {value === "Impact" &&
            "We aim to transform communities through better yields, food security, and growth."}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Impact Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[color:var(--color-primary)] mb-6">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-[color:var(--color-primary)]">10+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[color:var(--color-primary)]">200+</h3>
            <p className="text-gray-600">Farmers Empowered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[color:var(--color-primary)]">500+</h3>
            <p className="text-gray-600">Hectares Monitored</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[color:var(--color-primary)]">5+</h3>
            <p className="text-gray-600">Partnerships</p>
          </div>
        </div>
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
              <SwiperSlide key={i}>{renderMember(member, i)}</SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map(renderMember)}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[color:var(--color-primary)] mb-4">
          Partner With Us
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          Join us in shaping the future of agriculture. Whether you are a farmer, policymaker, or investor, Drone Expertise Services is ready to collaborate with you.
        </p>
        <a
          href="mailto:info@droneexpertise.org"
          className="bg-yellow-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90"
        >
          Contact Us Today
        </a>
        <p className="mt-4 text-gray-600">Or call us at +229 01 54 41 97 81</p>
      </section>

      <Footer />
    </div>
  );
}
