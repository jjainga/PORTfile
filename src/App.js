
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact'
import Projects from './components/Projects'



function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Contact" component={Contact} />
      <Route path="/Projects" component={Projects} />
    </div>
  </Router>
  );
}

export default App;