import React from 'react';

import "./Stars.css";

import PinkStar from '@/assets/images/Components/Stars/pinkstar.png';
import GreyStar from '@/assets/images/Components/Stars/greystar.png';

function Stars({ rating }) {

    const rates = [1, 2, 3, 4, 5]
    return (
        <div className='starsWrapper'>
            {rates.map((rate) =>
                rating >= rate
                    ? <img key={rate} className='star' src={PinkStar} alt="Etoile pleine" />
                    : <img key={rate} className='star' src={GreyStar} alt="Etoile vide" />
            )}
        </div>
    );
};

export default Stars;