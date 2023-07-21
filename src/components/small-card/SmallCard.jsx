import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const SmallCard = () => {
    return (
     
            <div className="grid grid-cols-5 gap-2 w-full  sm:w-96  bg-base-100 justify-evenly align-bottom p-2  border rounded flex-shrink-0 py-3">
            <figure className=' bg-gray-300 h-full
                 w-full col-span-2 object-cover  '><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className=" flex flex-col justify-between col-span-3 gap-2">
                    <div className='flex flex-col justify-between capitalize text-sm sm:font-semibold sm:px-1'>
                        <div title='company name' className='flex justify-between items-center px-1 capitalize'>
                            <p className='text-gray-500 text-sm font-semibold'>smart phone</p>
                            <AiOutlineHeart className='cursor-pointer  text-red-500 active:scale-110 duration-200'></AiOutlineHeart>
                        </div>
                        <div>
                            <h3 title='product name' className='text-gray-700'>samsung galaxy a10s</h3>
                        </div>
                        <p title='price'>$30</p>
                    </div>
                    <div className="flex gap-2">
                        <Link className='active:scale-90 duration-200 bg-gray-100 capitalize flex items-center gap-3 hover:bg-gray-200 justify-center p-2 rounded'><BsFillArrowRightCircleFill /></Link>
                        <div className='cursor-pointer bg-gray-100 capitalize flex items-center gap-3 hover:bg-gray-200 active:scale-90 duration-200 justify-center p-2 rounded'>
                         
                            <BsFillCartFill />
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default SmallCard;