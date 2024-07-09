import { useEffect, useRef, useState } from 'react';
import generateArray from '../../helpers/generateArrayOfArrays';
import './PhotoSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const PhotoSlider = ({ imgs }) => {
    const [index, setIndex] = useState(0);
    const [newArray, setNewArray] = useState([]);

    useEffect(() => {
        setNewArray(generateArray(imgs, 4));
    }, []);


    const sliderReff = useRef(null);

    const handleButtonClick = (i) => {
        setIndex(i);
        sliderReff.current.slickGoTo(i);
    };

    const handleAfterChange = (currentSlide) => {
        setIndex(currentSlide);
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        afterChange: handleAfterChange
    };

    return (
        <div className="photo-slider">
            <Slider ref={sliderReff} {...settings} className='photo-slider desktop'>
                {newArray && newArray?.map((e, i) => {
                    return (
                        <div key={i}>
                            {i}
                            <img key={index} src={e[0]} alt="Main Image" />
                            {/* <div className='photo-slider-grid'>
                                {[...e]?.map((img, index) => (
                                    index !== 0 &&
                                    <img key={index} src={img} alt={`Small Image ${index + 1}`} />
                                ))}
                            </div> */}
                        </div>
                    );
                })}
            </Slider>
            <div className='buttons-slider desktop'>
                {newArray.map((e, i) => (
                    <div
                        key={i}
                        className={`${index === i ? 'active' : ''}`}
                        onClick={() => handleButtonClick(i)}
                    />
                ))}
            </div>

            <Slider ref={sliderReff} {...settings} className='photo-slider mobile'>
                {imgs?.map((e, i) => {
                    return <div key={i}>
                        <img
                            key={index}
                            src={e}
                        />
                    </div>
                })}
            </Slider>
            <div className='buttons-slider mobile'>
                {imgs.map((e, i) => (
                    <div
                        key={i}
                        className={`${index === i ? 'active' : ''}`}
                        onClick={() => handleButtonClick(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoSlider;