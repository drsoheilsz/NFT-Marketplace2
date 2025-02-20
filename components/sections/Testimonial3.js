
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    pagination: {
        el: ".abc3",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 480px
        767: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
}


export default function Testimonial3() {
    return (
        <>

            <section className="tf-section testimonial" id="testimonial">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration={1000}>Testimonial</h5>
                                <h3 className="title mb-28" data-aos="fade-up" data-aos-duration={1000}>What People Say <br /> About
                                    us</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonial__content style-2">
                                <div className="swiper swiper-testimonial2">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="box-testimonial">
                                                <img className="quote" src="/assets/images/testimonial/left-quote1.png" alt="Monteno" />
                                                <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo cons equ
                                                    prehen derit in voluptate velit esse cillum dolore eu fu giat nulla parinon
                                                    proid</p>
                                                <div className="info">
                                                    <img src="/assets/images/testimonial/avt-02.png" alt="Monteno" />
                                                    <div>
                                                        <h6>Paul Harrison </h6>
                                                        <p className="fs-16">Founder &amp; CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-testimonial">
                                                <img className="quote" src="/assets/images/testimonial/left-quote1.png" alt="Monteno" />
                                                <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo cons equ
                                                    prehen derit in voluptate velit esse cillum dolore eu fu giat nulla parinon
                                                    proid</p>
                                                <div className="info">
                                                    <img src="/assets/images/testimonial/avt-03.png" alt="Monteno" />
                                                    <div>
                                                        <h6>Paul Harrison </h6>
                                                        <p className="fs-16">Founder &amp; CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-testimonial">
                                                <img className="quote" src="/assets/images/testimonial/left-quote1.png" alt="Monteno" />
                                                <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo cons equ
                                                    prehen derit in voluptate velit esse cillum dolore eu fu giat nulla parinon
                                                    proid</p>
                                                <div className="info">
                                                    <img src="/assets/images/testimonial/avt-04.png" alt="Monteno" />
                                                    <div>
                                                        <h6>Paul Harrison </h6>
                                                        <p className="fs-16">Founder &amp; CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-testimonial">
                                                <img className="quote" src="/assets/images/testimonial/left-quote1.png" alt="Monteno" />
                                                <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo cons equ
                                                    prehen derit in voluptate velit esse cillum dolore eu fu giat nulla parinon
                                                    proid</p>
                                                <div className="info">
                                                    <img src="/assets/images/testimonial/avt-02.png" alt="Monteno" />
                                                    <div>
                                                        <h6>Paul Harrison </h6>
                                                        <p className="fs-16">Founder &amp; CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="box-testimonial">
                                                <img className="quote" src="/assets/images/testimonial/left-quote1.png" alt="Monteno" />
                                                <p className="text">Keniam, quis nostrud exerci ut aliquip ex ea com modo cons equ
                                                    prehen derit in voluptate velit esse cillum dolore eu fu giat nulla parinon
                                                    proid</p>
                                                <div className="info">
                                                    <img src="/assets/images/testimonial/avt-03.png" alt="Monteno" />
                                                    <div>
                                                        <h6>Paul Harrison </h6>
                                                        <p className="fs-16">Founder &amp; CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="swiper-pagination abc3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
