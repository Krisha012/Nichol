import React, { useState } from 'react'
import contact_img from '../../assets/Image/contact-cartoon.png'
import { FooterData, FooterIcon } from './FooterData'
import { LuArrowUpRight } from "react-icons/lu";
import Contact from '../Contact/Contact';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const closeComponent = () => {
        setIsVisible(false);
    };
    return (
        <React.Fragment>
            {/*----- Start Footer -----*/}
            <footer className="bg-black" id="contact">
                <div className="py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
                            <div className="text-white">
                                <h3 className="font-bold text-3xl/normal lg:text-[40px]/normal max-w-xl">Have a project in mind? Let’s get to work.</h3>
                                <div className="md:mt-14 mt-8 inline-block">
                                    <button type="button" onClick={() => setIsVisible(!isVisible)} className="flex items-center gap-2.5 btn btn-purple">
                                        Say Hello
                                        <LuArrowUpRight className='text-xl' />
                                    </button>
                                    {isVisible && <Contact onClose={closeComponent} />}
                                </div>
                            </div>
                            <div>
                                <img src={contact_img} className="mx-auto" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-footer-pattern bg-cover pt-24">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {
                                FooterData.map((e, key) => {
                                    return (
                                        <div key={key} className="text-white">
                                            <span className='text-4xl'>{e.icon}</span>
                                            <div className="mt-7">
                                                <p className="text-white/80 text-sm">{e.conect}</p>
                                                <p className="mt-3 text-lg font-semibold">{e.contact}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="h-[2px] bg-white/[12%] block mt-12"></div>
                            <div className="flex md:flex-row flex-col items-center md:justify-between gap-7 py-5">
                                <div>
                                    <p className="text-white text-sm">Copyright 2023 Nichol Themes, All Rights Reserved.</p>
                                </div>
                                <div>
                                    <ul className="text-white flex items-center flex-wrap gap-3.5">
                                        {
                                            FooterIcon.map((e, key) => {
                                                return (
                                                    <div key={key}>
                                                        <li>
                                                            <a href="#home" className='text-3xl'>{e.TwitterIcon}</a>
                                                        </li>
                                                        <li>
                                                            <a href="#home" className='text-3xl'>{e.InstagramIcon}</a>
                                                        </li>
                                                        <li>
                                                            <a href="#home" className='text-3xl'>{e.LinkedinIcon}</a>
                                                        </li>
                                                        <li>
                                                            <a href="#home" className='text-3xl'>{e.FacebookIcon}</a>
                                                        </li>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*----- End Footer -----*/}
        </React.Fragment>
    )
}

export default Footer
