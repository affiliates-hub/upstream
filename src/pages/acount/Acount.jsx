import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavActiveRoutes from '../../components/activeroutes/NavActiveRoutes';
import { GrMenu } from 'react-icons/gr';
import { RxCross2 } from 'react-icons/rx';
import { contextProvier } from '../../private/provider/Provider';

const Acount = () => {
    // const { userRole } = useContext(contextProvier)
    const userRole = {
        role: 'admin'
    }
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
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>Add device</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>update device</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>remove device</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>Trendin gadgets</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>Featured items</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>welcome slide</NavActiveRoutes>
        <NavActiveRoutes to={'/'} toggleNav={closeNav}>Add controll</NavActiveRoutes>
    </>
    return (
        <div className='h-screen w-full relative overflow-y-hidden flex'>
            <div title='large screen navbar' className='h-full w-80 bg-gray-100 hidden text-center px-3 py-3 lg:flex gap-2 lg:flex-col overflow-y-scroll'>
                {
                    links

                }
                <div className='bg-gray-300 text-gray-300 ' style={{ fontSize: '3px' }}>0</div>
                {
                    userRole?.role == 'admin' ? adminLink : ''
                }
            </div>
            <div title='main content area' className='w-full h-full relative overflow-y-scroll'>
                <div title='toggle for small screen navbar' className='lg:hidden flex justify-between items-center text-lg font-semibold h-14 w-full sticky top-0 px-4 bg-white shadow'>
                    <span>Acount</span>
                    <span className='border-2 rounded p-1 active:scale-90 duration-100 cursor-pointer' onClick={toggleNav}><GrMenu className='text-xl'></GrMenu></span>
                </div>
                <Outlet></Outlet>
            </div>
            {/* Fixed items for small page  */}
            <div title='side nav for small screen' className={`h-screen fixed z-50 w-full sm:w-80 bg-gray-100 text-center px-3 py-3 flex gap-2 flex-col overflow-y-scroll left-0 -translate-x-full duration-300 ${leftNav ? "translate-x-0" : ""}`}>
                <div className='flex text-2xl justify-end cursor-pointer'><RxCross2 onClick={closeNav}></RxCross2></div>
                {
                    links

                }
                <div className='bg-gray-300 text-gray-300 ' style={{ fontSize: '3px' }}>0</div>
                {
                    userRole?.role == 'admin' ? adminLink : ''
                }
            </div>
            <div title='nav overlay' className={`fixed w-full duration-300 z-30 h-screen bg-gray-500/50 ${leftNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={closeNav}>
            </div>
        </div >
    );
};

export default Acount;