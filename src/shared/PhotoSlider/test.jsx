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
               return <div key={i}>
                    <img
                        key={index}
                        src={e[0]}
                    />
                    <div className='photo-slider-grid'>
                        {e?.map((x, i) => {
                            return <img
                                key={i}
                                src={x}
                                alt={`slider${i + 1}`}
                                loading='lazy'
                            />
                        })}
                    </div>
                </div>
            })}
        </Slider>
        <div className='buttons-slider desktop'>
            {newArray.map((e, i) => (
                <div
                    key={i}
                    className={`${index === i? 'active' : ''}`}
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
                    className={`${index === i? 'active' : ''}`}
                    onClick={() => handleButtonClick(i)}
                />
            ))}
        </div>
    </div>
  );
};

export default PhotoSlider;
// ******************************************************************************************
// ******************************************************************************************


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
          return (
            <div key={i}>
              <img key={index} src={e} />
            </div>
          );
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
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************


.photo-slider {
    width: 100%;
}

.photo-slider img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    /* transition: .5s ease; */
}

.photo-slider .first-img {
    width: 100%;
    height: 708px;
    border-radius: 15px;
}

.photo-slider .first-img.active {
    opacity: 100%;
}

.photo-slider .img.active {
    opacity: 100%;
}

.photo-slider .photo-slider-grid {
    margin-top: 30px;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(368.38px, 1fr));
}

.photo-slider .img {
    transition: .3s ease;    
}

.photo-slider .photo-slider-grid img {
    height: 280.66px;
    border-radius: 15px;
    overflow: hidden;
    object-fit: cover;
}

.photo-slider .buttons-slider {
    margin-top: 74px;
    /* width: fit-content; */
    display: flex;
    gap: 4.77px;
    align-items: center;
    justify-content: center;
}

.photo-slider .buttons-slider div {
    cursor: pointer;
    width: 63.76px;
    height: 12.06px;
    border-radius: 13px;
    background-color: rgba(217, 217, 217, 1);
    transition: .5s ease;
}

.photo-slider .buttons-slider div.active {
    width: 103.61px;
    background-color: rgba(130, 203, 178, 1);
}

.photo-slider.mobile {    
    display: none;
}

.photo-slider.mobile img {
    height: 464px;
}

.photo-slider .buttons-slider.mobile {
    display: none;
}  

.slick-track {
    margin-left: 10px;
}

@media screen and (max-width: 1280px) {
    .photo-slider.mobile {    
        display: block;
    }   
    .photo-slider.desktop {    
        display: none;
    }  
    .photo-slider .buttons-slider.desktop {
        display: none;
    }  
    .photo-slider .buttons-slider.mobile {
        display: flex;
    }    
}

// ******************************************************************************************

.photo-slider {
    width: 100%;
    /* height: 1100px;  لتقصير المسافة بين السلايد وال شريط التنقل */
}
.slick-slider{
    /* height: 1050px;   لتقصير المسافة بين السلايد وال شريط التنقل */
}
.photo-slider img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    /* transition: .5s ease; */
}

#root > div.place-details-hotel > div.details-content > div.place-gallery > div > div.slick-slider.photo-slider.desktop.slick-initialized > div > div > div.slick-slide.slick-active.slick-current > div > div > img {
    /* width: 1173px !important;  */
    /* height: 708px; 
    object-fit: cover; */
}
.photo-slider .first-img {
    width: 100%;
    height: 708px ;
    border-radius: 15px;
}

.photo-slider .first-img.active {
    opacity: 100%;
}

.photo-slider .img.active {
    opacity: 100%;
}

.photo-slider .photo-slider-grid {
    margin-top: 30px;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(368.38px, 1fr));
}

.photo-slider .img {
    transition: .3s ease;    
}

.photo-slider .photo-slider-grid img {
    height: 280.66px;
    border-radius: 15px;
    overflow: hidden;
    object-fit: cover;
}

.photo-slider .buttons-slider {
    margin-top: 74px;
    /* width: fit-content; */
    display: flex;
    gap: 4.77px;
    align-items: center;
    justify-content: center;
}

.photo-slider .buttons-slider div {
    cursor: pointer;
    width: 63.76px;
    height: 12.06px;
    border-radius: 13px;
    background-color: rgba(217, 217, 217, 1);
    transition: .5s ease;
}

.photo-slider .buttons-slider div.active {
    width: 103.61px;
    background-color: rgba(130, 203, 178, 1);
}

.photo-slider.mobile {    
    display: none;
}

.photo-slider.mobile img {
    height: 464px;
}

.photo-slider .buttons-slider.mobile {
    display: none;
}  

.slick-track {
    margin-left: 10px;
}

@media screen and (max-width: 1280px) {
    .photo-slider.mobile {    
        display: block;
    }   
    .photo-slider.desktop {    
        display: none;
    }  
    .photo-slider .buttons-slider.desktop {
        display: none;
    }  
    .photo-slider .buttons-slider.mobile {
        display: flex;
    }    
}
