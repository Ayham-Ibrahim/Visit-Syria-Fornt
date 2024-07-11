// import React from 'react'
import { useState } from "react";
import Button from "../../shared/Button/Button"
import axios from "axios"

import "./AddCommentModal.css"
import { toast } from "react-toastify";
const AddCommentModal = ({ toggleCommentModal, hotelId, restaurantId, landmarkId, placeType }) => {
    const [isclicked,setIsClicked] = useState(false);
    const [commentText, setCommentText] = useState('');

    const apiUrl = `http://127.0.0.1:8000/api/add-${placeType}-comment/${placeType === 'hotel' ? hotelId : placeType === 'restaurant' ? restaurantId : landmarkId}`;
    const sendComment = async () => {
        setIsClicked(true)
        const token = localStorage.getItem('token');
        const data = {
            comment_content : commentText,
            }
            axios.post(apiUrl, data, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
            })
            .then(res => {
                if(res?.status === 200) {
                toggleCommentModal();
                toast.success('تمت الإضافة بنجاح')
                // to('/hotels');
                }
            })
            .catch(err =>{
                if(err?.response?.data?.data) {
                toast.error(err?.response?.data?.data[0])          
                } else {
                toast.error(err.message)
                }
            }).finally(() => setIsClicked(false));
    };

    return (
    <div>
    <div className="modal" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
        <div className="modal-header">
            {/* <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
            <button type="button" className="btn close" onClick={()=>{toggleCommentModal()}}>
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
    
            <h5 className="card-title" style={{ direction:"rtl" }}>من فضلك اكتب لنا رأيك بخدماتنا</h5>
            <input
                type="text"
                name="comment"
                id="comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                style={{ width: "100%", marginTop: "20px" }}
            />        
        </div>
        <div className="modal-footer">
            <Button btnText={"ارسال"} onClick={sendComment} setIsClicked={isclicked}/>
        </div>
        </div>
    </div>
    </div>
    </div>
    )
}

export default AddCommentModal
