
import Navbar from './components/navabar/navbar';
import Home from './pages/Home/Home';
import { Routes, Route} from 'react-router-dom';
import About from './pages/About/About';
import Services from './pages/Service/service';
import Contact from './pages/contact/contact';
import ProjectsEnhanced from './pages/Project/project';
import CV from './pages/CV/Cv';
function App() {

  return(
    <>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/projects" element={<ProjectsEnhanced />} />
         <Route path="/cv" element={<CV />} />
       </Routes>
    </>
  )
}

export default App
