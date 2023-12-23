import React from 'react'
import { Testimonials } from './TestimonialData'
import { GiStarShuriken } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <React.Fragment>
            {/*----- Start Testimonial -----*/}
            <section className="py-16 md:py-24 bg-gray/5" id="client">
                <div className="container" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className="grid grid-cols-1">
                        <div className="lg:flex items-end space-y-7 lg:space-y-0 justify-between">
                            <div>
                                <div className="inline-block">
                                    <p className="bg-purple-500 text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                                        <GiStarShuriken className='text-lg' />
                                        Testimonials
                                    </p>
                                </div>
                                <h2 className="font-semibold text-[26px]/normal mt-7">Illuminating Testimonials from Satisfied Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="mt-14">
                        <Slider {...settings}>
                            {
                                Testimonials.map((e, key) => {
                                    return (
                                        <div key={key} className="border-2 border-gray/[14%] md:flex-row flex-col p-5 !flex items-start gap-7">
                                            <div className="shrink-0">
                                                <img src={e.Image} alt="" />
                                            </div>
                                            <div>
                                                <p className="font-medium leading-8">"{e.Detail}"</p>
                                                <p className="font-semibold mt-8">{e.list1}</p>
                                                <p className="text-purple-500 mt-2">{e.list2}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
            {/*----- End Testimonial -----*/}
        </React.Fragment>
    )
}

export default Testimonial
