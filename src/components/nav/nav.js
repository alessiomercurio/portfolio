import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import './nav.sass'
import Home from '../../pages/home/home';
import Projects from '../../pages/projects/projects';
import Contact from '../../pages/contact/contact';

import Logo from '../../images/Logo.png';

export default function Nav(){
    return(
        <Router>
            <nav className="navbar navbar-light navbar-expand-lg fixed-top">
                <Link to="/" className="navbar-brand">
                  <img src={Logo} width="50" height="50" alt="Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/projects" className="nav-link">Projects</Link>
                        </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                      </li>
                    </ul>
                </div>
            </nav>
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Router>
    );
}