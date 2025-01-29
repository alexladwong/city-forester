import React, { useState } from 'react';
import PlaceItem from './PlaceItem';
import SideDrawer from './SideDrawer';
import Skelton from './Skelton';

interface Place {
  name: string;
  formatted_address?: string;
  vicinity?: string;
}

interface PlaceListProps {
  placeList: Place[];
}

function PlaceList({ placeList }: PlaceListProps) {

    const [selectedPlace, setselectedPlace] = useState<any>([]);

  return (
    <div className="px-[10px] md:px-[120px] pt-8">
      {/* Title */}
      <h2 className="text-[20px] font-bold text-center m-4">Search Results</h2>

      {/* Place List Display */}
      {placeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeList.map((place: Place, index: number) => (
            <div className="z-10" key={index} 
            onClick={() => setselectedPlace(place)}>
              <PlaceItem place={place} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          Weak Internet Connection!<strong>Loading...</strong>
        </p>
      )}

      {/* Side Drawer */}
      {selectedPlace?.name ? (
        <div className="fixed h-[70%] top-1/2 right-0 transform -translate-y-1/3 z-20">
          <SideDrawer 
            place={selectedPlace}
            close={() => setselectedPlace([])} 
          />
        </div>
      ) : null}
      {placeList?.length===0?<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6,7,8,9,10].map((item,index) =>(
          <Skelton />
        ))}
      </div>:null}
    </div>
  );
}

export default PlaceList;
