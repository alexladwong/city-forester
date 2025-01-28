"use client";

import React from "react";
import Image from "next/image";
import category from "@/data/category";

function Hero() {
  return (
    <div className="relative bg-gray-50">
      {/* Hero Background Image */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/cityscape.png"
          layout="fill"
          objectFit="cover"
          alt="Hero"
          className="absolute inset-0"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center text-center -mt-[180px] sm:-mt-[300px] lg:-mt-[330px] px-4">
        {/* Title */}
        <h2
          className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-extrabold text-white tracking-wide"
          style={{
            textShadow: "5px 3px 8px rgba(0, 0, 0, 0.8)",
            background: "linear-gradient(to right, #A2C6FFFF, #D4B9F3FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to City Tour
        </h2>

        {/* Subtitle */}
        <p
          className="mt-4 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-medium text-blue-100 tracking-wide"
          style={{
            textShadow: "3px 2px 5px rgba(0, 0, 0, 0.7)",
          }}
        >
          Discover the hidden gems of this city
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full px-4 sm:px-0">
          <div className="relative w-full max-w-lg mx-auto">
            <input
              type="text"
              className="w-full py-3 px-5 pr-12 rounded-md shadow-lg outline-blue-950 border border-gray-300 focus:outline-blue-700 focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-[1.02]"
              placeholder="Search for tours, attractions, or places..."
            />
            <button className="absolute top-1/2 right-3 -translate-y-1/2 bg-blue-800 rounded-md p-3 shadow-lg hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="w-6 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-10 flex flex-col justify-center items-center px-4">
      <h2 className="z-10 text-white font-semibold text-lg sm:text-xl bg-gradient-to-r from-blue-200 to-purple-500 text-transparent bg-clip-text">
        ...Or Browse by Categories
      </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 w-full max-w-3xl justify-items-center mt-6">
          {category.map((item, index) => (
            <div
            key={index}
            className="relative w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-lg hover:border-blue-500 hover:scale-110 border-2 border-transparent transition-transform duration-300"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
