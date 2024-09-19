//import React from 'react'
import '../Sass/Header.scss' // Importation des styles SCSS spécifiques au composant Header

function Header() {
    return (
        <>
            {/* Conteneur principal de la barre de navigation */}
            <div className="navbar-container">
                {/* Titre ou logo de la navbar */}
                <h1 className="title-navbar">S.GOULONG</h1>

                {/* Section de navigation */}
                <nav className="nav-content">
                    {/* Lien vers la section Accueil */}
                    <a href="#accueil">Accueil</a>
                    {/* Lien vers la section Présentation */}
                    <a href="#presentation">Presentation</a>
                    {/* Lien vers la section Réalisations */}
                    <a href="#realisations">Réalisations</a>
                    {/* Lien vers la section Compétences */}
                    <a href="#competences">Competences</a>
                    {/* Lien vers la section Contact */}
                    <a href="#contact">Contact</a>
                    {/* Div pour l'animation de survol */}
                    <div className="animation"></div>
                </nav>
                <nav className="button-hamburger">
                    <i className="fa-solid fa-bars"></i>
                </nav>
            </div>
        </>
    );
}
export default Header

