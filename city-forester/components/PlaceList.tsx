import React from 'react';
import PlaceItem from './PlaceItem';

interface Place {
  name: string;
  formatted_address?: string;
  vicinity?: string;
}

interface PlaceListProps {
  placeList: Place[];
}

function PlaceList({ placeList }: PlaceListProps) {
  return (
    <div className="px-[10px] md:px-[120px] pt-8">
      <h2 className="text-[20px] font-bold text-center m-4">Search Results</h2>
      
      {placeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeList.map((place, index) => (
            <PlaceItem key={index} place={place} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No places found. Try searching again!</p>
      )}
    </div>
  );
}

export default PlaceList;
