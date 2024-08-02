import React from 'react'
import { IoStar } from "react-icons/io5";

import { IoLocationSharp } from "react-icons/io5";
export default function Featured() {
  return (
   
        <div className=" max-w-screen-xl mx-auto py-10">
        {/* featured section */}
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-20 pb-10 ">
          <div className='border-2 border-gray-100 rounded-t-3xl hover:shadow-xl'>
            <Image src="2.jpg" className="rounded-t-3xl"></Image>
            <p className=" py-4 px-4 " >710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
           
           
           <div className=" mb-5 py-4 px-4">
              
              <div className='pb-5'><IoLocationSharp size={25} /></div>
              
            
              <div className='col-span-4'>$710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</div>
           
          </div>
            <div className="grid grid-cols-6 mb-5 py-4 px-4">
              
                <div>Price</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div>$450</div>
             
            </div>
            

          </div>
          <div className='border-2 border-gray-100 rounded-t-3xl hover:shadow-xl'>
            <Image src="2.jpg" className="rounded-t-3xl"></Image>
            <p className=" py-4 px-4 " >710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
           <div className='grid grid-cols-8 py-4 px-4 gap-6'>
           <p className='flex justify-start items-center '><IoLocationSharp size={25} /></p>
          <p className='col-span-7 font-light text-sm'>710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
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
            <Image src="2.jpg" className="rounded-t-3xl"></Image>
            <p className=" py-4 px-4 " >710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
           <div className='grid grid-cols-8 py-4 px-4 gap-6'>
           <p className='flex justify-start items-center '><IoLocationSharp size={25} /></p>
          <p className='col-span-7 font-light text-sm'>710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
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
