import React from 'react'
import '../Sass/Skills.scss'
import cv from '../assets/images/cv.png'
import dataApp from '../dataApp.json'

function Skills() {
    return (
        <>
            <div id="competences" className="skills-container">
                <div className="skills-content">
                    <h3 className="skills-title">Mes compétences</h3>
                    <div className="skills-competences-container">
                        {dataApp.map((item) => (
                            <div className="skills-competences-app-container" key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="skills-competences-app-img"
                                />
                                <h4>{item.name}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="skills-cv-container">
                        <img src={cv} alt="mon cv" className="skills-competences-cv-img" />
                        <button className="skills-cv-button">
                            <i className="fa-solid fa-download skills-cv-icone"></i>
                            <a href="/" className="skills-cv-link">
                                Télecharger mon CV
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
