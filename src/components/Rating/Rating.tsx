import React from "react";

import StarsFilled from "../../assets/icons/star_filled.svg";
import StarsOutline from "../../assets/icons/star_outlined.svg";

type RatingProps = {
  filledStars: number;
};

const rating = Array(5).fill(0);

export const Rating: React.FC<RatingProps> = ({ filledStars }) => {
  return (
    <div className='delivery-rating'>
      {rating.map((r, i) => {
        if (i < filledStars) {
          return <img className='rating-item' src={StarsFilled} alt='' />;
        }
        return <img className='rating-item' src={StarsOutline} alt='' />;
      })}
    </div>
  );
};
