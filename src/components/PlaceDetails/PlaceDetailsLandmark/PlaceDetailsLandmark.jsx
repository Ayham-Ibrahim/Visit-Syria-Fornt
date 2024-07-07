import './PlaceDetailsLandmark.css'
import { CiLocationOn } from "react-icons/ci";
import PhotoSlider from './../../../shared/PhotoSlider/PhotoSlider'
import GetRateStars from '../../../shared/GetRateStars/GetRateStars';
function PlaceDetailsLandmark({ backgroundImage, landmarkName, rating, location, description, images }) {

    return (
        <div className='place-details-landmark'>
            <div className="place-hero" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="details-content">
                <div className="place-header">
                    <div className="place-title">
                        <h1>{landmarkName}</h1>
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
                </div>
                <div className="place-description">
                    <p className='m-0'>{description}</p>
                </div>
                <div className="place-gallery">
                    <PhotoSlider imgs={images} />
                </div>
                <div className='green-line' ></div>
            </div>
        </div >
    )
}

export default PlaceDetailsLandmark