import React from 'react'
import { RiCloseFill } from "react-icons/ri";
import 'aos/dist/aos.css';

const Contact = ({ onClose }) => {
    return (
        <React.Fragment>
            {/*----- Start Contact -----*/}
            <div className="fixed inset-0 bg-black/90 z-[99999] overflow-y-hidden" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="flex items-center justify-center min-h-screen px-4">
                    <div className="rounded-lg overflow-hidden my-8 px-7 py-14 md:p-14 w-full max-w-3xl bg-white relative">
                        <button type="button" onClick={onClose} className="absolute right-4 top-4 md:right-5 md:top-5 bg-purple-500/10 text-2xl text-purple-500 w-10 h-10 flex items-center justify-center rounded-md" >
                            <RiCloseFill />
                        </button>
                        <div className="max-w-[480px]">
                            <h3 className="text-2xl text-black md:text-3xl/normal font-bold">Got Ideas? We've got the skills. Let's team up.</h3>
                            <p className="mt-5 text-gray">Tell us more about yourself and what you're got in mind.</p>
                        </div>
                        <div className="md:mt-12 mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <input type="text" className="p-5 text-gray font-semibold border-2 border-gray h-14 w-full focus:outline-none focus:border-purple-500" placeholder="Full name..." required="" />
                                </div>
                                <div>
                                    <input type="email" className="p-5 text-gray font-semibold border-2 border-gray h-14 w-full focus:outline-none focus:border-purple-500" placeholder="Your Email" required="" />
                                </div>
                                <div className="md:col-span-2">
                                    <input type="text" className="p-5 text-gray font-semibold border-2 border-gray h-14 w-full focus:outline-none focus:border-purple-500" placeholder="Subject" required="" />
                                </div>
                                <div className="md:col-span-2">
                                    <textarea rows="3" className="p-5 text-gray font-semibold border-2 border-gray h-auto w-full focus:outline-none focus:border-purple-500 resize-none" placeholder="Your message..." required="" />
                                </div>
                                <div className="md:col-span-2">
                                    <button className="btn btn-purple">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*----- End Contact -----*/}
        </React.Fragment>
    )
}

export default Contact
