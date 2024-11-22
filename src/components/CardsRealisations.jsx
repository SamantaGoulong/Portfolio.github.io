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
                    <div className="card-images  zoom-in-out-box">
                        <a href={item.linkGithub} className="card-links-button-text">
                            <img src={item.picture} alt={item.title} className="img-card"/>
                            <div className="overlay">
                                <p className="title-project">{item.title}</p>
                                <p className="description-project">{item.description}</p>
                            </div>
                        </a>
                    </div>
                    <div className="card-links">
                        <div className="card-links-tags">{item.tags.map((tag, index) => (
                                <span key={index}>
                                    <i className={`fab ${Object.values(tag)[0]} card-links-tags-icone`}></i>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {visibleProjects < data.length && (
                <div className="container-button">
                    <button onClick={loadMoreProjects}className="load-more-button">
                        Voir plus
                    </button>
                </div>
            )}
        </>
    );
}

export default CardsRealisations;
