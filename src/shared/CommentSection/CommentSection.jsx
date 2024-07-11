// import React from 'react'
import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button"
import CommentCard from "../CommentCard/CommentCard"
import "./CommentSection.css"
import axios from 'axios';
import AddCommentModal from "../../components/AddCommentModal/AddCommentModal";
import AddRateModal from "../../components/AddRateModal/AddRateModal";
import { toast } from "react-toastify";


const CommentSection = ({ hotelID, restaurantID, landmarkID, placeType }) => {
    const [comments, setComments] = useState([]);
    const [Commentmodal, setCommentModal] = useState(false);
    const [RateModal, setRateModal] = useState(false);
    const [loading , setLoading] = useState(false);
    const placeId = placeType === 'hotel' ? hotelID : placeType === 'restaurant' ? restaurantID : landmarkID;


    const scrollContainerRef = useRef(null);

    useEffect(() => {
        setLoading(true)
        axios.get(`http://127.0.0.1:8000/api/get-comments-${placeType}/${placeId}`)
        .then(res => {
            setComments(res.data.data); // Assuming the API returns { comments: [...] }
        }).catch(error => {
            setLoading(false)
            toast.error(error.message)
            // console.error("Failed to delete hotel:", error);
        })
        .finally(() => setLoading(false));
    }, []); 


    
    const toggleRateModal = () => {
        setRateModal(!RateModal);
    }
    const toggleCommentModal = () => {
        setCommentModal(!Commentmodal);
    }

    //   // Function to handle scroll button clicks
    //   const scrollComments = (direction) => {
    //     if (!scrollContainerRef.current) {
    //         console.log('Scroll container not found');
    //         return;
    //     }
    //     const scrollAmount = direction === 'left' ? -200 : 200; // Adjust scroll amount as needed
    //     console.log(`Scrolling ${direction}, current scrollLeft: ${scrollContainerRef.current.scrollLeft}, new scrollLeft: ${scrollContainerRef.current.scrollLeft + scrollAmount}`);
    //     scrollContainerRef.current.scrollLeft += scrollAmount;
    // };

    return (
        <div className='comment-section'>
            <div className="comment-section-header">
                <div className="comment-section-title">
                    التعليقات والمراجعات
                    <div className="comment-count">
                        200
                        <span> تعليق</span>
                    </div>
                </div>
                <div className="comment-section-buttons">
                    <Button className={"comment-button"} btnText={"تقييم"} onClick={toggleRateModal}/>
                    <Button className={"comment-button"} btnText={"اكتب تعليق"} onClick={toggleCommentModal}/>
                    <Button className={"comment-button"} btnText={"اضف الى المفضلة"}/>
                </div>
            </div>
            <div className="row comments">
            {loading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" style={{ color:"rgb(126, 126, 126)" }} role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            ) : (
                <>
                {/* <button onClick={() => scrollComments('left')}>Scroll Left</button> */}
                <div className="container-fluid py-2  scroll-container" ref={scrollContainerRef}>
                    <div className="d-flex flex-row flex-nowrap" style={{ gap : "20px",overflow:"scroll" }}>
                    {comments.map((comment, index) => (
                    <CommentCard
                        key={index}
                        name={comment.user}
                        date={comment.created_at}
                        img_path={comment.user_image || "/src/assets/d4291ea760fcbf77ef282cb83ab7127b.jpg"} // Adjusted default image path
                        content={comment.comment_content}
                    />
                    ))}
                    </div>
                </div>
                {/* <button onClick={() => scrollComments('right')} style={{ marginLeft: '10px' }}>Scroll Right</button> */}
                </>
            )}
                </div>
                    {RateModal && (
                        <AddRateModal toggleRateModal={toggleRateModal} />
                    )}
                    {Commentmodal && (
                        <AddCommentModal toggleCommentModal={toggleCommentModal} hotelId={hotelID} restaurantId={restaurantID} landmarkId={landmarkID} placeType={placeType} />
                    )}
                </div>
    )
}
export default CommentSection
