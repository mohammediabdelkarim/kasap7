import React from 'react';
import "./apropos.css";
import Banner from "@/components/Banner/Banner";
import BannerImg from "@/assets/images/Pages/Apropos/bannerapropos.png";
import DropDown from '@/components/DropDown/DropDown';
import Arrow from '@/assets/images/Components/DropDown/arrow.png';

const Apropos = () => {
    return (
        <section className='apropos'>
            <Banner image={BannerImg} texte="" />
            <div className='apropos-dropdowns'>
                <DropDown title="Fiabilité" image={Arrow} content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
                <DropDown title="Respect" image={Arrow} content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <DropDown title="Service" image={Arrow} content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <DropDown title="Responsabilité" image={Arrow} content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </section>
    );
};

export default Apropos;