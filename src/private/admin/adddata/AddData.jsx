import React, { useEffect, useState } from 'react';
import CopyLink from '../components/getAlldataCopyLink/CopyLink';
import Swal from 'sweetalert2';

const AddData = () => {
    const [allLinks, setAllLinks] = useState([]);
    const [detaillData, setDetaillData] = useState([])
    const buffer = {}
    const singleData = (e) => {
        e.preventDefault();
        const form = e.target;
        const value = form.link.value;
        fetch(`https://ecomerce-backend-one.vercel.app/scrapePhones?link=${value}`).then(res => res.json()).then(data => {
            setAllLinks(data)
        })
    }
    const detaill = (e) => {
        e.preventDefault();
        const form = e.target;
        const value = form.link.value;
        fetch(`https://ecomerce-backend-one.vercel.app/scrapePhoneDetaill?link=${value}`).then(res => res.json()).then(data => {
            const newObjectArray = Object.entries(data)
            setDetaillData(newObjectArray)
        })
    }

    const addToDB = () => {
        const datas = document.getElementsByClassName('field');
        for (let data of datas) {
            buffer[data.name ? data.name : 'extra'] = data.value
        }
        fetch('https://ecomerce-backend-one.vercel.app/addata', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(buffer)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
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

    return (
        <div className='p-5'>
            <form onSubmit={(e) => singleData(e)} className='flex gap-5'>
                <input type="text" name='link' placeholder='enter link to get data' className='w-full input input-bordered input-info' />
                <button type='submit' className='btn btn-info'>fetch</button>
            </form>
            <div className='flex gap-2 flex-wrap my-4 overflow-hidden h-[20rem] overflow-y-scroll bg-gray-100 rounded'>

                {
                    allLinks.map(ele => <CopyLink link={ele}></CopyLink>)
                }
            </div>
            <form onSubmit={(e) => detaill(e)} className='flex gap-5'>
                <input type="text" name='link' placeholder='Get Detaill data' className='w-full input input-bordered input-info' />
                <button type='submit' className='btn btn-info'>fetch</button>
            </form>
            <div className='flex gap-2 flex-wrap my-4 overflow-hidden h-[20rem] overflow-y-scroll bg-gray-100 rounded'>
                <form className='w-full p-3 flex gap-5 flex-col'>
                    {
                        detaillData.map(([key, value]) => {
                            return <>
                                {/* <p>'ol</p> */}
                                <div className=''>

                                    <label htmlFor={key}>{key}</label>
                                    <input type='text' name={key} placeholder={key} value={value} className='w-full input input-bordered input-info field' />
                                </div>


                            </>
                        })
                    }

                </form>
            </div>
            <button onClick={addToDB} className='bg-green-600 w-full p-3 rounded text-white font-semibold my-5 scale-100 active:scale-95 duration-100'>Add to database</button>
        </div>
    );
};

export default AddData;