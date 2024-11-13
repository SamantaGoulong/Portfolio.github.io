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
                <div
                    className={`button-hamburger ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                >
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
