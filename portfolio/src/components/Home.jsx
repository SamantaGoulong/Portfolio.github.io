import React, { useState, useEffect } from 'react'
import '../Sass/Home.scss'
// import { Link } from 'react-router-dom'

function Home() {

    const [isAnimated, setIsAnimated] = useState(false)

    useEffect(() => {
        // Déclencher l'animation lorsque le composant est monté
        setIsAnimated(true)
    }, []) // Ce tableau vide assure que useEffect ne s'exécute qu'une seule fois après le montage initial

    return (
        <>
            <div id="accueil" className="home-container">
                {/* ... */}
                <div className={`home-content ${isAnimated ? 'animate' : ''}`}>
                    <div className="home-text">
                        <h1>Samanta GOULONG</h1>
                        <h2>Intégratrice Web Junior</h2>
                    </div>
                    <div className="home-buttons-container">
                        {/* <Link to="/competences#competences">
                            <button>Aller au Portfolio</button>
                        </Link> */}
                        <a href="#competences" className="lien-nav">
                            <button>Aller au Portfolio</button>
                        </a>
                        {/* <Link to="/resume"></Link> */}
                        <a href="#cv" className="lien-nav">
                            <button>Consulter mon CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
