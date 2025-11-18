import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/logo2.png"

export default function Footer() {
  return (
    <footer className="bg-[#0f0e29] text-white py-10 ">
      <div className=" px-6 mx-auto  flex flex-col md:flex-row justify-between flex-wrap gap-8">

        {/* Logo and About */}
        <div className="flex-1 min-w-[220px]">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-20 h-18"/>
          <h1 className="text-2xl font-bold text-[#52D3D8]">Medicare</h1>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis libero illo, sed molestiae ipsum.
          </p>
        </div>

        {/* Pages */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/blogs" className="hover:text-blue-400">Blogs</Link></li>
            <li><Link to="/case-studies" className="hover:text-blue-400">Case Studies</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

         <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/service/cardiolog" className="hover:text-blue-400">Cardiology</Link></li>
            <li><Link to="/service/neurology" className="hover:text-blue-400">Neurology</Link></li>
            <li><Link to="/service/psychology" className="hover:text-blue-400">Psychology</Link></li>
            <li><Link to="/service/orthopedic" className="hover:text-blue-400">Orthopedics</Link></li>
            <li><Link to="/service/pediatrics" className="hover:text-blue-400">Pediatrics</Link></li>
            <li><Link to="/service/dermatology" className="hover:text-blue-400">Dermatology</Link></li>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-xl text-[#52D3D8]" />
              <span>123 Health St, San Francisco, CA 94103</span>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-xl text-[#52D3D8]" />
              <span>info@sfcarehospital.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-xl text-[#52D3D8]" />
              <span>+1 (415) 555-2671</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#52D3D8]"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-300"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-white pt-4 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
}
