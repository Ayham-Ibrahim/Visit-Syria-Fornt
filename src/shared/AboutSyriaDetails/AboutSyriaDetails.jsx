import React from "react";
import "./AboutSyriaDetails.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";

const AboutSyriaDetails = ({ name, description}) => {
  return (
    <div className="BY_AboutSyriaDetails">
      <div className="maininfo-es">
        <div className="rightinfo-es">
          <div className="name-es">
            <h1>{name}</h1>
          </div>
        </div>
      </div>
      <div className="placedescription">{description}</div>
    </div>
  );
};

export default AboutSyriaDetails;
