// import React from 'react';
// import '../Sass/Carrousel.scss';
// import dataApp from '../dataApp.json' // Importation des données JSON des compétences

// function Carrousel() {
//     return (
//         <>
//             {/* <div className="carrousel-container"> */}
//             <div className="carrousel-content">
//                 <img className="img-carrousel img-left" src="" alt="" />
//                 <img className="img-carrousel img-center " src="" alt="" />
//                 <img className="img-carrousel img-right" src="" alt="" />
//                 <i className="fa-solid fa-angle-left arrow arrow-left"></i>
//                 <i className="fa-solid fa-angle-right arrow arrow-right"></i>
//                 <p className="icone-name">Nom icone</p>
//                 <div className="dots"></div>
//             </div>
//             {/* </div> */}
//         </>
//     );
// }

// export default Carrousel;


import React, { useState, useEffect } from 'react';
import '../Sass/Carrousel.scss';
import dataApp from '../dataApp.json'; // Importation des données JSON des compétences

function Carrousel() {
    // Utilisation du hook useState pour gérer l'index de l'image actuellement affichée dans le carrousel
    const [currentIndex, setCurrentIndex] = useState(0);
    const dataLength = dataApp.length; // Nombre total d'éléments dans le carrousel

    // Fonction pour passer à l'image suivante
    const handleNext = () => {
        // On incrémente l'index, et on utilise le modulo pour boucler au début du tableau
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
    };

    // Fonction pour revenir à l'image précédente
    const handlePrev = () => {
        // On décrémente l'index, et on utilise le modulo pour revenir à la fin si on dépasse le début
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + dataLength) % dataLength
        );
    };
    // Ajouter un intervalle pour changer automatiquement l'image toutes les 3 secondes
    useEffect(() => {
        const interval = setInterval(handleNext, 5000); // 5000ms = 5s
        return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage du composant
    }, []);
    return (
        <div className="carrousel-content">
            {/* Image à gauche du centre, qui affiche l'élément précédent dans le tableau */}
            <img
                className="img-carrousel img-left "
                src={
                    dataApp[(currentIndex - 1 + dataLength) % dataLength].image
                }
                alt={dataApp[(currentIndex - 1 + dataLength) % dataLength].name}
            />

            {/* Image au centre, qui affiche l'élément actuellement sélectionné */}
            <img
                className="img-carrousel img-center "
                src={dataApp[currentIndex].image}
                alt={dataApp[currentIndex].name}
            />
            {/* Image à droite du centre, qui affiche l'élément suivant dans le tableau */}
            <img
                className="img-carrousel img-right "
                src={dataApp[(currentIndex + 1) % dataLength].image}
                alt={dataApp[(currentIndex + 1) % dataLength].name}
            />
            {/* Flèche pour revenir à l'image précédente */}
            <i
                className="fa-solid fa-angle-left arrow arrow-left"
                onClick={handlePrev}
            ></i>
            {/* Flèche pour avancer à l'image suivante */}
            <i
                className="fa-solid fa-angle-right arrow arrow-right"
                onClick={handleNext}
            ></i>
            <div className="overlay">
                {/* Affiche le nom de l'icône correspondant à l'image actuellement sélectionnée */}
                <p className="icone-name">
                    {dataApp[currentIndex].description}
                </p>
                {/* Section des points (dots) indicateurs en bas du carrousel */}
            </div>
            <div className="dots">
                {dataApp.map((_, index) => (
                    // Génère un point pour chaque élément du carrousel
                    <div
                        key={index}
                        className={`dot ${
                            index === currentIndex ? 'dot_selected' : ''
                        }`}
                        // Permet de cliquer sur un point pour accéder directement à l'image correspondante
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carrousel;
