import React from 'react'
import './ImagesGallery.css'

const ImagesGallery = ({ images }) => {
    const length = images.length;

    return (
        <div className='BY_ImagesGallery'>
            <div className="BY_galleryContainer">
                {length === 1 && (
                    <div className="single-image">
                        <img src={images[0]} alt="Gallery" />
                    </div>
                )}

                {length === 2 && (
                    <div className="two-images">
                        <img src={images[0]} alt="Gallery" />
                        <img src={images[1]} alt="Gallery" />
                    </div>
                )}

                {length === 3 && (
                    <div className="three-images">
                        <div className="big-image">
                            <img src={images[0]} alt="Gallery" />
                        </div>
                        <div className="small-images">
                            <img src={images[1]} alt="Gallery" />
                            <img src={images[2]} alt="Gallery" />
                        </div>
                    </div>
                )}

                {length >= 4 && (
                    <div className="four-images">
                        <div className="big-image">
                            <img src={images[0]} alt="Gallery" />
                        </div>
                        <div className="small-images">
                            <img src={images[1]} alt="Gallery" />
                            <img src={images[2]} alt="Gallery" />
                            <img src={images[3]} alt="Gallery" />
                        </div>
                    </div>
                )}
                <div className="BY_SmallScreenOnly">
                    <div className="slider">
                        <div className="slides">
                            <div className="slide">
                                <img src={images[0]} alt="Gallery" />
                            </div>
                            <div className="slide">
                                <img src={images[1]} alt="Gallery" />
                            </div>
                            <div className="slide">
                                <img src={images[2]} alt="Gallery" />
                            </div>
                            <div className="slide">
                                <img src={images[3]} alt="Gallery" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default ImagesGallery