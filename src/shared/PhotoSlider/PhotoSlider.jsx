import { useRef, useState } from 'react';
import generateArray from '../../helpers/generateArrayOfArrays';
import './PhotoSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const PhotoSlider = ({ imgs }) => {
    const [index, setIndex] = useState(0);

    const newArray = generateArray(imgs, 4);

    const sliderRef = useRef(null);

    const handleButtonClick = (i) => {
        setIndex(i);
        sliderRef.current.slickGoTo(i);
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
            <Slider ref={sliderRef} {...settings} className='photo-slider desktop'>
                {newArray?.map((e, i) => {
                    const [mainImg, ...smallImgs] = e;
                    return (
                        <div key={i}>
                            <img key={index} src={mainImg} alt="Main Image" />
                            <div className='photo-slider-grid'>
                                {smallImgs?.map((x, j) => (
                                    <img key={j} src={x} alt={`Small Image ${j + 1}`} loading='lazy' />
                                ))}
                            </div>
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

            <Slider ref={sliderRef} {...settings} className='photo-slider mobile'>
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