import React, { useState } from "react";
import Image from "next/image";

const BASE_URL_PHOTO = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400";

function SideDrawer({ place, close }: { place: any; close: () => void }) {
  if (!place) return null;

   const [isLoading, setIsLoading] = useState(true);

   // Image onLoad event to set loading to false
   const handleImageLoad = () => {
    setIsLoading(false);
  };


  return (
      <div className="w-45% bg-white border-blue-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:border-blue-500 hover:scale-55 border-2 border-transparent ease-in-out">
      {/* Close Button */}
      <button
        className="absolute -top-4 right-1 bg-red-500 text-white font-bold text-[22px] w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:rotate-180 hover:scale-110 z-30"
        onClick={close}
      >
        X
      </button>
        {/* Image Placeholder or Loading Spinner */}
        <div className="relative w-full h-[150px] bg-gray-100 z-10 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          {/* {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
            </div>
          )} */}
          {/* Iframe Map */}
          <div>
            <Image
              src={`${BASE_URL_PHOTO}&photo_reference=${place?.photos?.[0]?.photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}`}
              alt={`${place.name} image`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
              onLoadingComplete={handleImageLoad}
            />
          </div>
          
        </div>

      <div className="p-6">
        {/* Overlay for Name */}
        <h3 className="text-lg font-semibold text-gray-800 truncate mt-8">{place.name}</h3>
        {place.business_status && (
          <p className="text-sm text-gray-500">Status: {place.business_status}</p>
        )}

        {/* Phone Number Box */}
        {place.formatted_phone_number && (
          <div className="mt-3 flex items-center gap-2 bg-black/60 text-white px-3 py-1 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5a4.5 4.5 0 014.5-4.5h0a4.5 4.5 0 014.5 4.5v0a4.5 4.5 0 01-4.5 4.5h0A4.5 4.5 0 013 8.5zM19 16.5c-.86-.86-1.86-1.29-3-1.29s-2.14.43-3 1.29l-.71.71A9.97 9.97 0 015 14v-2a9.97 9.97 0 01-1.71-5.29l.71-.71C5.86 5.14 6.86 4.71 8 4.71s2.14.43 3 1.29l.71.71A9.97 9.97 0 0119 10v2a9.97 9.97 0 011.71 5.29l-.71.71z" />
            </svg>
            <span className="text-sm font-medium">{place.formatted_phone_number}</span>
          </div>
        )}

        {/* Ratings and Address */}
        <div className="flex items-center justify-between mt-3">
          {/* Rating Section */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-sm font-medium text-gray-800">{place.rating || "N/A"}</span>
            
            {/* Human Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-3 0-6 1.5-6 4.5V20h12v-1.5c0-3-3-4.5-6-4.5zm0-2.5a3 3 0 110-6 3 3 0 010 6z" />
            </svg>

            <span className="text-sm font-medium text-gray-600">({place.user_ratings_total || 0})</span>
          </div>

          {/* Location Section */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-4.97-4.97-8.25-9-8.25-12.75a8.25 8.25 0 1 1 16.5 0c0 3.75-3.28 7.78-8.25 12.75z" />
            </svg>
            <span className="text-sm text-gray-600">
              {place.formatted_address || place.vicinity || "Address not available"}
            </span>
          </div>

          
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between p-6">
        {/* Get Directions Button */}
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.formatted_address || place.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-full hover:scale-105 transition-all"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            height="24" 
            viewBox="0 0 24 24" 
            width="22"
            fill="white"
          >
            <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
          </svg>
          <span>Get Directions</span>
        </a>

        {/* Share Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:scale-105 transition-all"
          onClick={() => navigator.share?.({ title: place.name, url: window.location.href })}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            height="24" 
            viewBox="0 0 24 24" 
            width="22"
            fill="white"  // Added fill="white" here
          >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
          </svg>
          <span>Share</span>
      </button>

      </div>
      {/* Map Iframe */}
      <div className="p-3">
          <iframe
            title="Place Map"
            className="w-full h-[200px] rounded-lg"
            height={250}
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}&q=${place.formatted_address}`}
          />
           
          </div>
    </div>
  );
}

export default SideDrawer;
