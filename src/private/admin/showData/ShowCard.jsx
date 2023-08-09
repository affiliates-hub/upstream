import { useState } from "react";
import Swal from "sweetalert2"


const ShowCard = ({ data }) => {
    const [visible, setVisible] = useState(true)
    const deleteById = () => {
        fetch(`http://localhost:1111/deletenewphone/${data._id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            if (data.deletedCount) {
                setVisible(false)
                Swal.fire(
                    'Succes',
                    'Data added to Database',
                    'success'
                )
            }
        }).catch(error => {
            if (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
            }
        })
    }

    const copy = () => {
        navigator.clipboard.writeText(data._id)
    }
    return (
        <div className={` justify-between w-full bg-gray-300 rounded p-3 items-center flex-col md:flex-row ${visible ? 'flex' : 'hidden'} `}>
            <div className='flex flex-col'>
                <span className='capitalize text-[16px] font-semibold'>brand: {data.brand}</span>
                <span className='capitalize text-[16px] font-semibold'>name: {data.model}</span>
                <span className='capitalize text-[16px] font-semibold'>id : {data._id}</span>
            </div>
            <button onClick={copy} className='btn btn-neutral mt-3'>copy id</button>
            <button onClick={deleteById} className='btn btn-error my-3'>delete this</button>
        </div>
    );
};

export default ShowCard;