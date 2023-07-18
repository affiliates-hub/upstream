import { Link } from "react-router-dom";

import { FaMagnifyingGlass, } from 'react-icons/fa6';
import { BsFillCartFill, } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { GrMenu } from 'react-icons/gr';
import { RxCross2 } from 'react-icons/rx';
import { useEffect, useState } from "react";
const Navbar = () => {
    const user = true;
    const [acount, setAcount] = useState(false)
    const [miniserch, setMiniserch] = useState(false)
    const [leftNav, setLeftNav] = useState(false)
    const toggleSerch = () => {
        setMiniserch(!miniserch)
        setAcount(false)
        setLeftNav(false)
    }
    const toggleNav = () => {
        setLeftNav(!leftNav)
        setMiniserch(false)
        setAcount(false)
    }
    const toggleAcount = () => {
        setAcount(!acount);
        setLeftNav(false);
        setMiniserch(false)
    }

    let links =
        <>
            <li ><Link to={'/'} onClick={toggleNav}>Home</Link></li>
            <li><Link to={'/about'} onClick={toggleNav}>Pants</Link></li>
            <li><Link to={'/contact'} onClick={toggleNav}>T Shirts</Link></li>
            <li><Link to={'/contact'} onClick={toggleNav}>Others</Link></li>
        </>
    return (
        <div className="overflow-x-hidden">
            {/* options and ther nav options */}
            <div className="flex justify-between items-center w-full h-12 border shadow fixed p-1 md:p-2 lg:p-4 xl:p-6 2xl:p-8 bg-white z-50">
                <div title="logo " className="h-10 w-[90px] lg:w-[100px] 2xl:w-[120px] bg-gray-300 rounded"></div>
                <div title="search" className="hidden md:block">
                    <form className="flex gap-2">
                        <input type="search" placeholder="Search model" name="serch" className=" md:w-[355px] lg:w-[475px] xl:w-[600px] h-10 border-2 rounded p-2" />
                        <button type="submit" className="h-10 border-2 rounded px-3 active:scale-90 duration-150"><FaMagnifyingGlass /></button>
                    </form>
                </div>
                <div title="acount" className="flex gap-2">
                    <div className="md:hidden border-2 rounded p-2 h-10 flex flex-col items-center justify-center active:scale-90 duration-150" onClick={toggleSerch}>
                        {
                            miniserch ? <RxCross2 className="text-lg sm:text-2xl" /> : <FaMagnifyingGlass className="text-lg sm:text-2xl" />
                        }

                    </div>
                    <div className={`border-2 rounded ${user ? 'p-0' : 'p-2'} h-10 flex flex-col items-center justify-center active:scale-90 duration-150`}>
                        {
                            user ? <div className="h-10 w-9 sm:w-10 object-cover rounded-md bg-gray-200 cursor-pointer"><img src="" className="w-10 h-10 " alt="" /></div> : <FaRegUserCircle className="text-lg sm:text-2xl cursor-pointer" onClick={toggleAcount}></FaRegUserCircle>
                        }

                    </div>
                    <div className="border-2 rounded p-2 h-10 flex flex-col items-center justify-center active:scale-90 duration-150" onClick={toggleNav}>
                        {
                            leftNav ? <RxCross2 className="text-lg sm:text-2xl cursor-pointer" /> : <GrMenu className="text-lg sm:text-2xl cursor-pointer" />
                        }

                    </div>
                </div>
            </div >
            {/* lg serch */}
            <div className={`z-10 duration-150 fixed ${miniserch ? 'top-12' : '-top-7'} w-full bg-white border shadow flex flex-col items-center justify-center md:hidden`}>
                <form className="h-12 flex gap-2 w-full px-2 items-center">
                    <input type="search" placeholder="Search model" name="serch" className="w-full h-10 border-2 rounded p-2" />
                    <button type="submit" className="h-10 border-2 rounded px-3 active:scale-90 duration-150"><FaMagnifyingGlass /></button>
                </form>
                <div className="absolute -bottom-7 active:scale-90 duration-150 border-2 p-1 rounded " onClick={toggleSerch}>
                    <RxCross2 />
                </div>
            </div >
            {/* Cart */}
            <Link to={'/about'}>
                <div className="cursor-pointer active:scale-90 duration-200 h-9 w-8 flex items-center justify-center  bg-white border rounded-s-2xl fixed top-12 md:top-16 right-1 translate-y-2 select-none">
                    <div className="h-full w-full relative">
                        <div className="bg-red-500 rounded-full px-1 left-4  text-center text-xs text-white absolute" >0</div>
                        <BsFillCartFill className="absolute top-3 left-2"></BsFillCartFill>
                    </div>

                </div>
            </Link>
            {/* side bar */}
            <div className={`fixed h-screen w-full md:w-[500px] top-12 2xl:top-16  duration-300 ${leftNav ? 'right-0' : ' -right-full'} bg-white flex flex-col items-center justify-start py-6 border-2 select-none`}>
                <ul className="list-none text-center">
                    {
                        links
                    }

                </ul>
            </div>
            {/* signup / login  */}
            <div className={`w-[280px] bg-white border p-1 capitalize -z-10 rounded top-12 2xl:top-16 flex flex-col items-stretch text-center gap-2 fixed right-0 ${acount ? 'block' : 'hidden'}`}>
                <Link className="bg-indigo-200 py-1">Signup</Link>
                <Link className="bg-indigo-200 py-1">login</Link>
            </div>

            {/* Nav backup */}
            <div className="w-full h-12 2xl:h-16 bg-white"></div>
        </div>
    );
};

export default Navbar;