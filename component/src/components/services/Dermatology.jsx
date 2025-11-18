import React from "react";
import img from "../../assets/derma.jpg";
import skinTreatment from "../../assets/skin.jpg";
import acneCare from "../../assets/acen.jpg";
import cosmeticDerm from "../../assets/cosme.jpg";
import Card from "../ui/Card.jsx";

const data = [
              { title: "Skin Treatments", desc: "Advanced therapies for healthy, glowing skin." , img: skinTreatment  },
              { title: "Acne Care", desc: "Effective solutions for acne and acne scars." , img: acneCare  },
              { title: "Cosmetic Dermatology", desc: "Enhance your appearance with expert cosmetic care." , img: cosmeticDerm  }
            ]

const DermatologyService = () => {
  return (
    <div className="bg-black/50 text-gray-200 mt-20">
      {/* Hero Section */}
      <section className="relative bg-transparent text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#52D3D8]">Dermatology Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Expert skin, hair, and nail care with advanced treatments tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* About Dermatology */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="w-[100%] h-[500px]">
            <img
              src={img}
              alt="Dermatology"
              className="rounded-xl shadow-lg h-[100%] w-[100%] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">About Our Dermatology Department</h2>
            <p className="mb-4 text-gray-300">
              Our dermatologists diagnose and treat a wide range of skin conditions, from acne to complex dermatologic diseases.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Comprehensive skin exams</li>
              <li>Acne and scar treatments</li>
              <li>Cosmetic dermatology</li>
              <li>Chronic skin condition management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-transparent py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#52D3D8]">Our Dermatology Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((service, index) => (
              <Card data={service} key={index}/>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-transparent text-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">Your Skin Deserves the Best</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-200">
          Schedule your dermatology appointment and get personalized care for healthy skin.
        </p>
        <button className="bg-white/50 text-[#52D3D8] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
          Book Appointment
        </button>
      </section>
    </div>
  );
};

export default DermatologyService;
