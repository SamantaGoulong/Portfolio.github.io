// import React from 'react';
// import '../Sass/Skills.scss'; // Importation des styles SCSS spécifiques au composant Skills
// import cv from '../assets/images/cv.jpg'; // Importation de l'image du CV
// //import dataApp from '../dataApp.json'; // Importation des données JSON des compétences
// import Carrousel from './Carrousel';

// function Skills() {
//     return (
//         <>
//             {/* Conteneur principal de la section Compétences */}
//             <div id="competences" className="skills-container">
//                 <div className="skills-content">
//                     {/* Titre de la section */}
//                     <h3 className="skills-title">Mes compétences</h3>
//                     {/* Conteneur des compétences */}
//                     <div className="carrousel-container">           
//                         <Carrousel />
//                     </div>
//                     {/* Conteneur du CV et du bouton de téléchargement */}
//                     <div className="skills-cv-container">
//                         {/* Image du CV */}
//                         <img src={cv} alt="mon cv" className="skills-cv-img" />

//                         {/* Bouton de téléchargement du CV */}
//                         <a
//                             href="/CvSamantaGoulong.pdf"
//                             download
//                             className="skills-link-cv"
//                         >
//                             <i className="fa-solid fa-download icone-telecharger"></i>
//                             Télécharger mon CV
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Skills;
import React from 'react';
import '../Sass/Skills.scss'; // Importation des styles SCSS spécifiques au composant Skills
import cv from '../assets/images/cv.jpg'; // Importation de l'image du CV
import Carrousel from './Carrousel';

function Skills() {
    return (
        <>
            {/* Conteneur principal de la section Compétences */}
            <div id="competences" className="skills-container">
                <div className="skills-content">
                    {/* Titre de la section */}
                    <h3 className="skills-title">Mes compétences</h3>
                    {/* Conteneur des compétences */}
                    <div className="carrousel-container">
                        <Carrousel />
                    </div>
                    {/* Conteneur du CV et du bouton de téléchargement */}
                    <div className="skills-cv-container">
                        {/* Image du CV */}
                        <img
                            src={cv}
                            alt="mon cv"
                            className="skills-cv-img"
                            loading="lazy"
                        />

                        {/* Bouton de téléchargement du CV */}
                        <a
                            href="/CvSamantaGoulong.pdf"
                            download
                            className="skills-link-cv"
                            aria-label="Télécharger mon CV"
                        >
                            <i className="fa-solid fa-download icone-telecharger"></i>
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
