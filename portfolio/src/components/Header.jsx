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
import '../Sass/Header.scss'; // Importation des styles SCSS spécifiques au composant Header

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour contrôler l'ouverture du menu

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState); // Inverser l'état du menu
    };

    return (
        <>
            {/* Conteneur principal de la barre de navigation */}
            <div className="navbar-container">
                {/* Titre ou logo de la navbar */}
                <h1 className="title-navbar">S.GOULONG</h1>

                {/* Section de navigation */}
                <nav className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#accueil">Accueil</a>
                    <a href="#presentation">Présentation</a>
                    <a href="#realisations">Réalisations</a>
                    <a href="#competences">Compétences</a>
                    <a href="#contact">Contact</a>
                    {/* Div pour l'animation de survol */}
                    <div className="animation"></div>
                </nav>

                {/* Bouton hamburger avec SVG */}
                <div className="button-hamburger" onClick={toggleMenu}>
                    <div className={`container ${isMenuOpen ? 'active' : ''}`}>
                        <svg viewBox="0 0 100 100" width="80">
                            <path
                                d="M 20,40 H 80"
                                stroke="white"
                                strokeWidth="5"
                            />
                            <path
                                d="M 20,50 H 80"
                                stroke="white"
                                strokeWidth="5"
                            />
                            <path
                                d="M 20,60 H 80"
                                stroke="white"
                                strokeWidth="5"
                            />
                            <path
                                d="M 20,40 H 80"
                                stroke="white"
                                strokeWidth="5"
                            />
                            <path
                                d="M 20,50 H 80"
                                stroke="white"
                                strokeWidth="5"
                            />
                            <path
                                d="M 20,60 H 80"
                                stroke="white"
                                strokeWidth="5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
