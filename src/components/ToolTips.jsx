import React from "react";
import {
  FaBell,
  FaFire,
  FaUserSecret,
  FaFax,
  FaDatabase,
  FaCashRegister,
  FaMicrophone,
  FaShieldAlt,
  FaBuilding,
  FaNetworkWired,
} from "react-icons/fa";

const IconDisplay = () => {
  const icons = [
    {
      icon: FaBell,
      name: "Alarm System",
      description: "24/7 Monitoring and Alert System",
    },
    {
      icon: FaFire,
      name: "Fire Detection",
      description: "Advanced Fire Detection & Prevention",
    },
    {
      icon: FaUserSecret,
      name: "Burglar Protection",
      description: "Anti-theft and Intrusion Detection",
    },
    {
      icon: FaFax,
      name: "Fax Services",
      description: "Digital Fax Integration Solutions",
    },
    {
      icon: FaNetworkWired,
      name: "Modern Infrastructure",
      description: "State-of-the-art Technology Solutions",
    },
    {
      icon: FaDatabase,
      name: "Data Management",
      description: "Secure Data Storage & Processing",
    },
    {
      icon: FaCashRegister,
      name: "Point of Sale",
      description: "Advanced POS Systems Integration",
    },
    {
      icon: FaBuilding,
      name: "Elevator Control",
      description: "Smart Elevator Management System",
    },
    {
      icon: FaMicrophone,
      name: "Voice Systems",
      description: "Voice Recognition & Communication",
    },
    {
      icon: FaShieldAlt,
      name: "Security Gate",
      description: "Automated Gate Security Control",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8  text-center">
          Supporting All Your POTS Replacement Needs.
        </h2>
        <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-4 gap-6">
          {icons.map((item, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                <item.icon className="text-4xl text-blue-400 mb-2" />

                {/* Tooltip */}
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm min-w-max">
                  {item.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                    <div className="border-solid border-t-gray-900 border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconDisplay;
