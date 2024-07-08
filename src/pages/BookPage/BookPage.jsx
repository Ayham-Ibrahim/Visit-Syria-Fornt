// import React from 'react'
import "./BookPage.css";
import reserveImage from './../../assets/images/Explore/Frame 1866.png'
import PaymentModal from "../../components/PaymentModal/PaymentModal";
import { useState } from "react";

function BookPage() {

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <>
    <div className="container book-page">
      <div className="title-reservation-Ay">التحقق من استمارة التوفر</div>
      <div className="row all-form">
      <div className="col-8">
        <form className="row g-3 book-form"  onSubmit={(e) => e.preventDefault()}>
        <p>معلومات الاتصال </p>
        <div className="col-md-6">
          <input type="email" className="form-control" id="inputEmail4" placeholder="الاسم الكامل" />
        </div>
        <div className="col-md-6">
          <input type="password" className="form-control" id="inputPassword4" placeholder="رقم التلفون" />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="عنوان البريد الالكتروني "
          />
        </div>
        <span>سوف نتصل بك أو نرسل لك رسالة نصية لتأكيد رقمك. تنطبق معدلات الرسائل والبيانات القياسية. سياسة الخصوصية</span>
        <p>معلومات الزيارة </p>
        <div className="col-md-6">
          <label htmlFor="inputAddress2" style={{marginBottom:"10px"}}>تاريخ الدخول</label>
          <input type="date" className="form-control" id="inputAddress2" placeholder="الدخول" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputAddress2" style={{marginBottom:"10px"}}>تاريخ الخروج</label>
          <input type="date" className="form-control" id="inputAddress2" placeholder="الدخول" />
        </div>
        <div className="col-md-6">
          <select id="inputState" className="form-select">
            <option>عدد الضيوف</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>أكثر</option>
          </select>
        </div>
        <div className="col-md-6">
          <select id="inputState" className="form-select">
            <option >نوع الغرفة</option>
            <option>صغيرة </option>
            <option>كبيرة</option>
          </select>
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="الوصف"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={() =>toggleModal()}>
            احجز الآن
          </button>
        </div>
      </form>
        </div>
        <div className="col-4">
        <div className="card">
        <div className="place-info">
          <div className="image">
            <img src={reserveImage} alt="Image" className="place-image-ay"/>
          </div>
          <div className="place-details">
            <h4 className="text">فندق نسمة جبل</h4>
            <p className="text">غرفة سوپيريور - سرير مزدوج واحد أو سريرين توأم</p>
            <div className="text book-rate">
              <p>جيد جدا 54 تقييما</p>
              <span className="badge rating-value">4.2</span>
            </div>
          </div>
        </div>
        <div className="price-details">
          <p>حجزك محمي بواسطة Visitsyria</p>
          <ul>
            تفاصيل السعر
            <li className="d-flex justify-content-between">
              <span>القيم الأساسي</span>
              <span >240 دولارا</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>تخفيض</span>
              <span>0 دولار</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>الضرائب</span>
              <span>20 دولارا</span>
            </li>
            <li className="d-flex justify-content-between">
              <span>رسوم الخدمة</span>
              <span>5 دولارات</span>
            </li>
          </ul>
          <hr/>
          <div className="d-flex justify-content-between price-sum">
            <span>المجموع</span>
            <span>265 دولارات</span>
          </div>
        </div>
      </div>
        </div>
      
      </div>
    </div>
      {modal && (
        <PaymentModal toggleModal={toggleModal} />
        )}
    </>
  );
}

export default BookPage;