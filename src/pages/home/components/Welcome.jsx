import React from 'react';
import WelcomeCarsoule from '../../../components/welcome-carsoule/WelcomeCarsoule';

const Welcome = () => {
    return (
        <div className='grid grid-cols-3 gap-5 bg-gray-50 h-auto md:h-80 lg:h-96'>
            <div className='col-span-3 md:col-span-2 bg-slate-100 h-72 md:h-full'>
                <WelcomeCarsoule></WelcomeCarsoule>
            </div>
            <div className='col-span-3 md:col-span-1  sm:gap-5 h-40 sm:h-52 md:h-full flex md:flex-col'>
                <div className='h-full md:h-2/3 bg-slate-100 w-full sm:w-2/3 md:w-full flex items-center justify-center capitalize text-xl  font-semibold'>
                    your ad
                </div>
                <div className='h-full md:h-1/3 bg-slate-100 w-0 sm:w-1/3 md:w-full hidden sm:flex items-center justify-center'>
             
                    <button className='bg-gray-300 p-3 rounded'>See More</button>
             

                </div>
            </div>
        </div>
    );
};

export default Welcome;