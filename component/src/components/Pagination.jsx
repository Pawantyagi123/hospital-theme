// Pagination.jsx
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const cardData = [
  { id: 1, title: "Nike Shoe 1", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop",price: "2000" },
  { id: 2, title: "Nike Shoe 2", image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: "1500" },
  { id: 3, title: "Nike Shoe 3", image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: "3000" },
  { id: 4, title: "Nike Shoe 4", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: "4500" },
  { id: 5, title: "Nike Shoe 5", image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",price: "2400" },
];

export default function Pagination() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsPerView = isMobile ? 1 : 3;
  const maxIndex = cardData.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Handle touch events for mobile sliding
  const handleTouchStart = (e) => {
    if (isMobile) {
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isMobile) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  // Handle mouse events for desktop sliding
  const handleMouseDown = (e) => {
    if (!isMobile) {
      setIsDragging(true);
      setMouseStart(e.clientX);
      e.preventDefault(); // Prevent text selection
    }
  };

  const handleMouseMove = (e) => {
    if (!isMobile && isDragging) {
      setMouseEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (!isMobile && isDragging) {
      setIsDragging(false);
      if (!mouseStart || !mouseEnd) return;
      
      const distance = mouseStart - mouseEnd;
      const isLeftDrag = distance > 50;
      const isRightDrag = distance < -50;

      if (isLeftDrag && currentIndex < maxIndex) {
        nextSlide();
      }
      if (isRightDrag && currentIndex > 0) {
        prevSlide();
      }
      
      // Reset mouse positions
      setMouseStart(0);
      setMouseEnd(0);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && isDragging) {
      setIsDragging(false);
      setMouseStart(0);
      setMouseEnd(0);
    }
  };

   useEffect(() => {
  if (!isAutoPlaying || !isMobile) return;

  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, 3000);

  return () => clearInterval(interval);
}, [isAutoPlaying,isMobile, maxIndex]);

  return (
       <div className="bg-gradient-to-br from-gray-50 to-white py-3 px-4 mt-10">
      <div className="max-w-7xl mx-auto relative">
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 px-2 sm:px-4 shrink-0"
            >
              {/* Your original card code untouched */}
              <div className="image-container">
                <img src={doctor.image} alt={doctor.name} />
                <div className="image-overlay">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mt-2">
                    {doctor.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-sky-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
