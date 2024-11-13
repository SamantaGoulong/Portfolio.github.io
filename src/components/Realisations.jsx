import React from 'react';
import '../Sass/Realisations.scss';
import CardsRealisations from '../components/CardsRealisations';


function Realisations() {
    return (
        <>
            <div id="realisations" className="realisations-container">
                <div className="realisations-content">
                    <h3 className="realisations-title">Réalisations</h3>
                    <div className="realisations-card-container">
                        <CardsRealisations />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Realisations;
