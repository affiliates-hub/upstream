import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavActiveRoutes from '../../components/activeroutes/NavActiveRoutes';
import { GrMenu } from 'react-icons/gr';
import { RxCross2 } from 'react-icons/rx';

const Acount = () => {
    const [leftNav, setLeftNav] = useState(false)
    const toggleNav = () => {
        setLeftNav(!leftNav)
    }
    const closeNav = () => {
        setLeftNav(false)
    }
    const links = <>
        <NavActiveRoutes to={'/acount/profile'} toggleNav={closeNav}>Profile</NavActiveRoutes>
        <NavActiveRoutes to={'/acount/carts'} toggleNav={closeNav}>Carts</NavActiveRoutes>
        <NavActiveRoutes to={'/acount/settings'} toggleNav={closeNav}>Settings</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>Home</NavActiveRoutes>
    </>
    const adminLink = <>
        <NavActiveRoutes to={'/acount/profile'} toggleNav={closeNav}>Add device</NavActiveRoutes>
        <NavActiveRoutes to={'/acount/settings'} toggleNav={closeNav}>update device</NavActiveRoutes>
        <NavActiveRoutes to={'/acount/carts'} toggleNav={closeNav}>remove device</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>Trendin gadgets</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>Featured items</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>welcome slide</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>Add controll</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>welcome see more</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>web message</NavActiveRoutes>
    </>
    const nav = <>
        <div className='hidden  sticky h-screen w-96 top-0 bg-gray-100 text-center gap-2 px-3 py-3 lg:flex items-stretch flex-col'>
            {
                links
            }
        </div>

    </>
    const navsm = <>
        <div className={`z-50 sticky h-screen w-full sm:w-80 top-0 bg-gray-100 text-center gap-2 px-3 py-3 flex items-stretch flex-col ${leftNav ? '-translate-x-0' : '-translate-x-80'} duration-300`}>
            <div className='flex items-end justify-end text-xl'>

                <RxCross2></RxCross2>
            </div>
            {
                links
            }
        </div>

    </>
    return (
        <div className=' min-h-screen w-full flex gap-5 items-stretch relative'>
            {
                nav
            }
            <div className={`fixed w-full duration-300 z-30   h-screen bg-gray-500/50 ${leftNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={closeNav}>
                {
                    navsm
                }
            </div>
            <div className='w-full h-[200vh]'>
                <div className='h-12 top-0 text-xl fixed lg:hidden shadow bg-white w-full flex justify-between items-center px-5' >
                    <span className='text-xl font-semibold'>
                        Acount
                    </span>
                    <span className='border-2 p-2 rounded active:scale-90 duration-200'>
                        <GrMenu className='' onClick={toggleNav} />
                    </span>
                </div>
                <div title='nav abckup ' className='h-14 w-full'>

                </div>
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Acount;