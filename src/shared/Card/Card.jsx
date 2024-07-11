import React from 'react'
import './Card.css'
import { IoStarSharp } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

const Card = ({ image, title, rate, brief, location, button, price_exists, price, text, onclick= null }) => {
    return (
        <div className='BY_MainCard' onClick={onclick}>
            <div className='image_section'>
                <img src={image} alt="" />
            </div>
            <div className='content_section'>
                <div className="top_section">
                    <div className='title'>{title}</div>
                    <div className='rate'> {rate}<i><IoStarSharp /></i></div>
                </div>
                {price_exists ?
                    <div className='middle_section'>
                        <div className="location">{location}<i><GrLocation /></i></div>
                        <div className="brief_section">{brief.slice(0, 125)} ...</div>
                    </div> :
                    <div className="brief_section">{brief.slice(0, 175)} ...</div>
                }
                <div className="bottom_section">
                    {price_exists ?
                        <div className="price"> <span>  {price} $</span>{text}</div> :
                        <div className="location">{location}<i><GrLocation /></i></div>
                    }
                    <div className="button_section">{button}</div>
                </div>
            </div>
        </div>
    )
}

export default Card