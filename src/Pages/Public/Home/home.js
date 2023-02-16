import "./home.css";
import React from 'react';
import { NavLink } from 'react-router-dom';
import BannerImg from '@/assets/images/Pages/Home/img_home_section.png';
import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";
import ServiceLogement from "@/_services/logements.service.js";

const home = () => {
    return (
        <section className="home">
            <Banner image={BannerImg} texte="Chez vous, partout et ailleurs"/>

            <ul className="alllogements">
                {
                    ServiceLogement.GetAllLogement().map((logement) =>                             
                        <NavLink key={logement.id} to={"/logement/" + logement.id}>
                            <Card key={logement.id} logement={logement}/>
                        </NavLink>      
                    )
                }
            </ul>
        </section>
    );
};

export default home;