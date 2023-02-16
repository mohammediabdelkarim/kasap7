import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Apropos, Logement } from '@/Pages/Public/index';

import Layout from '@/layout/layout';
import Erreur404 from '@/Pages/Public/Error404/error404';

const PublicRouteur = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a-propos" element={<Apropos />} />
                <Route path="*" element={<Erreur404 />} />
            </Route>
        </Routes>
    )
};

export default PublicRouteur;

