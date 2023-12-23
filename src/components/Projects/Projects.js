import React from 'react'
import { ProjectsData } from './ProjectsData'

const Projects = () => {
    return (
        <React.Fragment>
            {/*----- Start Projects -----*/}
            <section className="py-24 bg-orange-50" id="Portfolio">
                <div className="container">
                    <div class="grid lg:pb-16 md:pb-10 pb-8">
                        <div class="lg:col-span-6 text-center">
                            <h3>LATEST PROJECTS</h3>
                        </div>
                    </div>
                    <div>
                        {
                            ProjectsData.map((e, index) => {
                                return (
                                    <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center content-center mb-16">
                                        <div className={`lg:px-10 md:px-5 ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                                            <div className="border-2 border-slate-900 hover:shadow-black transition-all duration-300 ease-in">
                                                <img src={e.img} alt="" className='bg-no-repeat bg-cover' />
                                            </div>
                                        </div>
                                        <div className={`flex flex-col justify-center lg:px-10 md:px-5 ${index % 2 === 0 ? '' : 'order-1'}`}>
                                            <h6 className="mb-[18px]">
                                                <span className="inline-block px-5 py-2 uppercase tracking-wider text-xs rounded-[30px] bg-orange-100">{e.list}</span>
                                            </h6>
                                            <h4 className="mb-4 text-2xl font-semibold md:mb-6 md:text-[32px]">{e.Heding}</h4>
                                            <p className='mb-6 text-slate-700/90'>{e.Detail}</p>
                                            <div>
                                                <button className="btn btn-theme">{e.btn}</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/*----- End Projects -----*/}
        </React.Fragment>
    )
}

export default Projects
