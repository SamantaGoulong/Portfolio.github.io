import '../Sass/Footer.scss'

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-content-icone">
                        <a href="/" className="footer-icone"><i className=" fa-regular fa-envelope"></i></a>
                        <a href="/" className="footer-icone"><i className=" fa-brands fa-linkedin"></i></a>
                        <a href="/" className="footer-icone"><i className=" fa-brands fa-github"></i></a>
                    </div>
                    <div className="footer-content-text">
                        <p className="footer-text">
                            {' '}
                            Copyright © 2024. Tous droits réservés Samanta GOULONG
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
