// import React, { useState, useEffect } from 'react'
// import '../Sass/Header.scss'

// function Header() {
//     const [activeLink, setActiveLink] = useState(null)

//     const handleSetActiveLink = () => {
//         const scrollPosition = window.scrollY
//         const sections = document.querySelectorAll('section')

//         sections.forEach((section) => {
//             const sectionRect = section.getBoundingClientRect()
//             const sectionTop = sectionRect.top + window.scrollY // Position absolue du haut de la section
//             const sectionHeight = sectionRect.height

//             if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//                 const sectionId = section.getAttribute('id')
//                 setActiveLink(sectionId)
//             }
//         })
//     }
//     useEffect(() => {
//         // Écouter les événements de défilement pour détecter la section active
//         window.addEventListener('scroll', handleSetActiveLink)

//         // Nettoyer l'écouteur d'événements lors du démontage du composant
//         return () => {
//             window.removeEventListener('scroll', handleSetActiveLink)
//         }
//     }, [])

//     return (
//         <>
//             <div className="navbar-container">
//                 <h1 className="title-navbar">S.GOULONG</h1>
//                 <div className="navbar-content">
//                     <div className="liens-navbar">
//                         <a
//                             href="#accueil"
//                             className={`lien-nav ${activeLink === 'accueil' ? 'active' : ''}`}>
//                             Accueil
//                         </a>
//                         <a
//                             href="#presentation"
//                             className={`lien-nav ${activeLink === 'presentation' ? 'active' : ''}`}>
//                             Présentation
//                         </a>
//                         <a
//                             href="#realisations"
//                             className={`lien-nav ${activeLink === 'realisations' ? 'active' : ''}`}>
//                             Réalisations
//                         </a>
//                         <a
//                             href="#competences"
//                             className={`lien-nav ${activeLink === 'competences' ? 'active' : ''}`}>
//                             Compétences
//                         </a>
//                         <a
//                             href="#contact"
//                             className={`lien-nav ${activeLink === 'contact' ? 'active' : ''}`}>
//                             Contact
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Header

//import React, { useState, useEffect } from 'react'
import '../Sass/Header.scss'

// function Header() {
    // const [activeLink, setActiveLink] = useState('accueil')
    // const [animationStyle, setAnimationStyle] = useState({})

    // const handleSetActiveLink = () => {
    //     const scrollPosition = window.scrollY
    //     const sections = document.querySelectorAll('section')

    //     sections.forEach((section) => {
    //         const sectionRect = section.getBoundingClientRect()
    //         const sectionTop = sectionRect.top + window.scrollY
    //         const sectionHeight = sectionRect.height

    //         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
    //             const sectionId = section.getAttribute('id')
    //             setActiveLink(sectionId)
    //             updateAnimationStyle(sectionId)
    //         }
    //     })
    // }

    // const updateAnimationStyle = (sectionId) => {
    //     const link = document.querySelector(`a[href="#${sectionId}"]`)
    //     if (link) {
    //         const linkRect = link.getBoundingClientRect()
    //         setAnimationStyle({
    //             width: `${linkRect.width}px`,
    //             left: `${link.offsetLeft}px`,
    //             backgroundColor: getLinkColor(sectionId)
    //         })
    //     }
    // }

    // const getLinkColor = (sectionId) => {
    //     switch (sectionId) {
    //         case 'accueil':
    //             return '#1abc9c'
    //         case 'presentation':
    //             return '#e74c3c'
    //         case 'realisations':
    //             return '#3498db'
    //         case 'competences':
    //             return '#9b59b6'
    //         case 'contact':
    //             return '#e67e22'
    //         default:
    //             return 'transparent'
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleSetActiveLink)
    //     handleSetActiveLink() // Set active link on initial load

    //     return () => {
    //         window.removeEventListener('scroll', handleSetActiveLink)
    //     }
    // }, [])

    // const handleClick = (e, id) => {
    //     e.preventDefault()
    //     const section = document.getElementById(id)
    //     window.scrollTo({
    //         top: section.offsetTop,
    //         behavior: 'smooth'
    //     })
    //     setActiveLink(id)
    //     updateAnimationStyle(id)
    // }

    // return (
    //     <div className="navbar-container">
    //         <h1 className="title-navbar">S.GOULONG</h1>
    //         <nav className="navbar-content">
    //             <a
    //                 href="#accueil"
    //                 className={`lien-nav ${activeLink === 'accueil' ? 'active' : ''}`}
    //                 onClick={(e) => handleClick(e, 'accueil')}>
    //                 Accueil
    //             </a>
    //             <a
    //                 href="#presentation"
    //                 className={`lien-nav ${activeLink === 'presentation' ? 'active' : ''}`}
    //                 onClick={(e) => handleClick(e, 'presentation')}>
    //                 Présentation
    //             </a>
    //             <a
    //                 href="#realisations"
    //                 className={`lien-nav ${activeLink === 'realisations' ? 'active' : ''}`}
    //                 onClick={(e) => handleClick(e, 'realisations')}>
    //                 Réalisations
    //             </a>
    //             <a
    //                 href="#competences"
    //                 className={`lien-nav ${activeLink === 'competences' ? 'active' : ''}`}
    //                 onClick={(e) => handleClick(e, 'competences')}>
    //                 Compétences
    //             </a>
    //             <a
    //                 href="#contact"
    //                 className={`lien-nav ${activeLink === 'contact' ? 'active' : ''}`}
    //                 onClick={(e) => handleClick(e, 'contact')}>
    //                 Contact
    //             </a>
    //             <div className="animation" style={animationStyle}></div>
    //         </nav>
    //     </div>
// )
    

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
                    <a href="#accueil">
                        Accueil
                    </a>
                    {/* Lien vers la section Présentation */}
                    <a href="#presentation">
                        Presentation
                    </a>
                    {/* Lien vers la section Réalisations */}
                    <a href="#realisations">
                        Réalisations
                    </a>
                    {/* Lien vers la section Compétences */}
                    <a href="#competences">
                        Competences
                    </a>
                    {/* Lien vers la section Contact */}
                    <a href="#contact">
                        Contact
                    </a>
                    {/* Div pour l'animation de survol */}
                    <div className="animation"></div>
                </nav>
                <nav className="button-hamburger">
                    <i class="fa-solid fa-bars"></i>
                </nav>
            </div>
        </>
    )
}

export default Header

