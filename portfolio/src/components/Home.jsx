import React, { useState, useEffect } from 'react';
import '../Sass/Home.scss';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Realisations from '../components/Realisations';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

function Home() {
    // Déclaration d'un état local pour gérer l'animation
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Déclencher l'animation lorsque le composant est monté
        setIsAnimated(true);
    }, []); //  assure que useEffect ne s'exécute qu'une seule fois après le montage initial

    return (
        <>
            <Header />

            <div id="accueil" className="home-container">
                <div className={`home-content ${isAnimated ? 'animate' : ''}`}>
                    <div className="home-text">
                        <h2>Samanta GOULONG</h2>
                        <h3>Intégratrice Web Junior</h3>
                    </div>

                    <div className="home-buttons-container">
                        <a href="#realisations" className="button-link">
                            Aller au Portfolio
                        </a>

                        <a href="#competences" className="button-link">
                            Consulter mon CV
                        </a>
                    </div>
                </div>
            </div>

            <section id="presentation">
                <Presentation />
            </section>

            <section id="realisations">
                <Realisations />
            </section>

            <section id="competences">
                <Skills />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </>
    );
}

export default Home;
