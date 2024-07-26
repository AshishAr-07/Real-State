import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
export default function ContactDetails() {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 py-20 '>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <p><FaPhoneAlt size={50}  /></p>
            <p className='text-3xl'>Give us a Call</p>
            <p className='text-xl'>+91-7896542312</p>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <p><MdMail size={50}/></p>
            <p className='text-3xl'>Drop us a Line</p>
            <p className='text-xl'>contact@gmail.com


</p>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <p><IoLocationSharp size={50} /></p>
            <p className='text-3xl'>Visit our Office</p>
            <p className='text-xl'>C/54 Northwest Freeway,<br></br> Suite 558, Houston, USA 485</p>
        </div>

    </div>
    </>
  )
}
