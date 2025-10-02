// src/components/CardHeader.jsx (Updated File)

import React, { useState, useRef, useEffect } from "react";
import { MoreHorizontal } from "lucide-react";
import CardMenu from './CardMenu'; // <--- Import the new menu component

const CardHeader = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref to detect clicks outside the menu

  const toggleMenu = (e) => {
    e.stopPropagation(); // Stop click from propagating to the document listener immediately
    setIsMenuOpen(prev => !prev);
  };
  
  const closeMenu = () => setIsMenuOpen(false);

  // Effect to close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty array means this effect runs once on mount

  return (
    <div className="flex justify-between items-center p-5 border-b border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      
      {/* Container for the menu: position-relative is key! */}
      <div className="relative" ref={menuRef}> 
        <button 
          onClick={toggleMenu}
          className="text-gray-400 hover:text-indigo-500 p-1 rounded-full transition duration-150"
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
        >
          <MoreHorizontal size={24} />
        </button>
        
        {/* Conditional Rendering of the Menu */}
        {isMenuOpen && (
          <CardMenu 
            onClose={closeMenu}
            onActionClick={closeMenu} // Close the menu when any action is clicked
          />
        )}
      </div>
    </div>
  );
};

export default CardHeader;