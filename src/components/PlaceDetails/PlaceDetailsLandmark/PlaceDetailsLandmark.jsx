import './PlaceDetailsLandmark.css'
import { CiLocationOn } from "react-icons/ci";
import PhotoSlider from './../../../shared/PhotoSlider/PhotoSlider'
import GetRateStars from '../../../shared/GetRateStars/GetRateStars';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as landmarkServices from '../../../helpers/LandMarksServices/LandMarksServices';
import { mainURL } from '../../../helpers/ExploreServices/ExploreURLs';
import React from 'react'
import CommentSection from '../../../shared/CommentSection/CommentSection';

function PlaceDetailsLandmark() {

    const { id } = useParams();
    const [landmark, setLandmark] = useState();
    const [loading, setLoading] = useState(false);
    const [landmarkImages, setImages] = useState([]);

    const getlandmark = async () => {
        try {
            setLoading(true);
            const response = await landmarkServices.getlandmarkByID(id);
            setLandmark(response.data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        getlandmark();
        setLoading(false);
    }, []);

    useEffect(() => {
        if (landmark) {
            setImages(landmark.images.map((str) => mainURL + str));
        }
        setLoading(false);
    }, [landmark]);

    return (
        <>
            {!loading && landmark &&
                <div className='place-details-landmark'>
                    <div className="place-hero" style={{ backgroundImage: `url(${mainURL + landmark.external_image})` }}></div>
                    <div className="details-content">
                        <div className="place-header">
                            <div className="place-title">
                                <h1>{landmark.name}</h1>
                                <div className="rate-location-container">
                                    <div className="place-rating-container">
                                        <GetRateStars rating={4} />
                                    </div>
                                    <div className="place-location">
                                        <CiLocationOn />
                                        <p className='m-0'>{landmark.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="place-description">
                            <p className='m-0'>
                                {landmark.secondary_description.split('.').join('.\n\n').split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                            {/* {landmark.secondary_description} */}
                            </p>

                        </div>
                        <div className="place-gallery">
                            <PhotoSlider imgs={landmarkImages} />
                        </div>
                        <div className='green-line'></div>
                        <div className="container" style={{ padding:"0 40px" }}>
                        <CommentSection hotelID={null} restaurantID={null} landmarkID={landmark.id} placeType="landmark" />
                        </div>
                        <div className='green-line'></div>
                    </div>

                </div >
            }
        </>
    )
}

export default PlaceDetailsLandmark