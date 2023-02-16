import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./logement.css";
import ServiceLogement from "@/_services/logements.service.js";
import Carroussel from '@/components/Carroussel/Carroussel';
import InfosLogement from '@/components/InfosLogement/InfosLogement';
import Tags from '@/components/Tags/Tags';
import Profil from '@/components/Profil/Profil';
import Stars from '@/components/Stars/Stars';
import DropDown from '@/components/DropDown/DropDown';
import Arrow from '@/assets/images/Components/DropDown/arrow.png';
const Logement = () => {

    const [logement, setlogement] = useState({});
    const [waiting, setwaiting] = useState(true);

    let { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        getInfo();
        //eslint-disable-next-line
    }, [])

    const getInfo = async () => {
        await ServiceLogement.GetLogementById(id)
            .then((data) => {
                setlogement(data);
                if (data === undefined) {
                    navigate("/404");
                }
                setwaiting(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    

    if (waiting) return (<h3 className='loading'>Chargement...</h3>)

    return (
        <div className='logement'>
            <Carroussel images={logement.pictures} />

            <section className='logement-infos'>
                <div className='logement-infos-tags-wrapper'>
                    <InfosLogement title={logement.title} location={logement.location} />
                    <ul className='tags'>
                        {
                            logement.tags.map((tag) =>
                            (
                                <Tags key={tag} nameTag={tag} />
                            ))}
                    </ul>
                </div>
                <div className='logement-profil-stars-wrapper'>
                    <Profil name={logement.host.name} picture={logement.host.picture} />
                    <Stars rating={logement.rating} />
                </div>
            </section>
            <section className='logement-dropdown'>
                <DropDown title="Description" image={Arrow} content={logement.description}/>
                <DropDown title="Équipements" image={Arrow} content={logement.equipments.map((equipment) => (<p key={equipment}>{equipment}</p>))} />
            </section >
        </div >
        );
    
    };
    
    export default Logement;