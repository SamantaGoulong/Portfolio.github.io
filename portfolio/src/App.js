import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 

import Header from "./components/Header";
import Home from './components/Home'
import Presentation from './components/Presentation'
import Realisations from './components/Realisations'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Error from './pages/Error'

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/presentation" element={<Presentation />} />
                    <Route path="/realisations" element={<Realisations />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
