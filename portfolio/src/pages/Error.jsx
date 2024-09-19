import React from 'react'
import '../Sass/Error.scss' // Importation des styles SCSS spécifiques au composant Error
import { Link } from 'react-router-dom' // Importation de la composant Link pour la navigation

function Error() {
    return (
        <>
            {/* Conteneur principal de la page d'erreur */}
            <div className="error-container">
              
                {/* Texte d'erreur */}
                <p className="error-text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                {/* Conteneur des chiffres "404" */}
                <section className="error-content">
                    <span>4</span>
                    <span>
                        <span className="screen-reader-text">0</span>
                    </span>
                    <span>4</span>
                </section>
                {/* Lien pour retourner à la page d'accueil */}
                <div className="link-container">
                    <Link to="/" className="error-link">
                        Retourner sur la page d’accueil
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Error
