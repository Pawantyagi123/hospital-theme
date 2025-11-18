import React, { createContext, useState, useContext } from "react";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

  return (
    <AppointmentContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AppointmentContext.Provider>
  );
};

// Custom hook for easy access
export const useAppointment = () => useContext(AppointmentContext);
