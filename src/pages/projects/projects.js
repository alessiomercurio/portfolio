import React from 'react';
import './projects.sass';
import Footer from '../../components/footer/footer';

import Wikipedia_png from '../../images/wikipedia.png';
import Python_png from '../../images/python.png';

const wikipedia_desc = 'Simple Wikipedia script capable of parsing a webpage and'+
' extract it`s main text';
const telegrambot_desc = 'A bot written in python made to watch an Amazon product`s price and update it`s changes to an user';

const Card = (props) =>{
    return(
        <div class="card">
            <img src={props.image} class="card-img-top" alt={props.alt}/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <a href={props.github} target={(props.github === '#') ? '_self' : '_blank'} class="btn">{props.href}</a>
            </div>
        </div>
    );
}

const Grid = () =>{
    return(
        <div className="container projects">
            <h1 className="display-2">Projects</h1>

            <div className="container projects-grid">
                <div className="row">
                    <div className="col">
                        <Card alt={"Wikipedia Script"} image={Wikipedia_png} title={"Wikipedia Script"} desc={wikipedia_desc} github={"https://github.com/alessiomercurio/Wikipedia-Script"} href={"Learn More"}/>
                    </div>
                    <div className="col">
                        <Card alt={"Telegram Bot"} image={Python_png} title={"Telegram Bot"} desc={telegrambot_desc} github={"#"} href={"In Development"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Projects(){
    return(
        <main>
            <Grid/>
            <Footer/>
        </main>
    );
}