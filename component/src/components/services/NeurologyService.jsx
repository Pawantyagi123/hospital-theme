import React from "react";
import img from "../../assets/neuro.jpg"
import mig from "../../assets/mig.jpg"
import neuro from "../../assets/neurodia.jpg"
import rehab  from "../../assets/rehab.jpg"
import Card from "../ui/Card"

const data = [
              {
                title: "Migraine Treatment",
                desc: "Personalized care to reduce pain and improve daily functioning.",
                img: mig,
              },
              {
                title: "Neurodiagnostic Testing",
                desc: "EEG, EMG, and nerve conduction studies for accurate diagnoses.",
                img: neuro
              },
              {
                title: "Stroke Care & Rehabilitation",
                desc: "Immediate treatment and long-term rehab for stroke recovery.",
                img: rehab
              }
            ]
            
const NeurologyService = () => {
  return (
    <div className="bg-black/50 text-gray-200 mt-20">
      {/* Hero Section */}
      <section className="relative bg-transparent text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#52D3D8]">Neurology Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Advanced care for brain, spine, and nervous system disorders. Our neurology team
            specializes in diagnosis, treatment, and long-term management of neurological
            conditions.
          </p>
        </div>
      </section>

      {/* About Neurology */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="w-[100%] h-[500px]">
          <img
            src={img}
            alt="Neurology"
            className="rounded-xl shadow-lg h-[100%] w-[100%] object-cover"
          />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">About Our Neurology Department</h2>
            <p className="mb-4 text-gray-300">
              Our neurology department offers comprehensive care for a wide range of neurological
              conditions. We combine advanced imaging, innovative treatments, and personalized care
              to improve quality of life for our patients.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Comprehensive neurological evaluations</li>
              <li>Advanced brain & spine imaging</li>
              <li>Epilepsy & seizure management</li>
              <li>Stroke prevention & rehabilitation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-transparent py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#52D3D8]">Our Neurology Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((service, index) => (
              <Card data={service} key={index}/>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-transparent text-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">Your Neurological Health Matters</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-200">
          Get expert diagnosis and treatment for neurological disorders — schedule an appointment
          today.
        </p>
        <button
          className="bg-white/50 text-[#52D3D8] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Book Appointment
        </button>
      </section>
    </div>
  );
};

export default NeurologyService;
