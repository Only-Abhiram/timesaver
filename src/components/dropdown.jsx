import { useState } from "react";
export default function Dropdown( {name}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-center ">
            <div onMouseLeave={() => setOpen(false)} className="relative">
                <button
                    onMouseOver={() => setOpen(true)}
                    className="flex items-center  p-2 bg-white hover:text-[#5D5FEF] rounded-md cursor-pointer"
                >
                    <span>{name}</span>
                </button>
                <ul
                    className={`absolute right-0 w-40 py-2 mt-1 rounded-lg bg-blue-50 shadow-xl ${open ? "block" : "hidden"
                        }`}
                >
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-blue-100">
                        Dropdown List 1
                    </li>
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-blue-100">
                        Dropdown List 2
                    </li>
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-blue-100">
                        Dropdown List 3
                    </li>
                </ul>
            </div>
        </div>
    );
}