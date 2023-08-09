import React, { useState } from 'react';
import ShowCard from './ShowCard';

const ShowData = () => {
    const [allLinks, setAllLinks] = useState([]);
    // ===== gets data by brand=====
    const brandPhonesAll = (e) => {
        e.preventDefault();
        const form = e.target;
        const value = form.link.value;
        fetch(`http://localhost:1111/newbrand/${value}`).then(res => res.json()).then(data => {
            setAllLinks(data);
        })
    }
    return (
        <div>
            <form onSubmit={(e) => brandPhonesAll(e)} className='flex gap-5'>
                <input type="text" name='link' placeholder='enter link to get data' className='w-full input input-bordered input-info' />
                <button type='submit' className='btn btn-info'>fetch</button>
            </form>
            <div className='flex gap-2 flex-wrap my-4  bg-gray-100 rounded'>
                {
                    allLinks.map(ele => <ShowCard key={ele._id} data={ele}></ShowCard>)
                }
            </div>
        </div>
    );
};

export default ShowData;