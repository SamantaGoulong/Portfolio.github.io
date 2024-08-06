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
import React from 'react'
import '../Sass/Presentation.scss'
import avatarFemme from '../assets/images/avatarFemme.webp'

function Presentation() {

    return (
        <div
            id="presentation"
            className={`presentation-container `}   >
            <h3 className="presentation-title">Présentation</h3>
            <div className="presentation">
                <div className="presentation-portrait">
                    <img src={avatarFemme} alt="Portrait de Samanta GOULONG" />
                </div>
                <div className={`presentation-content `}>
                    {/* <h3 className="presentation-title">Présentation</h3> */}
                    <p className="presentation-text">
                        "Passionnée par le développement web et la création d'interfaces à la fois
                        créatives et fonctionnelles, je mets ma formation solide en intégration web
                        et mon expérience pratique au service de la conception d'expériences en
                        ligne attrayantes et conviviales." <br/><br/>"Passionnée par le développement web et
                        la création d'interfaces à la fois créatives et fonctionnelles, je mets ma
                        formation solide en intégration web et mon expérience pratique au service de
                        la conception d'expériences en ligne attrayantes et conviviales."<br/><br/>"Passionnée par le développement web et
                        la création d'interfaces à la fois créatives et fonctionnelles
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Presentation