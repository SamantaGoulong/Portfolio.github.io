// import React from 'react'
// import '../Sass/Header.scss' // Importation des styles SCSS spécifiques au composant Header

// function Header() {
//     return (
//         <>
//             {/* Conteneur principal de la barre de navigation */}
//             <div className="navbar-container">
//                 {/* Titre ou logo de la navbar */}
//                 <h1 className="title-navbar">S.GOULONG</h1>

//                 {/* Section de navigation */}
//                 <nav className="nav-content">
//                     {/* Lien vers la section Accueil */}
//                     <a href="#accueil">Accueil</a>
//                     {/* Lien vers la section Présentation */}
//                     <a href="#presentation">Presentation</a>
//                     {/* Lien vers la section Réalisations */}
//                     <a href="#realisations">Réalisations</a>
//                     {/* Lien vers la section Compétences */}
//                     <a href="#competences">Competences</a>
//                     {/* Lien vers la section Contact */}
//                     <a href="#contact">Contact</a>
//                     {/* Div pour l'animation de survol */}
//                     <div className="animation"></div>
//                 </nav>
//                 <button className="button-hamburger">
//                     <i className="fa-solid fa-bars"></i>
//                 </button>
//             </div>
//         </>
//     );
// }
// export default Header

// import React, { useState } from 'react'; // Importation de useState pour gérer l'état du menu
// import '../Sass/Header.scss'; // Importation des styles SCSS spécifiques au composant Header

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour contrôler l'ouverture du menu

//     const toggleMenu = () => {
//         setIsMenuOpen((prevState) => !prevState); // Inverser l'état du menu
//     };

//     return (
//         <>
//             {/* Conteneur principal de la barre de navigation */}
//             <div className="navbar-container">
//                 {/* Titre ou logo de la navbar */}
//                 <h1 className="title-navbar">S.GOULONG</h1>

//                 {/* Section de navigation */}
//                 <nav className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
//                     <a href="#accueil">Accueil</a>
//                     <a href="#presentation">Présentation</a>
//                     <a href="#realisations">Réalisations</a>
//                     <a href="#competences">Compétences</a>
//                     <a href="#contact">Contact</a>
//                     {/* Div pour l'animation de survol */}
//                     <div className="animation"></div>
//                 </nav>

//                 {/* Bouton hamburger */}
//                 <div className="button-hamburger" onClick={toggleMenu}>
//                     <i
//                         className={`fa-solid fa-bars ${
//                             isMenuOpen ? 'open' : ''
//                         }`}
//                     ></i>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Header;

import React, { useState } from 'react';
import '../Sass/Header.scss';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState); // Bascule entre ouvert/fermé
    };
    const closeMenu = () => {
        setIsMenuOpen(false); // Ferme le menu
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Ferme le menu après le défilement
        }
    };
    return (
        <>
            <div className="navbar-container">
                <h1 className="title-navbar">S.GOULONG</h1>

                <nav className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#accueil">Accueil</a>
                    <a href="#presentation">Présentation</a>
                    <a href="#realisations">Réalisations</a>
                    <a href="#competences">Compétences</a>
                    <a href="#contact">Contact</a>
                    <div className="animation"></div>
                </nav>

                {/* Bouton Hamburger ou Croix selon l'état */}
                <div className={`button-hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
    {isMenuOpen ? (
        <i className="fa-solid fa-times"></i> // Affiche la croix si menu ouvert
    ) : (
        <i className="fa-solid fa-bars"></i> // Affiche hamburger si menu fermé
    )}
</div>


                {/* Overlay avec la croix */}
                {isMenuOpen && (
                    <div className="overlay">
                        <nav className="overlay-nav">
                            <a
                                href="#accueil"
                                onClick={() => scrollToSection('accueil')}
                            >
                                Accueil
                            </a>
                            <a
                                href="#presentation"
                                onClick={() => scrollToSection('presentation')}
                            >
                                Présentation
                            </a>
                            <a
                                href="#realisations"
                                onClick={() => scrollToSection('realisations')}
                            >
                                Réalisations
                            </a>
                            <a
                                href="#competences"
                                onClick={() => scrollToSection('competences')}
                            >
                                Compétences
                            </a>
                            <a
                                href="#contact"
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}

export default Header;

// import React, { useState } from 'react';
// import '../Sass/Header.scss'; // Importation des styles SCSS spécifiques au composant Header

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour contrôler l'ouverture du menu

//     const toggleMenu = () => {
//         setIsMenuOpen((prevState) => !prevState); // Inverser l'état du menu
//     };

//     return (
//         <>
//             {/* Conteneur principal de la barre de navigation */}
//             <div className="navbar-container">
//                 {/* Titre ou logo de la navbar */}
//                 <h1 className="title-navbar">S.GOULONG</h1>

//                 {/* Section de navigation */}
//                 <nav className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
//                     <a href="#accueil">Accueil</a>
//                     <a href="#presentation">Présentation</a>
//                     <a href="#realisations">Réalisations</a>
//                     <a href="#competences">Compétences</a>
//                     <a href="#contact">Contact</a>
//                     {/* Div pour l'animation de survol */}
//                     <div className="animation"></div>
//                 </nav>

//                 {/* Bouton hamburger avec SVG */}
//                 <div className="button-hamburger" onClick={toggleMenu}>
//                     <div className={`container ${isMenuOpen ? 'active' : ''}`}>
//                         <svg viewBox="0 0 100 100" width="80">
//                             <path
//                                 d="M 20,40 H 80"
//                                 stroke="white"
//                                 strokeWidth="5"
//                             />
//                             <path
//                                 d="M 20,50 H 80"
//                                 stroke="white"
//                                 strokeWidth="5"
//                             />
//                             <path
//                                 d="M 20,60 H 80"
//                                 stroke="white"
//                                 strokeWidth="5"
//                             />
//                             <path
//                                 d="M 20,40 H 80"
//                                 stroke="white"
//                                 strokeWidth="5"
//                             />
//                             <path
//                                 d="M 20,50 H 80"
//                                 stroke="white"
//                                 strokeWidth="5"
//                             />
//                             <path
//                                 d="M 20,60 H 80"
//                                 stroke="white"
//                                 strokeWidth="5"
//                             />
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Header;
