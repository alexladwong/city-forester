"use client"

import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  // Fetching data from the server-side API
  const [placeList, setPlaceList]=useState([])
  useEffect(()=>{
    getPlaceList('Coffee Shop/Bars in Uganda');
  }, []);


  const getPlaceList = async (value:string) => {
    setPlaceList([]);
    try {
      const result = await fetch("/api/google-place-api?q="+value);
      const data = await result.json();
      console.log(data.resp.results);
      setPlaceList(data.resp.results);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  return (
    <div>
      <main >
       <Hero userInput={(value:string)=>getPlaceList(value)} />


      {placeList? <PlaceList placeList={placeList} />: null}
      </main>



      <footer className="row-start-3 flex gap-6 flex-wrap 
      items-center justify-center p-4 border-t border-gray-200
      mt-5 bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
      <a
        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/ap-kintu-alex-ladwong-8b5629101/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/file.svg" alt="File icon" width={26} height={26} />
        Learn More...
      </a>
      <a
        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline hover:underline-offset-4"
        href="https://github.com/alexladwong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/git.png" alt="Window icon" className="bg-white rounded-full" width={26} height={26} />
        For More Code Examples
      </a>
      <a
        className="flex items-center gap-2 text-gray-200 dark:text-gray-100 hover:underline hover:underline-offset-4"
        href="https://ladwongdevelopers.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/globe.svg" alt="Globe icon" width={26} height={26} />
        Go to my portfolio for more →
      </a>
    </footer>
    </div>
  );
}
