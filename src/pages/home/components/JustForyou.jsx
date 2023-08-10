import React, { useContext } from 'react';
import MainCard from '../../../components/maincard/MainCard';
import { dataProvier } from '../../../private/provider/DataProvider';

const JustForyou = () => {
    const { forYou, loadmore } = useContext(dataProvier)
    return (
        <div className='flex flex-wrap gap-5 items-center justify-center col-span-5 xl:col-span-4'>
            <div className='w-full bg-gray-200 rounded-md h-12'></div>
            {
                forYou.map(ele => <MainCard key={ele._id} data={ele}></MainCard>)
            }
        </div>
    );
};

export default JustForyou;