import '../Sass/Contact.scss'

function Contact() {
    return (
        <>
            <div id="contact" className="contact-container">
                {/* <div className="contact-container"> */}
                <div className="contact-content">
                    <div className="contact-content-text">
                        <h3>Contact</h3>
                        <h4>Envie de démarrer un projet ? N'hésitez pas à me contacter !</h4>
                    </div>
                    <div className="form-content">
                        <form method="post">
                            <label htmlFor="nom">Nom </label>
                            <input type="text" name="nom" id="nom" />
                            <label htmlFor="email">Email </label>
                            <input type="email" name="email" id="email" />
                            <label htmlFor="message">Message </label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                            <div className="send">
                                <input type="submit" value="Envoyer" className="send-button" />
                            </div>
                        </form>
                    </div>
                    {/* <div class="picture right">
                        <img src="./assets/images/camera.webp" alt="un appareil" />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Contact
