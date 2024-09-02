// import React from 'react'
// import '../Sass/Presentation.scss' // Importation des styles SCSS spécifiques au composant Presentation
// import avatarFemme from '../assets/images/avatarFemme.webp' // Importation de l'image de l'avatar

// function Presentation() {
//     return (
//         <>
//             {/* Conteneur principal de la section Présentation */}
//             <div id="presentation" className="presentation-container">
//                 {/* Section de l'image du portrait */}
//                 <div className="presentation-portrait">
//                     <img src={avatarFemme} alt="Portrait de Samanta GOULONG" />
//                 </div>
//                 {/* Section du contenu textuel de la présentation */}
//                 <div className="presentation-content">
//                     <h3 className="presentation-title">Présentation</h3>
//                     <p className="presentation-text">
//                         "Passionnée par le développement web et la création d'interfaces à la fois
//                         créatives et fonctionnelles, je mets ma formation solide en intégration web
//                         et mon expérience pratique au service de la conception d'expériences en
//                         ligne attrayantes et conviviales." "Passionnée par le développement web et
//                         la création d'interfaces à la fois créatives et fonctionnelles, je mets ma
//                         formation solide en intégration web et mon expérience pratique au service de
//                         la conception d'expériences en ligne attrayantes et conviviales."
//                     </p>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Presentation

// import React from 'react'
// import '../Sass/Presentation.scss'
// import avatarFemme from '../assets/images/avatarFemme.webp'

// function Presentation() {

//     return (
//         <div
//             id="presentation"
//             className={`presentation-container `}   >
//             <h3 className="presentation-title">Présentation</h3>
//             <div className="presentation">
//                 <div className="presentation-portrait">
//                     <img src={avatarFemme} alt="Portrait de Samanta GOULONG" />
//                 </div>
//                 <div className={`presentation-content `}>
//                     {/* <h3 className="presentation-title">Présentation</h3> */}
//                     <p className="presentation-text">
//                         "Passionnée par le développement web et la création d'interfaces à la fois
//                         créatives et fonctionnelles, je mets ma formation solide en intégration web
//                         et mon expérience pratique au service de la conception d'expériences en
//                         ligne attrayantes et conviviales." <br/><br/>"Passionnée par le développement web et
//                         la création d'interfaces à la fois créatives et fonctionnelles, je mets ma
//                         formation solide en intégration web et mon expérience pratique au service de
//                         la conception d'expériences en ligne attrayantes et conviviales."<br/><br/>"Passionnée par le développement web et
//                         la création d'interfaces à la fois créatives et fonctionnelles
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Presentation


import React from 'react';
import '../Sass/Presentation.scss';
import AnimationPresentation from '../components/AnimationPresentation'; 
import PhotoCv from '../assets/images/PhotoCv.jpg';

function Presentation() {
    return (
        <div id="presentation" className={`presentation-container `}>
            <h3 className="presentation-title">Présentation</h3>
            <div className="presentation">
                <div className="presentation-portrait">
                    <img src={PhotoCv} alt="Portrait de Samanta GOULONG" />
                </div>
                <div className={`presentation-content defilement`}>
                    {/* <h3 className="presentation-title">Présentation</h3> */}
                    <p className="presentation-text">
                        <AnimationPresentation />
                        {/* "Bonjour et bienvenue sur mon portfolio !
                        <br /> <br />
                        Je m’appelle Samanta, développeuse web junior. Après une
                        formation complète avec OpenClassrooms, j’ai acquis des
                        compétences solides en HTML, CSS, JavaScript, React, et
                        Sass. <br /> <br />
                        Motivée par un vif intérêt pour le développement web et
                        la création d'interfaces à la fois élégantes et
                        intuitives, je mets mes compétences en intégration web
                        au service de la conception d'expériences en ligne
                        modernes, accessibles et conviviales. <br /> <br />
                        Je suis prête à relever de nouveaux défis et à continuer
                        d'apprendre à travers des projets enrichissants." */}
                        {/* "Bonjour et bienvenue sur mon portfolio ! Je m’appelle
                        Samanta, développeuse web junior. Après avoir suivi
                        une formation assez complète avec OpenClassrooms, j’ai acquis
                        des compétences solides en HTML, CSS, JavaScript, React
                        et Sass. Mon parcours m’a permis de réaliser plusieurs
                        projets enrichissants, et je suis maintenant prête à
                        mettre ces compétences au service de nouveaux défis. "{' '}
                        <br />
                        <br />
                        "Passionnée par le développement web et la création
                        d'interfaces à la fois créatives et fonctionnelles, je
                        mets ma formation solide en intégration web et mon
                        expérience pratique au service de la conception
                        d'expériences en ligne attrayantes et conviviales." */}
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Presentation;