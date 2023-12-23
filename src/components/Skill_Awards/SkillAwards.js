import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import { SkillData, AwardsData } from './SkillAwardsData'
import 'aos/dist/aos.css';

const SkillAwards = () => {
    return (
        <React.Fragment>
            {/*----- Start Skill & Awards -----*/}
            <section className="py-16 md:py-24 bg-gray/5">
                <div className="container" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <div className="inline-block">
                                <p className="bg-purple-500 text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                                    <GiStarShuriken className='text-lg' />
                                    Skills & Awards
                                </p>
                            </div>
                            <h2 className="font-semibold text-[26px]/normal mt-7">Masterful Talents and Honors</h2>
                            <p className="mt-5 text-gray max-w-[708px] mx-auto">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning .</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:gap-14 mt-14">
                        <div>
                            <div className="flex items-start gap-7 flex-wrap">
                                {
                                    SkillData.map((e, key) => {
                                        return (
                                            <div key={key} className="text-center border-2 border-gray/20 rounded-full flex-1 py-7 px-5">
                                                <img src={e.Logo} className="w-[30px] h-[30px] inline-block" alt="" />
                                                <p className="text-sm font-semibold mt-3 whitespace-nowrap">{e.Heding}</p>
                                                <p className="text-gray text-sm font-semibold mt-2">{e.Detail}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className="md:flex items-center flex-wrap justify-around gap-7 space-y-7 md:space-y-0">
                                {
                                    AwardsData.map((e, key) => {
                                        return (
                                            <div key={key}>
                                                <img src={e.Award} className="mx-auto block" alt="" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*----- End Skill & Awards -----*/}
        </React.Fragment>
    )
}

export default SkillAwards
