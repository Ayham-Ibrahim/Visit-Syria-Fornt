// import React from 'react'
import Button from "../../shared/Button/Button"
import "./AddCommentModal.css"
const AddCommentModal = ({toggleCommentModal}) => {

    const sendComment = () =>{
        console.log("sended")
        toggleCommentModal(!toggleCommentModal);
    }

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
            <input type="text" name="comment" id="comment" style={{ width:"100%",marginTop:"20px" }}/>
        </div>
        <div className="modal-footer">
            <Button btnText={"ارسال"} onClick={sendComment}/>
        </div>
        </div>
    </div>
    </div>
    </div>
    )
}

export default AddCommentModal
