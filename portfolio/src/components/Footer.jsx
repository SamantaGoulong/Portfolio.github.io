import React from 'react'
import '../Sass/Footer.scss'

function Footer() {
    return (
        <>
            {/* Conteneur principal du pied de page */}
            <div className="footer-container">
                <div className="footer-content">
                    {/* Section des icônes de réseaux sociaux */}
                    <div className="footer-content-icone">
                        {/* Lien vers l'email */}
                        <a
                            href="mailto:goulongsamanta@gmail.com"
                            className="footer-icone"
                        >
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                        {/* Lien vers LinkedIn */}
                        <a
                            href="https://linkedin.com/in/samanta-goulong-066200325"
                            className="footer-icone"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        {/* Lien vers GitHub */}
                        <a
                            href="https://github.com/SamantaGoulong"
                            className="footer-icone"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                    {/* Section du texte de copyright */}
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

export default Footer
