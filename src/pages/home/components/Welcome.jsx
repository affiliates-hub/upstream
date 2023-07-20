import React from 'react';

const Welcome = () => {
    return (
        <div className='grid grid-cols-3 gap-5 bg-gray-50 h-auto md:h-80 lg:h-96'>
            <div className='col-span-3 md:col-span-2 bg-gray-500 h-72 md:h-full'></div>
            <div className='col-span-3 md:col-span-1  sm:gap-5 h-40 sm:h-52 md:h-full flex md:flex-col'>
                <div className='h-full md:h-2/3 bg-gray-400 w-full sm:w-2/3 md:w-full'>
                </div>
                <div className='h-full md:h-1/3 bg-gray-400 w-0 sm:w-1/3 md:w-full'>

                </div>
            </div>
        </div>
    );
};

export default Welcome;