// src/app/services/[slug]/page.js
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const services = {
  "drone-mapping": {
    title: "Drone Mapping",
    hero: "High-resolution aerial mapping for smarter farming decisions.",
    whatWeProvide: [
      "Capture detailed topographic and multispectral data.",
      "Identify crop stress, pest infestations, and waterlogging early.",
      "Generate precise field maps for planning and monitoring."
    ],
    howWeProvide: [
      "Field flight planning using best-practice mission parameters.",
      "Multispectral + RGB imaging and georeferenced data capture.",
      "Post-processing with orthomosaics, NDVI/vegetation indices, and 3D DEMs.",
      "Delivery of maps and PDF/online reports with actionable recommendations."
    ],
    benefit: "Reduce input costs and maximize yields with data-driven precision.",
    cta: "Request a Drone Mapping Demo",
    image: "/images/service-drone-mapping.png"
  },

  "iot-sensors": {
    title: "IoT Sensors",
    hero: "Real-time soil & water monitoring at your fingertips.",
    whatWeProvide: [
      "7-in-1 soil sensors measuring N, P, K, pH, temperature and moisture.",
      "Continuous water quality assessment for aquaculture and irrigation.",
      "Wireless gateway & cloud dashboards with instant alerts."
    ],
    howWeProvide: [
      "Sensor deployment across representative field points.",
      "Low-power wireless data uplink to cloud platform.",
      "Custom dashboards and alerting (SMS / email / push).",
      "Maintenance, calibration and seasonal sensor checks."
    ],
    benefit: "Eliminate guesswork — optimize irrigation, fertilization, and resource use.",
    cta: "Get Started with IoT Monitoring",
    image: "/images/service-iot.png"
  },

  "crop-prediction": {
    title: "Crop Prediction (AI-powered)",
    hero: "AI insights to choose the right crop, every season.",
    whatWeProvide: [
      "Machine learning models tailored to local agro-ecological zones.",
      "Real-time recommendations based on soil tests and climate history.",
      "Decision support with profitability and risk indicators."
    ],
    howWeProvide: [
      "Ingest soil lab results, historical yields and local climate data.",
      "Run ensemble ML models tuned to local conditions.",
      "Present ranked crop options and expected yields with confidence intervals."
    ],
    benefit: "Reduce risk and increase profitability with data-backed crop choices.",
    cta: "Discover Your Best Crop Match",
    image: "/images/service-ai.png"
  },

  "data-analytics": {
    title: "Data Analytics",
    hero: "Turn agricultural data into actionable intelligence.",
    whatWeProvide: [
      "Advanced analytics on soil, weather, drone & sensor data.",
      "Predictive models for yield forecasting and risk assessment.",
      "Visual dashboards for farmers, cooperatives and policymakers."
    ],
    howWeProvide: [
      "Centralize farm, satellite and sensor streams in one platform.",
      "Apply time-series and geospatial analytics to detect trends.",
      "Exportable reports and scheduled insights for operational planning."
    ],
    benefit: "Empower decisions with reliable, easy-to-understand insights.",
    cta: "Explore Analytics Solutions",
    image: "/images/service-analytics.png"
  },

  "drone-training": {
    title: "Drone Training",
    hero: "Build skills for the future of smart agriculture.",
    whatWeProvide: [
      "Hands-on flight training with agricultural drones.",
      "Instruction on safety, regulations and data collection best practices.",
      "Practical sessions covering mission planning and payload use."
    ],
    howWeProvide: [
      "Modular curriculum: theory + simulator + practical flights.",
      "Field exercises on mapping, photogrammetry and multispectral capture.",
      "Assessment and certification for operators."
    ],
    benefit: "Become a certified drone operator and boost your operational capacity.",
    cta: "Enroll in Training",
    image: "/images/service-training.png"
  },

  "crop-monitoring": {
    title: "Crop Monitoring",
    hero: "Continuous monitoring for healthier, more resilient crops.",
    whatWeProvide: [
      "Regular aerial surveys combined with IoT sensor readings.",
      "Early detection of stress, pests and diseases.",
      "Growth-stage reports and intervention recommendations."
    ],
    howWeProvide: [
      "Scheduled drone missions and automated sensor sampling.",
      "Image analytics (NDVI, EVI) and anomaly detection pipelines.",
      "Actionable alerts via dashboard and recommended treatments."
    ],
    benefit: "Act before problems escalate — protect your yield and income.",
    cta: "Start Monitoring Today",
    image: "/images/service-crop-monitoring.png"
  },

  "precision-irrigation": {
    title: "Precision Irrigation",
    hero: "Save water, boost productivity with intelligent irrigation.",
    whatWeProvide: [
      "Automated irrigation scheduling based on real-time soil moisture.",
      "Smart drip and sprinkler integrations for precision water delivery.",
      "Water-use reporting and pump control optimization."
    ],
    howWeProvide: [
      "Deploy moisture sensors and connect to irrigation controllers.",
      "Automate schedules using sensor thresholds + weather forecasts.",
      "Tune system for crop needs, soil type and local climate."
    ],
    benefit: "Increase yields while conserving water resources and energy.",
    cta: "Optimize Your Irrigation",
    image: "/images/service-irrigation.png"
  },

  "consulting": {
    title: "Consulting",
    hero: "Expert guidance to digitalize your farming.",
    whatWeProvide: [
      "Customized farm assessments and implementation roadmaps.",
      "Technology selection, pilot programs and scaling support.",
      "Policy & sustainability advisory for organizations and cooperatives."
    ],
    howWeProvide: [
      "On-site diagnostics and stakeholder workshops.",
      "Tailored digital transformation plans and KPIs.",
      "Implementation support, monitoring and capacity building."
    ],
    benefit: "Achieve long-term productivity and resilience with expert support.",
    cta: "Book a Consultation",
    image: "/images/service-consulting.png"
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug;
  const service = services[slug];

  if (!service) {
    return (
      <div className="py-20 px-6 text-center">
        <p className="text-red-600 font-semibold">Service not found.</p>
        <p className="text-gray-600 mt-2">Please check the URL or return to the services list.</p>
        <div className="mt-6">
          <Link href="/services" className="text-green-700 hover:underline">← Back to Services</Link>
        </div>
      </div>
    );
  }

  // sanitized tel for links
  const telHref = "tel:+2290154419781";
  const mailHref = `mailto:info@droneexpertise.org?subject=${encodeURIComponent("Request: " + service.title)}`;

  return (
    <section className="py-20 px-6 lg:px-20 max-w-5xl mx-auto">
      <Link href="/services" className="text-green-700 mb-6 inline-block hover:underline">
        ← Back to Services
      </Link>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Hero Image */}
        <div className="relative h-72 w-full">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-green-700 mb-3">{service.title}</h1>
          <p className="text-lg text-gray-800 mb-6">{service.hero}</p>

          {/* What We Provide */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-green-700 mb-2">What we provide</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {service.whatWeProvide.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* How we provide it */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-green-700 mb-2">How we provide it</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {service.howWeProvide.map((step, i) => <li key={i}>{step}</li>)}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-6 bg-green-50 p-4 rounded">
            <h3 className="font-semibold text-green-800 mb-2">Benefit</h3>
            <p className="text-gray-700">{service.benefit}</p>
          </div>

          {/* CTA */}
          <div className="mb-6">
            <a
              href={mailHref}
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600 transition"
            >
              {service.cta}
            </a>
            <Link href="/contact" className="ml-4 text-sm text-gray-600 hover:underline">Or use our contact form</Link>
          </div>

          {/* Direct contact lines */}
          <div className="border-t pt-4 text-gray-700">
            <p className="mb-1">📧 <a href="mailto:info@droneexpertise.org" className="text-green-700 hover:underline">info@droneexpertise.org</a></p>
            <p>📞 <a href={telHref} className="text-green-700 hover:underline">+229 01 54 41 97 81</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
