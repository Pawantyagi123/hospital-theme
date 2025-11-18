import React from "react";
import { FaHeartbeat, FaBrain, FaUserMd, FaBone, FaChild, FaAllergies } from "react-icons/fa";

const services = [
  {
    icon: <FaHeartbeat className="text-4xl text-[#52D3D8]" />,
    title: "Cardiology",
    description:
      "Advanced cardiac care with cutting-edge diagnostics, treatments, and preventive measures for heart health.",
  },
  {
    icon: <FaBrain className="text-4xl text-[#52D3D8]" />,
    title: "Neurology",
    description:
      "Comprehensive neurological care for brain, spinal cord, and nervous system disorders.",
  },
  {
    icon: <FaUserMd className="text-4xl text-[#52D3D8]" />,
    title: "Psychology",
    description:
      "Expert counseling and therapy services to support mental well-being and emotional health.",
  },
  {
    icon: <FaBone className="text-4xl text-[#52D3D8]" />,
    title: "Orthopedics",
    description:
      "Specialized care for bones, joints, and muscles to restore mobility and relieve pain.",
  },
  {
    icon: <FaChild className="text-4xl text-[#52D3D8]" />,
    title: "Pediatrics",
    description:
      "Dedicated healthcare for infants, children, and adolescents in a friendly, caring environment.",
  },
    {
    icon: <FaAllergies className="text-4xl text-[#52D3D8]" />,
    title: "Dermatology",
    description:
      "Complete skin, hair, and nail care with advanced treatments for healthy, glowing skin.",
  },
];

const Services = () => {
  return (
    <section className="bg-transparent py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our <span className="text-[#52D3D8]">Services</span>
        </h2>
        <p className="text-white/80 mt-3 max-w-2xl mx-auto">
          We offer a wide range of medical specialties to ensure that our patients receive 
          comprehensive and compassionate care under one roof.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md shadow-[#52D3D8] hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-[#52D3D8] text-md leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
