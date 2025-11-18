import React from "react";
import img from "../../assets/psych.jpg";
import therapy from "../../assets/psych.jpg"
import counseling from "../../assets/counsl.jpg";
import mentalHealth from "../../assets/work.jpg";
import Card from "../ui/Card"

const data =[
    {
                title: "Therapy Sessions",
                desc: "One-on-one sessions with licensed therapists to support mental well-being.",
                img: therapy,
              },
              {
                title: "Counseling Programs",
                desc: "Personalized counseling for individuals, couples, and families.",
                img: counseling
              },
              {
                title: "Mental Health Workshops",
                desc: "Group sessions on stress, anxiety, and emotional health.",
                img: mentalHealth
              }
]
const PsychologyService = () => {
  return (
    <div className="bg-transparent text-gray-200 mt-20">
      {/* Hero Section */}
      <section className="relative bg-transparent text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#52D3D8]">Psychology Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Compassionate mental health support tailored to your needs. Our psychology team is here
            to guide you through emotional and behavioral challenges with empathy and care.
          </p>
        </div>
      </section>

      {/* About Psychology */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="w-[100%] h-[500px]">
            <img
              src={img}
              alt="Psychology"
              className="rounded-xl shadow-lg h-[100%] w-[100%] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">About Our Psychology Department</h2>
            <p className="mb-4 text-gray-300">
              We provide confidential counseling, therapy, and mental health support to help you
              navigate life’s challenges. Our approach focuses on understanding your unique needs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Individual counseling</li>
              <li>Couples and family therapy</li>
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Stress and anxiety management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-transparent py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#52D3D8]">Our Psychology Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((service, index) => (
             <Card data={service} key={index}/>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-transparent text-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">Your Mental Health Matters</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-200">
          Take the first step toward better mental well-being — book a session with our psychology experts today.
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

export default PsychologyService;
