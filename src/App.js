import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// import Header from './components/Header'
import Home from './components/Home'
// import Presentation from './components/Presentation'
// import Realisations from './components/Realisations'
// import Skills from './components/Skills'
// import Contact from './components/Contact'
import Error from './pages/Error'
import Footer from './components/Footer'

// import CardsRealisations from './components/CardsRealisations'
function App() {
    return (
        <>
            <Router>
                {/* <Header /> */}
                
                <Routes>
                    <Route
                        path="/"  element={ <section id="accueil"> <Home /> </section>}/>
                  
                    <Route path="*" element={<Error />} />
                </Routes>

                <Footer />
            </Router>
        </>
    )
}

export default App
