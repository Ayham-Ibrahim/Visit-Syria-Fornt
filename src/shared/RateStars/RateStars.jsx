import React, { useState } from 'react'
import "./RateStars.css"
const RateStars = () => {
  const star = [1, 2, 3, 4, 5];
  const [ratingLocation, setratingLocation] = useState("");
  const [ratingPrice, setratingPrice] = useState("");
  const [ratingService, setratingService] = useState("");
  const [ratingclean, setratingclean] = useState("");

  // const sendRate = (event) => {
  //   event.preventDefault();
  //   let services = {
  //     ratingLocation: ratingLocation,
  //     ratingPrice: ratingPrice,
  //     ratingService: ratingService,
  //     ratingclean: ratingclean,
  //   };
  //   console.log(services);
  //   //reset value after send
  //   setratingLocation("");
  //   setratingPrice("");
  //   setratingService("");
  //   setratingclean("");
  //   alert("تم التقييم بنجاح");

    //  }
    return (
      <>
        <div className="rating-section">
          <form>
            <select
              className="form-select "
              aria-label="Multiple select example"
              name="ratinglocation"
              value={ratingLocation}
              onChange={(event) => {
                setratingLocation(event.target.value);
              }}
            >
              <option value="" selected>
                الموقع
              </option>
              {star.map((e, index) => {
                return (
                  <option key={index} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
            <select
              className="form-select "
              aria-label="Multiple select example"
              name="ratingPrice"
              value={ratingPrice}
              onChange={(event) => {
                setratingPrice(event.target.value);
              }}
            >
              <option value="" selected>
                القيمة
              </option>

              {star.map((e, index) => {
                return (
                  <option key={index} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
            <select
              className="form-select "
              aria-label=" select example"
              name="ratingClean"
              value={ratingclean}
              onChange={(event) => {
                setratingclean(event.target.value);
              }}
            >
              <option value="" selected>
                النظافة
              </option>

              {star.map((e, index) => {
                return (
                  <option key={index} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
            <select
              className="form-select "
              aria-label=" select example"
              value={ratingService}
              onChange={(event) => {
                setratingService(event.target.value);
              }}
            >
              <option value="" selected>
                الخدمة
              </option>

              {star.map((e, index) => {
                return (
                  <option key={index} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </>
    );
  };


export default RateStars

