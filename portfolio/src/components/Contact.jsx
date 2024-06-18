import React from 'react'
import '../Sass/Contact.scss'

function Contact() {
    return (
        <>
            {/* Conteneur principal du formulaire de contact */}
            <div id="contact" className="contact-container">
                <div className="contact-content">
                    {/* Section texte du formulaire de contact */}
                    <div className="contact-content-text">
                        <h3>Contact</h3>
                        <h4>Envie de démarrer un projet ? N'hésitez pas à me contacter !</h4>
                    </div>

                    {/* Section formulaire de contact */}
                    <div className="form-content">
                        <form method="post">
                            {/* Champ pour le nom */}
                            <label htmlFor="nom">Nom </label>
                            <input type="text" name="nom" id="nom" required="required" />

                            {/* Champ pour l'email */}
                            <label htmlFor="email">Email </label>
                            <input type="email" name="email" id="email" required="required" />

                            {/* Champ pour le message */}
                            <label htmlFor="message">Message </label>
                            <textarea name="message" id="message" required="required" cols="30" rows="10"></textarea>

                            {/* Bouton d'envoi du formulaire */}
                            <div className="send">
                                <input type="submit" value="Envoyer" className="send-button" required="required" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
