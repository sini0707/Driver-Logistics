import React from 'react';
import { Camera, Phone, Mail } from 'lucide-react';
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-md">
      <div className="flex items-center">
      <FontAwesomeIcon
        icon={faTruckFast}
        size="2x" // Adjust size if necessary
        className="text-yellow-300 mr-3 drop-shadow-md"
      />
      <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-white hover:scale-110 transition-transform duration-300">
  Driver Logistics
</h1>

    </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center group">
          <Phone 
            size={20} 
            className="text-white mr-2 group-hover:rotate-12 transition-transform" 
          />
          <span className="text-white font-semibold group-hover:text-yellow-200 transition-colors">
            917736172777
          </span>
        </div>

        <div className="flex items-center group">
          <Mail 
            size={20} 
            className="text-white mr-2 group-hover:rotate-12 transition-transform" 
          />
          <span className="text-white font-semibold group-hover:text-yellow-200 transition-colors">
            itsupport@Driverlogistics.in
          </span>
        </div>

        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold 
                        hover:bg-white/40 transition-all duration-300 transform hover:scale-110">
          D
        </div>
      </div>
    </div>
  );
};

export default Header;