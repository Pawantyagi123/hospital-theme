import React  from "react";
import Team from "../team/Team";
import HowItWorks from "../howWorks/HowItWorks";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import { useAppointment } from "../../context/Context";
import AppointmentModal from "../form/Appointment";
import { useEffect } from "react";
import About from "../about/About";
import Services from "../services/Services";


const HeroSection = () => {
  const  {isOpen} = useAppointment()

  useEffect(()=>{
  if ( isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  },[isOpen])
  return (
    <>
    <div className="bg-gradient-to-tl from-black/10 via-blue-600/10 to-purple-700/30">
      <Home />
      <About/>
      <Team />
      <Services/>
      <HowItWorks />
      <div id="contact"><Contact/></div>
      
    </div>

    {
     isOpen && <AppointmentModal/>
    }
     </>
  );
};

export default HeroSection;
