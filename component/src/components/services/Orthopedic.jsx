import React from "react";
import img from "../../assets/ortho.jpg";
import jointCare from "../../assets/joint care.jpg";
import fractureTreatment from "../../assets/fracture.jpg";
import sportsInjury from "../../assets/sport.jpg";
import Card from "../ui/Card";

const data = [
              { title: "Joint Care", desc: "Specialized treatments for knee, hip, and shoulder joints." , img: jointCare},
              { title: "Fracture Treatment", desc: "Expert fracture repair and post-injury rehabilitation." , img: fractureTreatment  },
              { title: "Sports Injury Care", desc: "Comprehensive recovery programs for athletes." , img: sportsInjury  }
            ]

const OrthopedicsService = () => {
  return (
    <div className="bg-black/50 text-gray-200 mt-20">
      {/* Hero Section */}
      <section className="relative bg-transparent text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#52D3D8]">Orthopedics Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Comprehensive bone, joint, and muscle care. Our orthopedics team provides expert treatment for injuries and chronic conditions.
          </p>
        </div>
      </section>

      {/* About Orthopedics */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="w-[100%] h-[500px]">
            <img
              src={img}
              alt="Orthopedics"
              className="rounded-xl shadow-lg h-[100%] w-[100%] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">About Our Orthopedics Department</h2>
            <p className="mb-4 text-gray-300">
              Our orthopedic specialists diagnose and treat conditions affecting bones, joints, muscles, and ligaments with advanced techniques.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Joint replacement surgery</li>
              <li>Fracture and trauma care</li>
              <li>Sports injury treatment</li>
              <li>Arthritis management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-transparent py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#52D3D8]">Our Orthopedic Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((service, index) => (
              <Card data={service} key={index}/>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-transparent text-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">Your Mobility is Our Priority</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-200">
          Get expert orthopedic care — book your consultation today.
        </p>
        <button className="bg-white/50 text-[#52D3D8] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
          Book Appointment
        </button>
      </section>
    </div>
  );
};

export default OrthopedicsService;
