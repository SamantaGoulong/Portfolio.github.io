// // import React from 'react';
// // import '../Sass/Carrousel.scss';
// // import dataApp from '../dataApp.json' // Importation des données JSON des compétences

// // function Carrousel() {
// //     return (
// //         <>
// //             {/* <div className="carrousel-container"> */}
// //             <div className="carrousel-content">
// //                 <img className="img-carrousel img-left" src="" alt="" />
// //                 <img className="img-carrousel img-center " src="" alt="" />
// //                 <img className="img-carrousel img-right" src="" alt="" />
// //                 <i className="fa-solid fa-angle-left arrow arrow-left"></i>
// //                 <i className="fa-solid fa-angle-right arrow arrow-right"></i>
// //                 <p className="icone-name">Nom icone</p>
// //                 <div className="dots"></div>
// //             </div>
// //             {/* </div> */}
// //         </>
// //     );
// // }

// // export default Carrousel;


// import React, { useState, useEffect } from 'react';
// import '../Sass/Carrousel.scss';
// import dataApp from '../dataApp.json'; // Importation des données JSON des compétences

// function Carrousel() {
//     // Utilisation du hook useState pour gérer l'index de l'image actuellement affichée dans le carrousel
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const dataLength = dataApp.length; // Nombre total d'éléments dans le carrousel

//     // Fonction pour passer à l'image suivante
//     const handleNext = () => {
//         // On incrémente l'index, et on utilise le modulo pour boucler au début du tableau
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
//     };

//     // Fonction pour revenir à l'image précédente
//     const handlePrev = () => {
//         // On décrémente l'index, et on utilise le modulo pour revenir à la fin si on dépasse le début
//         setCurrentIndex(
//             (prevIndex) => (prevIndex - 1 + dataLength) % dataLength
//         );
//     };
//     // Ajouter un intervalle pour changer automatiquement l'image toutes les 3 secondes
//     useEffect(() => {
//         const interval = setInterval(handleNext, 5000); // 5000ms = 5s
//         return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage du composant
//     }, []);
//     return (
//         <div className="carrousel-content">
//             {/* Image à gauche du centre, qui affiche l'élément précédent dans le tableau */}
//             <img
//                 className="img-carrousel img-left "
//                 src={
//                     dataApp[(currentIndex - 1 + dataLength) % dataLength].image
//                 }
//                 alt={dataApp[(currentIndex - 1 + dataLength) % dataLength].name}
//             />

//             {/* Image au centre, qui affiche l'élément actuellement sélectionné */}
//             <img
//                 className="img-carrousel img-center "
//                 src={dataApp[currentIndex].image}
//                 alt={dataApp[currentIndex].name}
//             />
//             {/* Image à droite du centre, qui affiche l'élément suivant dans le tableau */}
//             <img
//                 className="img-carrousel img-right "
//                 src={dataApp[(currentIndex + 1) % dataLength].image}
//                 alt={dataApp[(currentIndex + 1) % dataLength].name}
//             />
//             {/* Flèche pour revenir à l'image précédente */}
//             <i
//                 className="fa-solid fa-angle-left arrow arrow-left"
//                 onClick={handlePrev}
//             ></i>
//             {/* Flèche pour avancer à l'image suivante */}
//             <i
//                 className="fa-solid fa-angle-right arrow arrow-right"
//                 onClick={handleNext}
//             ></i>
//             <div className="overlay">
//                 {/* Affiche le nom de l'icône correspondant à l'image actuellement sélectionnée */}
//                 <p className="icone-name">
//                     {dataApp[currentIndex].description}
//                 </p>
//                 {/* Section des points (dots) indicateurs en bas du carrousel */}
//             </div>
//             <div className="dots">
//                 {dataApp.map((_, index) => (
//                     // Génère un point pour chaque élément du carrousel
//                     <div
//                         key={index}
//                         className={`dot ${
//                             index === currentIndex ? 'dot_selected' : ''
//                         }`}
//                         // Permet de cliquer sur un point pour accéder directement à l'image correspondante
//                         onClick={() => setCurrentIndex(index)}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Carrousel;


// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import '../Sass/Carrousel.scss';
// import dataApp from '../dataApp.json';

// function Carrousel() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isHovered, setIsHovered] = useState(false);
//     const dataLength = dataApp.length;

//     const intervalRef = useRef(null);

//     // Fonction pour passer à l'image suivante
//     const handleNext = useCallback(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
//     }, [dataLength]);

//     // Fonction pour revenir à l'image précédente
//     const handlePrev = useCallback(() => {
//         setCurrentIndex(
//             (prevIndex) => (prevIndex - 1 + dataLength) % dataLength
//         );
//     }, [dataLength]);

//     // Fonction pour démarrer le défilement automatique
//     const startAutoSlide = useCallback(() => {
//         if (!intervalRef.current) {
//             intervalRef.current = setInterval(handleNext, 4000); // 4000ms = 4s
//             console.log('Auto slide started');
//         }
//     }, [handleNext]);

//     // Fonction pour arrêter le défilement automatique
//     const stopAutoSlide = useCallback(() => {
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//             intervalRef.current = null;
//             console.log('Auto slide stopped');
//         }
//     }, []);

//     // Démarrer le défilement automatique lors du montage du composant
//     useEffect(() => {
//         startAutoSlide();
//         return () => stopAutoSlide(); // Nettoyage de l'intervalle lors du démontage du composant
//     }, [startAutoSlide, stopAutoSlide]);

//     // Arrêter ou redémarrer le défilement selon la survol de l'image centrale
//     useEffect(() => {
//         if (isHovered) {
//             stopAutoSlide();
//         } else {
//             startAutoSlide();
//         }
//     }, [isHovered, startAutoSlide, stopAutoSlide]);

//     // Debugging : vérifier les valeurs des indices
//     useEffect(() => {
//         console.log(`Current Index: ${currentIndex}`);
//     }, [currentIndex]);

//     return (
//         <div className="carrousel-content">
//             {/* Image à gauche du centre */}
//             <img
//                 className="img-carrousel img-left"
//                 src={
//                     dataApp[(currentIndex - 1 + dataLength) % dataLength].image
//                 }
//                 alt={dataApp[(currentIndex - 1 + dataLength) % dataLength].name}
//             />
//             {/* Image au centre */}
//             <img
//                 className="img-carrousel img-center"
//                 src={dataApp[currentIndex].image}
//                 alt={dataApp[currentIndex].name}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//             />
//             {/* Image à droite du centre */}
//             <img
//                 className="img-carrousel img-right"
//                 src={dataApp[(currentIndex + 1) % dataLength].image}
//                 alt={dataApp[(currentIndex + 1) % dataLength].name}
//             />
//             {/* Flèche pour revenir à l'image précédente */}
//             <i
//                 className="fa-solid fa-angle-left arrow arrow-left"
//                 onClick={handlePrev}
//             ></i>
//             {/* Flèche pour avancer à l'image suivante */}
//             <i
//                 className="fa-solid fa-angle-right arrow arrow-right"
//                 onClick={handleNext}
//             ></i>
//             <div className="overlay">
//                 {/* Affiche le nom de l'icône correspondant à l'image actuellement sélectionnée */}
//                 <p className="icone-name">
//                     {dataApp[currentIndex].description}
//                 </p>
//             </div>
//             {/* Section des points (dots) indicateurs en bas du carrousel */}
//             <div className="dots">
//                 {dataApp.map((_, index) => (
//                     <div
//                         key={index}
//                         className={`dot ${
//                             index === currentIndex ? 'dot_selected' : ''
//                         }`}
//                         onClick={() => setCurrentIndex(index)}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Carrousel;

import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../Sass/Carrousel.scss';
import dataApp from '../dataApp.json';

function Carrousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const dataLength = dataApp.length;

    const intervalRef = useRef(null);

    // Fonction pour passer à l'image suivante
    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
    }, [dataLength]);

    // Fonction pour revenir à l'image précédente
    const handlePrev = useCallback(() => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + dataLength) % dataLength
        );
    }, [dataLength]);

    // Fonction pour démarrer le défilement automatique
    const startAutoSlide = useCallback(() => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(handleNext, 4000); // 4000ms = 4s
            console.log('Auto slide started');
        }
    }, [handleNext]);

    // Fonction pour arrêter le défilement automatique
    const stopAutoSlide = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            console.log('Auto slide stopped');
        }
    }, []);

    // Démarrer le défilement automatique lors du montage du composant
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // Nettoyage de l'intervalle lors du démontage du composant
    }, [startAutoSlide, stopAutoSlide]);

    // Arrêter ou redémarrer le défilement selon la survol de l'image centrale
    useEffect(() => {
        if (isHovered) {
            stopAutoSlide();
        } else {
            startAutoSlide();
        }
    }, [isHovered, startAutoSlide, stopAutoSlide]);

    return (
        <div className="carrousel-content">
            {/* Image à gauche du centre */}
            <img
                className="img-carrousel img-left"
                src={
                    dataApp[(currentIndex - 1 + dataLength) % dataLength].image
                }
                alt={dataApp[(currentIndex - 1 + dataLength) % dataLength].name}
            />
            {/* Image au centre */}
            <div
                className="img-carrousel img-center-wrapper"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    className="img-carrousel img-center"
                    src={dataApp[currentIndex].image}
                    alt={dataApp[currentIndex].name}
                />
                {isHovered && (
                    <div className="overlay">
                        <p className="icone-name">
                            {dataApp[currentIndex].description}
                        </p>
                    </div>
                )}
            </div>
            {/* Image à droite du centre */}
            <img
                className="img-carrousel img-right"
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
            {/* Section des points (dots) indicateurs en bas du carrousel */}
            <div className="dots">
                {dataApp.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${
                            index === currentIndex ? 'dot_selected' : ''
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carrousel;

