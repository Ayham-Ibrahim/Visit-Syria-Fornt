import './BlogDetails.css'
import { CiLocationOn } from "react-icons/ci";
import PhotoSlider from './../../../shared/PhotoSlider/PhotoSlider'
function BlogDetails({ backgroundImage, title, location, description, images }) {

    return (
        <div className='place-details-blog'>
            <div className="place-hero" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="details-content">
                <div className="place-header">
                    <div className="place-title">
                        <h1>{title}</h1>
                        <div className="rate-location-container">
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

export default BlogDetails