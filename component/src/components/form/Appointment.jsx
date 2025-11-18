import React, { useState } from "react";
import { useAppointment } from "../../context/Context";
import hospitalLogo from "../../assets/logo.png";
import toast from "react-hot-toast";
import { LuLoaderCircle } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";

const AppointmentModal = () => {
  const { isOpen, setIsOpen } = useAppointment();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    medicalType: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      setTimeout(() => {
        console.log("Appointment Data:", formData);
        toast.success("Your appointment has been booked!");
        setIsOpen(false);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-black  border border-white/20 rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-center p-6 border-b border-white/20">
          <img
            src={hospitalLogo}
            alt="Hospital Logo"
            className="w-24 h-16 mr-4"
          />
          <h2 className="text-3xl font-bold text-[#52D3D8]">
            Book an Appointment
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl cursor-pointer"
          >
            <FaTimes/>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-white">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg outline-none bg-gray-500 border border-white/20 focus:ring-2 focus:ring-[#52D3D8]"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg outline-none bg-gray-500 border border-white/20 focus:ring-2 focus:ring-[#52D3D8]"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Mobile + Medical Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Mobile</label>
              <input
                type="tel"
                name="mobile"
                required
                pattern="[0-9]{10}"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 rounded-lg outline-none bg-gray-500 border border-white/20 focus:ring-2 focus:ring-[#52D3D8]"
                placeholder="Enter your 10-digit mobile number"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Medical Type</label>
              <select
                name="medicalType"
                required
                value={formData.medicalType}
                onChange={handleChange}
                className="w-full p-3 rounded-lg outline-none bg-gray-500 border border-white/20 focus:ring-2 focus:ring-[#52D3D8]"
              >
                <option value="">Select a department</option>
                <option value="Orthopedic">Orthopedic</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Pediatrician">Psychology</option>
                
              </select>
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 rounded-lg outline-none bg-gray-500 border border-white/20 focus:ring-2 focus:ring-[#52D3D8]"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Time</label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 rounded-lg outline-none bg-gray-500 border border-white/20 focus:ring-2 focus:ring-[#52D3D8]"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#52D3D8] hover:bg-[#3bb4b9] text-white font-semibold p-3 rounded-lg transition"
          >
            {loading ? (
              <div className="flex items-center gap-2 justify-center">
                <LuLoaderCircle className="animate-spin" size={24} />
                please wait...
              </div>
            ) : (
              "Confirm Appointment"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
