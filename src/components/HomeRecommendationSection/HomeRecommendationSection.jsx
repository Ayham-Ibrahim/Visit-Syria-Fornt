import React from 'react'
import './HomeRecommendationSection.css'
import Card from '../../shared/Card/Card'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const HomeRecommendationSection = () => {
    return (
        <div className='BY_RecommendationSectionCardsContainer'>
            HomeRecommendationSection
            <div className='BY_CardsSection'>
                {/* <Card/> */}
            </div>
            <div className='BY_PaginationSection'>
                <div className="BY_leftArrow"><IoIosArrowBack /></div>
                <div className="BY_dots">
                    <div className="BY_dot"><GoDotFill /></div>
                    <div className="BY_dot"><GoDotFill /></div>
                    <div className="BY_dot"><GoDotFill /></div>
                </div>
                <div className="BY_rightArrow"><IoIosArrowForward /></div>
            </div>
        </div>
    )
}

export default HomeRecommendationSection