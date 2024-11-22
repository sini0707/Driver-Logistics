import React from 'react';
import { Link } from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 py-4 px-6 flex justify-center items-center">
      <div className="flex items-center space-x-4 text-white">
        <a 
          href="/" 
          className="transition-all duration-300 hover:text-yellow-200 hover:scale-105 bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-yellow-200"
        >
          Home
        </a>
        <span className="text-white/50">|</span>
        <a 
          href="/contact" 
          className="transition-all duration-300 hover:text-yellow-200 hover:scale-105 bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-yellow-200"
        >
          Contact Us
        </a>
        <span className="text-white/50">|</span>
        <a 
          href="/system-config" 
          className="transition-all duration-300 hover:text-yellow-200 hover:scale-105 bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-yellow-200"
        >
          System Configuration
        </a>
      </div>
    </div>
  );
};

export default Footer;