"use public";
import React, { ReactNode } from "react";
import Image from "next/image";

interface Place {
  [x: string]: ReactNode;
  name: string;
  formatted_address?: string;
  vicinity?: string;
  business_status?: string;
  rating?: number;
  user_ratings_total?: number;
}

const BASE_URL_PHOTO = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400"
function PlaceItem({ place }: { place: Place }) {
  // If the place is not yet loaded or is missing, display the loading state
  if (!place) {
    return (
      <div className="w-full border rounded-xl shadow-md p-6 flex justify-center items-center">
        <span className="text-gray-500 animate-pulse">Loading place data...</span>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border-[1.5px] border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Placeholder Image */}
      <div className="relative w-full h-[150px] bg-gray-100">
        <Image
          src={BASE_URL_PHOTO+"&photo_reference="+place?.photos[0]?.photo_reference+"&key="+process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}
          alt={`${place.name} image`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      {/* Place Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{place.name}</h3>
        {place.business_status && (
          <p className="text-sm text-gray-500">Status: {place.business_status}</p>
        )}

        {/* Ratings and Address */}
        <div className="flex items-center justify-between mt-3">
          {/* Rating Section */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-800">
              {place.rating || "N/A"} ({place.user_ratings_total || 0})
            </span>
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
              {place.formatted_address || place.vicinity || "Address not available"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceItem;
