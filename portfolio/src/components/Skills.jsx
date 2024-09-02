// import React from 'react'
// import '../Sass/Skills.scss' // Importation des styles SCSS spécifiques au composant Skills
// import cv from '../assets/images/cv.png' // Importation de l'image du CV
// import dataApp from '../dataApp.json' // Importation des données JSON des compétences

// function Skills() {
//     return (
//         <>
//             {/* Conteneur principal de la section Compétences */}
//             <div id="competences" className="skills-container">
//                 <div className="skills-content">
//                     {/* Titre de la section */}
//                     <h3 className="skills-title">Mes compétences</h3>
//                     {/* Conteneur des compétences */}
//                     <div className="skills">
//                         {/* Mapping des données JSON pour afficher les compétences */}
//                         {dataApp.map((item) => (
//                             <div className="skills-cards" key={item.id}>
//                                 {/* Image représentant l'application */}
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className="skills-img"
//                                 />
//                                 {/* Nom de l'application */}
//                                 <h4>{item.name}</h4>
//                             </div>
//                         ))}
//                     </div>
//                     {/* Conteneur du CV et du bouton de téléchargement */}
//                     <div className="skills-cv-container">
//                         {/* Image du CV */}
//                         <img src={cv} alt="mon cv" className="skills-cv-img" />

//                         {/* Bouton de téléchargement du CV */}
//                         <a
//                             href="/CvSamantaGoulong.pdf" download className="skills-link-cv">
//                             <i className="fa-solid fa-download icone-telecharger"></i>
//                             Télécharger mon CV
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Skills
import React from 'react';
import '../Sass/Skills.scss'; // Importation des styles SCSS spécifiques au composant Skills
import cv from '../assets/images/cv.jpg'; // Importation de l'image du CV
import dataApp from '../dataApp.json'; // Importation des données JSON des compétences
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
                        {/* <div className="carousel">
                            <figure>
                                <img src="./html5.webp" alt="logo html5" />
                                <img src="./css3.webp" alt="logo css3" />
                                <img src="./figma.webp" alt="logo figma" />
                                <img src="./react.webp" alt="logo react" />
                                <img src="./javaScript2.webp"alt="logo javaScript2"/>
                                <img src="./Sass.webp" alt="logo Sass" />
                                <img src="./wordspress.webp" alt="logo wordpress" />
                                 <img src="./fontAwesome.webp" alt="logo fontAwesome" />
                            </figure>
                        </div> */}
                        <Carrousel />
                    </div>
                    {/* Conteneur du CV et du bouton de téléchargement */}
                    <div className="skills-cv-container">
                        {/* Image du CV */}
                        <img src={cv} alt="mon cv" className="skills-cv-img" />

                        {/* Bouton de téléchargement du CV */}
                        <a
                            href="/CvSamantaGoulong.pdf"
                            download
                            className="skills-link-cv"
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
