import React from "react";
import Card from "../ui/Card"

const data = [
              {
                title: "Heart Disease Screening",
                desc: "Early detection to reduce the risk of serious complications.",
                img: "https://media.gettyimages.com/id/1636511698/photo/close-up-of-a-doctor-examining-a-patient-on-a-hospital.jpg?s=612x612&w=0&k=20&c=DzxMWP4lmTvBWe0aG4lDTZcBUNXRltI8YGQ96_qczwY="
              },
              {
                title: "Echocardiography",
                desc: "Advanced ultrasound imaging to assess heart structure & function.",
                img: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2021/12/echocardiogram-doctor-patient-thumb.jpg"
              },
              {
                title: "Cardiac Catheterization",
                desc: "Minimally invasive procedure to diagnose and treat heart issues.",
                img: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/16832-cardiac-catheterization"
              }
            ]

const CardiologyService = () => {
  return (
    <div className="bg-black/50  text-gray-200 relative mt-20">
      {/* Hero Section */}
      <section className="relative  text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cardiology Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Expert heart care for a healthier, longer life. We specialize in prevention,
            diagnosis, and treatment of cardiovascular diseases.
          </p>
        </div>
      </section>

      {/* About Cardiology */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="w-[100%] h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlvbG9neXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Cardiology"
            className="rounded-xl shadow-lg h-[100%] w-[100%] object-cover"
          />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#52D3D8]">About Our Cardiology Department</h2>
            <p className="mb-4 text-gray-300">
              Our cardiology team provides advanced diagnostic and treatment services for
              patients with heart conditions. We focus on preventive care, early diagnosis,
              and state-of-the-art procedures.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Preventive heart health check-ups</li>
              <li>Cardiac stress tests & echocardiograms</li>
              <li>24/7 emergency cardiac care</li>
              <li>Personalized treatment plans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className=" py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#52D3D8]">Our Cardiology Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((service, index) => (
             <Card data={service} key={index}/>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 lg:px-24  text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Your Heart Deserves the Best Care</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-200">
          Schedule your appointment today and take the first step towards a healthier heart.
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

export default CardiologyService;
