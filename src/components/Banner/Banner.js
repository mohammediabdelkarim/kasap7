import React from 'react';
import "./Banner.css";

function Banner({ image, texte }) {

    return (
        <div className="banner">
            <img className="bannerimg" src={image} alt='banniere du site,page accueil' />
            <div className="bannersombre"></div>
            <h1>{texte}</h1>
        </div>
    );
}

export default Banner;