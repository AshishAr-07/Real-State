import React from 'react'

export default function About() {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto py-10">
    {/* About section */}

    <div className="grid grid-cols-1 gap-6  md:grid-cols-5  py-5 my-10 ">
      <div className="md:col-span-2" >
        <img src="tailbanner.png" className="rounded md:h-[54vh] "></img>
      </div>
      <div className=" text-xl  md:col-span-3 ">
        {/* <p className="text-4xl py-2">
          Efficency.
        </p>
        <p className="text-4xl py-2">
          Transparency.
        </p>
        <p className="text-4xl py-2">
          Control.
        </p>
        <p className=" py-2 text-[17px] ">Hously developed a platform for the Real Estate marketplace that allows buyers and sellers to easily
          execute a transaction on their own. The platform drives efficiency, cost transparency and control into
          the hands of the consumers. Hously is Real Estate Redefined.</p>
        <div className="py-4"><button className="border-black px-7 py-2 my-2 rounded-xl bg-[#15803D] text-white">Learn More</button></div> */}
        <div className="flex flex-col justify-start items-center  py-10">
          <div>
            <p className="text-5xl font-bold text-gray-900 py-2">
              Efficiency.<br></br>Transparency.<br></br>Control.
            </p>

            <p className=" py-2 text-[17px] ">Hously developed a platform for the Real Estate marketplace that allows buyers and sellers to easily
              execute a transaction on their own. The platform drives efficiency, cost transparency and control into
              the hands of the consumers. Hously is Real Estate Redefined.</p>
            <div className="py-4"><button className="border-black px-7 py-2 my-2 rounded-xl bg-[#15803D] text-white">Learn More</button></div>
          </div>

        </div>
      </div>

    </div>
    {/* end */}
  </div>
  )
}
