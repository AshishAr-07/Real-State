import React from 'react'

export default function Contact() {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto">
     
        {/* contact section */}
        <div className="my-10 py-10 md:my-20 md:py-20">
          <div className="text-center text-gray-900 font-bold  md:flex md:justify-center md:items-center  md:text-5xl text-4xl">
            <p >Have Questions ?</p> <p>Get in Touch!</p>
          </div>
          <div className="text-center pt-3  ">
            <p >A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
          </div>
          <div className="text-center pt-3 ">  <button className="border-black px-7 py-2 my-2 rounded-xl bg-[#15803D] text-white">Contact Us</button></div>
        </div>
        {/* end */}
      </div>
  )
}
