"use client";

import { useState } from 'react';
import Image from 'next/image';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center p-3 px-5">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
        <a href="/" className="flex items-center gap-2">
            <Image src="/logo1.png" width={90} height={50} alt="LOGO" />
            <h3 className="text-[23px] font-semibold text-blue-800 tracking-widest">TOUR</h3>
        </a>
        </div>


        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-blue-800 hover:text-blue-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <ul className="hidden md:flex gap-8 items-center">
          <li className="text-[18px] font-bold hover:text-blue-400 cursor-pointer">Home</li>
          <li className="text-[18px] font-bold hover:text-blue-400 cursor-pointer">About Us</li>
          <li className="text-[18px] font-bold hover:text-blue-400 cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start gap-4 p-4">
            <li className="text-[18px] font-bold hover:text-blue-400 cursor-pointer">Home</li>
            <li className="text-[18px] font-bold hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="text-[18px] font-bold hover:text-blue-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      )}
    </div>
   
  );
}

export default Header;
