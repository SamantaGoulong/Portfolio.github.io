// //  import '../Sass/CardsRealisations.scss'
// //  import RidingCities from '../assets/RidingCities.png'

// // function Realisations() {
// //     return (
// //         <>
// //             <div className="realisations-card-content">
// //                 <div className="card-img">
// //                     <img src={RidingCities} alt="site1" />
// //                 </div>
// //                 <div className="card-iconeS">
// //                     <button>
// //                         <i class="fa-brands fa-github"></i>
// //                         <a href="/">Lien Github</a>
// //                     </button>
// //                     <button>
// //                         <i>
// //                             <i class="fa-brands fa-html5"></i>
// //                         </i>
// //                         <i>
// //                             <i class="fa-brands fa-css3-alt"></i>
// //                         </i>
// //                         <i>
// //                             <i class="fa-brands fa-js"></i>
// //                         </i>
// //                         <i>
// //                             <i class="fa-brands fa-sass"></i>
// //                         </i>
// //                         <i>
// //                             <i class="fa-brands fa-react"></i>
// //                         </i>
// //                     </button>
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }

// // export default Realisations

// //import '../Sass/CardsRealisations.scss'
// // //import RidingCities from '../assets/RidingCities.png'
// // import React from 'react'
// // import data from '../data.json'

// // function Realisations() {
// //     return (
// //         <>
// //             {data.map((item, index) => (
// //                 <div className="realisations-card-content" key={item.id}>
// //                     <div className="card-img">
// //                         <img src={item.picture} alt={`site ${item.title}`} />
// //                     </div>
// //                     <div className="card-iconeS">
// //                         <button>
// //                             <i className="fab fa-github"></i>
// //                             <a href={item.linkGithub}>Lien Github</a>
// //                         </button>
// //                         <button>
// //                             {item.tags.map((tag, index) => (
// //                                 <span key={index}>
// //                                     <i className={`fab ${Object.values(tag)[0]}`}></i>
// //                                 </span>
// //                             ))}
// //                         </button>
// //                     </div>
// //                 </div>
// //             ))}
// //         </>
// //     )
// // }

// // export default Realisations
// import '../Sass/CardsRealisations.scss'
// import React from 'react'
// import data from '../data.json'

// // function Realisations() {
// //     return (
// //         <>
// //             {data.map((item) => (
// //                 <div className="realisations-card-content" key={item.id}>
// //                     <div className="card-img">
// //                         <img src={item.picture} alt={item.title} />

// //                         {/* <h5>{item.title}</h5> */}
// //                     </div>
// //                     ;
// //                     <div className="card-links">
// //                         <button>
// //                             <i className="fab fa-github"></i>
// //                             <a href={item.linkGitub}>Lien GitHub</a>
// //                         </button>

// //                         <button className="card-tags">
// //                             {item.tags.map((tag, index) => (
// //                                 <span key={index}>
// //                                     <i className={`fab ${Object.values(tag)[0]}`}></i>
// //                                 </span>
// //                             ))}
// //                         </button>
// //                     </div>
// //                     {console.log(item.picture)}
// //                 </div>
// //             ))}
// //         </>
// //     )
// // }

// // export default Realisations

// function CardsRealisations() {
//     return (
//         <>
//             {data.map((item) => (
//                 <div className="realisations-card-content" key={item.id}>
//                     <div className="card-images">
//                         {typeof item.picture === 'string' ? (
//                             <img src={item.picture} alt={item.title} className="img-card" />
//                         ) : (
//                             <div dangerouslySetInnerHTML={{ __html: item.picture }} />
//                         )}
//                         {/* <h5>{item.title}</h5> */}
//                     </div>
//                     <div className="card-links">
//                         <button className="card-links-button">
//                             <i className="fab fa-github card-links-button-icone"></i>
//                             <a href={item.linkGithub} className="card-links-button-text">
//                                 Lien GitHub
//                             </a>
//                         </button>

//                         <div className="card-links-tags">
//                             {item.tags.map((tag, index) => (
//                                 <span key={index}>
//                                     <i
//                                         className={`fab ${
//                                             Object.values(tag)[0]
//                                         } card-links-tags-icone  `}></i>
//                                 </span>
//                             ))}
//                         </div >
//                     </div>
//                     {console.log(item.picture)}
//                 </div>
//             ))}
//         </>
//     )
// }

// export default CardsRealisations;
import React, { useState } from 'react';
import data from '../data.json';
import '../Sass/CardsRealisations.scss';

function CardsRealisations() {
    // Initialisation de l'état pour contrôler le nombre de projets visibles
    const [visibleProjects, setVisibleProjects] = useState(3);

    // Fonction pour charger plus de projets
    const loadMoreProjects = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
    };

    return (
        <>
            {/* Affichage des projets visibles */}
            {data.slice(0, visibleProjects).map((item) => (
                <div className="realisations-card-content" key={item.id}>
                    {/* Image du projet */}
                    <div className="card-images  zoom-in-out-box">
                        <a
                            href={item.linkGithub}
                            className="card-links-button-text"
                        >
                            <img
                                src={item.picture}
                                alt={item.title}
                                className="img-card"
                            />

                            <div className="overlay">
                                <p className="title-project">{item.title}</p>
                            </div>
                        </a>
                    </div>
                    {/* Liens et icônes du projet */}
                    <div className="card-links">
                        <div className="card-links-tags">
                            {/* Affichage des icônes de technologies utilisées */}
                            {item.tags.map((tag, index) => (
                                <span key={index}>
                                    <i
                                        className={`fab ${
                                            Object.values(tag)[0]
                                        } card-links-tags-icone`}
                                    ></i>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            {/* Bouton "Voir plus" affiché seulement s'il y a plus de projets à montrer */}
            {visibleProjects < data.length && (
                <button onClick={loadMoreProjects} className="load-more-button">
                    Voir plus
                </button>
            )}
        </>
    );
}

export default CardsRealisations;
