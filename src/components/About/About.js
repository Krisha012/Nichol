import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import { AboutData, SocialMedia } from './AboutData'
import 'aos/dist/aos.css';


const About = () => {
    return (
        <React.Fragment>
            {/*----- Start About Me -----*/}
            <section className="py-16 md:py-24 border-t-2 border-gray/[12%]" id="about" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div>
                            <div className="inline-block">
                                <p className="bg-purple-500 text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                                    <GiStarShuriken className="text-lg" />
                                    About Me
                                </p>
                            </div>
                            <div className="mt-7">
                                <h2 className="font-semibold text-[26px]/normal">Hi! I'm Mitchell Hancock</h2>
                                <p className="mt-6 text-gray font-medium">I'm Passionate and results-driven UI/UX designer with seven years of experience in crafting intuitive and visually appealing user experiences. Skilled in user research, wireframing, prototyping, and usability testing. Strong collaborator and advocate for user-centered design. Seeking new opportunities to create impactful digital products.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-14">
                        <div className="sm:flex flex-wrap items-start gap-7 space-y-7 sm:space-y-0">
                            {
                                AboutData.map((e, key) => {
                                    return (
                                        <div key={key} className="space-y-2.5 font-semibold flex-1">
                                            <p className="text-gray whitespace-nowrap">{e.conect}</p>
                                            <p className="whitespace-nowrap">{e.contact}</p>
                                        </div>
                                    )
                                })
                            }
                            {
                                SocialMedia.map((e, key) => {
                                    return (
                                        <div key={key} className="space-y-2.5 font-semibold flex-1">
                                            <p className="text-gray whitespace-nowrap">{e.conect}</p>
                                            <ul className="flex flex-wrap items-center gap-5">
                                                <li className="shrink-0">
                                                    <a href="#home">
                                                        <img src={e.figma_icon} alt="" />
                                                    </a>
                                                </li>
                                                <li className="shrink-0">
                                                    <a href="#home">
                                                        <img src={e.discord_icon} alt="" />
                                                    </a>
                                                </li>
                                                <li className="shrink-0">
                                                    <a href="#home">
                                                        <img src={e.dribbble_icon} alt="" />
                                                    </a>
                                                </li>
                                                <li className="shrink-0">
                                                    <a href="#home">
                                                        <img src={e.twitter_icon} alt="" />
                                                    </a>
                                                </li>
                                                <li className="shrink-0">
                                                    <a href="#home">
                                                        <img src={e.linkedIn_icon} alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/*----- End About Me -----*/}
        </React.Fragment>
    )
}

export default About
