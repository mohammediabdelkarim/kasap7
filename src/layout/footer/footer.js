import React from 'react';
import "./footer.css";
import logo from '@/assets/images/Layouts/Footer/logo_footer.png';

const Footer = () => {
    return (
        <div className='footer'>
            <img className='logo_footer' src={logo} alt='Kasa logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;