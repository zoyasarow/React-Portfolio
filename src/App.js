import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from './routes/Main';
import About from './routes/About';
import Contact from './routes/Contact';
import Portfolio from './routes/Portfolio';
import Resume from './routes/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './app.css';


function App() {
  
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/react-portfolio" element={<Main />}/>
          <Route path="/about/*" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Navigate to="/about" />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;