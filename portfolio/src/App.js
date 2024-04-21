import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Presentation from './components/Presentation'
import Realisations from './components/Realisations'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Error from './pages/Error'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    {/* <Route path="/home" element={<Home />} />
                    <Route path="/presentation" element={<Presentation />} />
                    <Route path="/realisations" element={<Realisations />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} /> */}
                    <Route path="*" element={<Error />} />
                </Routes>
                {/* <Presentation />
                <Realisations />
                <Skills />
                <Resume />
                <Contact />  */}

                {/* Sections avec des identifiants */}

                <section id="accueil">
                    <Home />
                </section>
                <section id="presentation">
                    <Presentation />
                </section>
                <section id="realisations">
                    <Realisations />
                </section>
                <section id="competences">
                    <Skills />
                </section>
                <section id="cv">
                    <Resume />
                </section>
                <section id="contact">
                    <Contact />
                </section>

                <Footer />
            </Router>
        </>
    )
}

export default App
