import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import { ServicesData } from './ServicesData'
import 'aos/dist/aos.css';

const Services = () => {
    return (
        <React.Fragment>
            {/*----- Start Services -----*/}
            <section className="py-16 md:py-24 bg-black text-white" id="services">
                <div className="container" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <div className="inline-block">
                                <p className="bg-purple-500 text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                                    <GiStarShuriken className="text-lg" />
                                    Services
                                </p>
                            </div>
                            <h2 className="font-semibold text-[26px]/normal mt-7">Services I Offer</h2>
                            <p className="mt-5 text-gray max-w-[708px] mx-auto">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-7">
                        {
                            ServicesData.map((e, key) => {
                                return (
                                    <div key={key} className="border-2 border-gray/[12%] p-7 space-y-5">
                                        <div>
                                            <img src={e.Logo} alt="" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{e.Heding}</h3>
                                        <p className="text-gray">{e.Detail}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/*----- End Services -----*/}
        </React.Fragment>
    )
}

export default Services
