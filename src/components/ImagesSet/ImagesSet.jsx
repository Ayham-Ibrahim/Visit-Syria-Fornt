import React from 'react'
import './ImagesSet.css'

const ImagesSet = ({images}) => {
    const length = images.length;

    return (
        <div className='BY_ImagesSet'>
            <div className='BY_ImagesSetContainer'>
                <div className="gallery-container">
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
                </div>

            </div>
        </div>
    )
}

export default ImagesSet