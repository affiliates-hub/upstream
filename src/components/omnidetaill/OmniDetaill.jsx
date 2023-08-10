import React, { useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
const OmniDetaill = () => {
    const loaderData = useLoaderData()
    console.table(loaderData);
    let gridData = Object.entries(loaderData)
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [])
    return (
        <div className='container mx-auto  px-2'>
            <BsArrowLeft className='text-3xl mt-2 rounded cursor-pointer bg-gray-100 p-1' onClick={goBack} />
            <div className='grid grid-cols-5  gap-5 mt-2'>
                <div className='h-full col-span-5 lg:col-span-2 bg-gray-300 rounded '>
                    <img src={loaderData.img} className='w-full bg-slate-300 rounded aspect-[4/3] md:aspect-[4/2] lg:aspect-[4/3] object-cover' alt="" />
                </div>
                <div className='h-full col-span-5 lg:col-span-3 p-5 bg-gray-100 rounded flex  flex-col justify-between gap-2'>
                    <div>
                        <h1 className='text-xl font-semibold '>{loaderData.model}</h1>
                        <p>Price : {loaderData.price} Taka</p>
                    </div>
                    <div className=' text-[.8rem] text-gray-600 font-semibold capitalize flex flex-col gap-1'>
                        <h3 className='text-lg font-semibold'>Key feature</h3>
                        <p>brand: <span className='text-sm'>{loaderData.brand}</span></p>
                        <p>Processor: <span className='text-sm'>{loaderData.chip}</span></p>
                        <p>Ram: <span className='text-sm'>{loaderData.ram}</span></p>
                        <p>storage: <span className='text-sm'>{loaderData.storage}</span></p>
                        <p>launched: <span className='text-sm'>{loaderData.launch}</span></p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='capitalize text-gray-700 font-semibold'>Buy at best price from here </p>
                        <div className='flex flex-col text-center sm:flex-row gap-3'>
                        <Link className='text-indigo-500 inline-block bg-white hover:bg-indigo-500 hover:text-white font-semibold border-2 p-2 rounded-md duration-100 active:scale-90 capitalize'>Buy on Daraz </Link>
                        
                        <Link className='text-indigo-500 inline-block bg-white hover:bg-indigo-500 hover:text-white font-semibold border-2 p-2 rounded-md duration-100 active:scale-90 capitalize'>Buy on Amazon </Link>
                        

                        </div>

                    </div>

                </div>

            </div>
            <div className='w-full min-h-[30rem]   my-5'>
                <h3 className='text-lg md:text-2xl font-semibold underline underline-offset-8 underline-2 text-gray-700 decoration-gray-500 p-2'>Detaill description</h3>

                <div className="overflow-x-auto">
                    <table className=" w-full">
                        {/* head */}
                        <thead>
                            <tr className='bg-gray-200 '>
                                <th className='py-3'>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                gridData.map(ele => {
                                    return (
                                        <tr className='text-sm rounded md:text-base even:bg-gray-100 w-full'>
                                            <td className='p-2 py-5 md:py-3 capitalize'>{ele[0]}</td>
                                            <td>{ele[1]}</td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            <div className='min-h-[15rem] rounded w-full bg-gray-300'>
                comments
            </div>
        </div>
    );
};

export default OmniDetaill;