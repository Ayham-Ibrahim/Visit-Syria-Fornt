import React from "react";
import "./PlaceDetails.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";

const PlaceDetails = ({ name, location, logo, description }) => {
  // const renderStars = () => {
  //   let stars = [];
  //   for (let i = 1; i <= 5; i++) {
  //     i <= rate
  //       ? stars.push(<MdStarRate key={i} style={{ color: "#82CBB2" }} />)
  //       : stars.push(<MdStarRate key={i} style={{ color: "#A5A3A3" }} />);
  //   }
  //   return stars;
  // };
  return (
    <div className="placedetails">
      <div className="maininfo-es">
        <div className="leftinfo-es">
          {logo ? <img src={logo} alt="" /> : null}
        </div>
        <div className="rightinfo-es">
          <div className="name-es">
            <h1>{name}</h1>
          </div>

          <div className="stars-location-es">

            <div className="star-rating">
              {/* {renderStars()} */}
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </div>
            <div className="placelocation">
              <p>
                <i>
                  <IoLocationOutline />
                </i>
                {location}
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="placedescription">{description}</div>
    </div>
  );
};

export default PlaceDetails;
