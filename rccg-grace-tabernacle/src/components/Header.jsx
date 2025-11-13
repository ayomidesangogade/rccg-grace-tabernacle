import React from "react";
import Button from "./Button";
import {Menu, X} from "lucide-react";

function Header() {
    const Links = [
        {name: "HOME", link: "/"},
        {name: "SERVICE", link: "/"},
        {name: "ABOUT", link: "/"},
        {name: "BLOG'S", link: "/"},
        {name: "CONTACT", link: "/"},

    ]

    const [open, setOpen] = React.useState(false);
    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
                    Designer
                </div>
                <div className="absolute right-8 top-6 cursor-pointer md:hidden" onClick={() => setOpen(prev => !prev)}>
                    {open ? <X /> : <Menu />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-16 opacity-100" : "top-[-490px]"} md:opacity-100 opacity-0`}>

                {Links.map((link) => {
                    return (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                        </li>
                    )
                })}
                <Button>Get Started</Button>
                </ul>
            </div>
        </div>
    )
}

export default Header;