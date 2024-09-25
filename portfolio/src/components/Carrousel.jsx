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

