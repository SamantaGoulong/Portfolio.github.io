import '../Sass/Contact.scss'

function Contact() {
    return (
        <>
            <div id="contact" className="contact-container">
                <div class="contact-content">
                    <h2>Contact</h2>
                    <p>Envie de démarrer un projet ? N'hésitez pas à me contacter !</p>
                    <div class="form-content">
                        <form method="post">
                            <label for="nom">Nom :</label>
                            <input type="text" name="nom" id="nom" />
                            <br />
                            <label for="email">Email :</label>
                            <input type="email" name="email" id="email" />
                            <br />
                            <label for="message">Message :</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                            <br />
                            <input type="submit" value="Envoyer" />
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
