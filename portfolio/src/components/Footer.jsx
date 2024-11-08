import React from 'react';
import '../Sass/Footer.scss';

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-content-icone">
                        <a
                            href="mailto:goulongsamanta@gmail.com"
                            className="footer-icone"
                            aria-label="Envoyer un email"
                        >
                            <i className="fa-regular fa-envelope"></i>
                            <span className="sr-only">Envoyer un email</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/samanta-goulong-066200325"
                            className="footer-icone"
                            aria-label="Voir mon profil LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                            <span className="sr-only">
                                Voir mon profil LinkedIn
                            </span>
                        </a>
                        <a
                            href="https://github.com/SamantaGoulong"
                            className="footer-icone"
                            aria-label="Voir mon profil GitHub"
                        >
                            <i className="fa-brands fa-github"></i>
                            <span className="sr-only">
                                Voir mon profil GitHub
                            </span>
                        </a>
                    </div>
                    <div className="footer-content-text">
                        <p className="footer-text">
                            Copyright © 2024. Tous droits réservés Samanta
                            GOULONG
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
