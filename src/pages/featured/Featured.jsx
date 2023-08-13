import React, { useEffect } from 'react';
import FeaturedItems from './FeaturedItems';

const Featured = () => {
    let datas = []
 
        for (let i = 0; i < 6; i++) {
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
        <div className='container'>
          <h2 className='text-center py-5 text-xl md:text-3xl font-semibold'>Featured Items</h2>
        <FeaturedItems data={datas}></FeaturedItems>
        </div>
    );
};

export default Featured;