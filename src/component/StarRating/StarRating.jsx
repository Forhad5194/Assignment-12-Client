import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
const StarRating = () => {
    const {rating , setRating}= useState(3)
    return (
        <Rating className='mt-8'
        style={{ maxWidth: 180 }}
        value={rating}
        onChange={setRating}
      />
    );
};

export default StarRating;