import '../Sass/Header.scss'

function Header() {
    
    return (
        <>
            <div className="navbar-container">
                <p className="title-navbar">S.GOULONG</p>
                <div className="navbar-content">
                    <div className="liens-navbar">
                        <a href="#accueil" className="lien-nav" ClassName="active">
                            Accueil
                        </a>
                        <a href="#presentation" className="lien-nav" ClassName="active">
                            Présentation
                        </a>
                        <a href="#realisations" className="lien-nav">
                            Réalisations
                        </a>
                        <a href="#competences" className="lien-nav">
                            Compétences
                        </a>
                        <a href="#cv" className="lien-nav">
                            Mon CV
                        </a>
                        <a href="#contact" className="lien-nav">
                            Contact
                        </a>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
