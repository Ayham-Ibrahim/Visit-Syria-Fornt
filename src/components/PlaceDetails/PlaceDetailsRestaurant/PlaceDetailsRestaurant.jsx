import { useState } from 'react'
import './PlaceDetailsRestaurant.css'
import { CiLocationOn } from "react-icons/ci";
import PhotoSlider from './../../../shared/PhotoSlider/PhotoSlider'
import { FaBookOpen } from 'react-icons/fa';
import SectionRating from '../../../shared/SectionRating/SectionRating';
// import Button from '../../../shared/Button/Button';
import menuimage from './../../../assets/images/menu.png'
import ServiceSection from './../../../shared/ServiceSection/ServiceSection'
import ContactSection from './../../../shared/ContactSection/ContactSection'
import GetRateStars from '../../../shared/GetRateStars/GetRateStars';
import Button from '../../../shared/Button/Button';
function PlaceDetailsRestaurant({ backgroundImage, restaurantName, rating, location, logo, description, images, services }) {

    return (
        <div className='place-details-restaurant'>
            <div className="place-hero" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="details-content">
                <div className="place-header">
                    <div className="place-title">
                        <h1>{restaurantName}</h1>
                        <div className="rate-location-container">
                            <div className="place-rating-container">
                                <GetRateStars rating={rating} />
                            </div>
                            <div className="place-location">
                                <CiLocationOn />
                                <p className='m-0'>{location}</p>
                            </div>
                        </div>
                    </div>
                    <div className="place-logo">
                        <img src={logo} alt="place-logo" />
                    </div>
                </div>
                <div className="place-description">
                    <p className='m-0'>{description}</p>
                </div>
                <div className="place-gallery">
                    <PhotoSlider imgs={images} />
                </div>
                <div className='green-line' ></div>
                <div className="detail-rating-services">
                    <SectionRating />
                    <ServiceSection services={services} />
                    <div className="restaurant-images position-relative">
                        <img src={menuimage} alt="restaurant photo" />
                        <div className="restaurant-images-icon">
                            <p className='m-0'>قائمة الطعام </p>
                            <FaBookOpen />
                        </div>
                        <div className="book-button position-absolute">
                            <Button btnText="إحجز الآن" radius={9} />
                        </div>
                    </div>
                </div>
                <div className='green-line' ></div>
                <ContactSection />
            </div>
        </div >
    )
}

export default PlaceDetailsRestaurant