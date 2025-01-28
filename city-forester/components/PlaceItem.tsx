import React from 'react';
import Image from 'next/image';

interface Place {
  name: string;
  formatted_address?: string;
  vicinity?: string;
}

function PlaceItem({ place }: { place: Place }) {
  return (
    <div className="w-full z-10 border-2 rounded-xl shadow-md overflow-hidden">
      {/* Placeholder Image */}
      <Image
        src="/placeholder.jpeg"
        alt={`${place.name} image`}
        width={200}
        height={80}
        className="w-full h-[150px] object-cover"
      />

      {/* Place Details */}
      <div className="p-4">
        <h3 className="text-[16px] font-bold text-gray-800 line-clamp-2">{place.name}</h3>
        
        {/* Address & Icons */}
        <div className="flex items-center gap-2 mt-3">
          {/* Icon 1 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.73 0-7-2.27-7-5v-2c0-2.73 2.27-5 7-5s7 2.27 7 5v2c0 2.73-2.27 5-7 5z"
            />
          </svg>
          {/* Icon 2 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17h2v-6h-2zm-2 0h2v-6h-2zm4 0h2v-6h-2zM5 9h14v2H5z"
            />
          </svg>
          {/* Address */}
          <h2 className="text-[12px] text-gray-600 line-clamp-2">
            {place.formatted_address || place.vicinity || 'Address not available'}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PlaceItem;
