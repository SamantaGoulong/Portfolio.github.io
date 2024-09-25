import React, { useState, useRef, useEffect } from 'react';
import '../Sass/Presentation.scss';
//import AnimationPresentation from '../components/AnimationPresentation';
import PhotoCv from '../assets/images/PhotoCv.jpg';
import Typewriter from '../components/AnimationPresentation'; // Assurez-vous que le composant Typewriter est importé

function Presentation() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Crée une variable pour stocker la référence actuelle
        const currentSectionRef = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Arrêtez l'observation une fois la section visible
                }
            },
            { threshold: 0.1 } // La section est considérée comme visible lorsque 10% d'elle est visible
        );

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        // Fonction de nettoyage avec la variable de référence
        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);

    return (
        <div id="presentation" className="presentation-container">
            <h3 className="presentation-title">Présentation</h3>
            <div className="presentation" ref={sectionRef}>
                <div className="presentation-portrait">
                    <img src={PhotoCv} alt="Portrait de Samanta GOULONG" />
                </div>
                <div className="presentation-content">
                    {/* Utilisez le composant Typewriter uniquement lorsqu'il est visible */}
                    {isVisible && <Typewriter />}
                </div>
            </div>
        </div>
    );
}

export default Presentation;
