import React from 'react';
import '../Sass/Error.scss';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <>
            <div className="error-container">
                <p className="error-text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <section className="error-content">
                    <span>4</span>
                    <span>
                        <span className="screen-reader-text">0</span>
                    </span>
                    <span>4</span>
                </section>
                <div className="link-container">
                    <Link to="/" className="error-link">
                        Retourner sur la page d’accueil
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Error;
