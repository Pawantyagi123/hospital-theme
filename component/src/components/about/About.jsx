import React from "react";
import "./about.css"

const About = () => {
  return (
    <section className="bg-transparent py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            alt="Hospital building"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
          <div className="absolute bottom-4 left-4 bg-[#52D3D8] text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium">
            20+ Years of Excellence
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white/80 mb-4">
            About <span className="text-[#52D3D8]">Our Hospital</span>
          </h2>
          <div className="para p-6 rounded-xl shadow-lg">
            <p className="text-white mb-4 leading-relaxed">
              At <strong>MediCare Hospital</strong>, we are dedicated to
              providing exceptional healthcare services with compassion,
              innovation, and excellence. Our team of highly skilled doctors,
              nurses, and staff members work tirelessly to ensure the best
              treatment outcomes for every patient.
            </p>
            <p className="text-white mb-4 leading-relaxed">
              Equipped with state-of-the-art medical technology and modern
              facilities, we offer a wide range of services including emergency
              care, surgery, diagnostics, and rehabilitation — all under one
              roof.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-[#52D3D8] font-bold text-lg">100+</h4>
              <p className="text-gray-600 text-sm">Specialized Doctors</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-[#52D3D8] font-bold text-lg">5000+</h4>
              <p className="text-gray-600 text-sm">Successful Treatments</p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 px-6 py-3 bg-[#52D3D8] text-white font-semibold rounded-lg shadow hover:bg-[#3bb4b9] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
