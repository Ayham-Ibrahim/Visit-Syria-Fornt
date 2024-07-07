import { useState } from 'react'
import './PlaceDetailsHotel.css'
import { FaStar } from 'react-icons/fa6'
import { CiLocationOn } from "react-icons/ci";
import logo from './../../../assets/images/BeitAlwalilogo.png'
import PhotoSlider from './../../../shared/PhotoSlider/PhotoSlider'
import img1 from './../../../assets/images/betalwai1.png'
import img2 from './../../../assets/images/betalwai2.png'
import img3 from './../../../assets/images/betalwai3.png'
import img4 from './../../../assets/images/betalwai4.png'
import img5 from './../../../assets/images/blog4.jpg'
import img6 from './../../../assets/images/slider1.jpg'
import img7 from './../../../assets/images/slider2.jpg'
import img8 from './../../../assets/images/slider3.jpg'
import img9 from './../../../assets/images/home-blog.jpg'
import roomImage from './../../../assets/images/rooms.png'
import SectionRating from '../../../shared/SectionRating/SectionRating';
import { IoIosArrowDown } from 'react-icons/io';
import { FaImage } from 'react-icons/fa';
import Button from '../../../shared/Button/Button';
import ServiceSection from './../../../shared/ServiceSection/ServiceSection'
import ContactSection from './../../../shared/ContactSection/ContactSection'
import GetRateStars from '../../../shared/GetRateStars/GetRateStars';
import { TfiHome } from "react-icons/tfi";
import { IoRestaurantOutline ,IoWifiSharp } from "react-icons/io5";
import { PiPersonSimpleSwim } from "react-icons/pi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { CiParking1 } from "react-icons/ci";
import { BsAirplane } from "react-icons/bs";
import { TbHierarchy3 } from "react-icons/tb";
function PlaceDetailsHotel({ backgroundImage }) {
    const [selectedValue, setSelectedValue] = useState('Option 1');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const array = [img1, img2, img3, img4, img7, img5, img6, img8];
    const services = [
        {
            title:'/إقامة / غرف و أجنحة',
            icon:<TfiHome />,
        },
        {
            title:'مطاعم و تراسات ',
            icon:<IoRestaurantOutline />,
        },
        {
            title:'حمام سباحة',
            icon:<PiPersonSimpleSwim />,
        },
        {
            title:'مسبح و أنشطة أطفال',
            icon:<LiaSwimmingPoolSolid />,
        },
        {
            title:'قاعات للإجتماعات و المؤتمرات',
            icon:<TbHierarchy3 />,
        },
        {
            title:'انتظار مجاني للسيارات',
            icon:<CiParking1 />,
        },
        {
            title:'انترنت عالي السرعة',
            icon:<IoWifiSharp />,
        },
        {
            title:'خدمة توصيل من و إلى المطار',
            icon:<BsAirplane />,
        },
    ]
    return (
        <div className='place-details-hotel'>
            <div className="place-hero" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="details-content">
                <div className="place-header">
                    <div className="place-title">
                        <h1>  فندق بيت الوالي</h1>
                        <div className="rate-location-container">
                            <div className="place-rating1">
                                <GetRateStars rating={4} />
                            </div>
                            <div className="place-location">
                                <CiLocationOn />
                                <p className='m-0'>دمشق - طريق بابت توما الرئيسي</p>
                            </div>
                        </div>
                    </div>
                    <div className="place-logo">
                        <img src={logo} alt="place-logo" />
                    </div>
                </div>
                <div className="place-description">
                    <p className='m-0'>يتميز بتصميمه الداخلي الفخم وموقعه المميز بالقرب من المعالم السياحية والتاريخية.ويضم 40 غرفة وجناحاً . غرف النزلاء توفر سبل راحة مثل ميني بار وتكييف هواء كما يستطيع النزلاء الاتصال بالإنترنت من خلال خدمة واي فاي مجانية التي يقدمها الفندق. تتميز الغرف في Beit Al Wali Hotel بخدمة الغرف، لإقامة ممتعة حقًا. تتميز المنشأة أيضًا بتجهيزات مثل الإفطار و غيرها .....</p>
                </div>
                <div className="place-gallery">
                    <PhotoSlider imgs={array} />
                </div>
                <div className='green-line' ></div>
                <div className="detail-rating-services">
                <SectionRating />
                <ServiceSection services={services} />
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

export default PlaceDetailsHotel