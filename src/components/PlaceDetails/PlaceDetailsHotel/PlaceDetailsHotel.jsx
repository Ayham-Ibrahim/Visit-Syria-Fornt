import './PlaceDetailsHotel.css'
import { CiLocationOn } from "react-icons/ci";
import PhotoSlider from './../../../shared/PhotoSlider/PhotoSlider'
import roomImage from './../../../assets/images/rooms.png'
import SectionRating from '../../../shared/SectionRating/SectionRating';
import { FaImage } from 'react-icons/fa';
import Button from '../../../shared/Button/Button';
import ServiceSection from './../../../shared/ServiceSection/ServiceSection'
import ContactSection from './../../../shared/ContactSection/ContactSection'
import GetRateStars from '../../../shared/GetRateStars/GetRateStars';
import { TfiHome } from "react-icons/tfi";
import { IoRestaurantOutline, IoWifiSharp } from "react-icons/io5";
import { PiPersonSimpleSwim } from "react-icons/pi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { CiParking1 } from "react-icons/ci";
import { BsAirplane } from "react-icons/bs";
import { TbHierarchy3 } from "react-icons/tb";
import React from 'react'
import * as hotelSrevices from '../../../helpers/HotelsServices/HotelsServices';
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { mainURL } from '../../../helpers/ExploreServices/ExploreURLs';
import CommentSection from '../../../shared/CommentSection/CommentSection';

function PlaceDetailsHotel() {
    // const [selectedValue, setSelectedValue] = useState('Option 1');
    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    // };
    const hotelServices = [
        {
            title: '/إقامة / غرف و أجنحة',
            icon: <TfiHome />,
        },
        {
            title: 'مطاعم و تراسات ',
            icon: <IoRestaurantOutline />,
        },
        {
            title: 'حمام سباحة',
            icon: <PiPersonSimpleSwim />,
        },
        {
            title: 'مسبح و أنشطة أطفال',
            icon: <LiaSwimmingPoolSolid />,
        },
        {
            title: 'قاعات للإجتماعات و المؤتمرات',
            icon: <TbHierarchy3 />,
        },
        {
            title: 'انتظار مجاني للسيارات',
            icon: <CiParking1 />,
        },
        {
            title: 'انترنت عالي السرعة',
            icon: <IoWifiSharp />,
        },
        {
            title: 'خدمة توصيل من و إلى المطار',
            icon: <BsAirplane />,
        },
    ]

    const { id } = useParams();
    const [hotel, setHotel] = useState();
    const [loading, setLoading] = useState(false);
    const [hotelImages, setImages] = useState([]);
    const navigate = useNavigate();


    const gethotel = async () => {
        try {
            setLoading(true);
            const response = await hotelSrevices.getHotelByID(id);
            setHotel(response.data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        gethotel();
        setLoading(false);
    }, []);

    useEffect(() => {
        if (hotel) {
            setImages(hotel.images.map((str) => mainURL + str));
        }
        setLoading(false);
    }, [hotel]);
    return (
        <>
            {!loading && hotel &&
                <div className='place-details-hotel'>
                    <div className="place-hero" style={{ backgroundImage: `url(${mainURL + hotel.cover_image})` }}></div>
                    <div className="details-content">
                        <div className="place-header">
                            <div className="place-title">
                                <h1>{hotel.name}  </h1>
                                <div className="rate-location-container">
                                    <div className="place-rating1">
                                        <GetRateStars rating={4} />
                                    </div>
                                    <div className="place-location">
                                        <CiLocationOn />
                                        <p className='m-0'>{hotel.city + " - " + hotel.location} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="place-logo">
                                <img src={mainURL + hotel.logo} alt="place-logo" />
                            </div>
                        </div>
                        <div className="place-description">
                            <p className='m-0'>
                                {hotel.secondary_description.split('.').join('.\n\n').split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>

                                ))}
                                {/* {hotel.secondary_description} */}
                                </p>
                        </div>
                        <div className="place-gallery">
                            <PhotoSlider imgs={hotelImages} />
                        </div>
                        <div className='green-line' ></div>
                        <div className="detail-rating-services">
                            <SectionRating />
                            <ServiceSection services={hotelServices} />
                        </div>
                        <div className='green-line' ></div>
                        <div className="hotel-rooms">
                            <div className="rooms">
                                <h3>الغرف و الأجنحة</h3>
                                <p>لشخص واحد</p>
                                <p>لشخصين</p>
                                <p>جناح عائلي</p>
                            </div>
                            <div className="prices-offer">
                                <h3>عروض الأسعار</h3>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                            <div className="room-images position-relative">
                                <img src={roomImage} alt="room photo" />
                                <div className="room-images-icon">
                                    <p>15</p>
                                    <FaImage />
                                </div>
                                <div className="book-button position-absolute">
                                    <Button btnText="إحجز الآن" radius={9}
                                        onClick={() => navigate(`/booking`)} />
                                </div>
                            </div>
                        </div>
                        <div className='green-line' ></div>
                        <div className="container" style={{ padding:"0 40px" }}>
                        <CommentSection hotelID={hotel.id} restaurantID={null} landmarkID={null} placeType="hotel" />
                        </div>
                        <div className='green-line' ></div>
                        <ContactSection />
                    </div>
                </div >}
        </>
    )
}

export default PlaceDetailsHotel