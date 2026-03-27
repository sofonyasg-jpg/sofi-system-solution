import React from 'react';
import { FaFacebook, FaTelegramPlane, FaRobot, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* ስለ ድርጅቱ */}
        <div>
          <h2 className="text-xl font-bold mb-4">Sofi System Solution</h2>
          <p className="text-gray-400">
            ጥራቱን የጠበቀ ዌብሳይት፣ ሞባይል አፕ እና ዘመናዊ ሶፍትዌሮችን በማልማት የድርጅትዎን ስኬት እናፋጥናለን።
          </p>
        </div>

        {/* ኮንታክት መረጃ */}
        <div>
          <h2 className="text-xl font-bold mb-4">ያግኙን</h2>
          <ul className="text-gray-400 space-y-2">
            <li><FaPhoneAlt className="inline mr-2" /> +251 947 35 95 47</li>
            <li><FaEnvelope className="inline mr-2" /> sofonyasg@gmail.com</li>
            <li>📍 Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        {/* ሶሻል ሚዲያ ሊንኮች */}
        <div>
          <h2 className="text-xl font-bold mb-4">ይከተሉን</h2>
          <div className="flex flex-col space-y-3">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/profile.php?id=61578429291197" 
              target="_blank" rel="noopener noreferrer"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              <FaFacebook className="mr-2" /> Facebook Page
            </a>

            {/* Telegram Channel */}
            <a 
              href="https://t.me/sofi_system_solution" 
              target="_blank" rel="noopener noreferrer"
              className="flex items-center hover:text-blue-400 transition-colors"
            >
              <FaTelegramPlane className="mr-2" /> Telegram Channel
            </a>

            {/* Information Bot */}
            <a 
              href="https://t.me/Sofi_System_Solution_INFObot" 
              target="_blank" rel="noopener noreferrer"
              className="flex items-center hover:text-green-400 transition-colors"
            >
              <FaRobot className="mr-2" /> Official Info Bot
            </a>
          </div>
        </div>

      </div>
      
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Sofi System Solution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;