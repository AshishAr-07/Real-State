import React from 'react'

export default function Background() {
  return (
     <>
     {/* background image section */}
     <div className=" bg-[url('/8074.png')] grid grid-cols-1 md:grid-cols-3 py-20 bg-fixed bg-no-repeat bg-cover bg-right  opacity-80  ">
        <div className="text-center text-white pb-8 md:pb-0 "><p className="font-bold text-5xl">1548+</p><p className="text-3xl">Property Sells</p>
        </div>
        <div className="text-center text-white text-4xl pb-8 md:pb-0"><p className="font-bold text-5xl">25+</p><p className="text-3xl">Awards Gained</p>
        </div>
        <div className="text-center text-white text-4xl pb-8 md:pb-0"><p className="font-bold text-5xl">9+</p><p className="text-3xl">Years Experience</p>
        </div>
      </div>
       {/* end */}</> 
  )
}
