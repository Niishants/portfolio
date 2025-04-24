import React, { useEffect } from "react";
import pfp from '../assets/images/pfp.jpg';

function About() {

    useEffect(() => {
        document.title = "Nishant | About";
    }, []);

    return (
        <div className="scrollable-container">
            <div className="about">
                <div className="about-left">
                    <div className="about-title">
                        <h2>About</h2>
                    </div>
                    <hr className="separator" />
                    <div className="about-text">
                        <p>Hey, my name is Nishant Singh. A boy trying to simply code his way in the technology industry.
                            I’m a backend developer &amp; tech enthusiast from India.
                            I also enjoy competitive coding.
                            I’m very passionate about artificial intelligence, machine learning, and data science and I’m always eager
                            to leverage modern technologies to develop scalable and intelligent solutions.</p>
                    </div>
                    <div className="resume-link">
                        <a href="/nishant_singh_resume.pdf" target="_blank"
                            rel="noreferrer">↓ Resume</a>
                    </div>
                </div>
                <div className="about-right">
                    <div className="profile-pic-wrapper">
                        <img className="profile-pic" src={pfp} alt="Portrait of Nishant Singh" />
                    </div>
                </div>
            </div>
            <div class="noise"></div>
        </div>
    )
}

export default About;