import React from 'react'
import './HomeRecommendationSection.css'
import Card from '../../shared/Card/Card'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Button from '../../shared/Button/Button'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as recommendationsServices from '../../helpers/RecommendationsServices/RecommendationsServices';
import { mainURL } from '../../helpers/ExploreServices/ExploreURLs';

const HomeRecommendationSection = () => {
    const [landmarks, setLandmarks] = useState();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const getRecommendationData = async () => {
        setLoading(true);
        try {
            setLoading(false);
            const response = await recommendationsServices.getRecommendationslandmarks(currentPage);
            setLandmarks(response.data);
            setTotalPages(response.pagination.total_pages);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        getRecommendationData();
    }, [])

    useEffect(() => {
        getRecommendationData();
    }, [currentPage]);

    const handleReadMoreClick = (id) => {
        navigate(`/landmark-details/${id}`);
    };
    return (
        <div className='BY_RecommendationSectionCardsContainer'>

            <div className='BY_CardsSection'>
                {!loading && landmarks && landmarks.map((card, index) => (
                    <Card
                        brief={card.primary_description}
                        button={<Button btnText="اقرأ المزيد" radius="10px" className="BY_CardsButtons" onClick={() => handleReadMoreClick(card.id)} />}
                        onclick={() => handleReadMoreClick(card.id)}
                        image={mainURL + card.internal_image}
                        location={card.city}
                        price={""}
                        price_exists={false}
                        rate={4.7}
                        title={card.name}
                        text={''}
                        key={card.id} />
                ))}
            </div>

            <div className='BY_PaginationSection'>

                <div className="BY_leftArrow">
                    {currentPage === 1 ? (
                        <IoIosArrowBack style={{ opacity: 0.3 }} />
                    ) : (
                        <IoIosArrowBack onClick={() => handlePageChange(currentPage - 1)} />
                    )}
                </div>
                <div className="BY_dots">
                    <div className="BY_dot">
                        {currentPage === 1 ? (
                            <GoDotFill style={{ opacity: 0.5 }} />
                        ) : (
                            <GoDotFill onClick={() => handlePageChange(currentPage - 1)} />
                        )}
                    </div>
                    <div className="BY_dot"><GoDotFill /></div>
                    <div className="BY_dot">
                        {currentPage === totalPages ? (
                            <GoDotFill style={{ opacity: 0.5 }} />
                        ) : (
                            <GoDotFill onClick={() => handlePageChange(currentPage + 1)} />
                        )}
                    </div>
                </div>

                <div className="BY_rightArrow">
                    {currentPage === totalPages ? (
                        <IoIosArrowForward style={{ opacity: 0.3 }} />
                    ) : (
                        <IoIosArrowForward onClick={() => handlePageChange(currentPage + 1)} />
                    )}

                </div>
            </div>
        </div>
    )
}

export default HomeRecommendationSection