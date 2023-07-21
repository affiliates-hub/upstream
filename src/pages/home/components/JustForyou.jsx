import React from 'react';
import MainCard from '../../../components/maincard/MainCard';

const JustForyou = () => {
    let datas = []
    for (let i = 0; i < 30; i++) {
        let data = {
            id: i,
            name: 'title random',
            price: 50,
            ratings: 5,
            quality: 'premium',
            tranding: true,
            img: "img"

        }
        datas.push(data)
    }
    return (
        <div className='flex flex-wrap gap-5 items-center justify-center'>
            {
                datas.map(ele => <MainCard key={ele.id} data={ele}></MainCard>)
            }
        </div>
    );
};

export default JustForyou;