"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const services = {
  "drone-mapping": {
    title: "Drone Mapping",
    description: "Monitor crops from the sky with precision. Our drones capture high-resolution imagery and create accurate maps for farm management.",
    image: "/images/service-drone-mapping.png",
  },
  "iot-sensors": {
    title: "IoT Sensors",
    description: "Track soil and water quality in real time. Gain insights to make smarter farming decisions.",
    image: "/images/service-iot.png",
  },
  "ai-recommendations": {
    title: "AI Recommendations",
    description: "Get AI-powered crop advice for better yields. Leverage predictive analytics for smarter farming.",
    image: "/images/service-ai.png",
  },
  "data-analytics": {
    title: "Data Analytics",
    description: "Analyze soil and climate data efficiently to improve your farm productivity.",
    image: "/images/service-analytics.png",
  },
  "drone-training": {
    title: "Drone Training",
    description: "Hands-on training for safe and effective drone use in agriculture.",
    image: "/images/service-training.png",
  },
  "crop-monitoring": {
    title: "Crop Monitoring",
    description: "Track crop growth and detect issues early with precision monitoring tools.",
    image: "/images/service-crop-monitoring.png",
  },
  "precision-irrigation": {
    title: "Precision Irrigation",
    description: "Optimize water usage with smart irrigation systems tailored to your farm.",
    image: "/images/service-irrigation.png",
  },
  "consulting": {
    title: "Consulting",
    description: "Expert consulting to help you digitalize and modernize your farm operations.",
    image: "/images/service-consulting.png",
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services[slug];

  if (!service) {
    return <p className="text-center mt-20 text-red-600">Service not found.</p>;
  }

  return (
    <section className="py-20 px-6 lg:px-20 max-w-4xl mx-auto">
      <Link href="/services" className="text-green-700 mb-6 block hover:underline">
        ← Back to Services
      </Link>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="relative h-72 w-full">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-green-700 mb-4">{service.title}</h1>
          <p className="text-gray-700 leading-relaxed">{service.description}</p>
        </div>
      </div>
    </section>
  );
}
