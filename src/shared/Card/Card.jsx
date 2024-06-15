import React from 'react'
import './Card.css'
import { IoStarSharp } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

const Card = ({ image, title, rate, brief, location, button }) => {
    return (
        <div className='BY_MainCard'>
            <div className='image_section'>
                <img src={image} alt="" />
            </div>
            <div className='content_section'>
                <div className="top_section">
                    <div className='title'>{title}</div>
                    <div className='rate'> {rate}<i><IoStarSharp /></i></div>
                </div>
                <div className="brief_section">{brief.slice(0, 185)} ...</div>
                <div className="bottom_section">
                    <div className="location">{location}<i><GrLocation /></i></div>
                    <div className="button_section">{button}</div>
                </div>
            </div>
        </div>
    )
}

export default Card