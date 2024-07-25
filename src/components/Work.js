import React from 'react'

export default function Work() {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto py-10">
    {/* It work section */}
    <div className="mt-10 pt-10 ">
      <div className="text-center text-gray-900  text-5xl ">
        <p ><b>How it Works</b></p>
      </div>
      <div className="text-center pt-3  ">
        <p >A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 m-10 " >
      <div className="grid place-content-center p-4 ">
        <img src="house.png " className="w-16 h-16 my-8 mx-auto"></img>
        <p className="text-center text-xl mb-2">Evaluate Property</p>
        <p className="text-center">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
      </div>
      <div className="grid place-content-center p-4">
        <img src="briefcase.png " className="w-16 h-16 my-8 mx-auto"></img>
        <p className="text-center text-xl mb-2">Meeting with Agents</p>
        <p className="text-center">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
      </div>
      <div className="grid place-content-center p-4">
        <img src="key.png " className="w-16 h-16 my-8 mx-auto"></img>
        <p className="text-center text-xl mb-2">Close the Deal</p>
        <p className="text-center">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
      </div>
    </div>
    {/* end */}
  </div>
  )
}
