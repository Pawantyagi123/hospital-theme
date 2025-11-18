import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="min-h-screen py-12 px-4 md:px-16
        bg-transparent border-t-2 border-[#56cfd395]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-[#52D3D8] mb-4 drop-shadow-lg">
        Contact Us
      </h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        We’re here to help you with appointments, inquiries, or any other
        concerns. Our team at{" "}
        <span className="font-semibold text-[#52D3D8]">
          San Francisco Care Hospital
        </span>{" "}
        is ready to assist you.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Google Map */}
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-[#52D3D8]/40">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019899953654!2d-122.41941568468164!3d37.77492927975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2d0c6f8f%3A0xcca38c0f83f4f3b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1691767269123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info & Form */}
        <div>
          {/* Contact Details */}
          <div className="bg-white/5 backdrop-blur-md shadow-lg rounded-lg p-6 mb-8 border border-[#52D3D8]/30">
            <h2 className="text-2xl font-semibold text-[#52D3D8] mb-4">
              Get in Touch
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#52D3D8] text-xl" />
                <span>123 Health St, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#52D3D8] text-xl" />
                <a
                  href="tel:+14155552671"
                  className="hover:text-white transition"
                >
                  +1 (415) 555-2671
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#52D3D8] text-xl" />
                <a
                  href="mailto:info@sfcarehospital.com"
                  className="hover:text-white transition"
                >
                  info@sfcarehospital.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="bg-white/5 backdrop-blur-md shadow-lg rounded-lg p-6 space-y-4 border border-[#52D3D8]/30">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/40 border border-[#52D3D8]/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52D3D8] outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/40 border border-[#52D3D8]/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52D3D8] outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-black/40 border border-[#52D3D8]/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52D3D8] outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#52D3D8] hover:bg-[#3ebec4] text-black font-semibold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
