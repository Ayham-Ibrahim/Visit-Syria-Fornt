import { useEffect, useRef, useState } from 'react';
import generateArray from '../../helpers/generateArrayOfArrays';
import './PhotoSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const PhotoSlider = ({ imgs }) => {
    const [index, setIndex] = useState(0);
    const [newArray, setNewArray] = useState([]);

    useEffect(() => {
        setNewArray(generateArray(imgs, 4));
    }, [imgs]);


    const swiperRef = useRef(null);

    const handleButtonClick = (i) => {
        setIndex(i);
        swiperRef.current.swiper.slideTo(i);
      };
    
    const handleAfterChange = (swiper) => {
        setIndex(swiper.activeIndex);
    };


    return (
        <div className="photo-slider">
            <Swiper ref={swiperRef} slidesPerView={1} loop={true} className='photo-slider desktop' onSlideChange={handleAfterChange}>
                {newArray && newArray.map((e, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <img key={index} src={e[0]} alt="Main Image" className='first-img'/>
                            <div className='photo-slider-grid'>
                                {[...e]?.map((img, index) => (
                                    index !== 0 &&
                                    <img key={index} src={img} alt={`Small Image ${index + 1}`} />
                                ))}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className='buttons-slider desktop'>
                {newArray.map((e, i) => (
                    <div
                        key={i}
                        className={`${index === i ? 'active' : ''}`}
                        onClick={() => handleButtonClick(i)}
                    />
                ))}
            </div>

            <Swiper ref={swiperRef} slidesPerView={1} loop={true} className='photo-slider mobile' onSlideChange={handleAfterChange}>
                {imgs?.map((e, i) => {
                    return <SwiperSlide key={i}>
                        <img
                            key={index}
                            src={e}
                        />
                    </SwiperSlide>
                })}
            </Swiper>
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