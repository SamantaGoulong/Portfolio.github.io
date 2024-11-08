import React from 'react';
import '../Sass/Contact.scss';
import emailjs from 'emailjs-com';

function Contact() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        try {
            const result = await emailjs.sendForm(
                'service_3h5yblo', // ID du service EmailJS (défini dans ton compte EmailJS)
                'template_77cdf9y', // ID du modèle de courriel EmailJS à utiliser
                form,
                'ky6xlDBk5ZSHnPSNC' // Clé publique EmailJS (pour authentifier l'envoi des emails)
            );

            console.log('Success:', result.text);
            alert('Message envoyé avec succès !');
            form.reset();
        } catch (error) {
            console.log('Error:', error.text);
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <div id="contact" className="contact-container">
            <h3 className="contact-title">Contact</h3>
            <div className="contact-content">
                <div className="contact-content-text">
                    <h4>
                        Envie de démarrer un projet ? N'hésitez pas à me
                        contacter !
                    </h4>
                </div>
                <div className="form-content">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nom">Nom </label>

                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            required
                            autoComplete="name"
                        />

                        <label htmlFor="email">Email </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            autoComplete="email"
                        />

                        <label htmlFor="message">Message </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            cols="30"
                            rows="10"
                            autoComplete="off"
                        ></textarea>

                        <div className="send">
                            <button type="submit" className="send-button">
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

