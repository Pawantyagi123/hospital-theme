import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/hero/HeroSection";
import { AppointmentProvider } from "./context/Context";
import "./app.css"
import CardiologyService from "./components/services/Cardiology";
import NeurologyService from "./components/services/NeurologyService";
import PsychologyService from "./components/services/Psychology";
import OrthopedicsService from "./components/services/Orthopedic";
import PediatricsService from "./components/services/Pediatrics";
import DermatologyService from "./components/services/Dermatology";
import Blogs from "./components/blogs/Blog";
import ScrollToTop from "./components/ScrollTop";
import NotFound from "./components/notfound/NotFound";
import Layout from "./components/Layout";
import CaseStudies from "./components/case/CaseStudies";

function App() {
  return (
    <AppointmentProvider>
    <BrowserRouter>
     <ScrollToTop/>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<HeroSection />} />
        <Route path="/service/cardiology" element={<CardiologyService/>}/>
         <Route path="/service/neurology" element={<NeurologyService/>}/>
         <Route path="/service/psychology" element={<PsychologyService/>}/>
          <Route path="/service/orthopedic" element={<OrthopedicsService/>}/>
          <Route path="/service/pediatrics" element={<PediatricsService/>}/>
          <Route path="/service/dermatology" element={<DermatologyService/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/case-studies" element={<CaseStudies/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </AppointmentProvider>
  );
}

export default App;
