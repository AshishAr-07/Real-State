import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaBed } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Link from 'next/link';
export default function Footer() {
  return (
    <>
      {/* background footer */}
      <div className="py-10 mt-10 bg-[#0f172a]">
        {/* footer section    */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 w-full mx-auto px-5 md:px-0 md:w-3/4 py-10 text-[#c1cadb]">
          <div>
            <div className="flex justify-start items-center "><FaBed size={25} color="white" /><p className="pl-2 text-3xl text-white">Hously</p> </div>
            <p className="pt-4 text-sm">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
          </div>
          <div>
            <div className="text-xl text-white">
              Company
            </div>
            <div className="pt-4 flex justify-start items-center">
              <p> <IoIosArrowForward /> </p><p className="pl-3"><Link href="/about"> About</Link></p>
            </div>
            <div className=" flex justify-start items-center">
              <p> <IoIosArrowForward /> </p><p className="pl-3"><Link href="/Service">Service</Link></p>
            </div>
            <div className=" flex justify-start items-center">
              <p> <IoIosArrowForward /> </p><p className="pl-3">Pricing</p>
            </div>
            <div className=" flex justify-start items-center">
              <p> <IoIosArrowForward /> </p><p className="pl-3">Blog</p>
            </div>
          </div>
          <div>
            <div className="text-xl text-white">
              Useful Links
            </div>
            <div className="pt-4 flex justify-start items-center">
              <p> <IoIosArrowForward /> </p><p className="pl-3">Privacy Policy</p>
            </div>
            <div className=" flex justify-start items-center">
              <p> <IoIosArrowForward /> </p><p className="pl-3">Terms and Conditions</p>
            </div>
            <div className=" flex justify-start items-center">
              <p> <IoIosArrowForward /> </p><p className="pl-3"><Link href="/contact">Contact</Link></p>
            </div>

          </div>

          <div >
            <div className="text-xl text-white">
              Contact Details
            </div>
            <div className="pt-4 flex justify-start items-center">
              <p> <IoLocationSharp size={25} color="white" /></p><p className="pl-3">C/54 Northwest Freeway,
                Suite 558,
                Houston, USA 485 </p>
            </div>
            <div className="pt-4 flex justify-start items-center">
              <p> <MdMail size={25} color="white" /> </p><p className="pl-3">contact@gmail.com</p>
            </div>
            <div className="pt-4 flex justify-start items-center">
              <p> <FaPhoneAlt size={20} color="white" />
              </p><p className="pl-3">+91-985412367</p>
            </div>

          </div>

        </div>
        {/* footer copywright */}
        <div className="border-b-2 border-white-200 w-11/12 mx-auto  md:px-0 md:w-3/4">

        </div>
        <div className="py-4 w-11/12 mx-auto text-[#c1cadb] md:px-0 md:w-3/4">
          ©️2024Hously.Design with tailwindcss
        </div>
        {/* Copywright end */}
        {/* end */}
      </div>
      {/* footer bg end */}</>
  )
}
