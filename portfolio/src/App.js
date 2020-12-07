import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
        <Wrapper>
          <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/portfolio" component={Portfolio}/>
        </Wrapper>
    </Router>
  );
}

export default App;
