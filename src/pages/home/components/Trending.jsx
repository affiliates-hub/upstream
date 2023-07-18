import React from 'react';
import { Link } from 'react-router-dom';

const Trending = ({ data }) => {
    return (
        <div>
            <div className=" py-3 px-3 flex flex-col gap-5 w-full md:w-72 bg-base-100 p-2 shadow-xl rounded-md">
                <figure className='h-52 p-2 bg-gray-300 rounded-md object-cover'><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="py-3 flex flex-col gap-2">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-outline">Detaill</Link>
                        <div className="btn btn-outline">Add To Cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;