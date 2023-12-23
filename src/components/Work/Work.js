import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import { WorkData } from './WorkData'
import 'aos/dist/aos.css';

const Work = () => {
    return (
        <React.Fragment>
            {/*----- Start Work -----*/}
            <section className="py-16 md:py-24" id="work">
                <div className="container">
                    <div className="grid grid-cols-1" data-aos="fade-up">
                        <div className="text-center">
                            <div className="inline-block">
                                <p className="bg-purple-500 text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                                    <GiStarShuriken className='text-lg' />
                                    Selected work
                                </p>
                            </div>
                            <h2 className="font-semibold text-[26px]/normal mt-7">Showcasing My Remarkable Projects</h2>
                            <p className="mt-5 text-gray max-w-[708px] mx-auto">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-14 gap-7">
                        {
                            WorkData.map((e, key) => {
                                return (
                                    <div key={key} className="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20" data-aos="fade-up">
                                        <div className="md:p-12 p-10 lg:flex-1 lg:order-1 order-2">
                                            <p className="text-warning text-[22px] font-bold">{e.list}</p>
                                            <a href="/" className="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5">
                                                {e.Heding}
                                            </a>
                                            <p className="text-gray max-w-[420px] mt-3 md:mt-5">{e.Detail}</p>
                                            <div className="flex items-center gap-4 mt-5 md:mt-8">
                                                <div className="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                                                    <img src={e.figma_icon} alt="" />
                                                </div>
                                                <div className="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                                                    <img src={e.sketch_icon} alt="" />
                                                </div>
                                            </div>
                                            <div className="mt-8 inline-block">
                                                <button className="btn btn-outline-white flex items-center gap-2.5 py-3.5 px-5 text-sm border-black">
                                                    {e.btn}
                                                    {e.icon}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
                                            <img src={e.Image} className="object-cover mx-auto h-full w-full" alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="text-center">
                            <button className='btn bg-black text-white'>View All Project</button>
                        </div>
                    </div>
                </div>
            </section>
            {/*----- Start Work -----*/}
        </React.Fragment>
    )
}

export default Work