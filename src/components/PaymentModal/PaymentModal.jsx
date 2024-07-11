import React from 'react'
import "./PaymentModal.css"
import { HiOutlineChevronDown } from "react-icons/hi";
import Button from '../../shared/Button/Button';

const PaymentModal = ({toggleModal}) => {
  return (
    <div>
    <div className="modal" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content  payment-modal-AY">
        <div className="modal-header">
          {/* <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
          <button type="button" className="btn close" onClick={()=>{toggleModal()}}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form>
          <div className="form-row">
            <div className="form-group col-md-12">
              <input type="text" className="form-control" id="inputEmail4" placeholder="رقم البطاقة"/>
            </div>
           <div style={{display:"flex", gap:"10px"}}>
            <div className="form-group col-md-6">
                <input type="date" className="form-control" id="inputEmail4" />
              </div>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" id="inputPassword4" placeholder="cvc"/>
              </div>
           </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="inputAddress" placeholder="الاسم على البطاقة"/>
          </div>
            <div className="form-group col-md-12 select">
              <div>

              <HiOutlineChevronDown  className='select-icon-Ay'/>
              <select id="inputState" className="form-control">
                <option selected>البلد او المنطقة</option>
                <option>حمص</option>
                <option>حماه</option>
                <option>اللاذقية</option>
                <option>دمشق</option>
              </select>
              </div>
            </div>
            <div className="form-group" >
              <div className="form-check" >
              <label className="form-check-label">
                احفظ معلوماتي بشكل آمن للدفع بنقرة واحدة
              </label>
              <input className="form-check-input" type="checkbox" id="gridCheck" checked/>
            </div>
        </div>
        </form>
        
        </div>
        <div className="modal-footer">
        <Button btnText={"تأكيد الدفع"} onClick={toggleModal}/>
        </div>
        <span className='payment-span-Ay'>
          من خلال التأكيد و فإنك تسمح ل  the outdoor Inn Crowd بتحصيل رسوم بطاقتك مقابل هذه الدفعة والمدفوعات المستقبلية وفقاً لشروطها و يمكنك دائماًتأكيد الحجز
        </span>
      </div>
    </div>
  </div>
    </div>
  )
}

export default PaymentModal
