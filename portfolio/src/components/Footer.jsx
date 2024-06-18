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
                        <a href="/" className="footer-icone">
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                        {/* Lien vers LinkedIn */}
                        <a href="/" className="footer-icone">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        {/* Lien vers GitHub */}
                        <a href="/" className="footer-icone">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                    {/* Section du texte de copyright */}
                    <div className="footer-content-text">
                        <p className="footer-text">
                            Copyright © 2024. Tous droits réservés Samanta GOULONG
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
