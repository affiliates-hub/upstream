import React, { useState } from 'react';

const LazyManCopyPast = ({ id, name, lazymansLoad,addToDB }) => {
    const [visible, setVisible] = useState(true)
    const copy = () => {
        navigator.clipboard.writeText(id)
    }
    return (
        <div className={` justify-between w-full bg-gray-300 rounded p-3 items-center flex-col md:flex-row ${visible ? 'flex' : 'hidden'}`}>
            <div className='flex flex-col'>
                <span>Id : {id} </span>
                <span className='capitalize text-[16px] font-semibold'>name: {name}</span>
            </div>
            <div className='flex gap-3'>
                <button onClick={addToDB} className='btn btn-neutral'>Add to db</button>
                <button onClick={() => lazymansLoad(id)} className='btn btn-neutral'>lazy load</button>
                <button onClick={copy} className='btn btn-neutral'>copy</button>
                <button onClick={() => setVisible(false)} className='btn btn-error'>Done</button>

            </div>
        </div>
    );
};

export default LazyManCopyPast;