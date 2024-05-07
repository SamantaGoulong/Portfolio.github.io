import '../Sass/Presentation.scss'
import avatarFemme from '../assets/images/avatarFemme.webp'

function Presentation() {
    return (
        <>
            {/* <div className="presentation-container"> */}
                <div id="presentation" className="presentation-container">
                <div className="presentation-portrait">
                    <img src={avatarFemme} alt="Portrait de Samanta GOULONG" />
                </div>
                <div className="presentation-content">
                    <h3 className="presentation-title">Présentation</h3>
                    <h4 className="presentation-back-title">A PROPROS DE MOI</h4>
                    <p className="presentation-text">
                        "Passionnée par le développement web et la création d'interfaces à la fois
                        créatives et fonctionnelles, je mets ma formation solide en intégration web
                        et mon expérience pratique au service de la conception d'expériences en
                        ligne attrayantes et conviviales." "Passionnée par le développement web et
                        la création d'interfaces à la fois créatives et fonctionnelles, je mets ma
                        formation solide en intégration web et mon expérience pratique au service de
                        la conception d'expériences en ligne attrayantes et conviviales."
                    </p>
                </div>
            </div>
        </>
    )
}

export default Presentation
