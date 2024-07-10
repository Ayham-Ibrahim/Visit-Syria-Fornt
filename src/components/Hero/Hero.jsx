import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import Slider from 'react-slick'
import img1 from '../../assets/images/slider1.jpg'
import img2 from '../../assets/images/slider2.jpg'
import img3 from '../../assets/images/slider3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../../shared/Button/Button'
import { useNavigate } from "react-router-dom"


const Hero = ({ backgroundImage }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: false, // Show dots
        infinite: true, // Infinite loop
        speed: 500, // Speed of the slider
        slidesToShow: 3, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        initialSlide: 0, // Initial slide
        arrows: false,
        rtl: true,
        // Responsive settings
        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600, // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

        // // Custom arrows
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,

        // Custom dots
        afterChange: (current) => {
            setActiveSlide(current);
        },
    };

    const sliderRef = useRef();
    const navigate = useNavigate();
    const handleButtonClick = (i) => {
        setActiveSlide(i);
        sliderRef.current.slickGoTo(i);
    };

    const slides = [
        {
            img: img1,
            title: 'طبيعة ساحرة'

        },
        {
            img: img2,
            title: 'التاريخ والحضارات'

        },
        {
            img: img3,
            title: 'أثار معمارية'
        },
    ]

    return (
        <div className='BY_Hero' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-section">
                <div className="cover-container">
                    <div className="row">
                        <div className="col-md-7">
                            <Slider {...settings} ref={sliderRef} className='slider'>
                                {slides.map((e, i) => <div key={i} className='slide-container'>
                                    <div className={`slide ${activeSlide === i ? 'active' : ''}`}>
                                        <img src={e.img} alt={'slide ' + i + 1} className='slide-img' />
                                    </div>
                                    <span className={`slide-title ${activeSlide === i ? 'active' : ''}`}>{e.title}</span>
                                </div>)}
                            </Slider>
                            <div className='dots' dir='rtl'>
                                {slides.map((e, i) => <span className={`dot ${activeSlide === i ? 'active' : ''}`} onClick={() => handleButtonClick(i)}>{i + 1}</span>)}
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="hero-text">
                                <div className="container">
                                    <h1>استكشف</h1>
                                    <h4>أفضل الوجهات المثالية</h4>
                                    
                                    
                                    <Button
                                        btnText="استكشف المزيد"
                                        className={"HeroButtonExplore"}
                                        onClick={() => navigate('/explore/hotels')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero