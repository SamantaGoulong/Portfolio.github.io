import '../Sass/Skills.scss'
import html5 from "../assets/images/html5.png";
import css3 from '../assets/images/css3.svg'
import cv from '../assets/images/cv.png'

function Skills() {
    return (
        <>
            <div id="competences" className="skills-container">
                {/* <div className="skills-container"> */}
                <div className="skills-content">
                    <div className="skills-competences-container">
                        <h3 className="skills-competences-title">Mes compétences</h3>
                        <img src={html5} alt="logo html5" className="skills-competences-img" />
                        <img src={css3} alt="logo css3" className="skills-competences-img" />
                        <img src={html5} alt="logo sass" className="skills-competences-img" />
                        <img src={html5} alt="logo javascript" className="skills-competences-img" />
                        <img src={html5} alt="logo react" className="skills-competences-img" />
                        <img src={html5} alt="logo github" className="skills-competences-img" />
                        <img src={html5} alt="logo figma" className="skills-competences-img" />
                        <img
                            src={html5}
                            alt="logo fontawesome"
                            className="skills-competences-img"
                        />
                    </div>
                    <div className="skills-cv-container">
                        <h3 className="skills-cv-title"> Mon cv</h3>
                        {/* <p className="skills-cv-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus maiores
                            distinctio iure vel! Deleniti harum, sed tempore repellendus voluptatum
                            quos, facere laudantium molestias quisquam rerum eaque, voluptate odit
                            assumenda obcaecati? Qui tempore amet temporibus iure odio assumenda
                            nesciunt eius minima reiciendis soluta corrupti sint maxime quasi, saepe
                            consequuntur dicta quo ullam quaerat. Voluptatibus, commodi? Reiciendis
                            adipisci quos quo aliquid deserunt magnam, quia alias, vel nobis dicta
                            voluptatum beatae esse quae rem aut obcaecati hic velit. Dicta,
                            assumenda minus? Quasi deleniti quo quos inventore a animi alias minima
                            dignissimos quod. Officiis labore ipsa neque ipsum tempore rerum earum
                            blanditiis aliquid obcaecati?
                        </p> */}
                        <img src={cv} alt="mon cv" className="skills-competences-cv-img" />
                        <button className="skills-cv-button">
                            <i class="fa-solid fa-download skills-cv-icone"></i>
                            <a href="" className="skills-cv-link">
                                Télecharger mon CV
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
