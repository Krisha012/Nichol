import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import { BlogData } from './BlogData'
import 'aos/dist/aos.css';

const Blog = () => {
    return (
        <React.Fragment>
            {/*----- Start Blog -----*/}
            <section className="py-16 md:py-24" id="blog" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <div className="inline-block">
                                <p className="bg-purple-500 text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                                    <GiStarShuriken className='text-lg' />
                                    My Articles
                                </p>
                            </div>
                            <h2 className="font-semibold text-[26px]/normal mt-7">Some latest blog to know about us.</h2>
                            <p className="mt-5 text-gray max-w-[708px] mx-auto">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
                        {
                            BlogData.map((e, key) => {
                                return (
                                    <div key={key}>
                                        <img src={e.Image} className="object-cover w-full mx-auto" alt="" />
                                        <div className="py-5">
                                            <div className="flex items-center gap-2.5">
                                                <span className="p-2.5 bg-purple-500 text-white text-xs">{e.list}</span>
                                                <span className="text-gray">{e.Time}</span>
                                            </div>
                                            <p className="text-xl/normal inline-block font-semibold mt-7 duration-300 hover:text-purple-500 cursor-pointer">{e.Detail}</p>
                                            <div className="flex items-center mt-6 gap-2.5">
                                                <img src={e.blog_avatar} className="rounded-full" alt="" />
                                                <div className="space-y-0.5">
                                                    <p className="font-semibold">{e.name}</p>
                                                    <p className="text-gray text-sm">{e.year}</p>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <button href="/" className="capitalize font-semibold text-purple-500">{e.btn}</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/*----- End Blog -----*/}
        </React.Fragment>
    )
}

export default Blog
