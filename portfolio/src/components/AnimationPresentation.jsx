import React, { useState, useEffect } from 'react';

const Typewriter = () => {
    const aText = [
        'Je m’appelle Samanta, développeuse web junior.',
        'Après une formation complète avec OpenClassrooms, j’ai acquis des compétences solides en HTML, CSS, JavaScript, React, et Sass.',
        "Motivée par un vif intérêt pour le développement web et la création d'interfaces à la fois élégantes et intuitives, je mets mes compétences en intégration web au service de la conception d'expériences en ligne modernes, accessibles et conviviales.",
        "Je suis prête à relever de nouveaux défis et à continuer d'apprendre à travers des projets enrichissants."
    ];

    const iSpeed = 25; // time delay of print out
    const iScrollAt = 20; // start scrolling up at this many lines

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [textPos, setTextPos] = useState(0);

    useEffect(() => {
        if (index < aText.length) {
            if (textPos < aText[index].length) {
                const timeoutId = setTimeout(() => {
                    setText(
                        (prevText) => prevText + aText[index].charAt(textPos)
                    );
                    setTextPos(textPos + 1);
                }, iSpeed);
                return () => clearTimeout(timeoutId);
            } else {
                const timeoutId = setTimeout(() => {
                    setTextPos(0);
                    setIndex(index + 1);
                    setText(
                        aText
                            .slice(Math.max(0, index - iScrollAt), index + 1)
                            .join('<br />') + '<br />'
                    );
                }, 500);
                return () => clearTimeout(timeoutId);
            }
        }
    }, [index, textPos, aText]);

    return (
        <div className="presentation-content ">
            <p
                className="presentation-text"
                dangerouslySetInnerHTML={{ __html: text + '_' }}
                id="typedtext"
            ></p>
        </div>
    );
};

export default Typewriter;
