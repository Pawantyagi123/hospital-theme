import React from "react";
import img from "../../assets/pedia.jpg";
import newbornCare from "../../assets/new.jpg";
import immunizations from "../../assets/immun.jpg";
import childDevelopment from "../../assets/growth.jpg";
import Card from "../ui/Card"

const data = [
              { title: "Newborn Care", desc: "Specialized care for newborns to ensure healthy development." , img: newbornCare  },
              { title: "Immunizations", desc: "Comprehensive vaccination programs for all ages." , img: immunizations  },
              { title: "Child Development", desc: "Tracking and supporting your child’s growth milestones." , img: childDevelopment  }
            ];

const PediatricsService = () => {
  return (
    <div className="bg-black/50 text-gray-200 mt-20">
      {/* Hero Section */}
      <section className="relative bg-transparent text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#52D3D8]">Pediatrics Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Dedicated to the health and well-being of infants, children, and adolescents with compassionate, expert care.
          </p>
        </div>
      </section>

      {/* About Pediatrics */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="w-[100%] h-[500px]">
            <img
              src={img}
              alt="Pediatrics"
              className="rounded-xl shadow-lg h-[100%] w-[100%] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">About Our Pediatrics Department</h2>
            <p className="mb-4 text-gray-300">
              Our pediatricians provide comprehensive medical care for children of all ages, focusing on growth, development, and preventive health.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Routine checkups and physical exams</li>
              <li>Immunizations and preventive care</li>
              <li>Developmental assessments</li>
              <li>Chronic condition management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-transparent py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#52D3D8]">Our Pediatric Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((service, index) => (
              <Card data={service} key={index}/>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-transparent text-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">Healthy Kids, Happy Families</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-200">
          Schedule a visit with our pediatric experts to keep your child healthy and thriving.
        </p>
        <button className="bg-white/50 text-[#52D3D8] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
          Book Appointment
        </button>
      </section>
    </div>
  );
};

export default PediatricsService;
