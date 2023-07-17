import { Link } from "react-router-dom";

import { FaMagnifyingGlass, } from 'react-icons/fa6';
import { FaRegUserCircle } from 'react-icons/fa';
import { GrMenu } from 'react-icons/gr';
import { RxCross2 } from 'react-icons/rx';
import { useState } from "react";
const Navbar = () => {
    const [miniserch, setMiniserch] = useState(false)
    const [leftNav, setLeftNav] = useState(false)
    const toggleSerch = () => {
        setMiniserch(!miniserch)
    }
    const toggleNav = () => {
        setLeftNav(!leftNav)
        setMiniserch(false)


    }


    let links =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>pants</Link></li>
            <li><Link to={'/contact'}>T-shirts</Link></li>
            <li><Link to={'/contact'}>Others</Link></li>
        </>

    return (
        <>
            <div className="flex justify-between items-center w-full h-12 border shadow fixed p-1 md:p-2 lg:p-4 xl:p-6 2xl:p-8 bg-white z-50">
                <div title="logo " className="h-10 w-[90px] lg:w-[100px] 2xl:w-[120px] bg-gray-300 rounded"></div>
                <div title="search" className="hidden md:block">
                    <form className="flex gap-2">
                        <input type="search" placeholder="serch..." name="serch" className=" md:w-[355px] lg:w-[475px] xl:w-[600px] h-10 border-2 rounded p-2" />
                        <button type="submit" className="h-10 border-2 rounded px-3 active:scale-90 duration-150"><FaMagnifyingGlass /></button>
                    </form>
                </div>
                <div title="acount" className="flex gap-2">
                    <div className="md:hidden border-2 rounded p-2 h-10 flex flex-col items-center justify-center active:scale-90 duration-150" onClick={toggleSerch}>
                        {
                            miniserch ? <RxCross2 className="text-lg sm:text-2xl" /> : <FaMagnifyingGlass className="text-lg sm:text-2xl" />
                        }

                    </div>
                    <div className="border-2 rounded p-2 h-10 flex flex-col items-center justify-center active:scale-90 duration-150">
                        <FaRegUserCircle className="text-lg sm:text-2xl"></FaRegUserCircle>
                    </div>
                    <div className="border-2 rounded p-2 h-10 flex flex-col items-center justify-center active:scale-90 duration-150" onClick={toggleNav}>
                        <GrMenu className="text-lg sm:text-2xl"></GrMenu>
                    </div>
                </div>
            </div >
            <div className={`z-10 duration-150 fixed ${miniserch ? 'top-12' : '-top-7'} w-full bg-white border shadow flex flex-col items-center justify-center md:hidden`}>
                <form className="h-12 flex gap-2 w-full px-2 items-center">
                    <input type="search" placeholder="serch..." name="serch" className="w-full h-10 border-2 rounded p-2" />
                    <button type="submit" className="h-10 border-2 rounded px-3 active:scale-90 duration-150"><FaMagnifyingGlass /></button>
                </form>
                <div className="absolute -bottom-7 active:scale-90 duration-150 border-2 p-1 rounded " onClick={toggleSerch}>
                    <RxCross2 />
                </div>
            </div >
            <div className="w-full h-12 2xl:h-16 bg-white"></div>
        </>
    );
};

export default Navbar;