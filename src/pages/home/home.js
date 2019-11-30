import React from 'react';
import './home.sass';
import Footer from '../../components/footer/footer';

import Backend from '../../images/Back-end 128px.png';
import Frontend from '../../images/Front-end 128px.png';
import Stack from '../../images/Tech stack 128px.png';

import Image1 from '../../images/Frame 1.jpg';
import Image2 from '../../images/Frame 3.jpg';


const Skills = () => {
    return (
        <div className="container skills-container">
            <h2 className="skills-title">Skill set</h2>
            <div className="row">
                <div className="col-sm skills">
                    <h2>Front-end</h2>
                    <img src={Frontend} alt="Icon"></img>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Sass</li>
                        <li>Javscript</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="col-sm skills">
                    <h2>Back-end</h2>
                    <img src={Backend} alt="Icon"></img>
                    <ul>
                        <li>JSP</li>
                        <li>Express</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div className="col-sm skills">
                    <h2>Tech Stack</h2>
                    <img src={Stack} alt="Icon"></img>
                    <ul>
                        <li>React.js</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const Header = () => {
    return (
        <header className="main-header">
            <div className="container main-container">
                <h1 className="display-1">Alessio Mercurio</h1>
                <p className="h3">Making Web development awesome</p>
                <a className="btn btn-home" href="#src" role="button">Learn More</a>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <main>
            <Header />
            <Skills />
            <div className="container">
                <div className="row home-row">
                    <div className="col-sm">
                        <div id="src" className="container first-p">
                            <h2 className="sub-title"> Made to impress</h2>
                            <p className="first">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non
                                pulvinar neque laoreet. Metus aliquam eleifend mi in nulla posuere sollicitudin
                                aliquam ultrices. Facilisi etiam dignissim diam quis enim lobortis scelerisque
                                fermentum dui. Id volutpat lacus laoreet non curabitur gravida. Proin nibh nisl</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <img className="img-fluid" src={Image1} alt="First"/>
                    </div>
                </div>
                <div className="row home-row">
                    <div className="col-sm">
                        <img className="img-fluid" src={Image2} alt="Second"/>
                    </div>
                    <div className="col-sm">
                        <div id="src" className="container second-p">
                            <h2 className="sub-title-second">...Even behind the scenes</h2>
                            <p className="first">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non
                                pulvinar neque laoreet. Metus aliquam eleifend mi in nulla posuere sollicitudin
                                aliquam ultrices. Facilisi etiam dignissim diam quis enim lobortis scelerisque
                                fermentum dui. Id volutpat lacus laoreet non curabitur gravida. Proin nibh nisl</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}