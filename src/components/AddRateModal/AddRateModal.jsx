// import React from 'react'
import Button from "../../shared/Button/Button"
import RateStars from "../../shared/RateStars/RateStars"
import "./AddRateModal.css"
const AddRateModal = ({toggleRateModal}) => {

    const sendRate = () =>{
        console.log("rated")
        toggleRateModal(!toggleRateModal);
    }

    return (
    <div>
    <div className="modal" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
        <div className="modal-header">
            {/* <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
            <button type="button" className="btn close" onClick={()=>{toggleRateModal()}}>
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            <h5 className="card-title" style={{ direction:"rtl" }}>شكرا لزيارة موقعنا نتمنى ان تتركوا  تقييما لخدماتنا</h5>
            <div>
                <RateStars/>
            </div>
        </div>
        <div className="modal-footer">
            <Button btnText={"ارسال"} onClick={sendRate}/>
        </div>
        </div>
    </div>
    </div>
    </div>
    )
}

export default AddRateModal
