import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "./howitwork.css";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const HowItWorks = () => {
 const steps = [
  {
    number: 1,
    title: "Schedule An Appointment",
    description:
      "Begin your journey to better health by scheduling a consultation with PrimeCare Medical Clinic. Easily book online or by phone, with flexible appointment times available.",
    image:
      "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=1171&auto=format&fit=crop"
  },
  {
    number: 2,
    title: "Consultation",
    description:
      "Meet with our experienced medical professionals to discuss your health concerns and goals in a supportive and confidential environment.",
    image:
      "https://plus.unsplash.com/premium_photo-1682141106314-d471655e316b?w=800"
  },
  {
    number: 3,
    title: "Diagnostic Tests",
    description:
      "Undergo any necessary diagnostic tests, such as blood work, imaging, or screenings, to provide a clear understanding of your health status.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=687&auto=format"
  },
  {
    number: 4,
    title: "Personalized Treatment",
    description:
      "Receive a tailored treatment plan designed to meet your unique needs, using evidence-based practices and the latest medical advances.",
    image:
      "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?w=800"
  },
  {
    number: 5,
    title: "Therapy & Procedures",
    description:
      "Begin recommended treatments, therapies, or procedures under the guidance of our skilled medical team, ensuring safe and effective results.",
    image:
      "https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?q=80&w=1170&auto=format"
  },
  {
    number: 6,
    title: "Lifestyle & Wellness Guidance",
    description:
      "Receive expert advice on nutrition, exercise, and daily habits to support your recovery and improve your overall well-being.",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800"
  },
  {
    number: 7,
    title: "Progress Monitoring",
    description:
      "Regularly review your progress through follow-up appointments and adjustments to your treatment plan as needed.",
    image:
      "https://images.unsplash.com/photo-1599045118108-bf9954418b76?q=80&w=1074&auto=format"
  },
  {
    number: 8,
    title: "Ongoing Care",
    description:
      "Benefit from continuous support and check-ins to ensure your long-term health and prevent future issues.",
    image:
      "https://plus.unsplash.com/premium_photo-1661775601929-8c775187bea6?w=800"
  },
  {
    number: 9,
    title: "Community Health Programs",
    description:
      "Join workshops, health camps, and awareness programs to stay informed and connected with our wellness community.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800"
  }
];


  return (
    <section className="howitworks-container p-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-[#52D3D8] mb-8 text-center">
        <span className="text-white">Discover</span> How Medicare Works
      </h2>

      <Swiper
        effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    loop={steps.length > 3}
    slidesPerGroup={1}
    speed={1000}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    coverflowEffect={{
      rotate: 40,
      stretch: 0,
      depth: 120,
      modifier: 1.2,
      slideShadows: false,
      scale:1
    }}
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 24 },
      640: { slidesPerView: 2, spaceBetween: 32 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    }}
    modules={[EffectCoverflow, Autoplay]}
    className="w-full max-w-7xl overflow-hidden relative z-10"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={index}>
            <div className="card">
    <img src={step.image} alt={step.title} />
    <div className="card-body">
      <div className="text-sm font-semibold text-blue-500 mb-2">
        Step {step.number}
      </div>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HowItWorks;
