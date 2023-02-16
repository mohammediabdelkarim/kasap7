// import des modules nécessaires
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/layout/header/header';
import Footer from '@/layout/footer/footer';
import './layout.css';
// Layout , Permet d'afficher le header puis notre routeur et le footer en suivant.
const Layout = () => {
    return (
            <div className='layout'>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
    );
};

export default Layout;