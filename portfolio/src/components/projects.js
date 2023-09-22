import React from "react";
import "../App.css";
import picture from "../images/project1.png";
import picture2 from "../images/project2.png";
import picture3 from "../images/project3.png";

function Projects() {
    return (
        <div className="projects">

            <h1>Cruise Controller</h1>
            <div className='row m-3'>
                <div className='col-lg-6 col-sm-12'>
                    <img src={picture}/>
                </div>
                <h2>Website to help plan out your next big roadtrip. With the ability to save trips for later and even see local restaurants and hotels at your final destination. 
                <a href="https://passenger-party.github.io/Cruise-Controller/"> Visit the application.</a>
                <a href="https://github.com/Passenger-Party/Cruise-Controller"> Visit the repository.</a>
                </h2>
            </div>

            <h1>Play Trade</h1>
            <div className='row m-3'>
                <div className='col-lg-6 col-sm-12'>
                    <img src={picture2}/>
                </div>
                <h2>An application to help you learn about the stock market while practicing your trading skills without the risk of losing real money in your learning process. 
                <a href="https://broday2-0d4c196dc158.herokuapp.com/"> Visit the application.</a>
                <a href="https://github.com/Project2Team2/Play-Trade"> Visit the repository.</a>
                </h2>
            </div>

            <h1>BroDay</h1>
            <div className='row m-3'>
                <div className='col-lg-6 col-sm-12'>
                    <img src={picture3}/>
                </div>
                <h2>An application to encourage people to get out and meet new people who share the same interests as you to help create friendships. 
                <a href=""> Visit the application.</a>
                <a href="https://github.com/Project3Team2BroDates/broday"> Visit the repository.</a>
                </h2>
            </div>

        </div>
    );
}

export default Projects;