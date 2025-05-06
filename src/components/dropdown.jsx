import { useState } from "react";
import { Link } from "react-router-dom";
export default function Dropdown( {name, items}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-center">
            <div onMouseLeave={() => setOpen(false)} className="relative">
                <button
                    onMouseOver={() => setOpen(true)}
                    className="flex items-center  p-2 px-4 bg-white hover:text-[#5D5FEF] rounded-md cursor-pointer"
                >
                    <span>{name}</span>
                </button>
                <ul
                    className={`absolute right-0 w-50 py-2 h-100 overflow-auto rounded-lg bg-blue-50 shadow-xl ${open ? "block" : "hidden"
                        }`}
                >
                    {items.map((item)=>(
                        <Link to={item.available ? item.link: ""} className="flex w-full items-center px-3 py-2 text-sm hover:bg-blue-200 text-blue-900">{item.name}</Link>
                    ))}
                    
                </ul>
            </div>
        </div>
    );
}