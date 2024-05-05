import '../Sass/Realisations.scss'
 import CardsRealisations from '../components/CardsRealisations'

function Realisations() {
    return (
        <>
            <div id="realisations" className="realisations-container">
                <div className="realisations-content">
                    <div className="realisations-content-text">
                        <h3 className="realisations-title">Réalisations</h3>
                        <h4 className="realisations-back-title">PORTFOLIO</h4>
                    </div>
                    <div className="realisations-card-container">
                        <CardsRealisations />
                        <CardsRealisations />
                        <CardsRealisations />
                        <CardsRealisations />
                        <CardsRealisations />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Realisations
