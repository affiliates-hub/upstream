import { Link } from "react-router-dom";

import { FaMagnifyingGlass, } from 'react-icons/fa6';
import { BsFillCartFill, } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { GrMenu } from 'react-icons/gr';
import { RxCross2 } from 'react-icons/rx';
import { useContext, useEffect, useState } from "react";
import NavActiveRoutes from "../activeroutes/NavActiveRoutes";
import { contextProvier } from "../../private/provider/Provider";
const Navbar = () => {
    const { user } = useContext(contextProvier)
    const [acount, setAcount] = useState(false)
    const [miniserch, setMiniserch] = useState(false)
    const [leftNav, setLeftNav] = useState(false)
    let loacal = localStorage.getItem('first-time')
    useEffect(() => {
        if (!loacal) {
            setTimeout(() => {
                setAcount(true)
            }, 1000);
            setTimeout(() => {
                setAcount(false)
            }, 3000);
            localStorage.setItem('first-time', 'true')
        }

    }, [])
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
            <NavActiveRoutes to={'/'} toggleNav={toggleNav} className="bg-gray-100 py-2  rounded">Home</NavActiveRoutes>
            <NavActiveRoutes to={'/about'} toggleNav={toggleNav} className="bg-gray-100 py-2  rounded">Trending</NavActiveRoutes>
            <NavActiveRoutes to={'/contact'} toggleNav={toggleNav} className="bg-gray-100 py-2  rounded">Top List</NavActiveRoutes>
            <NavActiveRoutes to={'/acount/profile'} toggleNav={toggleNav} className="bg-gray-100 py-2  rounded">Acount</NavActiveRoutes>
        </>
    return (
        <div className="overflow-x-hidden">
            {/* options and other nav options */}
            <div title="navbar options" className="flex justify-between items-center w-full h-12 border shadow fixed p-1 md:p-2 lg:p-4 xl:p-6 2xl:p-8 bg-white z-[111]">

                <Link to={'/'}>
                    <div title="logo" className="h-10 w-[90px] lg:w-[100px] 2xl:w-[120px] bg-gray-300 rounded"></div>

                </Link>
                <div title="search bar for big screen" className="hidden md:block">
                    <form className="flex gap-2">
                        <select name="type" id="" className="border-2 rounded capitalize w-16 text-gray-500 text-sm font-semibold">
                            <option value="mobile">mobile</option>
                            <option value="mobile">laptop</option>
                            <option value="mobile">Smart Phone</option>
                        </select>
                        <input type="search" placeholder="Search model" name="serch" className=" md:w-[355px] lg:w-[475px] xl:w-[600px] h-10 border-2 rounded p-2" />
                        <button type="submit" className="h-10 border-2 rounded px-3 active:scale-90 duration-150"><FaMagnifyingGlass /></button>
                    </form>
                </div>
                <div title="acount" className="flex gap-2">
                    <div className="md:hidden border rounded p-2 h-10 flex flex-col items-center justify-center active:scale-90 duration-150 -translate-x-1" onClick={toggleSerch}>
                        {
                            miniserch ? <RxCross2 className="text-lg sm:text-2xl" /> : <FaMagnifyingGlass className="text-lg sm:text-2xl" />
                        }
                    </div>
                    <Link title="cart" className="flex flex-col items-center justify-center cursor-pointer active:scale-90 duration-150 -translate-x-1" to={'/acount/carts'}>

                        <div className="relative">
                            <p className="absolute -top-2 left-3 bg-indigo-200 h-4 w-5 rounded-full text-center text-[14px]">0</p>
                            <BsFillCartFill className={`text-xl `}></BsFillCartFill>
                        </div>


                    </Link>
                    <div className={` ${user ? 'p-0' : 'p-2'} h-10 flex flex-col items-center justify-center active:scale-90 duration-150`}>
                        {
                            user ? <Link to={'/acount/profile'} className="h-10 w-10 rounded-full sm:w-10 object-cover border-2 cursor-pointer"><img src="" className="w-10 h-10 bg-gray-300 rounded-full" alt="" /></Link> : <FaRegUserCircle className="text-lg sm:text-2xl cursor-pointer" onClick={toggleAcount}></FaRegUserCircle>
                        }

                    </div>
                    <div className="border-2 rounded p-2 h-10 flex flex-col items-center justify-center active:scale-90 duration-150" onClick={toggleNav}>
                        {
                            leftNav ? <RxCross2 className="text-lg sm:text-2xl cursor-pointer" /> : <GrMenu className="text-lg sm:text-2xl cursor-pointer" />
                        }

                    </div>
                </div>
            </div >
            {/* serch for small screen */}
            <div title="serch bar for small screen" className={`z-10 h-32 duration-150 fixed ${miniserch ? 'top-12' : '-top-[5rem]'} w-full bg-white border shadow flex flex-col items-center md:hidden overflow-x-hidden`}>
                <form className=" p-1 flex flex-col gap-2 w-full px-2 items-start
                ">
                    <div className="flex gap-2 w-full  items-center">
                        <input type="search" placeholder="Search model" name="serch" className="w-full h-10 border-2 rounded p-2" />
                        <button type="submit" className="h-10 border-2 rounded px-3 active:scale-90 duration-150"><FaMagnifyingGlass /></button>

                    </div>
                    <select name="type" id="" className="border-2  rounded capitalize w-full p-1">
                        <option value="mobile">select Catagorty</option>
                        <option value="mobile">laptop</option>
                        <option value="mobile">Smart Phone</option>
                    </select>
                </form>
                <div className="absolute -bottom-0 active:scale-90 duration-150 border-2 p-1 rounded " onClick={toggleSerch}>
                    <RxCross2 />
                </div>
            </div >
            {/* side bar */}
            <div title="side bar container " className={`fixed h-screen w-full md:w-[450px] duration-300 ${leftNav ? 'right-0' : ' -right-full'} bg-white flex flex-col  overflow-y-scroll  pt-14 2xl:pt-[5rem] pb-2 border-2 select-none z-[110]`}>
                <div className="">
                    <ul className="list-none text-center flex flex-col justify-stretch px-3 font-semibold gap-2">
                        {
                            links
                        }
                    </ul>
                    <form className="px-3">
                        <fieldset className="flex flex-col">
                            <label htmlFor="catagory" className="font-semibold py-2 px-2 ">Select Catagory</label>
                            <select className="border-2 rounded p-2">
                                <option>SmartPhone</option>
                                <option>Laptop</option>
                                <option>Monitor</option>
                                <option>pc parts</option>
                                <option>Web cam</option>
                                <option>Microphone</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="price"></label>

                        </fieldset>
                    </form>
                </div>
            </div>
            {/* signup / login  */}
            <div title="signup login" className={`w-[280px] bg-white border p-2 capitalize z-50 rounded top-12 2xl:top-16 flex flex-col items-stretch text-center gap-2  fixed right-0 font-semibold duration-75 ${acount ? 'visible pointer-events-auto scale-100' : 'invisible pointer-events-none scale-90'}`}>
                <Link to={'/register'} onClick={toggleAcount} className="bg-gray-100 p-1">Register</Link>
                <Link to={'/login'} onClick={toggleAcount} className="bg-gray-100 p-1">login</Link>
            </div>

            {/* Nav backup */}
            <div title="nav backup" className="w-full h-12 2xl:h-16 bg-white"></div>
        </div>
    );
};

export default Navbar;