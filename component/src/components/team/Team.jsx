
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./team.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const doctors = [
  {
    name: "Dr. Ethan Smith",
    specialty: "Cardiologist",
    description:
      "Expert in diagnosing and treating heart-related conditions with over 15 years of experience.",
    image:
      "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Dr. Olivia Johnson",
    specialty: "Orthopedic Surgeon",
    description:
      "Specializes in joint replacement surgeries and sports injury treatments.",
    image:
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Dr. Sophia Williams",
    specialty: "Dermatologist",
    description:
      "Provides advanced skin care treatments and cosmetic dermatology services.",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Dr. Liam Brown",
    specialty: "Neurologist",
    description:
      "Focused on treating disorders of the nervous system and providing comprehensive neurological care.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Dr. Ava Davis",
    specialty: "Pediatrician",
    description:
      "Dedicated to children's health, from newborns to teenagers, with a gentle and caring approach.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Dr. Noah Martinez",
    specialty: "Dentist",
    description:
      "Expert in preventive dental care, cosmetic dentistry, and oral surgeries.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=60",
  },
];

export default function Team() {

  const fetchData = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products/')
      console.log(res.data?.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
fetchData()
  },[])
  return (
    <div className=" px-4 py-2">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#52D3D8] mb-8 text-center">
          <span className="text-white">Meet Our</span> Medical Experts
        </h2>

        <Swiper
          effect={"coverflow"}
          grabCursor
          centeredSlides
          speed={2000}
          loop
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 2,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1, // Mobile
            },
            640: {
              slidesPerView: 2, // Tablet
            },
            1024: {
              slidesPerView: 3, // Desktop
            },
          }}
          className="swiper_container"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="image-container">
                <img src={doctor.image} alt={doctor.name} />
                <div className="image-overlay">
                  <h3>{doctor.name}</h3>
                  <p className="font-semibold">{doctor.specialty}</p>
                  <p>{doctor.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls outside Swiper */}
        <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <FaArrowLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaArrowRight />
          </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
