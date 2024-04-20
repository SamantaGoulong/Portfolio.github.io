import '../Sass/Home.scss'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="home-container">
                {/* <img src={code} alt="ligne de code" className="home-picture" /> */}
                <div className="home-content">
                    <div className="home-text">
                        <h1>Samanta GOULONG</h1>
                        <h2>Intégratrice Web Junior</h2>
                    </div>
                    <div className="home-buttons-container">
                        <Link to="/skills" >
                            <button>Aller au Portfolio</button>
                        </Link>
                        <Link to="/resume" >
                            <button>Consulter mon CV</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
