import React from "react";
import "../App.css";
import picture from '../images/about-me.jpg';

function About() {
    return (
        <div className="about">
            <h1>About Me</h1>
            <section>
            <img id="me" src={picture} alt="" className="center"></img>
            <p>
                I am a software developer from the upstate of South Carolina, with a passion for building applications that are both fun and new that can help solve a problem or present a solution for a growing need in the world. I have been coding for about 9 months and have a strong background in HTML, CSS, JavaScript, and React.
            </p>
            <p>
                Download my resume <a href="https://docs.google.com/document/d/1ts_saCN0zrvPcOyLerfk9oKeyG8b4LEoo_IBGbYdDb8/edit?usp=sharing">HERE.</a>
            </p>
            </section>
        </div>
    )
}

export default About;