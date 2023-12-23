import React, { useState } from 'react'
import mainImg from '../../assets/Image/main-img.png'
import { CounterData } from './HomeData'
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import { AiOutlineUser } from "react-icons/ai";
import { BiFile } from "react-icons/bi";
import 'aos/dist/aos.css';


const Home = () => {
    const [startCounter, setStartCounter] = useState(false);

    return (
        <React.Fragment>
            {/*----- Start Home -----*/}
            <section className="pt-[100px] relative overflow-hidden" id="home" >
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="flex lg:flex-row flex-col flex-wrap items-center gap-5">
                            <div className="lg:w-1/2 w-full">
                                <div className="py-16 md:py-24" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                    <p className="text-warning bg-warning/[14%] font-semibold text-lg inline-block p-2.5">Hi! I'm Mitchell Hancock</p>
                                    <h1 className="mt-6 md:mt-8 font-bold text-3xl/normal md:text-[50px]/normal">Freelance UI/UX Designer</h1>
                                    <p className="text-gray font-medium mt-6 max-w-[571px] leading-loose">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <div className="flex flex-wrap gap-5 mt-10">
                                        <button className="flex items-center gap-2.5 btn btn-purple">
                                            <AiOutlineUser className='text-2xl' />
                                            Hire Me
                                        </button>
                                        <button className="flex items-center gap-2.5 btn btn-outline-white">
                                            <BiFile className='text-2xl' />
                                            Download CV
                                        </button>
                                    </div>
                                    <div className="md:pt-20 pt-12 flex flex-wrap items-center gap-5 md:gap-12">
                                        {
                                            CounterData.map((e, index) => {
                                                return (
                                                    <div key={index} className="text-center space-y-3">
                                                        <ScrollTrigger onEnter={() => setStartCounter(true)} onExit={() => setStartCounter(false)}>
                                                            <p className="text-2xl font-semibold">
                                                                {
                                                                    startCounter && <CountUp start={e.start} end={e.count} />
                                                                }
                                                                +
                                                            </p>
                                                        </ScrollTrigger>
                                                        <p className="text-gray font-medium">{e.name}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="bg-warning max-w-[800px] md:top-[100px] lg:absolute bottom-0 right-0 lg:w-6/12 w-full">
                                <p className="font-extrabold max-w-2xl mx-auto text-5xl md:text-7xl lg:text-8xl text-white text-center mt-5 uppercase">Mitchell Hancock</p>
                                <div className="">
                                    <img src={mainImg} className="mx-auto lg:absolute -mt-16 md:mt-0 inset-x-0 bottom-0" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*----- Start Home -----*/}
        </React.Fragment>
    )
}

export default Home
