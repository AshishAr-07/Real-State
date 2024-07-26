import React from 'react'
import { IoStar } from "react-icons/io5";
import { LuShrink } from "react-icons/lu";
import { MdOutlineBathtub } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
export default function Featured() {
  return (
   
        <div className=" max-w-screen-xl mx-auto py-10">
        {/* featured section */}
        <div className="text-center text-gray-900  text-5xl py-10 ">
          <p ><b>Featured Properties</b></p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-20 pb-10 ">
          <div className='border-2 border-gray-100 rounded-t-3xl hover:shadow-xl'>
            <img src="2.jpg" className="rounded-t-3xl"></img>
            <p className=" py-4 px-4 " >710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
           <div className='grid grid-cols-8 py-4 px-4 gap-6'>
           <p className='flex justify-start items-center '><IoLocationSharp size={25} /></p>
          <p className='col-span-7 font-light text-sm'>710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
           </div>
           
            <div className="grid grid-cols-3 px-4 py-4 ">
              <div className="flex justify-start items-center "><LuShrink size={25} /><p className="pl-2">8000 sqf</p> </div>
              <div className="flex justify-start items-center"><FaBed size={25} /> <p className="pl-2">4 Beds</p> </div>
              <div className="flex justify-start items-center "><MdOutlineBathtub size={25} /><p className="pl-2">4 Baths</p> </div>

            </div>
            <div className="grid grid-cols-2 mb-5 py-4 px-4">
              <div>
                <div>Price</div>
                <div>$450</div>
              </div>
              <div>
                <p>
                  Rating
                </p>
                <div className="grid grid-cols-5">
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  
                </div>
              </div>
            </div>

          </div>
          <div className='border-2 border-gray-100 rounded-t-3xl hover:shadow-xl'>
            <img src="2.jpg" className="rounded-t-3xl"></img>
            <p className=" py-4 px-4 " >710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
           <div className='grid grid-cols-8 py-4 px-4 gap-6'>
           <p className='flex justify-start items-center '><IoLocationSharp size={25} /></p>
          <p className='col-span-7 font-light text-sm'>710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
           </div>
           
            <div className="grid grid-cols-3 px-4 py-4 ">
              <div className="flex justify-start items-center "><LuShrink size={25} /><p className="pl-2">8000 sqf</p> </div>
              <div className="flex justify-start items-center"><FaBed size={25} /> <p className="pl-2">4 Beds</p> </div>
              <div className="flex justify-start items-center "><MdOutlineBathtub size={25} /><p className="pl-2">4 Baths</p> </div>

            </div>
            <div className="grid grid-cols-2 mb-5 py-4 px-4">
              <div>
                <div>Price</div>
                <div>$450</div>
              </div>
              <div>
                <p>
                  Rating
                </p>
                <div className="grid grid-cols-5">
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  
                </div>
              </div>
            </div>

          </div>
          <div className='border-2 border-gray-100 rounded-t-3xl hover:shadow-xl'>
            <img src="2.jpg" className="rounded-t-3xl"></img>
            <p className=" py-4 px-4 " >710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
           <div className='grid grid-cols-8 py-4 px-4 gap-6'>
           <p className='flex justify-start items-center '><IoLocationSharp size={25} /></p>
          <p className='col-span-7 font-light text-sm'>710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
           </div>
           
            <div className="grid grid-cols-3 px-4 py-4 ">
              <div className="flex justify-start items-center "><LuShrink size={25} /><p className="pl-2">8000 sqf</p> </div>
              <div className="flex justify-start items-center"><FaBed size={25} /> <p className="pl-2">4 Beds</p> </div>
              <div className="flex justify-start items-center "><MdOutlineBathtub size={25} /><p className="pl-2">4 Baths</p> </div>

            </div>
            <div className="grid grid-cols-2 mb-5 py-4 px-4">
              <div>
                <div>Price</div>
                <div>$450</div>
              </div>
              <div>
                <p>
                  Rating
                </p>
                <div className="grid grid-cols-5">
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  <p><IoStar color="#febf1c" size={22} /></p>
                  
                </div>
              </div>
            </div>

          </div>
         
        </div>
        
        {/* end */}
      </div>
   

  )
}
