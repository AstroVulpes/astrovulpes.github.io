import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import About from "./pages/about";
import Works from "./pages/works";
import Contact from "./pages/contact";
import Pointsystem from "./pages/pointsystem";

const HeaderWrapper = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/pointsystem' && <Header />}
      {location.pathname !== '/pointsystem' && <Navbar />}
    </>
  );
};

function App() {
  
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <Router basename={process.env.PUBLIC_URL}>
      <HeaderWrapper/>      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pointsystem" element={<Pointsystem />} />
      </Routes>
    </Router>
  );
}

export default App;
