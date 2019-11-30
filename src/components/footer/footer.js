import React from 'react';
import './footer.sass';

export default function Footer(){
    return(
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <ul className="footer-list">
                            <li className="footer-items ft-first">Alessio Mercurio @ 2019</li>
                            <li className="footer-items">
                                Email: alessiomercu@gmail.com
                            </li>
                            <li className="footer-items">
                                <a href="https://github.com/alessiomercurio">GitHub</a>
                            </li>
                            <li className="footer-items">
                                <a href="https://www.instagram.com/alessio_mercurio_/">Instagram</a>
                            </li>
                            <li className="footer-items">
                                <a href="https://www.linkedin.com/in/alessio-mercurio-b08610190/">Linkedin</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul className="footer-list">
                            <li className="footer-items ft-first">Web Site Map</li>
                            <li className="footer-items">
                                <a href="/">Home</a>
                            </li>
                            <li className="footer-items">
                                    <a href="/projects">Projects</a>
                            </li>
                            <li className="footer-items">
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}