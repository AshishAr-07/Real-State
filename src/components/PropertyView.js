import React from 'react'
import { LuShrink } from "react-icons/lu";
import { MdOutlineBathtub } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
export default function PropertyView() {
    return (


        <>
            {/* // image section */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {/* 1 column */}
                <div>
                    <img src='2.jpg ' className='w-full'></img>
                </div>


                {/* 2 column */}
                <div className='grid grid-rows-2 gap-2'>
                    <div className='grid grid-cols-2 gap-2'>
                        <img src='2.jpg' ></img>
                        <img src='2.jpg'></img>

                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <img src='2.jpg' ></img>
                        <img src='2.jpg'></img>

                    </div>
                </div>

            </div>
            {/* // image end */}

           <div className='max-w-screen-xl mx-auto py-6'>
             <div className='grid grid-cols-1 gap-4 md:grid-cols-2 py-4'>
                {/* column 1 */}
                <div >
                
                {/* rating part */}
                <div className="grid grid-cols-12">
                    <p className='text-xl'>Rating</p>
                  <p className='px-4'><IoStar color="#febf1c" size={25} /></p>
                  <p className='px-4'><IoStar color="#febf1c" size={25} /></p>
                  <p className='px-4'><IoStar color="#febf1c" size={25} /></p>
                  <p className='px-4'><IoStar color="#febf1c" size={25} /></p>
                  <p className='px-4'><IoStar color="#febf1c" size={25} /></p>     
         </div>
         {/* title and address part */}
                    <div className='flex justify-start items-center  ' >
                    <p className=" py-4 " >710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
                    </div>
                    <div className='flex justify-start items-center  ' >
                        <p ><IoLocationSharp size={25} /></p>
                        <p className=' px-2'>710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA</p>
                        </div>
{/* amenities part */}
                    <div className='border border-black-500 p-4 mt-6'>
                      
                    <div className="grid grid-cols-4  ">
                    <div className="flex justify-start items-center text-xl"><p>Amenities</p> </div>
                        <div className="flex justify-start items-center "><LuShrink size={25} /><p className="pl-2">8000 sqf</p> </div>
                        <div className="flex justify-start items-center"><FaBed size={25} /> <p className="pl-2">4 Beds</p> </div>
                        <div className="flex justify-start items-center "><MdOutlineBathtub size={25} /><p className="pl-2">4 Baths</p> </div>

                    </div>
                    </div>
                    {/* Description */}
                    <p className='mt-6 text-2xl'>
                        Description
                    </p>
                    <p className='py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.

                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                        <p className='py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.

Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
  <p className='py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.

                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                </div>
                {/* Column 2 */}
                <div className=''>
                <form className=" sticky top-2 border rounded border-black-500 p-10 ">
    <p className="text-4xl mb-5 bloack">Get in Touch!</p>
                <div class="mb-5">
                        <label for="text" class=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="bmb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mail@gmail.com" required />
                    </div>
                    
    
                    <div className='mb-5'>
                        <label for="message" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
                
                </div>
            </div>
           </div>
        </>

    )
}
