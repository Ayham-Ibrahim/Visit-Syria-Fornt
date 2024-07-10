// import React from 'react'
import { useState } from "react";
import Button from "../Button/Button"
import CommentCard from "../CommentCard/CommentCard"
import "./CommentSection.css"
import AddCommentModal from "../../components/AddCommentModal/AddCommentModal";
import AddRateModal from "../../components/AddRateModal/AddRateModal";
const CommentSection = () => {
    const [Commentmodal, setCommentModal] = useState(false);
    const [RateModal, setRateModal] = useState(false);
    const toggleRateModal = () => {
        setRateModal(!RateModal);
    }
    const toggleCommentModal = () => {
        setCommentModal(!Commentmodal);
    }

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
                <CommentCard
                    name="Sara Adam"
                    date="24.08.2023"
                    img_path="/src/assets/images/comment-img-2.png"
                />
                <CommentCard
                    name="Sara Adam"
                    date="24.08.2023"
                    img_path="/src/assets/images/comment-img-2.png"
                />
                <CommentCard
                    name="Sara Adam"
                    date="24.08.2023"
                    img_path="/src/assets/images/comment-img-2.png"
                />
                <CommentCard
                    name="Sara Adam"
                    date="24.08.2023"
                    img_path="/src/assets/images/comment-img-2.png"
                />
        </div>
            {RateModal && (
                <AddRateModal toggleRateModal={toggleRateModal} />
            )}
            {Commentmodal && (
                <AddCommentModal toggleCommentModal={toggleCommentModal} />
            )}
        </div>
    )
}
export default CommentSection
