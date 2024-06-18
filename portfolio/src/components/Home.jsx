import React, { useState, useEffect } from 'react'
import '../Sass/Home.scss' // Importation des styles SCSS spécifiques au composant Home
import Presentation from '../components/Presentation'
import Realisations from '../components/Realisations'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
// import { Link } from 'react-router-dom'; // Importation de Link depuis react-router-dom si nécessaire

function Home() {
    // Déclaration d'un état local pour gérer l'animation
    const [isAnimated, setIsAnimated] = useState(false)

    useEffect(() => {
        // Déclencher l'animation lorsque le composant est monté
        setIsAnimated(true)
    }, []) // Ce tableau vide assure que useEffect ne s'exécute qu'une seule fois après le montage initial

    return (
        <>
            {/* Section principale de la page d'accueil */}
            <div id="accueil" className="home-container">
                <div className={`home-content ${isAnimated ? 'animate' : ''}`}>
                    {/* Section texte de la page d'accueil */}
                    <div className="home-text">
                        <h2>Samanta GOULONG</h2>
                        <h3>Intégratrice Web Junior</h3>
                    </div>
                    {/* Section des boutons de la page d'accueil */}
                    <div className="home-buttons-container">
                        {/* Lien vers la section Réalisations */}
                        <a href="#realisations" className="lien-nav">
                            <button>Aller au Portfolio</button>
                        </a>
                        {/* Lien vers la section Compétences */}
                        <a href="#competences" className="lien-nav">
                            <button>Consulter mon CV</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Section Présentation */}
            <section id="presentation">
                <Presentation />
            </section>

            {/* Section Réalisations */}
            <section id="realisations">
                <Realisations />
            </section>

            {/* Section Compétences */}
            <section id="competences">
                <Skills />
            </section>

            {/* Section Contact */}
            <section id="contact">
                <Contact />
            </section>
        </>
    )
}

export default Home
