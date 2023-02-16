import React from 'react';

import "./InfosLogement.css";

function InfosLogement({ title, location }) {
    return (
        <div className='infos'>
            <h1 className='infos-title'>{title}</h1>
            <h2 className='infos-location'>{location}</h2>
        </div>
    );
};

export default InfosLogement;