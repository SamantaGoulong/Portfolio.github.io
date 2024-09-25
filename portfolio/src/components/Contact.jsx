// import React from 'react';
// import '../Sass/Contact.scss';
// import emailjs from 'emailjs-com'; // Importer le SDK EmailJS

// function Contact() {
//     // Fonction pour gérer l'envoi du formulaire
//     const handleSubmit = (event) => {
//         event.preventDefault(); // Empêcher le rechargement de la page

//         const form = event.target; // Cibler le formulaire

//         // Envoyer les données via EmailJS
//         emailjs
//             .sendForm(
//                 'service_3h5yblo', // ID de ton service EmailJS
//                 'template_77cdf9y', // ID de ton template EmailJS
//                 form, // Le formulaire à envoyer
//                 'ky6xlDBk5ZSHnPSNC' // Clé publique utilisateur EmailJS
//             )
//             .then((result) => {
//                 console.log('Success:', result.text);
//                 alert('Message envoyé avec succès !');

//                 form.reset(); // Réinitialiser les champs du formulaire après l'envoi
//             })
//             .catch((error) => {
//                 console.log('Error:', error.text);
//                 alert('Une erreur est survenue. Veuillez réessayer.');
//             });
//     };

//     return (
//         <>
//             <div id="contact" className="contact-container">
//                 <h3 className="contact-title">Contact</h3>
//                 <div className="contact-content">
//                     <div className="contact-content-text">
//                         <h4>
//                             Envie de démarrer un projet ? N'hésitez pas à me
//                             contacter !
//                         </h4>
//                     </div>
//                     <div className="form-content">
//                         {/* Lier la fonction handleSubmit via onSubmit */}
//                         <form onSubmit={handleSubmit}>
//                             <label htmlFor="nom">Nom </label>
//                             <input
//                                 type="text"
//                                 name="nom"
//                                 id="nom"
//                                 required
//                                 autoComplete="name"
//                             />

//                             <label htmlFor="email">Email </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 required
//                                 autoComplete="email"
//                             />

//                             <label htmlFor="message">Message </label>
//                             <textarea
//                                 name="message"
//                                 id="message"
//                                 required
//                                 cols="30"
//                                 rows="10"
//                                 autoComplete="off"
//                             ></textarea>

//                             <div className="send">
//                                 <button type="submit" className="send-button">
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

// export default Contact;
import React from 'react';
import '../Sass/Contact.scss';
import emailjs from 'emailjs-com'; // Importer le SDK EmailJS pour l'envoi de formulaires par email

function Contact() {
    // Fonction pour gérer l'envoi du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire, c'est-à-dire le rechargement de la page

        const form = event.target; // Référence au formulaire soumis

        try {
            // Envoyer les données du formulaire via EmailJS en utilisant la méthode `sendForm`
            const result = await emailjs.sendForm(
                'service_3h5yblo', // ID du service EmailJS (défini dans ton compte EmailJS)
                'template_77cdf9y', // ID du modèle de courriel EmailJS à utiliser
                form, // Le formulaire HTML lui-même
                'ky6xlDBk5ZSHnPSNC' // Clé publique EmailJS (pour authentifier l'envoi des emails)
            );

            // Si l'envoi est réussi, afficher un message de succès dans la console
            console.log('Success:', result.text);
            // Avertir l'utilisateur que le message a été envoyé avec succès
            alert('Message envoyé avec succès !');
            // Réinitialiser le formulaire après un envoi réussi
            form.reset();
        } catch (error) {
            // En cas d'erreur lors de l'envoi, afficher le message d'erreur dans la console
            console.log('Error:', error.text);
            // Avertir l'utilisateur qu'une erreur est survenue
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <div id="contact" className="contact-container">
            {/* Titre de la section contact */}
            <h3 className="contact-title">Contact</h3>
            <div className="contact-content">
                <div className="contact-content-text">
                    <h4>
                        Envie de démarrer un projet ? N'hésitez pas à me
                        contacter !
                    </h4>
                </div>
                <div className="form-content">
                    {/* Formulaire avec la méthode onSubmit liée à la fonction handleSubmit */}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nom">Nom </label>
                        {/* Champ de saisie pour le nom */}
                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            required
                            autoComplete="name"
                        />

                        <label htmlFor="email">Email </label>
                        {/* Champ de saisie pour l'email */}
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            autoComplete="email"
                        />

                        <label htmlFor="message">Message </label>
                        {/* Zone de texte pour le message */}
                        <textarea
                            name="message"
                            id="message"
                            required
                            cols="30"
                            rows="10"
                            autoComplete="off"
                        ></textarea>

                        {/* Bouton pour soumettre le formulaire */}
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
