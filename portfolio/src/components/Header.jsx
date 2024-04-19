import '../Sass/Header.scss'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-content">
                    <p className="title-navbar">SGOULONG</p>
                    <div className="liens-navbar">
                        <Link to="/" className="lien-nav">
                            Accueil
                        </Link>
                        <Link to="/" className="lien-nav">
                            Presentation
                        </Link>
                        <Link to="/" className="lien-nav">
                            Realisations
                        </Link>
                        <Link to="/" className="lien-nav">
                            Skills
                        </Link>
                        <Link to="/" className="lien-nav">
                            Contact
                        </Link>
                        <Link to="/" className="lien-nav">
                            Resume
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header