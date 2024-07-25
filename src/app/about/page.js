import { FaHouseChimney } from "react-icons/fa6";
export default function about() {

    return (
        <>
          

   
 <div className=" bg-[url('/tailbanner.png')] bg-no-repeat bg-cover pt-10 pb-20">
 <div className="flex justify-center items-center w-4/5 mx-auto bg-white rounded p-5">
 <div className="w-full">
            <div className="flex items-center">
            <FaHouseChimney  size={20} />
              <p className="px-4 text-xl">Hously
                </p>   
            </div>
          </div>
          <div>
    <ul className="flex justify-center items-center text-[17px]">
        <li className="px-4">
            Home
        </li>
        <li  className="px-4">
           About
        </li>
        <li className="px-4">
           Buy
        </li>
        <li className="px-4">
           Sell
        </li>
        <li className="px-4">
           Contact
        </li>

    </ul>
 </div>
 </div>
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
        </>
    )

};
