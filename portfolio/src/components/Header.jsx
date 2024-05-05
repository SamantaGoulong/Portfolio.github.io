import React, { useState, useEffect } from 'react'
import '../Sass/Header.scss'

function Header() {
    const [activeLink, setActiveLink] = useState(null)

    const handleSetActiveLink = () => {
        const scrollPosition = window.scrollY
        const sections = document.querySelectorAll('section')

        sections.forEach((section) => {
            const sectionRect = section.getBoundingClientRect()
            const sectionTop = sectionRect.top + window.scrollY // Position absolue du haut de la section
            const sectionHeight = sectionRect.height

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const sectionId = section.getAttribute('id')
                setActiveLink(sectionId)
            }
        })
    }
    useEffect(() => {
        // Écouter les événements de défilement pour détecter la section active
        window.addEventListener('scroll', handleSetActiveLink)

        // Nettoyer l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleSetActiveLink)
        }
    }, [])

    return (
        <div className="navbar-container">
            <h1 className="title-navbar">S.GOULONG</h1>
            <div className="navbar-content">
                <div className="liens-navbar">
                    <a
                        href="#accueil"
                        className={`lien-nav ${activeLink === 'accueil' ? 'active' : ''}`}>
                        Accueil
                    </a>
                    <a
                        href="#presentation"
                        className={`lien-nav ${activeLink === 'presentation' ? 'active' : ''}`}>
                        Présentation
                    </a>
                    <a
                        href="#realisations"
                        className={`lien-nav ${activeLink === 'realisations' ? 'active' : ''}`}>
                        Réalisations
                    </a>
                    <a
                        href="#competences"
                        className={`lien-nav ${activeLink === 'competences' ? 'active' : ''}`}>
                        Compétences
                    </a>
                    <a href="#cv" className={`lien-nav ${activeLink === 'cv' ? 'active' : ''}`}>
                        Mon CV
                    </a>
                    <a
                        href="#contact"
                        className={`lien-nav ${activeLink === 'contact' ? 'active' : ''}`}>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
