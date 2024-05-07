import '../Sass/Footer.scss'


function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-content">
                    <i className="fa-regular fa-envelope"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-github" ></i>
                    <p className="footer-text">
                        {' '}
                        Copyright © 2024. Tous droits réservés Samanta GOULONG
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer