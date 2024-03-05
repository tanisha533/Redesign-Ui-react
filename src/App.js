import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Doctor from "./components/Doctor";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import HealthInfo from './components/HealthInfo';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Doctor/>} />

          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/healthinfo" element={<HealthInfo/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;


