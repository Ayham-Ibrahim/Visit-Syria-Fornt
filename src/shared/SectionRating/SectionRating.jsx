import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { SectionRatingData, star } from './SectionRatingData';
import "./SectionRating.css"
function SectionRating() {
   

    const [ratings, setRatings] = useState(SectionRatingData.map((item) => item.rate));
    
  //  useEffect(()=>{
  //         console.log(ratings)
  //         // axios
  //  },[])

  return (
    <div className='container rating-view   ' dir="rtl">
      <h2>تقييمات</h2>
       {SectionRatingData.map((item, index) => (
        <div key={index} className='rate-flex '>
          <h1 className='name-rate'>{item.service}</h1>
          {star.map((value) => (
            <FaStar
              key={value}
              color={value <= ratings[index] ? '#8DD3BB' : '#D9D9D9'}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SectionRating