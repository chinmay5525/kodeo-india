import React from "react";
import "./FloatingWhatsApp.css"; // We'll add styles here
import WA from '../assets/WA.png'
const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="whatsapp-icon">
    <a href="https://wa.me/+447704406011" target="_blank" rel="noopener noreferrer">
      <img
        src={WA}
        alt="WhatsApp"
      />
    </a>
  </div>
  );
};

export default FloatingWhatsApp;
