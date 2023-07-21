import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const TrendyCard = ({ data }) => {
    return (
        <div className="flex flex-col gap-2 w-full bg-base-100 p-2 shadow-xl rounded flex-shrink-0 py-3">
            <div title='company name' className='flex justify-between items-center px-1 capitalize'>
                <p className='text-gray-500 text-sm font-semibold'>smart phone</p>
                <AiOutlineHeart className='cursor-pointer  text-red-500 active:scale-110 duration-200'></AiOutlineHeart>
            </div>
            <figure className='h-44 bg-gray-300 w-full object-cover'><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className=" flex flex-col gap-2">
                <div className=''>  <Rating
                    style={{ maxWidth: 90 }}
                    value={3}
                    readOnly
                /></div>
                <div className='flex justify-between capitalize text-sm font-semibold px-1'>
                    <div>
                        <h3 title='product name' className='text-gray-700'>samsung galaxy a10s</h3>
                    </div>
                    <p title='price'>$30</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Link className='active:scale-90 duration-200 bg-gray-100 capitalize flex items-center gap-3 hover:bg-gray-200 justify-center p-1 rounded'>see more <BsFillArrowRightCircleFill /></Link>
                    <div className='cursor-pointer bg-gray-100 capitalize flex items-center gap-3 hover:bg-gray-200 active:scale-90 duration-200 justify-center p-1 rounded'>
                        Add to cart
                        <BsFillCartFill />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendyCard;