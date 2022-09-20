import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skillslist from './pages/Skillslist'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import ScrollButton from './components/ScrollTotop';
function App() {
  return (
    <div className="App">
   
    <Navbar/>
     <Home/>
     <hr/>
    <About/>
    <hr/>
  
    <Skillslist/>
    <hr/>
    <Projects/>
    
    <Footer/>
    <ScrollButton/>
    </div>
  );
}

export default App;
