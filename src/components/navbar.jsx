
import { useState } from "react";
import Dropdown from "./dropdown"
import {tools} from './toolscollection.jsx';
import Loginup from './Loginup';
export default function Navbar() {
    const [popup, setPopup] = useState(false)
    return <header className="backdrop-blur-[5px] sticky top-0 z-50 bg-white/30 border-b border-gray-100 px-4 md:px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6 ">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="h-8 w-8 bg-[#5D5FEF] rounded-2xl flex items-center justify-center">
                        <div className="h-4 w-4 bg-white rounded-2xl ">

                        </div>
                    </div>
                    <span className="ml-2 font-bold text-xl">time<span className="text-[#5D5FEF]">SAVER</span></span>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex items-center bg-white rounded-md border border-gray-200 px-3 py-2 w-80 hover:outline-1 hover:outline-blue-400 ">

                    <input
                        type="text"
                        placeholder="Search Tools"
                        className="ml-2 bg-transparent w-full text-sm outline-none"
                    />
                </div>
            </div>

            <div className=" md:hidden flex mx-1 items-center bg-white rounded-md border border-gray-200 px-3 py-2 w-80">

                <input
                    type="text"
                    placeholder="Search Tools"
                    className=" outline-none bg-transparent w-full text-sm"
                />
            </div>

            <div className="flex items-center space-x-3">
                <div className="hidden md:flex items-center space-x-5 mr-8">




                    <div className="flex items-center text-sm font-medium  rounded-sm  ">

                        <Dropdown name={"Tools"} items={tools} />
                    </div>
                    <div className="flex items-center text-sm font-medium hover:text-[#5D5FEF] ">
                        <a href="#footer">About us</a>
                    </div>



                </div>

                <button onClick={()=>{
                    setPopup(true);
                }} className="bg-[#5D5FEF] hover:text-[#5D5FEF] hover:bg-white border-2 border-[#5D5FEF] text-white rounded-full px-4 py-2 text-sm font-medium flex items-center h-8 transition-all ease-in-out cursor-pointer">
                    <span className="">SignIn</span>
                    {
                        popup && (
                            <Loginup/>
                        )
                    }
                </button>
            </div>
        </div>
    </header>


}