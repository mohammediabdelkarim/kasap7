import React, { useState } from 'react';

import "./Carroussel.css";

import LeftArrow from '@/assets/images/Components/Carroussel/leftarrow.png';
import RightArrow from '@/assets/images/Components/Carroussel/rightarrow.png';

function Carroussel({ images }) {

    const [index, setindex] = useState(0)

    const previousImage = () => {
        setindex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    const nextImage = () => {
        setindex((prevIndex) => prevIndex + 1 === images.length ? 0 : prevIndex + 1)
    }

    if(images.length > 1) {
    return (
        <div className="carroussel">
            <img className="leftArrow" src={LeftArrow} alt="Flèche vers la gauche" onClick={() => previousImage()} />
            <div className="carrousselSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {images.map((image, index) => (
                        <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${image})` }}></div>
                    ))}
            </div>
            <img className="rightArrow" src={RightArrow} alt="Flèche vers la droite" onClick={() => nextImage()} />
            <span className="slideNumber displayNone"> {index + 1} / {images.length} </span>
        </div>
    );
    }else{
        return (
            <div className="carroussel">
                <div className="carrousselSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                        {images.map((image, index) => (
                            <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${image})` }}></div>
                        ))}
                </div>
            </div>
        );
    }
};

export default Carroussel;