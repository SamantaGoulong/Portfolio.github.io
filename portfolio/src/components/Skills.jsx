import React from 'react';
import '../Sass/Skills.scss';
import cv from '../assets/images/cv.jpg';
import Carrousel from './Carrousel';

function Skills() {
    return (
        <>
            <div id="competences" className="skills-container">
                <div className="skills-content">
                    <h3 className="skills-title">Mes compétences</h3>

                    <div className="carrousel-container">
                        <Carrousel />
                    </div>
                    <div className="skills-cv-container">
                        <img
                            src={cv}
                            alt="mon cv"
                            className="skills-cv-img"
                            loading="lazy"
                        />

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
