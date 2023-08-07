import React, { useState } from 'react';

const CopyLink = ({ link }) => {
    const [visible, setVisible] = useState(true)
    const copy = () => {
        navigator.clipboard.writeText(link)
    }
    return (
        <div className={` justify-between w-full bg-gray-300 rounded p-3 items-center flex-col md:flex-row ${visible ? 'flex' : 'hidden'}`}>
            <span>Link : {link} </span>
            <div className='flex gap-3'>
                <button onClick={copy} className='btn btn-neutral'>copy</button>
                <button onClick={() => setVisible(false)} className='btn btn-error'>Done</button>

            </div>
        </div>
    );
};

export default CopyLink;