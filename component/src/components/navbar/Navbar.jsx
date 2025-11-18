"use client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useAppointment } from "../../context/Context";
import logo from "../../assets/logo2.png";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { setIsOpen } = useAppointment();
  const [openPages, setOpenPages] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // can be used for scroll-based changes if needed
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      {/* Navbar container */}
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out
          w-full top-0 left-0 right-0
          bg-[#0f0e29]
          [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)]
          [background-size:24px_24px]
          shadow-lg py-4 border-b-2 border-white/20
          mx-auto px-6 flex items-center justify-between text-[#eaeaea]`}
      >
        {/* Logo */}

        <Link to={"/"} className="cursor-pointer flex items-center gap-2">
          <img src={logo} alt="logo" className="w-18 h-12" />
          <span className="text-2xl font-bold">MediCare</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-[15px] font-medium">
          {/* Home */}
          <Link
            to="/"
            className="hover:text-[#00aaff] transition flex items-center gap-1 link"
          >
            Home
          </Link>

          {/* Services */}
          <div className="relative group">
            <button className="relative link flex items-center gap-1 hover:text-[#00aaff] transition">
              Services
            </button>
            <div className="absolute left-0 mt-2 bg-[#111111] border border-white/10 shadow-lg rounded-lg py-2 w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <Link
                to="/service/cardiology"
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Cardiology
              </Link>
              <Link
                to="/service/neurology"
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Neurology
              </Link>
              <Link
                to="/service/psychology"
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Psychology
              </Link>
              <Link
                to="/service/orthopedic"
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Orthopedics
              </Link>
              <Link
                to="/service/pediatrics"
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Pediatrics
              </Link>
              <Link
                to="/service/dermatology"
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Dermatology
              </Link>
            </div>
          </div>

          <Link to="/blogs" className="hover:text-[#00aaff] transition link">
            Blogs
          </Link>

          {/* Case Studies */}
          <Link to="/case-studies" className="hover:text-[#00aaff] transition link">
            Case Studies
          </Link>

          {/* Contact */}
          <a
            href="#contact"
            className="hover:text-[#00aaff] transition link"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </a>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className="bg-[#52D3D8] hover:bg-[#11bac0] text-white px-5 py-2 rounded-full flex items-center gap-2 font-medium transition-all cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Book an Appointment
            {/* <FaArrowUpRightFromSquare /> */}
          </button>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-[#eaeaea] text-2xl"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 z-50
          bg-[#0f0e29]
          [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)]
          [background-size:24px_24px]
          rounded-b-xl shadow-lg px-6 py-4 transform transition-all duration-500 ease-in-out origin-top ${
            open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          } text-[#eaeaea]`}
      >
        <div className="flex flex-col gap-4">
          <Link to="/" className="hover:text-[#00aaff]" onClick={()=> setOpen(false)}>
            Home
          </Link>

          {/* Services */}
          <div>
            <button
              onClick={() => setOpenServices(!openServices)}
              className="flex items-center justify-between w-full text-left hover:text-[#00aaff] transition"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`mt-2 bg-[#111111]/50 border border-white/10 shadow-lg rounded-lg w-full transition-all duration-700 ease-in-out overflow-hidden ${
                openServices
                  ? "max-h-96 opacity-100 py-2"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              <Link
                to="/service/cardiology" onClick={()=> setOpen(false)}
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Cardiology
              </Link>
              <Link
                to="/service/neurology" onClick={()=> setOpen(false)}
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Neurology
              </Link>
              <Link
                to="/service/psychology" onClick={()=> setOpen(false)}
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Psychology
              </Link>
              <Link
                to="/service/orthopedic" onClick={()=> setOpen(false)}
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Orthopedics
              </Link>
              <Link
                to="/service/pediatrics" onClick={()=> setOpen(false)}
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Pediatrics
              </Link>
              <Link
                to="/service/dermatology" onClick={()=> setOpen(false)}
                className="block px-4 py-2 hover:bg-[#1b1b1b]"
              >
                Dermatology
              </Link>
            </div>
          </div>

          <Link to="/blogs" onClick={()=> setOpen(false)} className="hover:text-[#00aaff]">
            Blogs
          </Link>

          <Link to="/case-studies" onClick={()=> setOpen(false)} className="hover:text-[#00aaff]">
            Case Studies
          </Link>
          <a
            href="#contact"
            className="hover:text-[#00aaff]"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </a>

          <button
            className="bg-[#52D3D8] hover:bg-[#11bac0] text-white px-5 py-2 rounded-full flex items-center gap-2 font-medium mt-2 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Book an Appointment
            {/* <FaArrowUpRightFromSquare /> */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
