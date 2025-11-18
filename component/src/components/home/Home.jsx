import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./home.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function App() {
  const slides = [
    {
      image: "https://plus.unsplash.com/premium_photo-1681966826227-d008a1cfe9c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Experienced Doctors",
      paragraph: 'Our highly qualified medical professionals bring years of expertise to provide the best care for every patient.'
    },
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Best Treatment",
       paragraph: 'We use advanced treatment methods and personalized care plans to ensure quick and effective recovery.'
    },
    {
      image: "https://www.shutterstock.com/image-photo/radiologist-consults-patient-before-undergoing-260nw-2480666789.jpg",
      text: "Modern Equipment",
      paragraph: 'Equipped with the latest technology and diagnostic tools to ensure accurate and efficient healthcare services.'
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1681995326134-cdc947934015?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "World-Class Facilities",
       paragraph: 'Comfortable, hygienic, and patient-friendly facilities designed to make your experience stress-free and smooth.'
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      // effect="fade"
      speed={2000}
      loop={true}
      // navigation
      pagination={{ clickable: true }}
      modules={[EffectFade, Navigation, Pagination,Autoplay]}
       autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            // pauseOnMouseEnter:true
          }}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-screen">
            <img
              src={slide.image}
              alt={slide.text}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#070f2bbd] via-black/40 to-transparent flex items-center justify-center flex-col gap-3 px-2">
             <h1 className="text-[#52D3D8] text-4xl font-bold text-center">{slide.text}</h1> {/* Soft green */}
<p className="text-[#E0E7FF] text-lg text-center tracking-wide">{slide.paragraph}</p> {/* Light lavender */}

            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
