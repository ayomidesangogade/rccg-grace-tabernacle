import React from "react";
import Button from "./Button";
import {Menu, X} from "lucide-react";

function Header({logo}) {
    const Links = [
        {name: "HOME", link: "/"},
        {name: "SERVICE", link: "/"},
        {name: "ABOUT", link: "/"},
        {name: "BLOG'S", link: "/"},
        {name: "CONTACT", link: "/"},
    ]

    const [open, setOpen] = React.useState(false);
    return (
        <header className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    <img src={logo} className="h-15 w-12 mr-2" />
                    Grace Tabernacle
                </div>
                <div className="absolute right-8 top-9 cursor-pointer md:hidden" onClick={() => setOpen(prev => !prev)}>
                    {open ? <X /> : <Menu />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-22 opacity-100" : "top-[-490px]"} md:opacity-100 opacity-0`}>

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
        </header>
    )
}

export default Header;