import React from 'react'
import { FaHouseChimney } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div className="flex justify-center items-center w-4/5 mx-auto bg-white rounded-full py-6 px-8">
          <div className="w-full">
            <div className="flex items-center">
              <FaHouseChimney size={20} />
              <p className="px-4 text-xl">Hously
              </p>
            </div>
          </div>
          <div>
            <ul className="flex justify-center items-center text-[17px]">
              <li className="px-4">
                Home
              </li>
              <li className="px-4">
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
  )
}
