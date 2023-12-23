import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import { EducationData } from './EducationData'
import edandex from '../../assets/Image/edandex.png'
import 'aos/dist/aos.css';

const Education = () => {
    return (
        <React.Fragment>
            {/*----- Start Education & Experiance -----*/}
            <section className="py-16 md:py-24" data-aos="fade-up">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <div className="inline-block">
                                <p className="bg-purple-500 text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                                    <GiStarShuriken className='text-lg' />
                                    Life Time
                                </p>
                            </div>
                            <h2 className="font-semibold text-[26px]/normal mt-7">Education & Experience</h2>
                            <p className="mt-5 text-gray max-w-[708px] mx-auto">Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-14">
                        <div className="relative">
                            <div class="block shrink-0 bg-dot-line w-[2px] bg-center bg-cover absolute h-full left-0 md:left-1/2 transform md:-translate-x-1/2"></div>
                            <div className="relative w-full">
                                <div className="absolute w-full left-1 2xl:top-[35rem] xl:top-[37rem] lg:top-[44rem] ">
                                    <img src={edandex} className="mx-auto hidden lg:block" alt="" />
                                </div>
                            </div>
                            <div className="relative">
                                {
                                    EducationData.map((e, index) => {
                                        return (
                                            <div key={index} className="flex flex-col md:flex-row items-center">
                                                <div className={`flex w-full mx-auto items-center  ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                                    <div className={`w-full md:w-1/2 pl-7 ${index % 2 === 0 ? 'md:pr-8 lg:pr-14' : 'md:pl-8 lg:pl-14'}`}>
                                                        <div className={`text-left space-y-5 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                                            <div className="inline-block">
                                                                <img src={e.Icon} alt="" className='w-9 h-9' />
                                                            </div>
                                                            <div className="mt-7">
                                                                <div className={`flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-12 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                                                                    <span className={`text-warning font-semibold ${index % 2 === 0 ? '' : 'order-2'}`}>{e.year}</span>
                                                                    <span className="text-xl font-semibold">{e.Heding}</span>
                                                                </div>
                                                                <p className="text-gray mt-5">{e.Detail}</p>
                                                                <p className="my-6 font-semibold">{e.contact}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*----- End Education & Experiance -----*/}
        </React.Fragment>
    )
}

export default Education
