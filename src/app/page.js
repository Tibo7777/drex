"use client";

import { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CTASection from "./components/CTASection";

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Navbar across all pages */}
      <Navbar />

      {/* Hero Section with CTA */}
      <HeroSection onExploreClick={scrollToContact} />

      {/* About DREX */}
      <AboutSection />

      {/* Core Services */}
      <ServicesSection />

      {/* Call to Action */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  );
}
