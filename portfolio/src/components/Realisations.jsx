import React from 'react'
import '../Sass/Realisations.scss' // Importation des styles SCSS spécifiques au composant Realisations
import CardsRealisations from '../components/CardsRealisations' // Importation du composant de carte de réalisations

function Realisations() {
    return (
        <>
            {/* Conteneur principal de la section Réalisations */}
            <div id="realisations" className="realisations-container">
                <div className="realisations-content">
                    {/* Section de texte de la section Réalisations */}
                    <h3 className="realisations-title">Réalisations</h3>
                    {/* Conteneur des cartes de réalisations */}
                    <div className="realisations-card-container">
                        {/* Composant des cartes de réalisations */}
                        <CardsRealisations />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Realisations
