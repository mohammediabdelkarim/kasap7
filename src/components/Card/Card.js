import React from "react";

import "@/components/Card/Card.css";

function Card({ logement }) {

    return (
        <li className="card">
            <img className="card-image" src={logement.cover} alt="Logement" />
            <div className="card-sombre"></div>
            <h2 className="card-titre">{logement.title}</h2>
        </li>
    );
}

export default Card;