import './BlogDetails.css'
import { CiLocationOn } from "react-icons/ci";
import PhotoSlider from './../../../shared/PhotoSlider/PhotoSlider'
import * as blogservices from '../../../helpers/BlogServices/BlogService'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mainURL } from '../../../helpers/ExploreServices/ExploreURLs';
import React from 'react'


function BlogDetails() {

    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [loading, setLoading] = useState(false);
    const [blogImages, setImages] = useState([]);

    const getblog = async () => {
        try {
            setLoading(true);
            const response = await blogservices.getBlogByID(id);
            setBlog(response.data);
            console.log('blog response', response.data);

        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        getblog();
        setLoading(false);
    }, []);

    useEffect(() => {
        if (blog) {
            setImages(blog.images.map((str) => mainURL + str));
        }
        setLoading(false);
        console.log('blogImages', blogImages);
    }, [blog]);

    return (
        <>
            {!loading && blog &&
                <div className='place-details-blog'>
                    <div className="place-hero" style={{ backgroundImage: `url(${mainURL + blog.main_image})` }}></div>
                    <div className="details-content">
                        <div className="place-header">
                            <div className="place-title">
                                <h1>{blog.title}</h1>
                                <div className="rate-location-container">
                                    <div className="place-location">
                                        <CiLocationOn />
                                        <p className='m-0'>{blog.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="place-description">
                            <p className='m-0'>{blog.content.split('.').join('.\n\n').split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}</p>
                        </div>
                        <div className="place-gallery">
                            <PhotoSlider imgs={blogImages} />
                        </div>
                        <div className='green-line' ></div>
                    </div>
                </div >}
        </>
    )
}

export default BlogDetails