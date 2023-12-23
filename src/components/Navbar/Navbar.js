import React, { useState } from 'react'
import logo_light from '../../assets/Image/logo-light.svg'
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { NavbarData } from './NavbarData'
import Scrollspy from "react-scrollspy"


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            {/*----- Start Navbar -----*/}
            <header>
                <nav className="fixed top-0 w-full z-50 bg-black py-7 border-b-2 border-white/10">
                    <div className="container">
                        <div className="flex items-center justify-between md:block">
                            <div className="justify-between items-center flex w-full">
                                <div className="z-50 relative">
                                    <a href='#home'>
                                        <img src={logo_light} alt="" className="h-10" />
                                    </a>
                                </div>
                                <div className="flex items-center gap-5 lg:hidden">
                                    <button onClick={() => setOpen(!open)} className="block lg:hidden text-white text-[32px] outline-none">
                                        {
                                            open ? <RiCloseFill /> :
                                                <RiMenu3Fill />
                                        }
                                    </button>
                                </div>
                                <div className="hidden lg:block">
                                    <Scrollspy items={NavbarData.map((e) => e.link)} currentClassName="active" className="list-none flex space-x-7 items-center text-white">
                                        {
                                            NavbarData.map((e, key) => {
                                                return (
                                                    <li key={key}>
                                                        <a href={"#" + e.link} className="font-semibold duration-300 inline-block leading-6 py-2">{e.name}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                        <a href="#contact" className="inline-block py-3 leading-none text-black px-5 font-semibold bg-white border border-white transition-all duration-300 hover:bg-white/90">Let’s Chat</a>
                                    </Scrollspy>
                                </div>
                            </div>
                        </div>
                        <div className={`lg:hidden  ${open ? '' : 'hidden'}`}>
                            <div className="pt-5">
                                <Scrollspy items={NavbarData.map((e) => e.link)} currentClassName="active" className="text-white">
                                    {
                                        NavbarData.map((e, key) => {
                                            return (
                                                <li key={key}>
                                                    <a href={"#" + e.link} className="font-semibold duration-300 inline-block leading-6 py-2">{e.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                    <a href="#contact" className="inline-block py-3 mt-3 leading-none text-black px-5 font-semibold bg-white border border-white transition-all duration-300 hover:bg-white/90">Let’s Chat</a>
                                </Scrollspy>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/*----- End Navbar -----*/}
        </React.Fragment>
    )
}

export default Navbar