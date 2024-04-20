import '../Sass/Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="navbar-container">
                <p className="title-navbar">S.GOULONG</p>
                <div className="navbar-content">
                    <div className="liens-navbar">
                        <Link to="/" className="lien-nav">
                            Accueil
                        </Link>
                        <Link to="/" className="lien-nav">
                            Presentation
                        </Link>
                        <Link to="/" className="lien-nav">
                            Réalisations
                        </Link>
                        <Link to="/" className="lien-nav">
                            Compétences
                        </Link>
                        <Link to="/" className="lien-nav">
                            Mon CV
                        </Link>
                        <Link to="/" className="lien-nav">
                            Contact
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header