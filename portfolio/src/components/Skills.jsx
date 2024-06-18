import React from 'react'
import '../Sass/Skills.scss' // Importation des styles SCSS spécifiques au composant Skills
import cv from '../assets/images/cv.png' // Importation de l'image du CV
import dataApp from '../dataApp.json' // Importation des données JSON des compétences

function Skills() {
    return (
        <>
            {/* Conteneur principal de la section Compétences */}
            <div id="competences" className="skills-container">
                <div className="skills-content">
                    {/* Titre de la section */}
                    <h3 className="skills-title">Mes compétences</h3>
                    {/* Conteneur des compétences */}
                    <div className="skills-competences-container">
                        {/* Mapping des données JSON pour afficher les compétences */}
                        {dataApp.map((item) => (
                            <div className="skills-competences-app-container" key={item.id}>
                                {/* Image représentant l'application */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="skills-competences-app-img"
                                />
                                {/* Nom de l'application */}
                                <h4>{item.name}</h4>
                            </div>
                        ))}
                    </div>
                    {/* Conteneur du CV et du bouton de téléchargement */}
                    <div className="skills-cv-container">
                        {/* Image du CV */}
                        <img src={cv} alt="mon cv" className="skills-competences-cv-img" />
                        {/* Bouton de téléchargement du CV */}
                        {/* <button className="skills-cv-button">
                            <i className="fa-solid fa-download skills-cv-icone"></i> */}
                        {/* Lien de téléchargement du CV */}
                        {/* <a href="/" className="skills-cv-link"> */}
                        {/* Télécharger mon CV */}
                        {/* </a>
                        </button> */}
                        <a href="/" class="skills-cv-button">
                            <i class="fa-solid fa-download skills-cv-icone"></i>
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
