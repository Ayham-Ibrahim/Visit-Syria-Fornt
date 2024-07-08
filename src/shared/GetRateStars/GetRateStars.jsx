import React from 'react';
import { FaStar } from 'react-icons/fa';
import './GetRateStars.css'
const GetRateStars = ({ rating }) => {
  return (
    <div className='rating-comp'>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <FaStar
              color={ratingValue <= rating ? "#8DD3BB" : "grey"}
              size={25}
            />
          </label>
        );
      })}
    </div>
  );
};

export default GetRateStars;
