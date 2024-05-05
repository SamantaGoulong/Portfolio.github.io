 import '../Sass/CardsRealisations.scss'
 import RidingCities from '../assets/RidingCities.png'

function Realisations() {
    return (
        <>
            <div className="realisations-card-content">
                <div className="card-img">
                    <img src={RidingCities} alt="site1" />
                </div>
                <div className="card-iconeS">
                    <button>
                        <i class="fa-brands fa-github"></i>
                        <a href="/">Lien Github</a>
                    </button>
                    <button>
                        <i>
                            <i class="fa-brands fa-html5"></i>
                        </i>
                        <i>
                            <i class="fa-brands fa-css3-alt"></i>
                        </i>
                        <i>
                            <i class="fa-brands fa-js"></i>
                        </i>
                        <i>
                            <i class="fa-brands fa-sass"></i>
                        </i>
                        <i>
                            <i class="fa-brands fa-react"></i>
                        </i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Realisations
