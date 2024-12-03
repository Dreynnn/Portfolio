import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Navbar from './navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'


function App() {

  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/Contact" element={<Contact />} />         
                <Route path="*" element={() => <h1>404 Page Not Found</h1>} /> 
            </Routes>
        </Router>  
    </>
  )
}

export default App
