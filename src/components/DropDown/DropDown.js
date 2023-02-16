import React, { useState } from 'react';

import "./DropDown.css";


function DropDown({ title, content, image }) {
    const [dropDown, setDropDown] = useState(false)

    const classToggle = () => {
        setDropDown(!dropDown);
    }

        return (
            <section className='dropdown'>
                <div className='dropdown-titre-wrapper'>
                    <h2 className='dropdown-titre'>{title}</h2>
                    <img className={`dropdown-img ${dropDown ? "rotate" : ""}`} src={image} alt='Arrow' onClick={classToggle}></img>
                </div>
                <div className={`dropdown-content ${dropDown ? "" : "displayNone"}`}>{content}</div>
            </section>
        );
    

};

export default DropDown;
