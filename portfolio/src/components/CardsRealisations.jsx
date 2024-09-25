import React, { useState } from 'react';
import data from '../data.json';
import '../Sass/CardsRealisations.scss';

function CardsRealisations() {
    // Initialisation de l'état pour contrôler le nombre de projets visibles
    const [visibleProjects, setVisibleProjects] = useState(3);

    // Fonction pour charger plus de projets
    const loadMoreProjects = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
    };

    return (
        <>
            {/* Affichage des projets visibles */}
            {data.slice(0, visibleProjects).map((item) => (
                <div className="realisations-card-content" key={item.id}>
                    {/* Image du projet */}
                    <div className="card-images  zoom-in-out-box">
                        <a
                            href={item.linkGithub}
                            className="card-links-button-text"
                        >
                            <img
                                src={item.picture}
                                alt={item.title}
                                className="img-card"
                            />

                            <div className="overlay">
                                <p className="title-project">{item.title}</p>
                            </div>
                        </a>
                    </div>
                    {/* Liens et icônes du projet */}
                    <div className="card-links">
                        <div className="card-links-tags">
                            {/* Affichage des icônes de technologies utilisées */}
                            {item.tags.map((tag, index) => (
                                <span key={index}>
                                    <i
                                        className={`fab ${
                                            Object.values(tag)[0]
                                        } card-links-tags-icone`}
                                    ></i>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            {/* Bouton "Voir plus" affiché seulement s'il y a plus de projets à montrer */}
            {visibleProjects < data.length && (
                <button onClick={loadMoreProjects} className="load-more-button">
                    Voir plus
                </button>
            )}
        </>
    );
}

export default CardsRealisations;
