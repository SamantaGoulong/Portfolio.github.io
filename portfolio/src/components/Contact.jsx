// import React from 'react'
// import '../Sass/Contact.scss'
// import emailjs from 'emailjs-com'; // Importer le SDK EmailJS

// function Contact() {
//     // Fonction pour gérer l'envoi du formulaire
//     const handleSubmit = (event) => {
//         event.preventDefault(); // Empêcher le rechargement de la page

//         // Obtenir les données du formulaire
//         const form = event.target;
//         const formData = new FormData(form);

//         // Envoyer les données via EmailJS
//         emailjs
//             .sendForm(
//                 'service_3h5yblo',
//                 'template_77cdf9y',
//                 formData,
//                 'ky6xlDBk5ZSHnPSNC'
//             )
//             .then((result) => {
//                 console.log('Success:', result.text);
//                 alert('Message envoyé avec succès !');
//             })
//             .catch((error) => {
//                 console.log('Error:', error.text);
//                 alert('Une erreur est survenue. Veuillez réessayer.');
//             });
//     };
//     return (
//         <>
//             {/* Conteneur principal du formulaire de contact */}
//             <div id="contact" className="contact-container">
//                 <h3 className="contact-title">Contact</h3>
//                 <div className="contact-content">
//                     {/* Section texte du formulaire de contact */}
//                     <div className="contact-content-text">
//                         <h4>
//                             Envie de démarrer un projet ? N'hésitez pas à me
//                             contacter !
//                         </h4>
//                     </div>

//                     {/* Section formulaire de contact */}
//                     <div className="form-content">
//                         <form method="post">
//                             {/* Champ pour le nom */}
//                             <label htmlFor="nom">Nom </label>
//                             <input
//                                 type="text"
//                                 name="nom"
//                                 id="nom"
//                                 required="required"
//                             />

//                             {/* Champ pour l'email */}
//                             <label htmlFor="email">Email </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 required="required"
//                             />

//                             {/* Champ pour le message */}
//                             <label htmlFor="message">Message </label>
//                             <textarea
//                                 name="message"
//                                 id="message"
//                                 required="required"
//                                 cols="30"
//                                 rows="10"
//                             ></textarea>

//                             {/* Bouton d'envoi du formulaire */}
//                             <div className="send">
//                                 <button
//                                     type="submit"
//                                     value="Envoyer"
//                                     className="send-button"
//                                 >
//                                     {' '}
//                                     Envoyer
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Contact

import React from 'react';
import '../Sass/Contact.scss';
import emailjs from 'emailjs-com'; // Importer le SDK EmailJS

function Contact() {
    // Fonction pour gérer l'envoi du formulaire
    const handleSubmit = (event) => {
       event.preventDefault(); // Empêcher le rechargement de la page

        // Envoyer les données via EmailJS
        emailjs
            .sendForm(
                'service_3h5yblo', // ID de ton service EmailJS
                'template_77cdf9y', // ID de ton template EmailJS
                event.target, // Le formulaire à envoyer
                'ky6xlDBk5ZSHnPSNC' // Clé publique utilisateur EmailJS
            )
            .then((result) => {
                console.log('Success:', result.text);
                alert('Message envoyé avec succès !');
            })
            .catch((error) => {
                console.log('Error:', error.text);
                alert('Une erreur est survenue. Veuillez réessayer.');
            });
    };

    return (
        <>
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
                        {/* Lier la fonction handleSubmit via onSubmit */}
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="nom">Nom </label>
                            <input
                                type="text"
                                name="nom" // Le nom du champ doit correspondre à ton template EmailJS
                                id="nom"
                                required
                            />

                            <label htmlFor="email">Email </label>
                            <input
                                type="email"
                                name="email" // Le nom du champ doit correspondre à ton template EmailJS
                                id="email"
                                required
                            />

                            <label htmlFor="message">Message </label>
                            <textarea
                                name="message" // Le nom du champ doit correspondre à ton template EmailJS
                                id="message"
                                required
                                cols="30"
                                rows="10"
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
        </>
    );
}

export default Contact;
