import React from 'react'
import Navbar from "@/components/Navbar";
export default function Hero() {
  return (
<div className=" bg-[url('/tailbanner.png')] bg-no-repeat bg-cover pt-10 pb-20">
     <Navbar />
     <div className="flex justify-center items-center text-white font-bold text-5xl mt-[18vh]">
       Easy way to find your

     </div>
     <div className="flex justify-center items-center text-white text-5xl pt-4 font-bold">
       dream property

     </div>
     <div className="flex justify-center items-center text-white  pt-4 mb-[18vh] ">
       A great plateform to buy, sell and rent your properties without any agent or commisions.

     </div>
   </div>
  )
}
