import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from "./components/Home"
import About from "./components/About"
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
