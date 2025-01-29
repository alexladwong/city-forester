"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Image from "next/image";




interface Place {
  name: string;
  formatted_address?: string;
  vicinity?: string;
  business_status?: string;
  rating?: number;
  user_ratings_total?: number;
  photos?: { photo_reference: string }[]; 
}


const BASE_URL_PHOTO =
  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";

function PlaceItem({ place }: { place: Place }) {
  // Track loading state for the image
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state for the entire component (like fetching data)
  if (!place) {
    return (
      <div className="w-full border rounded-xl shadow-md p-6 flex justify-center items-center">
        <span className="text-gray-500 animate-pulse">
          Loading place data...
        </span>
      </div>
    );
  }

  // Image onLoad event to set loading to false
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full bg-white border-gray-200 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:border-blue-500 hover:scale-105 border-2 border-transparent transition-transform duration-300 ease-in-out">
      {/* Image Placeholder or Loading Spinner */}
      <div className="relative w-full h-[150px] bg-gray-100 z-10 hover:shadow-lg transition-shadow duration-300 ease-in-out">
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
          </div>
        )}
        <Image
          src={`${BASE_URL_PHOTO}&photo_reference=${place?.photos?.[0]?.photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}`}
          alt={`${place.name} image`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
          onLoadingComplete={handleImageLoad}
        />
      </div>

      {/* Place Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {place.name}
        </h3>
        {place.opening_hours && (
          <p className="text-sm text-gray-500">
            Status: {place.open_now }
          </p>
        )}

        {/* Phone Number Box */}
      {place.formatted_phone_number && (
        <div className="absolute top-2 left-2 bg-black/60 text-white px-3 py-1 rounded-lg flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-red">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5a4.5 4.5 0 014.5-4.5h0a4.5 4.5 0 014.5 4.5v0a4.5 4.5 0 01-4.5 4.5h0A4.5 4.5 0 013 8.5zM19 16.5c-.86-.86-1.86-1.29-3-1.29s-2.14.43-3 1.29l-.71.71A9.97 9.97 0 015 14v-2a9.97 9.97 0 01-1.71-5.29l.71-.71C5.86 5.14 6.86 4.71 8 4.71s2.14.43 3 1.29l.71.71A9.97 9.97 0 0119 10v2a9.97 9.97 0 011.71 5.29l-.71.71z" />
          </svg>
          <span className="text-sm font-medium">{place.formatted_phone_number}</span>
        </div>
      )}

        {/* Ratings and Address */}
        <div className="flex items-center justify-between mt-3">
          {/* Rating Section */}
            <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-sm font-medium text-gray-800">
                {place.rating || "N/A"}
            </span>
            <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c3.18 0 6 2.82 6 6H6c0-3.18 2.82-6 6-6zm0-2c-1.77 0-3.22-1.45-3.22-3.22 0-1.77 1.45-3.22 3.22-3.22 1.77 0 3.22 1.45 3.22 3.22 0 1.77-1.45 3.22-3.22 3.22z" />
                </svg>
                <span className="text-sm font-medium text-gray-800">
                ({place.user_ratings_total || 0})
                </span>
            </div>
            </div>

          {/* Location Section */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.75c-4.97-4.97-8.25-9-8.25-12.75a8.25 8.25 0 1 1 16.5 0c0 3.75-3.28 7.78-8.25 12.75z"
              />
              <circle cx="12" cy="9" r="2.25" fill="currentColor" />
            </svg>
            <span className="text-sm text-gray-600">
              {place.formatted_address ||
                place.vicinity ||
                "Address not available"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceItem;
